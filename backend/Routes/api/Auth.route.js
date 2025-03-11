const route =require("express").Router()

const login = require("../../Controller/auth/login.js")
const signup = require("../../Controller/auth/signup.js")



route.post("/login", login)
route.post("/signup", signup)



module.exports = route