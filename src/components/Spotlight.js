import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const spotlightStyle = {
    marginTop: 15,
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
}

const headingTypeStyle = {
    fontSize: "3em",
    position: "relative",
    zIndex: 1,
}

const spotlightTitleStyle = {
    fontSize: "6em",
    position: "relative",
    zIndex: 1,
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
    marginBottom: 10
}

const myListButtonStyle = {
    width: 200,
    height: 35,
    borderRadius: 5,
    backgroundColor: "#888",
    color: "#fff",
    fontWeight: 600,
    marginBottom: 10
}

const spotlightImageStyle = {
    height: 400,
    position: "absolute"
}

const descriptionStyle = {
    position: "relative",
    zIndex: 1,
}

const nStyle = {
    color: "red",
    fontWeight: 600,
    marginRight: 5
}

const Spotlight = () => {
    return (
        <main style={spotlightStyle}>
            <StaticImage
                src={"../images/space zombies.jpg"}
                alt="Space Zombies!"
                style={spotlightImageStyle}
            />
            <p style={headingTypeStyle}>
                <span style={nStyle}>N</span>
                Series
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