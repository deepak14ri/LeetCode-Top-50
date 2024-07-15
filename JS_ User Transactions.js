'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
      inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
      return inputString[currentLine++];
}

const httpsGet = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (chuck) => {
                data += chuck;
            });
            response.on('end', (chuck) => {
                resolve(JSON.parse(data));
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}
async function getNumTransactions(username) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
    // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>
    const response = await httpsGet(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`);
    // console.log(response);
    if(response.data.length === 0) return 'Username Not Found';
    const userId = response.data[0].id;
    const transactionResponse = await httpsGet(`https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`);

    return transactionResponse.total;
}
async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const username = readLine().trim();
    const result = await getNumTransactions(username);
    ws.write(result.toString());
}