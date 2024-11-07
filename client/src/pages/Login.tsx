import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../components/auth/AuthProvider';
import axios from 'axios';
import '../scss/pages/_Auth.scss'

function Login() {

    const { login } = useAuth();
    const navigate = useNavigate(); // Använd useNavigate för att navigera
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const [buttonShake, setButtonShake] = useState(false);
    const [formError, setFormError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);


    const handleLogin = async (event: React.FormEvent) => {
      event.preventDefault();


      setLoading(true)
      setFormError('');

      if (!email || !password) {
        setFormError('Please enter your username and password')
        setButtonShake(true)
        setTimeout(() => setButtonShake(false), 500);
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/trullodb/auth/login', {
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    
        if (response.status === 200) {
            const data = response.data;
            login(data.token);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.id);
            navigate('/dashboard');

        } else if (response.status === 401) {
            setFormError('Incorrect username or password. Please try again.');

        } else if (response.status === 404) {
            setFormError('User not found. Please check your credentials or sign up.');

        } else {
            setFormError('Something went wrong. Please try again later.');
        }

    } catch (error) {
        console.error('Error:', error);
        if (error.response) {

            if (error.response.status === 401) {
                setFormError('Incorrect username or password. Please try again.');
            } else if (error.response.status === 404) {
                setFormError('User not found. Please check your credentials or sign up.');
            } else {
                setFormError('Something went wrong. Please try again later.');
            }
        } else {
            setFormError('Network error. Please check your connection.');
        }
    } finally {
        setLoading(false);
        setButtonShake(true);
        setTimeout(() => setButtonShake(false), 500);
    }
  }
    


  return (
    <>
    <header>
      <h1>Trullo</h1>
    </header>
    <main>
        <div className={`auth-container`}>
            <h2>Log In</h2>
            <form className='auth-form-container' onSubmit={handleLogin}>
                <div className="auth-input-container" >
                    <label htmlFor="username">Email</label>
                    <input 
                      type="text" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className=" auth-input-container">
                    <label htmlFor="password">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="passwordInput"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="show-password-container">
                    <input 
                      type="checkbox"
                      className="show-password-btn"
                      onClick={() => setShowPassword(!showPassword)}
                      />
                      <label htmlFor="">Show password</label>
                    </div>
                </div>
                <div className="auth-btn-container">
                    <button>Log in</button>
                    <p>{formError}</p>
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