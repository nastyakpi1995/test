const express = require('express');
const cors = require('cors');
const app = express()
const userRoutes = require('./routes/users');
const profileRoutes = require('./routes/profiles');
const adminRoutes = require('./routes/admin');

require('dotenv').config()

app.use(express.json());
app.use(cors());
app.use('/api', userRoutes)
app.use('/private', profileRoutes)
app.use('/admin', adminRoutes)

const PORT = process.env.PORT || 4002

app.listen(PORT, () => {
    console.log(`app started to port ${PORT}`)
})
