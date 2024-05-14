const AWS = require("aws-sdk");
const dynamoClient = new AWS.DynamoDB.DocumentClient();
module.exports = { dynamoClient }