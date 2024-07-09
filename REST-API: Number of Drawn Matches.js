'use strict';

const fs = require('fs');

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



/*
 * Complete the 'getNumDraws' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER year as parameter.
 */
const https = require('https');

async function getNumDraws(year) {
    const fetch = (url) => new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (chunk) => data += chunk);
            response.on('end', () => resolve(JSON.parse(data)));
        }).on('error', (e) => reject(e));
    });

    const initialResponse = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=1`);
    const totalPages = initialResponse.total_pages;

    const promises = [];
    for (let page = 1; page <= totalPages; page++) {
        promises.push(fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=${page}`));
    }

    const responses = await Promise.all(promises);

    let numDraws = 0;
    responses.forEach(response => {
        response.data.forEach(match => {
            if (match.team1goals === match.team2goals) {
                numDraws++;
            }
        });
    });

    return numDraws;
}

async function main(){
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = await getNumDraws(year);

    ws.write(result + '\n');

    ws.end();
}
