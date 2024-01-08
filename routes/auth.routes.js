const express = require('express');
const { SignIn, SignUp } = require('../controllers/auth.controllers');
const authRoute = express.Router();



authRoute.post('/signin', SignIn);
authRoute.post('/signup', SignUp);




module.exports = authRoute;