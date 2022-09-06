import { useEffect, useState } from 'react'
import movieTrailer from 'movie-trailer';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import axios from '../axios';

const API_KEY = "b6b1bea07a686405967578eb7d854781"
const base_url = "https://api.themoviedb.org/3";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState({
        id: id
    });
    // console.log(id);
    const [trailerUrl, setTrailerUrl] = useState("")
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`${base_url}/movie/${id}?api_key=${API_KEY}&language=en-US`)
            // console.log(request.data.id)
            // console.log(id)
            // const idInt = parseInt(request.data.id)

            // if (id === idInt) {
            // console.log("goooooo")
            console.log(request.data.id)
            setMovie(
                request.data
            );


            // }

            return request
        }
        fetchData();
    }, [id])

    console.log(movie)


    // const handleClick = (poster) => {
    //     if (trailerUrl) {
    //         setTrailerUrl("")
    //     } else {
    //         movieTrailer(poster?.name || "")
    //             .then((url) => {
    //                 // youtube.com/watch?v=XtMThy8QKqU&t=4599s
    //                 const urlParams = new URLSearchParams(new URL(url).search)
    //                 setTrailerUrl(urlParams.get("v"));
    //             })
    //             .catch((e) => console.log(e));

    //         return poster.id
    //     }
    // }
    //     console.log(handleClick);

    // 

    // const opts = {
    //     height: "390",
    //     width: "100%",
    //     playerVars: {
    //         autoplay: 1,
    //     }
    // };
    return (



        <Container>
            <Background>

                <img src={movie.poster_path} alt={movie.original_title} />
            </Background>
            <ImageTitle>
                <img src="https://o.remove.bg/downloads/0fd2d8a4-e51b-4a7c-a7d9-e10729f24454/300-3007988_harry-potter-philosophers-stone-title-hd-png-download-removebg-preview.png" />

            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/images/play-icon-white.png" />
                    <span>Trailer</span>

                </TrailerButton>
                <AddButton>
                    <span>+</span>

                </AddButton>
                <GroupWatchButton>
                    <img src="/images/images/group-icon.png" />

                </GroupWatchButton>
            </Controls>
            <Subtitle>
                {movie.release_date} · {movie.runtime}m
            </Subtitle>
            <Description>
                {movie.overview}
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
min-height:calc(100vh-70px);
padding: 0 calc(3.5vw + 5px);

`

const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index:-1;
opacity: 0.55;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`
const ImageTitle = styled.div`
/* margin-right: 20px; */
height: 30vh;
min-height: 170px;
width: 55vw;
min-width: 200px;
margin-top:600px;
img{
    height: 100%;
    width: 100%;
    object-fit: contain;
}
`
const Controls = styled.div`
display: flex;
align-items: center;
`

const PlayButton = styled.button`
Border-radius: 4px;
font-size:15px;
display: flex ;
align-items: center;
height: 56px;
background: rgb(249, 249, 249);
border: none;
padding: 0px 24px;
margin-right: 22px;
letter-spacing: 1.8px;
cursor:pointer;
&:hover{
    background: rgb(198, 198, 198);
    
}
`
const TrailerButton = styled(PlayButton)`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
text-transform:uppercase;

`
const AddButton = styled.button`
margin-right:16px;
width: 44px;
height: 44px;
display:flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid #FFFF;
background: rgba(0, 0, 0, 0.2);
cursor: pointer;

span{
    font-size: 30px;
    color:white;
}
`
const GroupWatchButton = styled(AddButton)`
background: rbg(0, 0, 0);
`
const Subtitle = styled.div`
font-size: 15px;
margin-top:20px;
`
const Description = styled.div`
font-size: 16px;
line-height:1.4;
margin-top:16px; 
color: rbg(249, 249, 249);
max-width:500px
`