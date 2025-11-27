// Create a new router
const express = require("express");
const router = express.Router();

// Authentication middleware placed here so routes can import it from main
function redirectLogin(req, res, next) {
    if (!req || !req.session || !req.session.userId) {
        return res.redirect('/users/login')
    }
    next()
}
// attach to router so other route modules can require('./main').redirectLogin
router.redirectLogin = redirectLogin

// Handle our routes
router.get("/", function (req, res, next) {
    res.render("index.ejs");
});

router.get("/about", function (req, res, next) {
    res.render("about.ejs");
});

// Export the router object so index.js can access it
module.exports = router;