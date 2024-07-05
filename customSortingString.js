function customSortString(order, s) {
    // Create a position map for characters in `order`
    const position = {};
    for (let i = 0; i < order.length; i++) {
        position[order[i]] = i;
    }
    
    // Sort `s` based on the position map
    const sortedS = Array.from(s).sort((a, b) => {
        return (position[a] !== undefined ? position[a] : order.length) - 
               (position[b] !== undefined ? position[b] : order.length);
    });
    
    // Join sorted characters to form the result string
    return sortedS.join('');
}

// Example usage
const order1 = "cba";
const s1 = "abcd";
console.log(customSortString(order1, s1));  // Output: "cbad" or other valid permutations

const order2 = "bcafg";
const s2 = "abcd";
console.log(customSortString(order2, s2));  // Output: "bcad" or other valid permutations
