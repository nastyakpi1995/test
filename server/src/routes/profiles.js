const express = require('express');
const router = express.Router()
const baseUrl = require('./constants');
const Profile = require('../controllers/Profile');
const verify = require('../middlewairs/authVerify')

router.get(`/profiles`, verify, async (req, res) => {
    const {id} = req.user
    return new Profile().getProfiles(res, id)
})

router.post(`/profile/create`, verify, async (req, res) => {
    const body = req.body
    const {id} = req.user
    return new Profile().createProfile(body, res, id)
})

router.put(`/profile/edit/:profileId`, verify, async (req, res) => {
    const body = req.body
    const {id} = req.user
    let {profileId} = req.params

    return new Profile().updateProfile(body, res, profileId)
})

router.delete(`/profile/delete/:profileId`, verify, async (req,res) => {
    let {profileId} = req.params
  return new Profile().deleteProfile(res, profileId)
})


module.exports = router