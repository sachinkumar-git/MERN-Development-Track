// getting-started.js
const mongoose = require('mongoose');

main()
    .then(() => {
    console.log("connection succesful"); 
}) 
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// schema created
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,

});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employees", userSchema);



// to insert single data 
// const user2 = new User ({
//     name : "Eve",
//     email: "eve@yahoo.in",
//     age: 48,
// });

// user2
//     .save()
//     .then((res)=> {
//         console.log(res);
//     })
//     .catch((res)=> {
//         console.log(err);
//     });


// to insert multiple data 

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Peter", email: "peter@gmail.com", age: 30 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 47 },
// ]).then((res) => {
//   console.log(res);
// });

// to find 

// User.find({}).then((res) => {
//     console.log(res);
// }).catch(err => {console.log(err)});



// to find  after using conditions
// User.find({age: {$gt: 47}}).then((res) => {
//     console.log(res);
// }).catch(err => {console.log(err)});



// to findone after using conditions
// User.findOne({age: {$gt: 47}}).then((res) => {
//     console.log(res);
// }).catch(err => {console.log(err)});




// to findone on the basis of id 
// User.findOne({_id: "69e77bcc126785a6c88fa361"}).then((res) => {
//     console.log(res);
// }).catch(err => {console.log(err)});

// User.findById( "69e77bcc126785a6c88fa361").then((res) => {
//     console.log(res);
// }).catch(err => {console.log(err)});



// update

// User.updateOne({ name: "Bruce" }, { age: 49 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


//   User.updateMany({ age: {$gt: 48}}, { age: 55 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// find and update 
// it will print value which is not updated
// User.findOneAndUpdate({ name: "Bruce" }, { age: 35 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// it will print value which is updated
// User.findOneAndUpdate({ name: "Bruce" }, { age: 35 }, {new: true})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });



// to delete 
// User.deleteOne({ name: "Bruce" }).then((res) => {
//   console.log(res);
// });


// delete many 
// User.deleteOne({ age: 48 }).then((res) => {
//   console.log(res);
// });


// delete by id 

User.findByIdAndDelete("69e77e6a9e951552f9316956" ).then((res) => {
  console.log(res);
});