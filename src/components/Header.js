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

const Header = () => {
    return (
        <main>
            <div style={greetingControlsStyle}>
                <div style={greetingText.style}>
                    {greetingText.content}
                </div>
                <div>
                    Icon
                    Icon
                    Icon
                </div>
            </div>
        </main>
    )
}

export default Header