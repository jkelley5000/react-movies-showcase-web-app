import React from "react"
import movies from "../data/movies"
import MovieItem from "./Movie";
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
            <DetailsModal movie={{ "id": 1, "title": "My Cousin Vinny", "type": "tv show", "genre": "Comedy", "thumbnail_url": "http://dummyimage.com/217x.png/dddddd/000000", "description": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus." }} />
            <h2 style={moviesRowHeadingStyle}>Comedy</h2>
            <div style={moviesRowStyle}>
                {allMovies['comedy'].map(movie => (
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