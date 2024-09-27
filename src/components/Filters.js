import React from "react";

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
    marginRight: 6
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