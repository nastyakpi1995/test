const db = require('../config/db');

class ProfileModel {
    async getProfileByUserId(userId) {
        return db.query('SELECT * from profiles where user_id=$1', [userId]).catch(console.log)
    }
    async getProfilesCity() {
        return db.query('SELECT city from profiles').catch(console.log)
    }
}

module.exports = new ProfileModel
