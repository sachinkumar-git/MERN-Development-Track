// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then ((response) => {
//     console.log(response);
//    return response.json()
// })
// .then((data)=> {
//         console.log(data);
//     })

// .catch((err)=>{
//     console.log("error - ",err);
// });




let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
  } catch (e) {
    console.log("error - ", e);
  }

  console.log("bye");
}

getFacts();