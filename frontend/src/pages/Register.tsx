import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/style.scss'
import '../scss/pages/_Auth.scss'

function Register() {
  return (
    <>
    <header>
      <h1>Welcome!</h1>
    </header>
    <main>
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form className="auth-form-container">
                <div className="auth-input-container">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="usernameInput" />
                </div>
                <div className="auth-input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="passwordInput" />
                </div>
                <div className="auth-input-container">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input type="password" name="confirm-password" id="confirmPasswordInput" />
                    <div className="show-password-container">
                        <input type="checkbox" className="show-password-btn" />
                        <label htmlFor="">Show password</label>
                    </div>
                </div>
                <div className="auth-input-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="emailInput" />
                </div>
                <div className="auth-btn-container">
                    <button type="submit">Submit</button>
                    <p></p>
                </div>
            </form>
            
            <div className="auth-link-container">
                <p>Already a member?</p>
                <Link to="/login">Click here!</Link>
            </div>
        </div>
    </main>

    </>
  )
}

export default Register