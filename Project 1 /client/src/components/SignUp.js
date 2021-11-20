import React from "react";


function SignUp(){
  const [username, SetUsername]=React.useState('')
  const [email, SetEmail]=React.useState('')
  const [password, SetPassword]=React.useState('')


  const SendInfo = async(evt) => {
    evt.preventDefault();
    try {
      const body={username, email, password};
      const response= await fetch("http://localhost:5001/signup", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
      })
      window.location.href = 'http://localhost:3000/homepage/'+username;
      sessionStorage.setItem('UserName', response["username"]);
      console.log(response)
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <body>
    <div className="tasks">
    <img src={'/static/askaway.png'} alt="Logo"/>
    <form onSubmit={SendInfo}>
    <span>
    <h1 className="text-center mt-5">Sign Up</h1>
    <label>
      <input
        type="text"
        className="form-control"
        required="required"
        name="username"
        placeholder="Username"
        onChange={(e)=>{SetUsername(e.target.value)}}
      />
    </label>
    <label>
      <input
        type="text"
        className="form-control"
        required="required"
        name="email"
        placeholder="E-mail"
        onChange={(e)=>{SetEmail(e.target.value)}}
      />
    </label>
    <label>
      <input
        type="text"
        placeholder="New Password"
        required="required"
        name="password"
        className="form-control"
        onChange={(e)=>{SetPassword(e.target.value)}}
      />
    </label>
    <input 
      type="checkbox" 
      name="consent" 
      id="consent"
      required="required"
      />
    <label for="consent">I agree to <a href="http://localhost:3000/terms">Terms and Conditions</a></label>
    <button className="btn btn-warning">Sign Up</button>
    </span>
  </form> 
  <p className="pstyle">If you already have an account, <a href="http://localhost:3000/signin">Sign In</a></p>
    </div>
  </body>
  );
}


export default SignUp;