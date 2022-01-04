const UserModel = require('../models/User')
const ProfileModel = require('../models/Profile');
const db = require('../config/db')

class AdminController {
    async getDashboard(res) {
        const users = await UserModel.getUsersId()
        const profiles = await ProfileModel.getProfilesCity()
        const profileKiev = profiles.rows.filter(el => el.city.toLowerCase() === 'kiev')

        res.status(200).send({
            success: true,
            message: '',
            data: {
                usersCount: users.rowCount,
                profiles: profiles.rows.length,
                profileKiev: profileKiev.length
            }
        })
    }
    async getUsers(res, adminId) {
        const users = await UserModel.getUsersNotCurrentAdmin(adminId)
        res.status(200).send({
            users: users.rows,
            message: '',
            success: true
        })
    }
    async getUserById(userId, res) {
        const userById = await db.query(`select username, isadmin, email from users where id=$1`, [userId])
        const userProfiles = await db.query(`select * from profiles where user_id=$1`, [userId]);

        res.status(200).send({
            success: true,
            userData: {
                user: userById.rows[0],
                userProfiles: userProfiles.rows
            }
        })
    }
    // async updateUser(user, id, res) {
    //     await db.query(`update users set username=$1, isadmin=$2 where id=$3`, [user.username,  user.isadmin, id])
    //
    //     res.status(200).send({
    //         success: true,
    //         message: 'User was update successfully'
    //     })
    // }
    // async getUserProfiles(userId, res) {
    //     const userProfiles = await db.query(`select * from profiles where user_id=$1`, [userId]);
    //     res.status(200).send({
    //         success: true,
    //         userProfiles: userProfiles.rows
    //     })
    // }
}

module.exports = new AdminController
