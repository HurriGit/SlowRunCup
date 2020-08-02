const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()

// EJS
app.set('views', './views')
app.set('view engine', 'ejs')

// Set static folders
app.use("/css", express.static("css"));
app.use("/img", express.static("img"));
app.use("/js", express.static("js"));
app.use("/storage", express.static("storage"));


//Variables
let inscrits = fs.readFileSync('./storage/inscrits.json')
//let urlencodedParser = bodyParser.urlencoded({ extended : false })
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())


//Définitions variables
inscrits = JSON.parse(inscrits)

app.get('/', (req, res) => {
    res.render('pages/Accueil')
})

app.get('/Accueil', (req, res)  => {
    res.render('pages/Accueil')
})

app.get('/Contact', (req, res)  => {
    res.render('pages/Contact')
})

app.get('/Inscription', (req, res)  => {
    res.render('pages/Inscription', {inscrits: inscrits, validation : false})
})

app.post('/Inscription', (req, res) => {
    let pattern = '{"numero": null,"pseudo": "", "pays": "", "etat": "", "img_pays": "", "img_etat": ""}'
    pattern = JSON.parse(pattern)
    pattern.numero = inscrits.length + 1
    pattern.pseudo = req.body.pseudo
    pattern.pays = req.body.pays
    pattern.etat = "En attente"
    pattern.img_pays = "/img/" + String(req.body.pays).toLowerCase() + ".png"
    pattern.img_etat = "/img/icon-attente.png"
    inscrits.push(pattern)
    fs.writeFileSync('./storage/inscrits.json', JSON.stringify(inscrits, null, 2))
    res.render('pages/Inscription', {inscrits: inscrits, validation : true})
})


app.get('/Resultats', (req, res)  => {
    res.render('pages/Resultats')
})

app.get('/Regles', (req, res) => {
    res.render('pages/Regles')
})

app.listen(3000)
console.log("Listening on port 3000")