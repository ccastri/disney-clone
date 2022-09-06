import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserAuth } from '../Auth'

function Header() {

    const navigate = useNavigate()
    const { user, logout, googleSignIn } = UserAuth()

    console.log(user);



    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (err) {
            console.log(err)

        }
    }
    useEffect(() => {
        if (user != null) {

            navigate('/')
        }
    }, [user]);

    const handleLogout = async () => {
        try {
            await logout()
            navigate("/")
            console.log("You're logout")
        } catch (err) {
            console.log(err);

        }

    }
    return (


        <Nav>
            <Logo src="/images/images/logo.svg " />
            {!user ? (

                <LoginContainer>

                    <Login onClick={handleGoogleSignIn}>
                        Login
                    </Login>
                </LoginContainer>
            ) : <>

                <NavMenu>
                    <a>
                        <img src="/images/images/home-icon.svg" alt="" />
                        <span>HOME</span>
                    </a>
                    <a>
                        <img src="/images/images/search-icon.svg" alt="" />
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img src="/images/images/watchlist-icon.svg" alt="" />
                        <span>WATCHILIST</span>
                    </a>
                    <a>
                        <img src="/images/images/search-icon.svg" alt="" />
                        <span>ORIGINALS</span>
                    </a>
                    <a>
                        <img src="/images/images/movie-icon.svg" alt="" />
                        <span>MOVIES</span>
                    </a>
                    <a>
                        <img src="/images/images/series-icon.svg" alt="" />
                        <span>SERIES</span>
                    </a>




                </NavMenu>
                <UserImg src="/images/images/yo.jpeg" onClick={handleLogout} />
            </>
            }


        </Nav >
    )
}

export default Header

const Nav = styled.div` 
height : 70px;
background : #090B13;
display: flex;
align-items: center;
padding: 0 40px;
overflow-x: hidden;
`

const Logo = styled.img`
    width: 150px;`

const UserImg = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;

    
    `
const LoginContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
`
const Login = styled.div`
{
border:1px solid #f9f9f9f9;
padding: 8px 16px;
border-radius: 4px;
letter-spacing:1.5px;
text-transform: uppercase ;
background-color: rgba(0, 0, 0, 0.6);
transition: all 0.2 ease 0s;
cursor: pointer;
}
&:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
}
`
const NavMenu = styled.div`
display: flex ;
flex: 1;
margin-left: 20px;
justify-content: center;

a{
    
    display: flex;
    align-items: center;
    padding: 0 12px;

    cursor: pointer;

    img{
    height: 20px;
    }
    span{
        font-size: 13px;
        letter-spacing: 1.5px;
        position: relative;
        &:after{
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity: 0;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s ;
            transform: scaleX(0);
        }
    }
    &:hover{
        span:after{
            transform: scaleX(1);
            opacity: 1;
        }
    }
}
    `