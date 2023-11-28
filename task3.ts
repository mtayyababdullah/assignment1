//Scenario 1 - Modify Array with Methods:
let array = [1, 2, 3, 4, 5];

console.log("Original:", array);

// Push: Add elements to the end
array.push(6);

console.log("After push:", array);

// Pop: Remove the last element
array.pop();

console.log("After pop:", array);

// Shift: Remove the first element
array.shift();

console.log("After shift:", array);

// Unshift: Add elements to the beginning
array.unshift(0);

console.log("After unshift:", array);


// Scenario 2 - Subarray Creation:

let originalArray = [10, 20, 30, 40, 50];

console.log("OriginalArray:", originalArray);

// Splice: Create a subarray by removing elements
let removedElements = originalArray.splice(1, 2); // Removes elements from index 1 to index 2
console.log("After splice - Subarray:", originalArray);
console.log("Removed elements:", removedElements);

// Slice: Create a subarray without modifying the original array
let subArray = originalArray.slice(1, 3); // Extracts elements from index 1 to index 3 (not inclusive)
console.log("After slice - Subarray:", subArray);
console.log("Original array:", originalArray); // Original array remains unchanged
