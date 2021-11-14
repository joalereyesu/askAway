import React from "react";


function HomePage(){
    return(
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
        <label for="consent">I agree to Terms and Conditions</label>
        <button className="btn btn-warning">Sign Up</button>
        </span>
      </form>
      <p className="pstyle">If you already have an account, <a href="http://localhost:5000/users">Sign In</a></p>
        </div>
      </body>
    );
}