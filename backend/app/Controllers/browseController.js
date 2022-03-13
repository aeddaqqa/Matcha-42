const Browse = require("../Models/browse")
const User = require("../Models/User")
const browse  = new Browse()
const user = new User()

module.exports = {
    get: (req, res) => {
        const distance = parseInt(req.params.dis)
        const id = req.params.id
        user.getOther(id).then(([rows]) => {
            if (rows.length == 1)
                return res.json("There is no one just you")
            else {
                user.getMe(id).then(([rows1]) => {
                    let lat1 = parseFloat(rows1[0].locationLat)
                    let long1 = parseFloat(rows1[0].locationLng)
                    let data = []
                    for (let i = 0; i < rows.length; i++) {
                        let lat2 = parseFloat(rows[i].locationLat)
                        let long2 = parseFloat(rows[i].locationLng)
                        let d = browse.getDistanceFromLatLonInKm(lat1, long1, lat2, long2)
                        console.log(d)
                        if (d < distance)
                            data.push(rows[i])
                    }
                    res.json(data)
                })
            }
        })
    }
}