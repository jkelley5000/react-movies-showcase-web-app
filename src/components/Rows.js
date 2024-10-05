import React, { useState } from "react"
import movies from "../data/movies"
import { StaticImage } from "gatsby-plugin-image";
import DetailsModal from "./DetailsModal";

const genres = []
const allMovies = {
    comedy: [],
    action: [],
    animation: [],
    crime: [],
    drama: [],
    children: [],
    adventure: [],
    documentary: [],
    horror: [],
    fantasy: [],
    musical: [],
    mystery: [],
    romance: [],
    thriller: [],
    sci_fi: [],
    western: [],
    film_noir: [],
    war: []
}

movies.map(movie => {
    // generate main genres
    if (
        movie.genre.includes("|") &&
        !genres.find(genre => genre.includes(movie.genre.substring(0, movie.genre.indexOf('|'))))
    ) {
        genres.push(movie.genre.substring(0, movie.genre.indexOf('|')))
    } else if (
        !movie.genre.includes("|") &&
        !genres.find(genre => genre.includes(movie.genre))
    ) {
        genres.push(movie.genre)
    }

    // aggregate each movie into a main genre category
    genres.map(genre => {
        if (movie.genre.toLowerCase().includes(genre.toLowerCase())) {
            if (movie.genre.toLowerCase().includes('sci-fi')) {
                allMovies['sci_fi'].push(movie)
            } else if (movie.genre.toLowerCase().includes('film-noir')) {
                allMovies['film_noir'].push(movie)
            } else if (movie.genre.toLowerCase().includes('no genres listed')) {
                allMovies['drama'].push(movie)
            } else {
                allMovies[genre.toLowerCase()].push(movie)
            }
        }
    })
});

const moviesRowHeadingStyle = {
    fontSize: 23
}

const moviesRowStyle = {
    display: 'flex',
    overflow: 'hidden'
}

const movieItemStyle = {
    marginRight: 10,
    minWidth: 150,
    height: 250,
    border: 'solid 1px #fff',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

const movieItemControlsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 5
}

const infoIconStyle = {
    cursor: 'pointer'
}

let selectedMovie = {
    id: 0,
    title: '',
    type: '',
    genre: '',
    thumbnail_url: '',
    description: ''
}

const Rows = ({ selected }) => {
    const [showMovieDetails, setShowMovieDetails] = useState(false)
    const viewMovieDetails = (movie) => {
        selectedMovie = movie
        setShowMovieDetails(!showMovieDetails)
    }

    return (
        <main>
            {/* Nice */}
            {/* {Object.keys(allMovies).map(group => (
                <div key={group}>
                    <h2>{group}</h2>
                    <ul>
                        {allMovies[group].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))} */}
            <DetailsModal
                movie={selectedMovie}
                showDetailsModal={showMovieDetails}
                onCloseButtonClick={viewMovieDetails}
            />

            <h2 style={moviesRowHeadingStyle}>Comedy</h2>
            <div style={moviesRowStyle}>
                {allMovies['comedy'].map(movie => (
                    <div key={movie['id']} style={movieItemStyle}>
                        <div>
                            <p>{movie['title']}</p>
                            <img src={movie.thumbnail_url} />
                        </div>
                        <div
                            style={movieItemControlsStyle}
                            onClick={() => viewMovieDetails(movie)}
                        >
                            <StaticImage
                                src={"../images/info.svg"}
                                alt="Movie details"
                                style={infoIconStyle}
                            />
                            <StaticImage
                                src={"../images/three_dots.svg"}
                                alt="Movie actions"
                                style={infoIconStyle}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <h2 style={moviesRowHeadingStyle}>Action</h2>
            <div style={moviesRowStyle}>
                {allMovies['action'].map(movie => (
                    <div key={movie['id']} style={movieItemStyle}>
                        <div>
                            <p>{movie['title']}</p>
                            <img src={movie.thumbnail_url} />
                        </div>
                        <div style={movieItemControlsStyle}>
                            <StaticImage
                                src={"../images/info.svg"}
                                alt="Movie details"
                                style={infoIconStyle}
                            />
                            <StaticImage
                                src={"../images/three_dots.svg"}
                                alt="Movie actions"
                                style={infoIconStyle}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <h2 style={moviesRowHeadingStyle}>Animation</h2>
            <div style={moviesRowStyle}>
                {allMovies['animation'].map(movie => (
                    <div key={movie['id']} style={movieItemStyle}>
                        <div>
                            <p>{movie['title']}</p>
                            <img src={movie.thumbnail_url} />
                        </div>
                        <div style={movieItemControlsStyle}>
                            <StaticImage
                                src={"../images/info.svg"}
                                alt="Movie details"
                                style={infoIconStyle}
                            />
                            <StaticImage
                                src={"../images/three_dots.svg"}
                                alt="Movie actions"
                                style={infoIconStyle}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Rows