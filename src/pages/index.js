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
    return (
        <main style={pageStyles}>
            <Header />
            <Filters />
            <Spotlight />
            <Rows selected={selected} />
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
