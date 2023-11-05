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
router.get("/dashboard/user-dashboard",authController.restrictTo('user'), viewController.userDashboard);
router.get("/dashboard/user-dashboard/file-complaint",authController.restrictTo('user'), viewController.fileComplaint);
router.get("/dashboard/user-dashboard/property-details",authController.restrictTo('user'), viewController.propertyDetails);
router.get("/dashboard/user-dashboard/contacts",authController.restrictTo('user'), viewController.contacts);
router.use(authController.restrictTo('admin'))
router.get("/dashboard/admin-dashboard", viewController.adminDashboard);
router.get("/dashboard/admin-dashboard/my-tenants", viewController.myTenants);
router.get("/dashboard/admin-dashboard/add-tenant", viewController.addTenant);
router.get("/dashboard/admin-dashboard/my-properties", viewController.myProperties);
router.get("/dashboard/admin-dashboard/add-property", viewController.addProperty);
router.get("/dashboard/admin-dashboard/add-rooms", viewController.addRooms);
router.get("/dashboard/admin-dashboard/manage-groups", viewController.manageGroups);
router.get("/dashboard/admin-dashboard/tenant-messages", viewController.tenantMessages);

module.exports = router;
