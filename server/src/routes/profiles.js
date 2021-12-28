const express = require('express');
const router = express.Router()
const baseUrl = require('./constants');
const {verify} = require("jsonwebtoken");
const Profile = require('../controllers/Profile');

router.get(`${baseUrl}/profiles`, verify, async (req, res) => {

    res.send('hiiiii')
})

router.post(`${baseUrl}/profiles`, async (req, res) => {
    const body = req.body
    return new Profile().createProfile(body, res)
})

module.exports = router