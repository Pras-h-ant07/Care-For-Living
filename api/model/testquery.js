const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    Fullname: {
        type: String
    },
    Email: {
        type: String
    },
    Address: {
        type: String
    },
    Phone:{
        type: Number
    },
    Message: {
        type: String
    },
    Question:{
        type: String
    }
},
);
module.exports = mongoose.model('User', user); 