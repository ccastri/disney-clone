import axios from '../axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const base_url = "https://image.tmdb.org./t/p/original/"

function Movies({ fetchUrl }) {
    // const [movies, setMovies] = useState([]);
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl])
    // console.log(movies);



    const handleClick = () => {

        console.log("hi");

    }
    return (
        <Container>
            <h1> Recomended 4 U! </h1>
            <Content>
                {
                    movies && movies.map(m =>
                        <Wrap className="larger">


                            <img
                                key={m.id}
                                onClick={handleClick}
                                src={`${base_url}/${m.backdrop_path}`} alt="" />
                        </Wrap>
                    )
                }
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
  /* height:500px; */
  
  `
const Content = styled.div`
    /* display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr)); */
    display: flex;
    overflow-x: scroll;
    padding: 20px;
    
    ::-webkit-scrollbar{
        display: none;
        
        `
const Wrap = styled.div`
        border-radius: 35px;
        overflow: hidden;
        border: 3px solid rgba(249, 249, 249, 0.1);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        display: flex;
        min-height: 150px; 
        margin: 0 20px;
   min-width: 160px;
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