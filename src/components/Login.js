import 'firebase/auth'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { UserAuth } from '../Auth';


function Login() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
        error: ""
    })
    console.log(user.email);


    const { signIn } = UserAuth();

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        e.preventDefault();
        setUser({ ...user, [name]: value })
    }

    const handleLogin = async e => {
        e.preventDefault();
        try {
            await signIn(user.email, user.password);
            navigate("/");

        } catch (err) {
            alert(err)
            console.log(err)
        }
    }



    return (
        <Container>
            <CTA>
                <CTALogo src="/images/images/cta-logo-one.svg" />

                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores et dicta ullam nulla at asperiores porro quis esse! Dignissimos dolor, molestias inventore aperiam officia harum rerum dolores magni odit ut?
                </Description>
                <CTALogoTwo src="/images/images/cta-logo-two.png" />
            </CTA>
            <div>
                <div className="center">
                    <form onSubmit={handleLogin}>

                        <label htmlFor="email">Email
                            <input id="exampleFormControlInput1"
                                placeholder="Email"
                                name='email'
                                value={user.email}
                                onChange={handleChange} />
                        </label>
                        <label htmlFor="password">Password
                            <input type="password"
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlInput1"
                                placeholder="Password"
                                name='password'
                                value={user.password}
                                onChange={handleChange} />
                        </label>
                        <div className='log-btn'>

                            <button className='signBtn' type="submit">Login</button>
                        </div>

                    </form>
                </div>
            </div>

        </Container>
    )
}




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
const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
display: flex;
flex-direction: column;
margin-top: 40px;
align-items:center;
justify-content:center;
`
const CTALogo = styled.img`
/* width:90%; */
`

const SignUp = styled.a`
width: 100%;
background-color: #0063e5;
font-weight: bold;
display: flex;
flex-direction: column;
padding: 17px 0;
text-align: center;
color: #f9f9f9;
border-radius: 4px;
font-size: 18px;
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.5px;
margin-top: 8px;
margin-bottom:12px;

&:hover{
    background: #0483ee;
    
}
`

const Description = styled.p`
font-size:11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
/* font-weight: 700; */
`

const CTALogoTwo = styled.img`
/* padding: 20px; */
width: 90%;
`

export default Login