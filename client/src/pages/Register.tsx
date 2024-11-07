import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../scss/style.scss'
import '../scss/pages/_Auth.scss'
import axios from 'axios';

function RegisterUser() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const [formError, setFormError] = useState('');
    const [buttonShake, setButtonShake] = useState(false);
    const [loading, setLoading] = useState(false)

    const handleSingup = async (e: React.FormEvent)=> {
        e.preventDefault();

        if ( !password || !email) {
            setFormError('Please enter all the fields');
            setButtonShake(true);
            setTimeout(() => setButtonShake(false),500);
            return;
        }

        if (password != confirmPassword){
            setFormError("Passwords doesn't match");
            setButtonShake(true);
            setTimeout(() => setButtonShake(false),500);
            return;
        }

        setFormError('')
        setLoading(true);

        try {
            console.log({
                password: password,
                email: email,
                name: name,
            });
            const response = await axios.post('http://localhost:3000/trullodb/users', {
                password: password,
                email: email,
                name: name,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        
            if (response.status === 201) {
                const data = response.data;
                console.log('response ok', data);
                navigate('/login')
            } else {
                throw new Error('Something went wrong ¯\\_(ツ)_/¯');
                
            }
        } catch (error) {
            console.log('Error', error);
        } finally {
            setLoading(false);
        }
    }
    
  return (
    <>
    <header>
      <h1>Welcome!</h1>
    </header>
    <main>
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form className="auth-form-container" onSubmit={handleSingup}>
                <div className="auth-input-container">
                    <label htmlFor="name">Name</label>
                    <input
                    value={name} 
                    type="text"
                    name='name'
                    id='nameInput'
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="auth-input-container">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="emailInput" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="auth-input-container">
                    <label htmlFor="password">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="passwordInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="auth-input-container">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        id="confirmPasswordInput"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                    <button
                        type="submit"
                        disabled={loading}
                        className={buttonShake ? 'shake-horizontal' : ''}
                    >
                    {loading ? 'Loading...' : 'Submit'}
                    </button>
                    <p>{formError}</p>
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

export default RegisterUser