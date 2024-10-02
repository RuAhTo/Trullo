import React from 'react'
import {Link} from 'react-router-dom'
import '../scss/pages/_Auth.scss'

function Login() {
  return (
    <>
    <header>
      <h1>Trullo</h1>
    </header>
    <main>
        <div className={`auth-container`}>
            <h2>Log In</h2>
            <form className='auth-form-container'>
                <div className="auth-input-container">
                    <label htmlFor="username">Username</label>
                    <input/>
                </div>
                <div className=" auth-input-container">
                    <label htmlFor="password">Password</label>
                    <input/>
                    <div className="show-password-container">
                        <label htmlFor="">Show password</label>
                    </div>
                </div>
                <div className="auth-btn-container">
                    <button>Log in</button>
            </div>
            </form>
          <div className='auth-link-container'>
              <p>Not a member?</p>
              <Link to="/register">Click here!</Link>
          </div>
        </div>
    </main>
    </>
  )
}

export default Login