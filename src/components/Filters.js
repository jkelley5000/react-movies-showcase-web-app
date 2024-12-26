import React, { useState } from "react"
import { useSelector } from "react-redux"

const filtersMainStyle = {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
}

const filterListStyle = {
    border: "solid 1px #989898",
    borderRadius: 15,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 6,
    cursor: "pointer"
}

const filters = [
    {
        id: 1,
        name: "allShows",
        selected: false
    },
    {
        id: 2,
        name: "allMovies",
        selected: false
    },
    {
        id: 3,
        name: "categories",
        selected: false
    },
    {
        id: 4,
        name: "myList",
        selected: false
    }
]

const categoriesListStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 96,
    left: 188,
    width: 232,
    backgroundColor: "#fff",
    border: "solid 1px #989898",
    borderRadius: 15,
    zIndex: 1000
}

const categoryStyle = {
    color: "#000",
    cursor: "pointer",
    fontSize: 23,
    paddingLeft: 10,
}

const Filters = ({ onNewMoviesButtonClick }) => {
    const genres = useSelector(state => state.genres.data)

    const [filterActive, setFilterActive] = useState({
        allShows: false,
        allMovies: false,
        categories: false,
        myList: false
    })
    const [categoriesActive, setCategoriesActive] = useState(false)

    const transformActiveFilter = (filter) => {
        let transformedFilter = ""
        if (filter.includes("-")) {
            const index = filter.indexOf("-")
            transformedFilter = filter.substring(0, index) + filter.charAt(index + 1).toUpperCase() + filter.substring(index + 2)
        } else {
            transformedFilter = filter.toLowerCase()
        }
        return transformedFilter
    }

    const newMoviesButtonClick = (type) => {
        onFilterSelected(type)
        onNewMoviesButtonClick(type)
    }

    const onFilterSelected = (filter) => {
        let transformedFilter = transformActiveFilter(filter)
        filters.map(f => {
            if (f.name === transformedFilter) {
                setFilterActive(active => ({ ...active, [transformedFilter]: true }))
            } else {
                setFilterActive(active => ({ ...active, [f.name]: false }))
            }
        })
        if (transformedFilter === 'categories') {
            setCategoriesActive(!categoriesActive)
        }
    }

    const onCategorySelected = (category) => {
        let type = 'movies-by-genre/?genre=' + category
        newMoviesButtonClick(type)
        setCategoriesActive(false)
    }

    return (
        <main style={filtersMainStyle}>
            <div
                style={filterListStyle}
                onClick={() => newMoviesButtonClick('all-shows')}
                className={`${filterActive.allShows ? 'filter-selected-style' : ""}`}
            >
                TV Shows
            </div>
            <div
                style={filterListStyle}
                onClick={() => newMoviesButtonClick('all-movies')}
                className={`${filterActive.allMovies ? 'filter-selected-style' : ""}`}
            >
                Movies
            </div>
            <div
                style={filterListStyle}
                onClick={() => onFilterSelected('categories')}
                className={`${filterActive.categories ? 'filter-selected-style' : ""}`}
            >
                Categories
            </div>
            <div
                style={filterListStyle}
                onClick={() => onFilterSelected('my-list')}
                className={`${filterActive.myList ? 'filter-selected-style' : ""}`}
            >
                My List
            </div>

            {categoriesActive && (
                <div style={categoriesListStyle}>
                    {genres && genres.genres.map(genre => (
                        <div
                            style={categoryStyle}
                            onClick={() => onCategorySelected(genre)}
                            key={genre}
                        >
                            {genre}
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
}

export default Filters