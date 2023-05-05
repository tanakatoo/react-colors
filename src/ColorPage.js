import React from "react"
import { Link } from "react-router-dom"

const ColorPage = ({ color }) => {
    return (<div style={{
        backgroundColor: color.hex,
        height: '100vh',
        width: '100%'
    }}>
        <h1>This is {color.name}.</h1>
        <h1>Isn't it beautiful?</h1>

        <Link to="/colors">Go back</Link>

    </div>)
}

export default ColorPage