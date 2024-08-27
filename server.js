const express = require('express')
let app = express()
const fs = require('fs')

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('index')
})


app.listen("3000", () => {
    console.log(`Running`)
})