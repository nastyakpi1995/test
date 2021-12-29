const db = require('../config/db')

class UserModel {
    getUsersId() {
       return db.query(`SELECT (id) FROM users`).catch(console.log)
    }
    getUsers() {
        return db.query(`SELECT * FROM users`).catch(console.log)
    }
    getUsersNotCurrentAdmin(adminId) {
        return db.query(`SELECT * FROM users where not id=$1`, [adminId]).catch(console.log)
    }
}

module.exports = new UserModel
