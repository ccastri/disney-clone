import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Auth';
import styled from 'styled-components'
function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
        error: ""
    })


    const { createUser } = UserAuth();


    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        e.preventDefault();
        setUser({ ...user, [name]: value })

    }

    const handleSignUp =


        async e => {
            e.preventDefault();
            console.log(user.password)

            try {
                await createUser(user.email, user.password);
                navigate("/");

            } catch (err) {
                alert(err)
                console.log(err)
            }

        }




    return (

        <Container>
            <div className="center">

                <h1 className="center-sign">Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div className="form">

                        <label name="email">Email</label>
                        <input
                            type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                        // ref={passwordConfirmRef}
                        />
                    </div>
                    <div className="form">

                        <label name="email">Password
                        </label>
                        <input
                            type="password"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                            name='password'
                            value={user.password}
                            onChange={handleChange}
                        // ref={passwordConfirmRef}
                        />
                    </div>
                    {/* <label name="password">Password
                    <input
                        type="password"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                        name='password'
                        value={user.passwordConfirm}
                        onChange={handleChange}
                    // ref={passwordConfirmRef}
                    />

                </label> */}
                    <div className="form">

                        <button className='sign-pd signBtn' >Sign Up</button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default SignUp
const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
justify-content:center;

&:before{
    background-image: url("/images/images/login-background.jpg");
    background-position:top;
    background-repeat: no-repeat;
    background-size: cover;
    content:"";
    position:absolute;
    top:0;
    left:0;
    right: 0;
    bottom:0;
    z-index:-1;
    opacity: 50%;
}`