const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login/sso',
    passport.authenticate('saml', {
        successRedirect: '/'
    }),
    (req, res) => {
        res.redirect('/');
    }
)

router.post('/login/sso/callback',
    passport.authenticate('saml', {
        successRedirect: '/'
    }),
    (req, res) => {
        res.redirect('/');
    }
)

router.get('/logout/', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;

