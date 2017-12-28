/**
 * Config_passportController
 *
 * @description :: Server-side logic for managing config_passports
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// config/passport.js
// initialize passport as middleware

var passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = {
    express: {
        customMiddleware: function (app) {
            app.use(passport.initialize());
            app.use(passport.session());
        }
    }
};