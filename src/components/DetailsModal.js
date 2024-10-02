import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const modalStyle = {
    width: 500,
    height: 500,
    background: "#000",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    position: "fixed",
    bottom: 0,
    zIndex: 1000,
    left: "50%",
    marginLeft: "-250px"
}

const overlayStyle = {
    width: "100%",
    height: "100vh",
    position: "fixed",
    zIndex: 900,
    top: 0,
    left: 0,
    opacity: .5,
    backgroundColor: "#adadad"
}

const closeIconContainerStyle = {
    position: "absolute",
    zIndex: 500,
    marginTop: 5,
    marginLeft: 455,
    cursor: "pointer",
    width: 35,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2d2d2d",
    borderRadius: "50%"
}

const closeIconStyle = {
    width: 30
}

const movieImageStyle = {
    width: "100%",
    height: 300,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
}

const movieTitleStyle = {
    fontSize: 19,
    marginLeft: 10
}

const movieGenreStyle = {
    marginLeft: 10
}

const movieDescriptionStyle = {
    marginTop: 12,
    fontSize: 17,
    marginLeft: 10,
    height: 100,
    overflow: 'hidden'
}

const DetailsModal = ({ movie }) => {
    return (
        <main>
            <div style={overlayStyle}></div>
            <div style={modalStyle}>
                <div style={closeIconContainerStyle}>
                    <StaticImage
                        src={"../images/close.svg"}
                        alt="Close modal"
                        style={closeIconStyle}
                    />
                </div>
                <StaticImage
                    src={"../images/space zombies.jpg"}
                    alt="Movie details"
                    style={movieImageStyle}
                />
                <p style={movieTitleStyle}>{movie.title}</p>
                <p style={movieGenreStyle}>{movie.genre}</p>
                <p style={movieDescriptionStyle}>{movie.description}</p>
            </div>
        </main>
    )
}

export default DetailsModal