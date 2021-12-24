const express = require('express');
const cors = require('cors');
const app = express()
const userRoutes = require('./routes/users');

app.use(express.json());
app.use(cors());
app.use(userRoutes)

const PORT = process.env.PORT || 4002

app.listen(PORT, () => {
    console.log(`app started to port ${PORT}`)
})