import { useNavigate } from 'react-router-dom';

function Register({ formStyle }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const password1 = e.target.password1.value;
        const password2 = e.target.password2.value;

        if (password1 !== password2) {
            console.error("Passwords do not match");
            return;
        }

        console.log("Form submitted");
    };

    return (
        <div className={`card ${formStyle}`}>
            <form className={`form ${formStyle}`} onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div>
                    <input type="text" id="username" name="username" required placeholder="Username" />
                </div>
                <div>
                    <input type="email" id="email" name="email" required placeholder="Email" />
                </div>
                <div>
                    <input type="password" id="password1" name="password1" required placeholder="Password" />
                </div>
                <div>
                    <input type="password" id="password2" name="password2" required placeholder="Repeat password" />
                </div>
                <button type="submit">Register</button>
                <span onClick={() => navigate('/')}>Already have an account?</span>
            </form>
        </div>
    );
}

export default Register;