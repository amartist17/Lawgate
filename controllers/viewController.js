exports.home = async (req, res, next) => {
  res.status(200).render("index");
};

// exports.files = async (req, res, next) => {
//   res.status(200).render("files");
// };

exports.contact = async (req, res, next) => {
  res.status(200).render("contact");
};

exports.login = async (req, res, next) => {
  res.status(200).render('login');
};

exports.userDashboard = async (req, res, next) => {
  res.status(200).render('dashboard/user/userDashboard');
};

exports.fileComplaint = async (req, res, next) => {
  res.status(200).render('dashboard/user/fileComplaint');
};


// exports.addUser = async (req, res, next) => {
//   res.status(200).render('dashboard/add-user');
// };

// exports.addFolder = async (req, res, next) => {
//   res.status(200).render('dashboard/add-folder');
// };