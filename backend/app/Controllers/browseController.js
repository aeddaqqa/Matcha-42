const Browse = require("../Models/browse")
const Like = require("../Models/Likes")
const User = require("../Models/User")
const browse  = new Browse()
const user = new User()
const like = new Like()

module.exports = {
    // get: (req, res) => {
    //     const distance = parseInt(req.params.dis)
    //     const id = parseInt(req.params.id)
        
    //     browse.get_id_of_who_I_like(id).then(([rows]) => {
    //         browse.getOther(rows, id).then(([rows1]) => {
    //             user.getMe(id).then(([rows2]) => {
    //                 let lat1 = parseFloat(rows2[0].locationLat)
    //                 let long1 = parseFloat(rows2[0].locationLng)
    //                 let data = []
    //                 for (let i = 0; i < rows1.length; i++) {
    //                     let lat2 = parseFloat(rows1[i].locationLat)
    //                     let long2 = parseFloat(rows1[i].locationLng)
    //                     let d = browse.getDistanceFromLatLonInKm(lat1, long1, lat2, long2)
    //                     if (d < distance)
    //                         data.push(rows1[i])
    //                 }
    //                 res.json(data)
    //             })
    //         })
    //     })
    // },

    test: (req, res) => {
        const id = req.params.id
        user.getTags(id).then(([rows]) => {
            browse.getsimilar(rows).then(([rows1]) => {
                let data = rows1
                // console.log(data)
                // console.log("-----------------------")
                // data.splice(1, 1)
                // console.log(data)
                // data[0].name = [data[0].name, data[4].name]
                // if (Array.isArray(data[0].name))
                //     data[0].name.push(data[4].name)
                // res.json(data[0].name)

                for (let i = 0; i < data.length - 1; i++) {
                    for(let j = i + 1; j < data.length; j++) {
                        if (data[i].user_id == data[j].user_id) {
                            if (Array.isArray(data[i].name))
                                (data[i].name).push(data[j].name)
                            else
                                data[i].name = [data[i].name, data[j].name]
                            data.splice(j, 1)
                        }
                    }
                }
                let dataId = []
                let  k = 5
                let count = 0
                let userTagsNumber = rows.length
                // if (data.length <= 5)
                //     for (let i = 0; i < data.length; i++)
                //         dataId.push(data[i].user_id)
            //    else if (data.length > 5) {
                    for (let j = 0; j < data.length; j++) {
                        for (let i = 0; i < data.length; i++) {
                            count = data[i].name.length
                            if (count == userTagsNumber)
                                dataId.push(data[i].user_id)
                        }
                        if (dataId.length == data.length) {
                         console.log("test")
                            break
                        }
                        userTagsNumber--
                        console.log(userTagsNumber)
                    }
            //    }
                res.json(dataId)
            })
        })
    }
}