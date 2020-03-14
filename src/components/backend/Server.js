const express = require('express')
const bodyParsar = require('body-parser')

const exphbs = require('express-handlebars')

 const nodemailer  = require('nodemailer')
 const path = require('path')

const app = express()

//view engine setup

app.engine('handlebars',exphbs());

app.set('view engine','handlebars');

//bodyparser middleware

app.use(bodyParsar.urlencoded({ extended: false}))
app.use(bodyParsar.json())

//static folder
app.set('views', path.join(__dirname, 'views'));
app.use('/components',express.static(path.join( __dirname,'components')));


app.get('/',(req,res) => {

    res.render('contact')
})
app.listen(5000,() => console.log('server started'))