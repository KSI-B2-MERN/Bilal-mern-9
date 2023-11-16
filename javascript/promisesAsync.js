



//  //promise
// // const coffe = new Promise((res,rej)=>{

// //     setTimeout(()=>{

// //         const wannaDrink = false;
// //         if(wannaDrink === true)
        
// //         {res(' yes') 
// //         console.log('Drinked')
    
    
// //     }
// //         else rej('Okey Sir')
// //     },2000)

// // })

// // coffe.then((result)=>{
// //     console.log(result)
// // }).catch((e)=> console.log(e))

//  //TryAndCatch

// //  let divideNumbers = (a, b) => {
// //     return new Promise((resolve, reject) => {
// //       try {
// //         if (b === 0) {
// //           console.log('Cannot divide by zero');
// //         }
  
        
// //         resolve(a / b);
// //       } catch (error) {
// //         console.error('An error occurred:', error.message);
// //         reject(null);
// //       }
// //     });
// //   };
  
// //   divideNumbers(12,0)
// //     .then(result => {
// //       console.log(result);
// //     })
// //     .catch(error => {
// //       // Handle the error
// //       console.error(error);
// //     });

//     ///////// async and await



//     let checking = async () => {
//         try {
//           let guest = await new Promise((resolve,reject) => {
//             setTimeout(() => {
              
//               const success = "guest"; 
      
//               if (success ==="guest") {
//                 resolve("Welcome to The House");
//               } else {
//                 reject("Error: Unable to welcome to The House");
//               }
//             }, 2000);
//           });
      
//           console.log(guest);
//         } catch (error) {
//           console.error(error);
//         }
//       };
      
//       checking();
     


//       const getCurrentTime = () => {
//         const now = new Date();
//         const hours = now.getHours().toString().padStart(2, '0');
//         const minutes = now.getMinutes().toString().padStart(2, '0');
//         const seconds = now.getSeconds().toString().padStart(2, '0');
//         return `${hours}:${minutes}:${seconds}`;
//       };
      
//       const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
      
//       const updateClock = async () => {
//         try {
//           while (true) {
//             console.clear(); // Clear the console to update the time
//             console.log(getCurrentTime());
//             await wait(1000); // Wait for 1 second
//           }
//         } catch (error) {
//           console.error('Error updating clock:', error);
//         }
//       };
      
//       // Start the clock
//       (async () => {
//         await updateClock();
//       })();
      
      

   

  
  