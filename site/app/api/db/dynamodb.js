import AWS from 'aws-sdk';

AWS.config.update({
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_DYNAMODB_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_DYNAMODB_SECRET_ACCESS_KEY
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "vtmunc_applicants";

export async function getApplicants () {
    const params = {
        TableName: TABLE_NAME
    }

    const res = await dynamoClient.scan(params).promise();
    return res.Items;
}

export async function putApplicant(applicant) {
    const params = {
        TableName: TABLE_NAME,
        Item: applicant
    }

    console.log(params);

    await dynamoClient.put(params).promise();
}
