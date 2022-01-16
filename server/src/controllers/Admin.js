const UserModel = require('../models/User')
const db = require('../config/db')

class AdminController {
    async getDashboard(res) {
        const users = await db.query(`SELECT id FROM users`).catch(console.log);
        const profiles = await db.query(`SELECT birthdate FROM profiles`).catch(console.log);
        const profilesAdult = profiles.rows.filter(el => {
            const todayYear = new Date().getFullYear()
            const currentYear = el.birthdate.split('.')[2]
            return todayYear - currentYear >= 18
        })
        res.status(200).send({
            success:true,
            message: '',
            data:[{count: users.rowCount,name:"users"}, {count: profiles.rowCount,name:"profiles"}, {count: profilesAdult.length,name:"adult"}]
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
        const userById = await db.query(`select username, isadmin, id, email from users where id=$1`, [userId])
        const userProfiles = await db.query(`select * from profiles where user_id=$1`, [userId]);

        res.status(200).send({
            success: true,
            userData: {
                user: userById.rows[0],
                userProfiles: userProfiles.rows
            }
        })
    }
    async updateUser(user, userId, res) {
        await db.query(`update users set username=$1, isadmin=$2, email=$3 where id=$4`, [user.username,  user.isadmin, user.email, userId])

        res.status(200).send({
            success: true,
            message: 'User was update successfully'
        })
    }
    async deleteUser(userId, res) {
        await db.query(`delete from users where id=$1`, [userId])
        await db.query(`delete from profiles where user_id=$1`, [userId])

        res.status(200).send({
            success: true,
            message: 'User and his profiles was deleted successfully'
        })
    }
}

module.exports = new AdminController
