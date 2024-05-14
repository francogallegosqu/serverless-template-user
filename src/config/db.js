const AWS = require("aws-sdk");

class DynamoDBClient {
  constructor() {
    if (!DynamoDBClient.instance) {
      this.instance = new AWS.DynamoDB.DocumentClient();
      DynamoDBClient.instance = this;
    }

    return DynamoDBClient.instance;
  }

  getInstance() {
    return this.instance;
  }
}

module.exports = new DynamoDBClient();
