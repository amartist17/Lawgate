const express = require("express");
const viewController = require('../controllers/viewController')
const authController = require('../controllers/authController')
const router = express.Router({ mergeParams: true });

router.use(authController.isLoggedIn);


router.get("/", viewController.home);
// router.get("/files", viewController.files);
router.get("/contact", viewController.contact);
router.get("/login", viewController.login);
// router.get("/dashboard", viewController.addFile);


router.use(authController.protect);
router.get("/dashboard/user-dashboard", viewController.userDashboard);
router.get("/dashboard/user-dashboard/file-complaint", viewController.fileComplaint);
router.get("/dashboard/user-dashboard/pg-details", viewController.pgDetails);
router.get("/dashboard/user-dashboard/contacts", viewController.contacts);


module.exports = router;
