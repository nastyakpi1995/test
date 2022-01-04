const db = require('../config/db');
const ProfileModel = require('../models/Profile')
class ProfileController {
    async getProfiles(res, userId) {
        const results = await ProfileModel.getProfileByUserId(userId).catch(console.log)

        return res.status(200).send({data: results.rows})
    }

    async createProfile(profile, res, userId) {
        const dataProfileCurrentName = await db.query(`select name FROM profiles where name=$1 and user_id=$2`, [profile.name, userId])
        if(dataProfileCurrentName.rows.length > 0) {
            return res.status(400).send({
                success: false,
                message: 'profile name is exist'
            })
        }
        await db.query(`insert into profiles (name, city, gender, birthdate, user_id) values ($1, $2, $3, $4, $5)`, [profile.name, profile.city, profile.gender, profile.birthdate, userId])

        return res.status(200).send({
            success: true,
            message: 'Profile was create successfully'
        })
    }
    async updateProfile(profile, res, profileId) {
        await db.query(`update profiles set name=$1, city=$2, gender=$3 where id=$4`, [profile.name, profile.city, profile.gender, profileId])
        return res.status(200).send({
            success: true,
            message: 'Profile was update successfully'
        })
    }
    async deleteProfile(res, profileId) {
        const user = await db.query(`select * from profiles where id=$1`, [profileId])

        const data = await db.query(`DELETE FROM profiles WHERE id=$1`, [profileId])
        console.log('profileId 3333', profileId, user.rows, data)

        return res.status(200).send({
            success: true,
            message: 'Profile was delete successfully'
        })
    }
}

module.exports = new ProfileController
