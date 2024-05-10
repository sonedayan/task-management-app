const pool = require('../../db');
const queries = require('../queries')


//Auth Controllers
const signup_get = (req, res) => {
    res.send("Sign up")
}

const signup_post = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send("sign up post")
}

const login_get = (req, res) => {
    res.send("login")
}

const login_post = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send("user login")

}


module.exports = {
    signup_get,
    signup_post,
    login_get,
    login_post,
}