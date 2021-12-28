const express = require('express');
const router = express.Router()
const baseUrl = require('./constants');
const Profile = require('../controllers/Profile');
const verify = require('../middlewairs/authVerify')

router.get(`/profiles`, verify, async (req, res) => {
    return new Profile().getProfiles(res)
})

router.post(`/profile/create`, verify, async (req, res) => {
    const body = req.body
    const {id} = req.user
    return new Profile().createProfile(body, res, id)
})

module.exports = router