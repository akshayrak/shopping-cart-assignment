import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Login.scss"

const Login = () => {
    const navigate = useNavigate()
  return <>
      <section className="login-page-container">
        <section className="heading-section">
            <h1>Login</h1>
            <p className="margin-y-t-3">Get access to your Orders, Wishlist and Recommendations</p>
        </section>
        <main className="login-form">
            <form onsubmit="">       
                <div className="form-element">
                    <label for="email" className="control-label">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" /> 
                </div>

                <div className="form-element">
                    <label for="password" className="control-label">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>

                <div className="form-element">
                    <button onClick={()=>navigate("/")} className="app-btn submit-btn">Login</button>
                </div>

            </form>
        </main>

    </section>
  </>;
};

export default Login;
