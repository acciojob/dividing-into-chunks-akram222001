const divide = (arr, n) => {
    const result = [];
    let currentChunk = [];

    // Iterate through the input array
    for (const num of arr) {
        // If adding the current number exceeds the maximum sum
        if (currentChunk.reduce((sum, val) => sum + val, 0) + num > n) {
            // Add the current chunk to the result
            result.push(currentChunk);
            // Start a new chunk with the current number
            currentChunk = [num];
        } else {
            // Add the current number to the current chunk
            currentChunk.push(num);
        }
    }

    // Add the last chunk to the result
    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
};

// Test
const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
