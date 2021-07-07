const passport = require ('passport')
const GoogleStrategy = require ('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');
const mongoose = require('mongoose');


const User = mongoose.model('users'); //yeni kullanıcı eklemek için user değişkeni oluşturdum


passport.serializeUser((user,done)=>{
    done(null,user.id)//user id databasede ki id google id değil yani profile.id değil
}); //useri id ye döndürürr

passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{ //userin id yi bulur async olarak 
        done(null,user)
    })
})

passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},(accessToken,refreshToken,profile,done)=>{
    User.findOne({ googleId: profile.id })
        .then((existingUser)=>{
            if(existingUser){
                //zaten boyle bı kullanıcı var olduğunu anlarız
                done(null,existingUser); // exsistinuseri parametre olarak veriyoruz ki hangi user kaydedildi anlasın.
            }else{
                //boyle bı kullanıcı yok ve yenı kulllanıcı oluştururuz 
                new User ({ googleId : profile.id }).save()  //burada yenı kullanıcı üretip save ile databaseye kaydettim
                    .then(user=>done(null,user));
                
            }
        })
}))