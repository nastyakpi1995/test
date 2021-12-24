const db = require('../config/db');

class User {
    async getUsers() {
        let results = await db.query(`SELECT * FROM users`).catch(console.log)

        return results.rows
    }

   async createUser(user) {
        return;
   }

}

module.exports = User