import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const spotlightStyle = {
    margin: 15,
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
}

const headingTypeStyle = {
    fontSize: 30,
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    marginBottom: "-20px"
}

const spotlightTitleStyle = {
    fontSize: 60,
    position: "relative",
    zIndex: 1,
    marginLeft: 10
}

const buttonGroupStyle = {
    marginTop: 10,
    position: "relative",
    zIndex: 1,
}

const playButtonStyle = {
    width: 200,
    height: 35,
    borderRadius: 5,
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: 600,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10
}

const myListButtonStyle = {
    width: 200,
    height: 35,
    borderRadius: 5,
    backgroundColor: "#888",
    color: "#fff",
    fontWeight: 600,
    marginBottom: 10,
}

const spotlightImageStyle = {
    height: 400,
    position: "absolute",
    borderRadius: 15,
    marginRight: 25
}

const descriptionStyle = {
    marginLeft: 10,
    position: "relative",
    zIndex: 1,
    maxWidth: 500
}

const nStyle = {
    color: "red",
    fontWeight: 600,
    marginRight: 5,
    marginLeft: 10,
    fontSize: 50
}

const overlayStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom left, rgba(255, 255, 255, 0) 40%, rgba(0, 0, 0, 1) 100%)"
}

const Spotlight = () => {
    return (
        <main style={spotlightStyle}>
            <StaticImage
                src={"../images/space zombies.jpg"}
                alt="Space Zombies!"
                style={spotlightImageStyle}
            />
            <div style={overlayStyle}></div>
            <p style={headingTypeStyle}>
                <span style={nStyle}>N</span>
                SERIES
            </p>
            <p style={spotlightTitleStyle}>Space Zombies!</p>
            <p style={descriptionStyle}>Those space zombies are at it again. Only this time due to cuts in the space budget they can't zip around space causing mayhem like normal. They've had to...</p>
            <div style={buttonGroupStyle}>
                <button style={playButtonStyle}>Play</button>
                <button style={myListButtonStyle}>My List</button>
            </div>
        </main>
    )
}

export default Spotlight