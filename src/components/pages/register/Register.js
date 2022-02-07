import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../login/Login.scss"
import "./Register.scss"

const Register = () => {
  const navigate = useNavigate()
  return <>
    <section className="register-page-container">
        <section className="heading-section">
            <h1>Signup</h1>
            <p className="margin-y-t-3">We do not share your personal details with anyone.</p>
        </section>
        <main className="login-form">
            <form>
              
                <div className="form-element">
                    <label id="name-label" for="first-name" className="control-label">First Name</label>
                    <input type="first-name" name="first-name" id="first-name" placeholder="First Name" /> 
                </div>

                <div className="form-element">
                    <label for="last-name" className="control-label">Last Name</label>
                    <input type="last-name" name="last-name" id="last-name" placeholder="Last Name" />
                </div>

                <div className="form-element">
                    <label for="email" className="control-label">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>

                <div className="form-element">
                    <label for="password" className="control-label">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>

                <div className="form-element">
                    <label for="confirm-password" className="control-label">Confirm Password</label>
                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
                </div>

                <div className="form-element">
                    <button onClick={()=>navigate("/")} className="app-btn submit-btn">Signup</button>
                </div>

            </form>
        </main>

    </section>
  </>;
};

export default Register;
