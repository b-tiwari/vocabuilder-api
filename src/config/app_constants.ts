import * as AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB.DocumentClient({
    'region': 'us-east-1'
});

export const APP_CONSTANTS = {
    DynamoDB: dynamoDb,
    WORDS_TABLE: process.env.WORDS_TABLE
};
