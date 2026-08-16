import { useState } from "react";

function Form() {
    let [formData, setFormData] = useState ({
      fullName: "",
      username: "",
      password: "",
    })


    let handleInputChange = (event) => {
   
      setFormData( (currData) => {
        return {...currData, [event.target.name] : event.target.value};
      });
    };

    let handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
      setFormData({
        fullName: "",
        username: "",
        password: "",
      })
    };

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="FullName">Full Name</label> 
      <input type="text" placeholder="Enter Full Name"
       value={formData.fullName} 
   
       id ="username"
       name="fullName"
       onChange={handleInputChange}
       />
       <br />

      <label htmlFor="username">Username</label> 
      <input type="text" placeholder="Enter Full name"
       value={formData.username} 
      
       id ="username"
       name="username"
       onChange={handleInputChange}

       />

        <br />

      <label htmlFor="password">Password</label> 
      <input type="text" placeholder="Enter password"
       value={formData.password} 
      
       id ="password"
       name="password"
       onChange={handleInputChange}

       />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form; // Ye line hona zaroori hai