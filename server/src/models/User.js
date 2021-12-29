const db = require('../config/db')

class UserModel {
    getUsersId() {
       return db.query(`SELECT (id) FROM users`).catch(console.log)
    }
    getUsers() {
        return db.query(`SELECT * FROM users`).catch(console.log)
    }
}

module.exports = new UserModel
