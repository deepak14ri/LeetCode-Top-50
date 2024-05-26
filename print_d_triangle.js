const printDTriangle = (row) => {
    for(let i = 0; i < row; i++){
        process.stdout.write('*');
        if(i>0){
            process.stdout.write(' '.repeat(2*i-1) + '*');
        }
        console.log();
    }

    for (let j = row; j >= 0; j--) {
        process.stdout.write('*');
        if (j >= 1) {
            process.stdout.write(' '.repeat(j*2-1) + '*');
        }
        console.log();
    }
}
printDTriangle(row);