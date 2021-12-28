const express = require('express');
const router = express.Router();
const User = require('../controllers/User');
const baseUrl = require('./constants');

router.get(baseUrl, async (req, res) => {
    res.send('eeeee')
    let users = await new User().getUsers()
})

router.post(`${baseUrl}/user/register`, async (req, res) => {
    let body = req.body
    return new User().createUser(body, res)
})
router.post(`${baseUrl}/user/login`, async (req, res) => {
    let body = req.body

    return new User().loginUser(body, res)
})

router.put(`${baseUrl}/users/:userId`, async (req, res) => {

})

router.delete(`${baseUrl}/users/:userId`, async (req, res) => {

})

module.exports = router;