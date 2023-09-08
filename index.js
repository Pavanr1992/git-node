const express = require("express")

const userRoute = require("./routes/user")
const proRoute = require("./routes/promise")
const app = express()
app.use(express.json())

app.use('/user',userRoute)
app.use('/promise',proRoute)
const port = process.env.PORT || 22

app.listen(port, () => console.log("Listening port 22"))
//Test