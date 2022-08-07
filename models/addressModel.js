const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: [true, "Please enter Address"],
        trim: true
    },
    city: {
        type: String,
        required: [true, "Please enter City name"]
    },
    landmark: {
        type: String,
    },
    country: {
        type: String,
        required: [true, "Please enter Country name"]
    },
    phoneNo: {
        type: Number,
        required: [true, "Please enter Phone No."]
    },
    pincode: {
        type: Number,
        required: [true, "Please enter Pincode"]
    },
    state: {
        type: String,
        required: [true, "Please enter state"]
    },
    userID: {
        type: String,
        required: [true, "User ID Not Found!"]
    },
});

module.exports = mongoose.model('Addresses', addressSchema);