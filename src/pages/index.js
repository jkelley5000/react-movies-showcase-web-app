import * as React from "react"
import Header from "../components/Header"
import Filters from "../components/Filters"
import Spotlight from "../components/Spotlight"
import Rows from "../components/Rows"
import store from "../store"
import { Provider, useDispatch } from "react-redux"
import { updateData, resetData } from '../store/childSlice'

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
    React.useEffect(() => {
        fetch(`http://localhost:5255/all-movies-shows`)
            .then(response => response.json())
            .then(data => {
                // Set movies state to results returned from API call to get all movies and shows
                updateChildData(data)
            })
            .catch(error => console.error("Error fetching movies:", error))
    }, [])

    const getNewMoviesData = async (type) => {
        try {
            const response = await fetch(`http://localhost:5255/${type}`)
                .then(response => response.json())
                .then(data => {
                    updateChildData(data)
                })

        } catch (error) {
            console.error("Error fetching shows:", error)
        }
    }

    const dispatch = useDispatch()

    const updateChildData = (data) => {
        dispatch(updateData({ data }))
    }

    const resetChildData = () => {
        dispatch(resetData())
    }

    return (
        <main style={pageStyles}>
            <Header />
            <Filters onNewMoviesButtonClick={getNewMoviesData} />
            <Spotlight />
            <Rows selected={selected} />
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
