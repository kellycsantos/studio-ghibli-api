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

//busca por id
app.get("/:id", (req,res) => {
    let movie = moviesData.films
    res.json(movie.find(i => i.id == req.params.id))
})

//busca por titulo
app.get("/title/:title", (req,res) => {
    let movie = moviesData.films
    res.json(movie.find(i => i.title ==  req.params.title))
    console.log(req.params.title)
})


app.listen(PORT)

/*
Kiki's Delivery Service
Porco Rosso
*/ 