const express = require('express');
const router = express.Router();
const Admin = require('../controllers/Admin');
const adminVerify = require('../middlewairs/adminVerify');

router.get(`/dashboard`, adminVerify, async (req, res) => {

    return new Admin().getDashboard(res)
})
router.get(`/users`, adminVerify, async (req, res) => {

    return new Admin().getUsers(res)
})
module.exports = router
