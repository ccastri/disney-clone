import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/images/logo.svg " />
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

                {/* </UserImg> */}


            </NavMenu>
            <UserImg src="/images/images/yo.jpeg" />


        </Nav>
    )
}

export default Header

const Nav = styled.div` 
height : 70px;
background : #090B13;
display: flex;
align-items: center;
padding: 0 40px;
/* overflow: hidden; */
`

const Logo = styled.img`
    width: 80px;`

const UserImg = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;

    
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