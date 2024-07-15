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
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */
const https = require('https');

async function getTotalGoals(team, year) {
    const fetch = (url) => new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (chunk) => data += chunk);
            response.on('end', () => resolve(JSON.parse(data)));
        }).on('error', (err) => reject(err));
    });
    
    let totalGoals = 0;
    let currPage = 1;
    let totalPages = 1;
    while(currPage <= totalPages){
        const response = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=${currPage}`);
        totalPages = response.total_pages;
        response.data.forEach(match => {
            totalGoals += parseInt(match.team1goals, 10);
        });
        currPage++;
    }
    currPage = 1;
    totalPages = 1;
    while(currPage <= totalPages){
        const response = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=${currPage}`);
        totalPages = response.total_pages;
        response.data.forEach(match => {
            totalGoals += parseInt(match.team2goals, 10);
        });
        currPage++;
    }
    return totalGoals;
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const team = readLine();

    const year = parseInt(readLine().trim(), 10);

    const result = await getTotalGoals(team, year);

    ws.write(result + '\n');

    ws.end();
}
