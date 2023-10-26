const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.route('/signin').post(authController.signin);
router.route('/register').post(authController.register);

router.route('/update').put(authController.updateUser);

module.exports = router;