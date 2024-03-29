const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');

class UserController {
    async getUsers() {

        let results = await UserModel.getUsers()
        return results.rows
    }

   async createUser(user, res) {
       const data = await db.query(`select email FROM users where email=$1`, [user.email])
        if(data.rows.length > 0) {
           return res.status(400).send({
                success: false,
                message: 'current user exist'
            })
        }
       const salt = await bcrypt.genSalt(10)
       const hashPassword = await bcrypt.hash(user.password, salt)

       await db.query("INSERT INTO users (email, password, username, isadmin) VALUES ($1, $2, $3, $4)", [user.email, hashPassword, user.username, user.isadmin])
       return res.status(200).send({
           success: true,
           message: 'current user register success'
       })
   }

   async loginUser(user, res) {
        const data = await db.query('select email, id, username, isadmin, password FROM users where email=$1', [user.email])

       if (data.rows.length > 0) {
           const validPassword = await bcrypt.compare(user.password, data.rows[0].password)

           if (!validPassword) return res.status(400).send({
               success: false,
               message: "incorrect password"
           });

           const token = jwt.sign({id: data.rows[0].id}, process.env.TOKEN_SECRET)
           return res.status(200).send({
               success: true,
               message: 'Current user is not login success',
               token: token,
               user: data.rows[0]
           })
       } else {
           res.status(400).send({
               success: false,
               message: 'Current user is not exist'
           })
       }
   }

}

module.exports = new UserController
