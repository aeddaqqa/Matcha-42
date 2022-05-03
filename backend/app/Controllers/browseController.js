const Browse = require("../Models/browse")
const Like = require("../Models/Likes")
const User = require("../Models/User")
const browse  = new Browse()
const user = new User()
const like = new Like()

module.exports = {
    get: async (req, res) => {
        const id = req.auth.data.id
        try {
            const [rows] = await user.getTags(id)
            const [rows2] = await browse.get_id_of_who_I_like(id)
            const [rows1] = await browse.getsimilar(rows, rows2, id)
            let data = rows1
            if (!data.length)
                return res.json("No user match your profil")
            for (let i = 0; i < data.length - 1; i++)
                for(let j = i + 1; j < data.length; j++)
                    if (data[i].user_id == data[j].user_id) {
                        if (Array.isArray(data[i].name))
                            (data[i].name).push(data[j].name)
                        else
                            data[i].name = [data[i].name, data[j].name]
                        data.splice(j, 1)
                    }
            let dataId = []
            let count = 0
            let myTagsNumber = rows.length
            if (data.length <= 5)
                for (let i = 0; i < data.length; i++)
                    dataId.push(data[i].user_id)
            else if (data.length > 5) {
                for (let j = 0; j < data.length; j++) {
                    for (let i = 0; i < data.length; i++) {
                        if (Array.isArray(data[i].name)) {
                            count = data[i].name.length
                            if (count == myTagsNumber) {
                                dataId.push(data[i].user_id)
                            }
                        }
                        if (myTagsNumber == 1 && !Array.isArray(data[i].name)) {
                            dataId.push(data[i].user_id)
                        }
                    }
                    myTagsNumber--
                }
            }

            const [result] = await browse.getSomeData(id)
            const [users] = await browse.getUser(dataId, result[0].sexualPreference)
            
            if (!users.length)
                return res.json("No " + result[0].sexualPreference + " match your profil")
            else {
                let finalData = []
                let lat1 = parseFloat(result[0].locationLat)
                let long1 = parseFloat(result[0].locationLng)
                let data = []
                for (let i = 0; i < users.length; i++) {
                    let lat2 = parseFloat(users[i].locationLat)
                    let long2 = parseFloat(users[i].locationLng)
                    let d = browse.getDistanceFromLatLonInKm(lat1, long1, lat2, long2)
                    if (d == 0)
                        finalData.push(users[i])
                }
                return res.json(finalData)
            }
        } catch(err) {
            console.log(err)
        }
    },

    test: async (req, res) => {
        let distance = req.query.distance
        let id = req.query.id
        if (distance)
            console.log(distance, id)
    }
}