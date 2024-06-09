
const quickSort = (arr) => {
    if(arr.length <= 1) return arr;
    let pivot = arr[Math.floor((arr.length)/2)];
    let left = [];
    let right = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else if(arr[i] > pivot){
            right.push(arr[i])
        }else{
            pivot = arr[i]
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([0,1,9,-1,4,2,6,7])); //-1, 0, 1, 2, 4, 6, 7