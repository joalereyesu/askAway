<form className="d-flex mt-5" onSubmit={SendInfo}>
      <span>
      <h1 className="text-center mt-5">SIGN UP</h1>
      <label>
        Username
        <input
          type="text"
          name="firstName"
          className="form-control"
          onChange={(e)=>{SetUsername(e.target.value)}}
        />
      </label>
      <label>
        Email
        <input
          type="text"
          name="lastName"
          className="form-control"
          onChange={(e)=>{SetEmail(e.target.value)}}
        />
      </label>
      <label>
        Password
        <input
          type="text"
          name="lastName"
          className="form-control"
          onChange={(e)=>{SetPassword(e.target.value)}}
        />
      </label>
      <button className="btn btn-success">Sign Up</button>
      </span>
    </form>