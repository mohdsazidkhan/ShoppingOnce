const Addresses = require('../models/addressModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const ErrorHandler = require('../utils/errorHandler');



// Create Address
exports.createAddress = asyncErrorHandler(async (req, res, next) => {

    const { address, city, landmark, country, phoneNo, pincode, state, userID } = req.body;
   
    if(!req.body) {
        return next(new ErrorHandler("Address Not Found", 404));
    }

    const userAddress = await Addresses.create({
        address: address,
        city: city,
        landmark: landmark,
        country: country,
        phoneNo: phoneNo,
        pincode: pincode,
        state: state,
        userID: userID
    });

    res.status(200).json({
        success: true,
        userAddress
    });

});

// Update Address
exports.updateAddress = asyncErrorHandler(async (req, res, next) => {

    var userAddress = await Addresses.find({"userID": req.params.userID});

    if (!userAddress) {
        return next(new ErrorHandler("Address Not Found", 404));
    }

    userAddress = await Addresses.findOneAndUpdate({"userID": req.params.userID}, req.body);

    res.status(201).json({
        success: true,
        userAddress
    });
    
});

// Get Address Details
exports.getAddresses = asyncErrorHandler(async (req, res, next) => {

    const shippingInfo = await Addresses.find({"userID": req.params.userID});

    //console.log(req)

    if (!shippingInfo) {
        return next(new ErrorHandler("Address Not Found", 404));
    }

    res.status(200).json({
        success: true,
        shippingInfo,
    });

});
