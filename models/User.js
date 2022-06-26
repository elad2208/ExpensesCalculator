const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    
    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    martial_status: {
        type: String,
        required: true
    },

    birthday: {
        type:String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },
    
});

const usermodel = mongoose.model('users', userSchema)

module.exports = usermodel