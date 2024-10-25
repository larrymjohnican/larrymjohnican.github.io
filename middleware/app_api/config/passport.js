const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../../app_api/models/user');

// Set up the local strategy using Passport.js
passport.use(new LocalStrategy({
    usernameField: 'email' // Use 'email' as the username field
  },
  async (username, password, done) => {
    try {
      // Query the database for a user with the provided email
      const user = await User.findOne({ email: username }).exec();

      // Uncomment the following line to log the query result in the console
      // console.log(user);

      // If the user is not found in the database
      if (!user) {
        return done(null, false, { message: 'Incorrect Username' });
      }

      // Check if the provided password matches the stored hashed password
      const isPasswordValid = await user.validPassword(password);
      if (!isPasswordValid) {
        return done(null, false, { message: 'Incorrect Password' });
      }

      // Everything is OK, return the user object
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));
