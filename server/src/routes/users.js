const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User');

router.get('/', async (req, res) => {
    return UserController.getUsers()
})

router.post(`/user/register`, async (req, res) => {
    let body = req.body
    return UserController.createUser(body, res)
})
router.post(`/user/login`, async (req, res) => {
    let body = req.body


    return UserController.loginUser(body, res)
})

router.put(`/users/:userId`, async (req, res) => {

})

router.delete(`/users/:userId`, async (req, res) => {

})

module.exports = router;
