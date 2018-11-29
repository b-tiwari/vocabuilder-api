const getResponse = (statusCode, body) => {
    console.log(`response: ${JSON.stringify(body)}`);
    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(body)
    };
}

export default getResponse;
