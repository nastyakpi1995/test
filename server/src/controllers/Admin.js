const User = require('../models/User')
const Profile = require('../models/Profile');
const {use} = require("express/lib/router");


class Admin {
    async getDashboard(res) {
        const users = await new User().getUsersId()
        const profiles = await new Profile().getProfilesCity()
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
    async getUsers(res) {
        const users = await new User().getUsers()
        res.status(200).send({
            users: users.rows,
            message: '',
            success: true
        })
    }
}

module.exports = Admin
