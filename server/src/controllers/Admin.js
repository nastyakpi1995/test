const User = require('../models/User')
const Profile = require('../models/Profile');


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
}

module.exports = Admin
