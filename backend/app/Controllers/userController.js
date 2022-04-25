const User = require("../Models/User")
const randomstring = require("randomstring")
const nodemailer = require("nodemailer")
const bcrypt = require('bcrypt')
const salt = 10
const user = new User()

module.exports = {
    signup: async (req, res) => {
        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password:req.body.password
        }
        msg = user.validateSignUp(userData)
        if (msg.length)
            return res.json({Status: "Failed", msg})
        try {
            userData.password = bcrypt.hashSync(userData.password, salt);
            let [result] = await user.findEmail(userData.email)
            let count = Object.keys(result).length
            let i = 0 
            if (count != 0)
            i = 2
            let [result1] = await user.findUsername(userData.username)
            count = Object.keys(result1).length
            if (count != 0)
                i++
            if (i != 0) {
                if (i == 1)
                    res.status(400).json("Username was exist")
                else if (i == 2)
                    res.status(400).json("Email was exist")
                else if (i == 3)
                    res.status(400).json("Email and username were exist")
            }
            else {
                const token = randomstring.generate()
                userData.token = token
                let [result2] = await user.addUser(userData)
                if (result2.affectedRows) {
                    const url = "http://localhost:3001/verifyProfil/token=" + token
                    const transporter = nodemailer.createTransport({
                        service: 'gmail',
                        host: "smtp.gmail.com",
                        auth: {
                            user: "ouseqqam.test@gmail.com",
                            pass: "Outest@2022"
                        }
                    });

                    message = {
                        from: "Matcha Team <ouseqqam.test@gmail.com>",
                        to: userData.email,
                        subject: "Matcha email verification",
                        html: "<p>Click to verify your account <a href=" + url + ">Verify</a></p>"
                    }
                                
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.log(err)
                        } else {
                            res.status.json("Email verification has been send to your email")
                        }
                    })
                }
            }
        } catch (err) {
            console.log(err)
        }
    },

    complete: async (req, res) => {
         if (!req.auth.data.verified)
            return res.json("You need to verify your account")
        try {
            const userData = {
                gender: req.body.gender,
                sexualPreference: req.body.sexualPreference,
                biography: req.body.biography,
                birthdate: req.body.birthdate,
                locationLat: req.body.locationLat,
                locationLng: req.body.locationLng,
                rating: req.body.rating
            }
            const id = req.auth.data.id
            const imgs = req.body.gallery
            const tags = req.body.listOfInterests
            msg = user.validateCompeteProfil(userData, imgs, tags)
            if (msg.length)
                return res.json({Status: "Failed", msg})
            const [result] = await user.checkUser(id)
            if (result[0].verified)
                return res.json("You need to verify your account.")

            userData["complete"] = 1
            if (result[0].complete == 0) {
                const [result1] = await user.updateUser(id, userData)
                user.putImgToFolder(imgs)
                let result2 = []
                for (let i = 0; i < imgs.length; i++)
                    [result2] = await user.addImage(id, imgs[i])
                let result3 = []
                for (let i = 0; i < tags.length; i++)
                    [result3] = await user.addTags(id, tags[i])
                return res.json({Status: "Success", Msg: "User profile has been completed."})
            }
             else
                 return res.json({Status: "Failed", Msg:"Profile already completed"})
        } catch (err) {
            console.log(err)
        }

    },

    update: async (req, res) => {
        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            email: req.body.email,
            password:req.body.password,
            gender: req.body.gender,
            sexualPreference: req.body.sexualPreference,
            biography: req.body.biography,
            birthdate: req.body.birthdate,
            locationLat: req.body.locationLat,
            locationLng: req.body.locationLng,
            rating: req.body.rating
        }
        const id = req.auth.data.id
        let imgs = req.body.gallery
        let tags = req.body.listOfInterests
        msg = user.validateUpdateProfil(userData, imgs, tags)
        if (msg.length)
            return res.json({Status: "Failed", msg})
        Object.keys(userData).forEach(key => {
            if (userData[key] === undefined) {
                delete userData[key];
            }
        })
        try {
            console.log(userData)
            if (userData) {
                let [result] = await user.updateUser(req.params.id, userData)
            }
        } catch(err) {
            console.log(err)
        }
    },


    UserSelect: (req, res) => {
       id = req.params.id
        sql = "SELECT * From users WHERE id = ?"
        db.query(sql, id, (err, result) => {
            if (err)
                return res.send(err)
            let data = []
            data.push(result[0])
            sql = "SELECT name From images WHERE user_id = ?"
            db.query(sql, id, (err, result) => {
                if (err)
                    return res.send(err)
                let gallery = []
                for(let i = 0; i < result.length; i++) {
                    gallery.push("/images/" + result[i].name) 
                }
                data[0].gallery = gallery
                sql = "SELECT name From tags WHERE user_id = ?"
                db.query(sql, id, (err, result) => {
                    if (err)
                        return res.send(err)
                    let tags = []
                    for(let i = 0; i < result.length; i++) {
                        tags.push(result[i].name) 
                    }
                    data[0].tags = tags
                    return res.json(data)
                })
            })
        })
    },

    getTags: (req, res) => {
        search = req.params.search + "%"
        sql = "SELECT DISTINCT name FROM tags WHERE name LIKE ?"
        db.query(sql, search, (err, result) => {
            if (err)
                return res.send(err)
            return res.json(result)
        })
    },
}