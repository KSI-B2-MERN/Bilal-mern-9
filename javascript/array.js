
                // Declaration
// const arr = [1, 2, 3, "same"];
// console.log(arr);

                // Accessing values
// const arr = [1, 2, 3, "same"];
// console.log(arr[2]); // Output: 3
 
               // Array Methods

     // push (add element to the end of the array)
// const arr = [1, 2, 3, "same"];
// console.log(arr.push('hi')); // Output: returns its index number
// const arr2 = arr;
// console.log(arr2); // Output: [1, 2, 3, 'same', 'hi']

     // pop (remove the last element of the array and return it)
// const arr = [1, 2, 3, "same"];
// console.log(arr.pop()); // Output: 'same'
// const arr2 = arr;
// console.log(arr2); // Output: [1, 2, 3]

      // shift (remove the first element of the array and return it)
// const arr = [1, 2, 3, "same"];
// console.log(arr.shift()); // Output: 1
// const arr2 = arr;
// console.log(arr2); // Output: [2, 3, 'same']

    // unshift (add the first element to the array and return the overall length of the array)
// const arr = [1, 2, 3, "same"];
// console.log(arr.unshift(0)); // Output: 5
// const arr2 = arr;
// console.log(arr2); // Output: [0, 1, 2, 3, 'same']

   // indexOf (return the index number of the value)
// const arr = [1, 2, 3, "same"];
// console.log(arr.indexOf("same")); // Output: 3

  // includes (return true or false if the element is in the array)
// const arr = [1, 2, 3, "same"];
// console.log(arr.includes("same")); // Output: true
// console.log(arr.includes("same", 4)); // Output: false (checking from index 4)

  // Array Destructuring

// const arr = [128, 256, 0];
// const [first] = arr;
// console.log(first); // Output: 128

// const arr = [128, 256, 0];
// const [first, second, third] = arr;
// console.log(first, second, third); // Output: 128 256 0
// const arr = [128, 256, 0];
// const [, second, third] = arr;
// console.log(second, third); // Output: 256 0

// const arr = [128, 256, 0];
// const [first, , third] = arr;
// console.log(first, third); // Output: 128 0
