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
        let data = [id]
        for (let i = 0; i < rows.length; i++)
            data.push(rows[i].id)
        let sql = "SELECT * FROM users WHERE " + Object.keys(data).map(key => `id != ?`).join(" and ")
        return db.promise().query(sql, data)
    }
}

module.exports = Browse