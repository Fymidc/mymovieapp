const express = require('express');
const mongoose = require ('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

require('./models/User')
require('./services/passport');


const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,  //ne kadar süre cookie yaşıyacak -30 gün
        keys: [keys.cookieKey]
    })
)

app.use(bodyParser.json());

app.use(cors());


mongoose.connect(keys.mongoURI);


app.use(passport.initialize());
app.use(passport.session());
/*
app.get('/',(req,res)=>{
    res.send("welcome to netflixx")
})
*/
app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
}))

app.get('/auth/google/callback',
passport.authenticate('google'),
(req,res)=>{
    res.redirect('/user');
}
)

app.get('/api/current_user', (req,res)=>{
   console.log(req.user)
    res.send(req.user);
});

app.get('/api/logout', (req,res)=>{
    req.logout();
    res.redirect('/');
});


const port = process.env.PORT || 5000;

app.listen(port , ()=>console.log(`server started on ${port}`));