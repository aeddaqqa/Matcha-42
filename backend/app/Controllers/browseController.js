const Browse = require("../Models/browse")
const Like = require("../Models/Likes")
const User = require("../Models/User")
const browse  = new Browse()
const user = new User()
const like = new Like()

module.exports = {
    get: (req, res) => {
        const distance = parseInt(req.params.dis)
        const id = parseInt(req.params.id)
        
        browse.get_id_of_who_I_like(id).then(([rows]) => {
            browse.getOther(rows, id).then(([rows1]) => {
                user.getMe(id).then(([rows2]) => {
                    let lat1 = parseFloat(rows2[0].locationLat)
                    let long1 = parseFloat(rows2[0].locationLng)
                    let data = []
                    for (let i = 0; i < rows1.length; i++) {
                        let lat2 = parseFloat(rows1[i].locationLat)
                        let long2 = parseFloat(rows1[i].locationLng)
                        let d = browse.getDistanceFromLatLonInKm(lat1, long1, lat2, long2)
                        if (d < distance)
                            data.push(rows1[i])
                    }
                    res.json(data)
                })
            })
        })
    }
}