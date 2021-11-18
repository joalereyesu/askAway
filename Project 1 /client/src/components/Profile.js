import React from "react";
import Navbar from "./Navbar";

function Profile (){

    const [username, SetUsername]=React.useState('')
    const [email, SetEmail]=React.useState('')
    const [password, SetPassword]=React.useState('')
  
  
    const SendInfo = async(evt) => {
      evt.preventDefault();
      try {
        const body={username, email, password};
        const response= await fetch("http://localhost:5001/profile", {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(body)
        })
        console.log(response)
      } catch (error) {
        console.error(error.message);
      }
    }

    return (
        <body>
            <Navbar/>
            <div className = "signin">
                <form onSubmit = {SendInfo}>
                    <span>
                        <h1 className = "text-center mt-5">Edit Profile</h1>
                        <label>New username
                            <input
                                type = "text"
                                className = "form-control"
                                required = "required"
                                name = "newUsername"
                                placeholder = {username}
                                onChange = {(e)=>{SetUsername(e.target.value)}}
                            />
                        </label>
                        <label>New email
                            <input
                                type = "text"
                                className = "form-control"
                                required = "required"
                                name = "newEmail"
                                placeholder = {email}
                                onChange = {(e)=>{SetEmail(e.target.value)}}
                            />
                        </label>
                        <label>New password
                            <input
                                type = "text"
                                className = "form-control"
                                required = "required"
                                name = "newPassword"
                                placeholder = {password}
                                onChange = {(e)=>{SetPassword(e.target.value)}}
                            />
                        </label>
                        <button className="btn btn-warning">Change</button>
                    </span>
                </form>
            </div>
        </body>
    );
}

export default Profile;