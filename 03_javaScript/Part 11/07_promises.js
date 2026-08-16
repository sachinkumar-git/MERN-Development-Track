
// savetoDb(
//     "apna college",
//     () => {
//         console.log("success : your data was saved");
//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");
//                 savetoDb(
//                     "shradha",
//                     () => {
//                         console.log("success3: data3 saved");
//                     },
//                     () => {
//                         console.log("failure3 : weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2 : weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("failure: weak connection. data not saved");
//     }
// );


function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve,("success : data was saved");
        } else {
            reject("failure : week conection");
        }
    });
}


// let request = savetoDb("apna college")
//     .then(() => {
//         console.log("promise was resolved");
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//     });


savetoDb("apna college")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return savetoDb("helloworld");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return savetoDb("shradha");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
  });