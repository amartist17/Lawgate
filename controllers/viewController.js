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

exports.userDashboard = async (req, res, next) => {
  res.status(200).render('dashboard/user/userDashboard',{title: "Dashboard"});
};

exports.fileComplaint = async (req, res, next) => {
  res.status(200).render('dashboard/user/fileComplaint',{title: "File Complaint"});
};

exports.pgDetails = async (req, res, next) => {
  res.status(200).render('dashboard/user/pgDetails',{title: "PG Details"});
};

exports.contacts = async (req, res, next) => {
  res.status(200).render('dashboard/user/contacts',{title: "Contacts"});
};



// exports.addUser = async (req, res, next) => {
//   res.status(200).render('dashboard/add-user');
// };

// exports.addFolder = async (req, res, next) => {
//   res.status(200).render('dashboard/add-folder');
// };