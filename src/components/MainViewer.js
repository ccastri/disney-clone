import React from 'react'
import styled from 'styled-components'

function MainViewer() {
    return (
        <Component>
            <Wrapper>
                <img src="/images/images/viewers-disney.png" />
            </Wrapper>
            <Wrapper>
                <img src="/images/images/viewers-starwars.png" />
            </Wrapper>
            <Wrapper>
                <img src="/images/images/viewers-pixar.png" />
            </Wrapper>
            <Wrapper>
                <img src="/images/images/viewers-marvel.png" />
            </Wrapper>
            <Wrapper>
                <img src="/images/images/viewers-national.png" />
            </Wrapper>
        </Component>
    )
}

export default MainViewer

const Component = styled.div`
margin-top: 30px;
display: grid;
padding: 30px 0px 25px;
grid-gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));

`
const Wrapper = styled.div`
border-radius: 10px;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: 0px 10px 13px -7px #000000, 2px 36px 24px -13px rgba(0,0,0,0.9);
transition: all 0.25s 0.17s ease-in-out, opacity 0.25s 0s ease;

img{
    width: 100%;
    height: 100%;
    object-fit:cover;
}

&:hover{
    transform: scale(1.05);
    border-color: rgba(249,240,249, 0.8);
    box-shadow: 0px 10px 13px -7px #000000, 1px 41px 37px -4px #000000;
}
`