exports.home = async (req, res, next) => {
  res.status(200).render("index");
};

// exports.files = async (req, res, next) => {
//   res.status(200).render("files");
// };

exports.contact = async (req, res, next) => {
  res.status(200).render("contact",{title: "contact"});
};

exports.login = async (req, res, next) => {
  res.status(200).render('login');
};

// ----------------------Dashboards--------------------

// --------User Dashboard--------


exports.userDashboard = async (req, res, next) => {
  res.status(200).render('dashboard/user/userDashboard',{title: "Dashboard"});
};

exports.fileComplaint = async (req, res, next) => {
  res.status(200).render('dashboard/user/fileComplaint',{title: "File Complaint"});
};

exports.propertyDetails = async (req, res, next) => {
  res.status(200).render('dashboard/user/propertyDetails',{title: "Building Details"});
};

exports.contacts = async (req, res, next) => {
  res.status(200).render('dashboard/user/contacts',{title: "Contacts"});
};

// --------Admin Dashboard--------


exports.adminDashboard = async (req, res, next) => {
  res.status(200).render('dashboard/admin/adminDashboard',{title: "Admin Dashboard"});
};

exports.myProperties = async (req, res, next) => {
  res.status(200).render('dashboard/admin/my-properties',{title: "My Property"});
};

exports.myTenants = async (req, res, next) => {
  res.status(200).render('dashboard/admin/my-tenants',{title: "My Tenants"});
};

exports.addTenant = async (req, res, next) => {
  res.status(200).render('dashboard/admin/add-tenant',{title: "Add Property"});
};

exports.addProperty = async (req, res, next) => {
  res.status(200).render('dashboard/admin/add-property',{title: "Add Property"});
};

exports.addRooms = async (req, res, next) => {
  res.status(200).render('dashboard/admin/add-rooms',{title: "Add Rooms"});
};


exports.manageGroups = async (req, res, next) => {
  res.status(200).render('dashboard/admin/manage-group',{title: "Manage Group"});
};

exports.tenantMessages = async (req, res, next) => {
  res.status(200).render('dashboard/admin/tenant-messages',{title: "Tenant Messages"});
};


// exports.addUser = async (req, res, next) => {
//   res.status(200).render('dashboard/add-user');
// };

// exports.addFolder = async (req, res, next) => {
//   res.status(200).render('dashboard/add-folder');
// };