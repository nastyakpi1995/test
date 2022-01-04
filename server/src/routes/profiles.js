const express = require('express');
const router = express.Router()
const ProfileController = require('../controllers/Profile');
const verify = require('../middlewairs/authVerify')

router.get(`/profiles`, verify, async (req, res) => {
    const {id} = req.user
    return ProfileController.getProfiles(res, id)
})

router.post(`/profile/create`, verify, async (req, res) => {
    const body = req.body
    const {id} = req.user
    return ProfileController.createProfile(body, res, id)
})

router.put(`/profile/edit/:profileId`, verify, async (req, res) => {
    const body = req.body
    const {id} = req.user
    let {profileId} = req.params

    return ProfileController.updateProfile(body, res, profileId)
})

router.delete(`/profile/delete/:profileId`, verify, async (req,res) => {
    let {profileId} = req.params
    console.log('profileId', profileId)
  return  ProfileController.deleteProfile(res, profileId)
})


module.exports = router