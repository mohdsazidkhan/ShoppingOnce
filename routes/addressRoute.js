const express = require('express');

const { createAddress, updateAddress, getAddresses} = require('../controllers/adderssController');

const router = express.Router();

router.route('/address/new').post(createAddress);
router.route('/address/:userID').put(updateAddress);
router.route('/address/:userID').get(getAddresses);


module.exports = router;