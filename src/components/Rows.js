import React from "react"
import movies from "../data/movies"

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
    thriller: []
}

movies.map(movie => {
    // generate main genres
    if (!genres.find(genre => genre.includes(movie.genre.substring(0, movie.genre.indexOf('|'))))) {
        genres.push(movie.genre.substring(0, movie.genre.indexOf('|')))
    }
    // aggregate each movie into a main genre category array
    genres.map(genre => {
        if (movie.genre.toLowerCase().includes(genre.toLowerCase())) {
            allMovies[genre.toLowerCase()].push(movie)
        }
    })
});

const moviesRowStyle = {
    display: 'flex',
    overflow: 'hidden'
}

const movieItemStyle = {
    marginRight: 10,
    width: 150,
    border: 'solid 1px #fff'
}

const Rows = ({ selected }) => {
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
            <div style={moviesRowStyle}>
                {allMovies['comedy'].map(movie => (
                    <div style={movieItemStyle}>
                        <p key={movie['id']}>{movie['title']}</p>
                    </div>
                ))}
            </div>
            <div style={moviesRowStyle}>
                {allMovies['action'].map(movie => (
                    <div style={movieItemStyle}>
                        <p key={movie['id']}>{movie['title']}</p>
                    </div>
                ))}
            </div>
            <div style={moviesRowStyle}>
                {allMovies['animation'].map(movie => (
                    <div style={movieItemStyle}>
                        <p key={movie['id']}>{movie['title']}</p>
                    </div>
                ))}
            </div>

        </main>
    )
}

export default Rows