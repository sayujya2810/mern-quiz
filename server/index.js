const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const PORT = process.env.PORT || 9000;
const app = express()

mongoose.connect(process.env.DB_URI , {
    useUnifiedTopology : true,
    userNewUrlParser: true,
}).then(() => console.log("Database Connection Established"))
.catch(er => console.log("Error in connecting to mongoDB instance"))

let server = app.listen(PORT, () => {
    console.log(`Node Server Listening to : ${PORT}`)
})