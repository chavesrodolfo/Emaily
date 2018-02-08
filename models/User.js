const mongoose = require('mongoose');
const { Schema } = mongoose; // the same as const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String,
    name: String,
    email: String
});

mongoose.model('users', userSchema);