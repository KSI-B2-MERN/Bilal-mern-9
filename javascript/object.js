             // Declaration
// let jsObject = {
//     firstName: "Bilal",
//     lastName: "Khan",
//     contact: { email: "iambekkie99@gmail.com", phoneNumber: "03211154143" }
// };

              // Accessing values
// let jsObject = {
//     firstName: "Bilal",
//     lastName: "Khan",
// };

             // Accessing nested object values
// let jsObject = {
//     firstName: "Bilal",
//     lastName: "Khan",
//     contact: { email: "iambekkie99@gmail.com", phoneNumber: "03211154143" }
// };
// console.log(jsObject.contact.phoneNumber); // Output: 03211154143 (dot notation)
// console.log(jsObject['contact']['phoneNumber']); // Output: 03211154143 (square notation)

         // Array Destructuring with Nested Objects

// let jsObject = {
//     firstName: "Bilal",
//     lastName: "Khan",
//     contact: {
//         email: "iambekkie99@gmail.com",
//         phoneNumber: "03211154143",
//         address: {
//             city: "Lahore",
//             country: "Pakistan",
//         }
//     }
// };

// let { contact: { address: { city } } } = jsObject;
// console.log(city); // Output: Lahore