const express = require("express");
const apiController = require('../controllers/apiController')
const authController = require('../controllers/authController')
const router = express.Router({ mergeParams: true });


router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.use(authController.isLoggedIn);

router.post("/admin/addProperty",authController.restrictTo('admin'), apiController.addProperty);

module.exports = router;

