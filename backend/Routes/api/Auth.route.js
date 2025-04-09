const route =require("express").Router()

const login = require("../../Controller/auth/login.js")
const signup = require("../../Controller/auth/signup.js")
const contact = require("../../Controller/auth/contact.js")
const booking = require("../../Controller/auth/booking.js")
const feedback = require("../../Controller/auth/feedback.js")
const checkAuth =require("../../Middleware/check-auth.js")
const getUser = require("../../Controller/auth/getUsers.js")




route.post("/login", login)
route.post("/signup", signup)
route.post("/booking", booking)
route.post("/contact", contact)
route.post("/feedback", feedback)
route.get("/getUser", checkAuth, getUser)




module.exports = route