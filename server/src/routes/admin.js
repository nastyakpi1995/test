const express = require('express');
const router = express.Router();
const Admin = require('../controllers/Admin');
const adminVerify = require('../middlewairs/adminVerify');

router.get(`/dashboard`, adminVerify, async (req, res) => {

    return new Admin().getDashboard(res)
})
router.get(`/users`, adminVerify, async (req, res) => {
    const {id} = req.user
    return new Admin().getUsers(res)
})
router.put(`/user/:profileId`, adminVerify, async (req, res) => {
    const body = req.body
    let {profileId} = req.params

    return new Admin().updateUser(body, profileId, res)
})
module.exports = router
