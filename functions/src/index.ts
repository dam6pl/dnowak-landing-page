import * as functions from "firebase-functions"
const admin = require("firebase-admin")
const nodemailer = require("nodemailer")
const cors = require("cors")({ origin: true })
admin.initializeApp()

exports.sendMail = functions.https.onRequest((request, responde) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "********@gmail.com",
      pass: "************",
    },
  })
})
