import { useNavigate } from 'react-router-dom';
import React from 'react';

function LogIn({formStyle}) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <>
            <div className={`card ${formStyle}`}>
                <form className={`form ${formStyle}`} onSubmit={handleSubmit}>
                    <h2>Log in</h2>
                    <div>
                        <input type="text" id="username" name="username" placeholder='username' />
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder='password' />
                    </div>
                    <button type="submit">Log in</button>
                    <span onClick={() => navigate('/register')}>
                        Don’t have an account?
                    </span>
                </form>
            </div>
        </>
    );
}

export default LogIn;