import React from "react";

function Login(props) {
  return (
    <div>
      <h2 className="mv3">Create Account</h2>
      <form className="flex flex-column">
        <input 
          type="text"
          placeholder="name"
          autoComplete="off"
        />
        <input 
          type="email"
          placeholder="email"
          autoComplete="off"
        />
        <input 
          type="password"
          placeholder="password"
          autoComplete="off"
        />
        <div className="flex mt3">
          <button type="submit" className="button pointer">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
