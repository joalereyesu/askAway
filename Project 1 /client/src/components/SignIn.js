import React from "react";


function SignIn(){
  const [username, GetUsername]=React.useState('')
  const [password, GetPassword]=React.useState('')

  const GetInfo = async(evt, req, res) => {
    evt.preventDefault(); 
    try {
      const user={username};
      const pass={password};
      const response= await fetch("http://localhost:5001/signin/"+user["username"],{
        method:"GET",
      })
      .then(response => response.json())
      if (response["password"]===pass["password"]){
        console.log("Si funciono");
        console.log(response);
        window.location.href = 'http://localhost:3000/homepage/'+user["username"];
      }
      console.log(response["username"])
      console.log(response["password"])
    }
     catch (error) {
      console.error(error.message);
    }
  }

    return (
    <body>
    <div className="signin">
    <img src={'/static/askaway.png'} alt="Logo"/>
    <form onSubmit={GetInfo}>
    <span>
    <h1 className="text-center mt-5">Sign In</h1>
    <label>
      <input
        type="text"
        className="form-control"
        required="required"
        name="username"
        placeholder="Enter your Username"
        onChange={(e)=>{GetUsername(e.target.value)}}
      />
    </label>
    <label>
      <input
        type="text"
        placeholder="Enter your Password"
        required="required"
        name="password"
        className="form-control"
        onChange={(e)=>{GetPassword(e.target.value)}}
      />
    </label>
    <button className="btn btn-warning">Sign In</button>
    </span>
    </form>
    </div>
  </body>
      );
}

export default SignIn;