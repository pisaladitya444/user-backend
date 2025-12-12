const express = require("express")
const mongoose = require("mongoose")
const userRoute = require("./routes/userRoute")
require("dotenv/config")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/user",userRoute)

app.listen(process.env.PORT || 5000 ,()=>{
    console.log("listening on port");
})

async function dB() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
dB()