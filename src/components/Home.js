import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import MainViewer from './MainViewer'
import Movies from './Movies'
function Home() {
    return (
        <Container>
            <ImgSlider />
            <MainViewer />
            <Movies />
        </Container>
    )
}

const Container = styled.main`

    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    font-size: 30px;

    &:before{
        background: url("/images/images/home-background.png") center center /cover;
    no-repeat: fixed;
    position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index:-1;
    }
    `
export default Home