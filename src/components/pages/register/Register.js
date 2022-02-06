import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../login/Login.scss"
import "./Register.scss"

const Register = () => {
  const navigate = useNavigate()
  return <>
    <section class="register-page-container">
        <section class="heading-section">
            <h1>Signup</h1>
            <p class="margin-y-t-3">We do not share your personal details with anyone.</p>
        </section>
        <main class="login-form">
            <form>
              
                <div class="form-element">
                    <label id="name-label" for="first-name" class="control-label">First Name</label>
                    <input type="first-name" name="first-name" id="first-name" placeholder="First Name" /> 
                </div>

                <div class="form-element">
                    <label for="last-name" class="control-label">Last Name</label>
                    <input type="last-name" name="last-name" id="last-name" placeholder="Last Name" />
                </div>

                <div class="form-element">
                    <label for="email" class="control-label">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>

                <div class="form-element">
                    <label for="password" class="control-label">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>

                <div class="form-element">
                    <label for="confirm-password" class="control-label">Confirm Password</label>
                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
                </div>

                <div class="form-element">
                    <button onClick={()=>navigate("/")} class="app-btn submit-btn">Signup</button>
                </div>

            </form>
        </main>

    </section>
  </>;
};

export default Register;
