const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const md5 = require('md5');
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true)

const userSchema = new Schema({
  email: {
    type: String,
    unique: true, 
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, "Invalid email address"],
    required: true
  },
  name: {
    type: String,
    required: 'Please supply a name',
    trim: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  favoriteTeams: [String]
});

userSchema.virtual('gravatar').get(function() {
  const hash = md5(this.email);
  return `https://gravatar.com/avatar/${hash}?s=200`;
})

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);

const User = mongoose.model('User', userSchema);
module.exports = User;
