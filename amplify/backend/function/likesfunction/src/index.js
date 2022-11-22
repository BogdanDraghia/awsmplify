const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


 const params = {
    TableName : 'counter_table-dev',
    /* Item properties will depend on your application concerns */
    Key: {
        counter_column: 'likes'
      }
  }

  async function getItem(){
    try {
      const data = await docClient.get(params).promise()
      return data
    } catch (err) {
      return err
    }
  }
  

exports.handler = async (event) => {
    try {
        const data = await getItem()
        return { body: JSON.stringify(data) }
      } catch (err) {
        return { error: err }
      }
};
