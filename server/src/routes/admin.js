const express = require('express');
const router = express.Router();
const Admin = require('../controllers/Admin');
const adminVerify = require('../middlewairs/adminVerify');

router.get(`/dashboard`, adminVerify, async (req, res) => {

    return new Admin().getDashboard(res)
})

module.exports = router
