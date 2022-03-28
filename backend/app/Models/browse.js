const db = require("../../database/db");
const Like = require("./Likes");

class Browse {

    deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        const R = 6371; 
        let dLat = this.deg2rad(lat2-lat1);  
        let dLon = this.deg2rad(lon2-lon1); 
        let a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        const d = R * c;
        return d;
    }

    get_id_of_who_I_like(id) {
        const sql = "SELECT users.id FROM users JOIN likes ON users.id = likes.user_id2 WHERE user_id1 = ?"
        return db.promise().query(sql, id)
    }

    getOther(rows, id) {
        let data = rows
        data.push({id: id})

        let data1 = []
        for (let i = 0; i < data.length; i++)
            data1.push(Object.values(data[i]))

        let keys = []
        for (let i = 0; i < data.length; i++)
            keys.push(Object.keys(data[i]))
        
        let sql = "SELECT * FROM users WHERE " + keys.map(key => `${key} != ?`).join(" and ")
        return db.promise().query(sql, data1)
    }

    getsimilar(data, likeData, id) {
        let data1 = [id]
        for (let i = 0; i < data.length; i++)
            data1.push(Object.values(data[i]))
        
        let keys1 = []
        for (let i = 0; i < data.length; i++)
            keys1.push(Object.keys(data[i]))

        let keys2 = []
        for (let i = 0; i < likeData.length; i++)
            keys2.push(Object.keys(likeData[i]))

        for (let i = 0; i < likeData.length; i++)
            data1.push(Object.values(likeData[i]))
        
        let likeQuery = " and " + keys2.map(key => `user_id != ?`).join(" and ")
        if (likeData.length == 0)
            likeQuery = ""
        let sql = "SELECT user_id, name from tags Where user_id != ? and (" + keys1.map(key => `${key} = ?`).join(' OR ') + ")" + likeQuery

        return db.promise().query(sql, data1)
    }

    getUser (data, gender) {
        let genderQuery = " and gender = ?"
        sql = "SELECT * from users where ("  + data.map(key => 'id = ?').join(' or ') + ")" + genderQuery
        data.push(gender)
        return db.promise().query(sql, data)
    }

    getSomeData (id) {
        sql = "SELECT sexualPreference, birthdate, locationLat, locationLng FROM users Where id = ?"
        return db.promise().query(sql, id)
    }

}



module.exports = Browse