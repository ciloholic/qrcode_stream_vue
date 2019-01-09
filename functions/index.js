const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')
const path = require('path')

const app = express()

app.use(basicAuth('admin', 'asdf1234'))
app.use(express.static(path.join(__dirname, 'dist')))

exports.basicAuth = functions.https.onRequest(app)
