import * as React from "react"

const greetingControlsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
}

const greetingText = {
    content: "Welcome back Captain!"
}

const Header = () => {
    return (
        <main>
            <div style={greetingControlsStyle}>
                <div>
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