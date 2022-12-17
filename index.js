const express = require("express");
const app = express();
const moviesData = require("./data.json")
const PORT = process.env.PORT || 9000;

const cors = require("cors")

app.use(cors({methods: ["GET"]}))

app.get("/", (req,res) => {
    res.json(
        moviesData
    )
})

app.listen(PORT)
