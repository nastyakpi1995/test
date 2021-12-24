const express = require('express');
const router = express.Router();
const User = require('../controllers/User');

router.get('/api', async (req, res) => {
    console.log('e22jjjjj')
    res.send('eeeee')
    let users = await new User().getUsers()
    console.log('jjjjj',users)
})

router.post('/user', async (req, res) => {

})
router.put('/users/:userId', async (req, res) => {

})

router.delete('/users/:userId', async (req, res) => {

})

module.exports = router;