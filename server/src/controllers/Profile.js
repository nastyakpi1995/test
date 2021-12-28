const db = require('../config/db');

class Profile {
    async getProfiles(res) {
        const results = await db.query('SELECT * from profiles').catch(console.log)
        return res.status(200).send({data: results.rows})
    }
    async createProfile(profile, res, userId) {
        const dataProfileCurrentName = await db.query(`select name FROM profiles where name=$1`, [profile.name])
        if(dataProfileCurrentName.rows.length > 0) {
            return res.status(400).send({
                success: false,
                message: 'User exist'
            })
        }
        await db.query(`insert into profiles (name, city, gender, birthdate, user_id) values ($1, $2, $3, $4, $5)`, [profile.name, profile.city, profile.gender, profile.birthdate, userId])

        return res.status(200).send({
            success: true,
            message: 'Profile was create success'
        })

    }
}

module.exports = Profile
