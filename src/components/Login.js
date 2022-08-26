import 'firebase/auth'
import React, { useCallback, useContext, useNavigate } from 'react';
import styled from 'styled-components'
import { AuthContext } from '../Auth';
import { app } from '../firebase';

function Login({ history }) {

    // const navigate = useNavigate();
    const handleLogin = useCallback(
        async e => {
            e.preventDefault();
            const { email, password } = e.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.pushState("/");

            } catch (err) {
                alert(err)
            }
        }, [history]
    )
    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        // navigate("/")
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
                <div>
                    <form onSubmit={handleLogin}>

                        <label htmlFor="email">Email
                            <input type="email" id="email" placeholder='Email' />
                        </label>
                        <label htmlFor="password">Password
                            <input type="password" id="password" placeholder='Password' />
                        </label>
                        <button type="submit">Login</button>
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
/* align-items:center; */
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