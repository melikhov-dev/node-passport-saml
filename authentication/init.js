const passport = require('passport');
const passportSaml = require('passport-saml');
const {readFileSync} = require('fs');
const path = require('path');


passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

const cert = readFileSync(path.join(__dirname, 'onelogin.pem'), 'utf-8');

const strategy = new passportSaml.Strategy({
    entryPoint: '',
    cert
}, (profile, done) => {
    return done(null, profile)
})

function initPassport() {
    passport.use(strategy);
}

module.exports = initPassport;

