const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var subscription = new Schema({
    Fullname: {
        type: String
    },
    Username: {
        type: String
    },
    Email: {
        type: String
    },
    Phone:{
        type: Number
    },
    Address: {
        type: String
    },
    Plan: {
        type: String
    },
    Time: {
        type: String
    }
},
);
module.exports = mongoose.model('subscription', subscription); 