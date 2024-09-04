const { AccessApprovalClient } = require('@google-cloud/access-approval');
const stripe = require('stripe')
const storage = require('dynamodb')
const request = require('axios')
const firstName = "ppp"
stripe.put(firstName)

AccessApprovalClient.put(firstName)

console.log(firstName)

storage.save(firstName)

const url = "www.youtube.com"

request.post(url, firstName)


