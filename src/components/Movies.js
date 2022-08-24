import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h1> Recomended 4 U! </h1>
            <Content>
                <Wrap>

                    <img src="https://www.narconon-colombia.org/FURL/imagecache/cropfit@w=710/blob/images/articles/6/2/6208b9ec-1878-11ea-ab8e-42010a800357/doctor-holds-marijuana.jpg" />
                </Wrap>
                <Wrap>

                    <img src="https://www.narconon-colombia.org/FURL/imagecache/cropfit@w=710/blob/images/articles/6/2/6208b9ec-1878-11ea-ab8e-42010a800357/doctor-holds-marijuana.jpg" />
                </Wrap>
                <Wrap>

                    <img src="https://www.narconon-colombia.org/FURL/imagecache/cropfit@w=710/blob/images/articles/6/2/6208b9ec-1878-11ea-ab8e-42010a800357/doctor-holds-marijuana.jpg" />
                </Wrap>
                <Wrap>

                    <img src="https://www.narconon-colombia.org/FURL/imagecache/cropfit@w=710/blob/images/articles/6/2/6208b9ec-1878-11ea-ab8e-42010a800357/doctor-holds-marijuana.jpg" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
  
  `
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

  `
const Wrap = styled.div`
    border-radius: 15px;
    overflow: hiden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 10px; 
        
} &:hover{
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.1);
    box-shadow: 0px 10px 13px -7px #000000, 2px 36px 24px -13px rgba(0,0,0,0.9);
    transition: all 0.25s 0.17s ease-in-out, opacity 0.25s 0s ease;
    /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px; */
}

  `