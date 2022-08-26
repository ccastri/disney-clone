import movieTrailer from 'movie-trailer';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from '../axios';
import "./Row.css";

const base_url = "https://image.tmdb.org./t/p/original/"

function Row({ id, title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

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

    const handleClick = (poster) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(poster?.name || "")
                .then((url) => {
                    // youtube.com/watch?v=XtMThy8QKqU&t=4599s
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((e) => console.log(e));

            return poster.id
        }
        console.log(handleClick);

    }

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    };
    return (
        <div id={`${id}`} className='row'>
            <h2>{title}</h2>
            <div className="row__posters">

                {
                    movies.map(poster => (
                        <img
                            key={poster.id}
                            onClick={() => handleClick(poster)}
                            className={`row__poster `}
                            src={`${base_url}/${poster.backdrop_path}`}
                            alt={poster.name} />
                    )
                    )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row