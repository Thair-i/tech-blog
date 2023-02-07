const auth = (req, res, next) => {


  if (!req.session.logged_in) {
    res.redirect('/login');
  // Else go to the next instance
  } else {
    next();
  }
};

module.exports = auth;