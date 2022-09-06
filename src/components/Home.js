
import styled from 'styled-components'
import ImgSlider from './ImgSlider'

import requests from '../request'
import MainViewer from './MainViewer'
import Movies from './Movies'
import Row from './Row'

// import { UserAuth } from '../Auth'


function Home() {
    // const { user} = UserAuth();


    return (
        <>
            <Container>
                <ImgSlider />
                {/* {user && */}
                {/* <> */}
                <MainViewer />
                {/* <h1>HI {user.email}</h1> */}

                <Movies fetchUrl={requests.fetchComedyMovies} />
                {/* <h1>{user.password} baretosss</h1> */}
                <Row title="Disney New" fetchUrl={requests.fetchTrending} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <Row title="Comedy New" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Romance New" fetchUrl={requests.fetchRomanceMovies} />
                <Row title="Documentaries New" fetchUrl={requests.fetchDocumantaries} />
                {/* </> */}
                {/* } */}

            </Container>
        </>
    )
}

const Container = styled.main`

    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
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
        /* overflow-y: hidden; */
    }
    `
export default Home