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

const rightButtonRowSlideStyle = {
    position: "absolute",
    right: 12,
    marginTop: 100,
    padding: 10,
    cursor: "pointer",
    backgroundColor: "#888",
    borderRadius: "50%",
    width: 55,
    height: 55,
    display: "flex",
    justifyContent: "center"
}

const leftButtonRowSlideStyle = {
    position: "absolute",
    left: 12,
    marginTop: 100,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    cursor: "pointer",
    backgroundColor: "#888",
    borderRadius: "50%",
    width: 55,
    height: 55,
    display: "flex",
    justifyContent: "center"
}

const slideIconStyle = {
    // margin: 5,
    img: {
        width: 40,
        height: 40,
        objectFit: "contain !important",
        marginLeft: 8
    }
}

const leftSlideIconStyle = {
    // margin: 5,
    // marginLeft: 10,
    // img: {
    //     width: 43,
    //     height: 40,
    //     objectFit: "contain !important",
    //     marginLeft: 8
    // }
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

    const processGroupNameValue = (groupName) => {
        let properGroupName = "Comedy";
        if (groupName.includes("_")) {
            properGroupName = groupName.replace("_", " ").toUpperCase()
        } else {
            properGroupName = groupName.toUpperCase()
        }

        return properGroupName
    }

    return (
        <main>
            {Object.keys(allMovies).map(group => (
                <div key={group}>
                    <h2 style={moviesRowHeadingStyle}>{processGroupNameValue(group)}</h2>
                    <div style={leftButtonRowSlideStyle}>
                        <StaticImage
                            src={"../images/left_arrow.svg"}
                            alt={"previous movies"}
                            // style={leftSlideIconStyle}
                            objectFit="contain"
                            marginleft="5px"
                        />
                    </div>
                    <div style={rightButtonRowSlideStyle}>
                        <StaticImage
                            src={"../images/right_arrow.svg"}
                            alt={"more movies"}
                            style={slideIconStyle}
                            width={35}
                            height={35}
                        />
                    </div>
                    <div style={moviesRowStyle}>
                        {allMovies[group].map((movie, index) => (
                            <div key={movie['id'] + '-' + (Math.random(16) * (1 - 1000))} style={movieItemStyle}>
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
                                        alt={"Movie details"}
                                        style={infoIconStyle}
                                    />
                                    <StaticImage
                                        src={"../images/three_dots.svg"}
                                        alt={"Movie actions"}
                                        style={infoIconStyle}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <DetailsModal
                movie={selectedMovie}
                showDetailsModal={showMovieDetails}
                onCloseButtonClick={viewMovieDetails}
            />
        </main>
    )
}

export default Rows