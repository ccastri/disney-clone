// import movieTrailer from 'movie-trailer';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
// import YouTube from 'react-youtube';
import axios from '../axios';
import "./Row.css";

const base_url = "https://image.tmdb.org./t/p/original/"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    // const [trailerUrl, setTrailerUrl] = useState("")

    // Render every single time when the app is fetching data
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl])
    // console.log(movies);
    console.log(movies)


    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">

                {
                    movies.map(poster => (
                        <Wrap>

                            <Link to={`/detail/${poster.id}`}>

                                <img
                                    key={poster.id}

                                    className={`row__poster `}
                                    src={`${base_url}/${poster.backdrop_path}`}
                                    alt={poster.name} />
                            </Link>
                        </Wrap>
                    )
                    )}
            </div>
            {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
        </div>
    )
}

export default Row


const Wrap = styled.div`

width: 150px;
/* margin-right:20px ; */
height: 100px;`