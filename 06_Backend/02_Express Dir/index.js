const express = require('express')
const app = express()

// console.dir(app)

const port = 8080

// mostly used 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// app.use ((req,res) => {
//     console.log("request received")
//      res.send('Hello World!')
    
// })

// app.get('/apple', (req, res) => {
//   res.send({
//     name: "apple",
//     color: "red",
//   })
// })


// routing

app.get("/", (req,res) => {
    res.send("you contacted root path");
} )


// app.get("/apple", (req,res) => {
//     res.send("you contacted apple path");
// } )

// app.get("/orange", (req,res) => {
//     res.send("you contacted orange path");
// } )

// app.get("*", (req,res) => {
//     res.send("this path dont exists");
// } )


// app.post("/", (req,res) => {
//     res.send("you sent a post request to root");
// } )


// path parameters 

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmlStr = `<h1>welcome to the page of @${username}!</h1>`;
  res.send(htmlStr);
});

//query string 
app.get("/search", (req, res) => {
  let{q}= req.query;
  if (!q) {
    res.send("<h1>nothing searched </h1>")
  }
  res.send(`search result for query: ${q}`);
});
