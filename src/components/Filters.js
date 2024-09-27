import React from "react";

const filtersMainStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
}

const filterListStyle = {

}

const filterOptionStyle = {

}

const Filters = () => {
    return (
        <main style={filtersMainStyle}>
            <div style={filterListStyle}>
                TV Shows
            </div>
            <div style={filterListStyle}>
                Movies
            </div>
            <div style={filterListStyle}>
                Categories
            </div>
            <div style={filterListStyle}>
                My List
            </div>
        </main>
    )
}

export default Filters