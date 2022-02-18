class Message {
    constructor(data) {
        this.sender_id = data.sender_id
        this.receiver_id = data.receiver_id,
        this.message = data.message
    }
    

    insert() {
        return `INSERT INTO messages(sender_id, receiver_id, message) VALUES ('${this.sender_id}', '${this.receiver_id}', '${this.message}')`
    }

    get() {
        return `SELECT * FROM messages WHERE sender_id= '${this.sender_id}'`
    }
}

module.exports = Message