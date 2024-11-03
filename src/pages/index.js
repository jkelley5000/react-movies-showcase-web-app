import * as React from "react"
import Header from "../components/Header"
import Filters from "../components/Filters"
import Spotlight from "../components/Spotlight"
import Rows from "../components/Rows"

const pageStyles = {
    color: "#fff",
    padding: 10,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    backgroundColor: "#180f1e"
}

const selected = {
    type: "all",
    genre: "all"
}

const IndexPage = () => {
    // Define initial movies state
    const [moviesData, setMoviesData] = React.useState([])
    React.useEffect(() => {
        fetch(`http://localhost:5255/all-movies-shows`)
            .then(response => response.json())
            .then(data => {
                // Set movies state to results returned from API call to get all movies and shows
                setMoviesData(data)
            })
            .catch(error => console.error("Error fetching movies:", error))
    }, [])

    return (
        <main style={pageStyles}>
            <Header />
            <Filters />
            <Spotlight />
            <Rows selected={selected} movies={moviesData} />
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
