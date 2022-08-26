import React, { useCallback } from 'react';
import { app } from "../firebase";
import { useNavigate } from 'react-router-dom';
function SignUp({ history }) {
    const navigate = useNavigate();

    const handleSignUp = useCallback(

        async e => {
            e.preventDefault();
            const { email, password } = e.target.elements;
            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);
                navigate("/");
                history.push("/");
            } catch (err) {
                alert(err)
            }
        }, [history, navigate]
    )


    return (

        <div><h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label name="email">Email
                    <input type="email" id="email" placeholder="Email" />
                </label>
                <label name="password">Password
                    <input type="password" id="password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp