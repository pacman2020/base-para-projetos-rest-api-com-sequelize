const express = require('express')
const sequelize = require("./config");
const routes = require('./routes')
const cors = require("cors")
const app = express()

sequelize.sync().then(() => console.log("database connected successfully 🏦"));

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3000, ()=> console.log('http://localhost:3000/ 🔥'))