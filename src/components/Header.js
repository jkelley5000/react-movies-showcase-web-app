import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const greetingControlsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
}

const greetingText = {
    content: "Welcome back Captain!",
    style: {
        fontSize: "2em",
        fontWeight: "600"
    }
}

const searchIconStyle = {
    width: 30,
    cursor: "pointer",
    marginTop: 8
}

const Header = () => {
    return (
        <main>
            <div style={greetingControlsStyle}>
                <div style={greetingText.style}>
                    {greetingText.content}
                </div>
                <div>
                    <StaticImage
                        src={"../images/search.svg"}
                        alt="Search for a movie or show"
                        style={searchIconStyle}
                    />
                </div>
            </div>
        </main>
    )
}

export default Header