const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/Admin');
const adminVerify = require('../middlewairs/adminVerify');

router.get(`/dashboard`, adminVerify, async (req, res) => {

    return AdminController.getDashboard(res)
})

router.get(`/users`, adminVerify, async (req, res) => {
    const {id} = req.user
    return AdminController.getUsers(res, id)
})

router.get(`/user/:userId`, adminVerify, async (req, res) => {
    const {userId} = req.params;
    return AdminController.getUserById(userId, res)
})

router.put(`/user/:userId`, adminVerify, async (req, res) => {
    const body = req.body
    let {userId} = req.params

    return AdminController.updateUser(body, userId, res)
})

router.delete(`/user/:userId`, adminVerify, async (req, res) => {
    let {userId} = req.params

    return AdminController.deleteUser(userId, res)
})
module.exports = router
