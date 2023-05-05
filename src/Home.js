import React from "react"
import ColorPage from "./ColorPage"
import { Link } from "react-router-dom"
import { v4 as uuid } from "uuid"
import Nav from "./Nav"


const Home = ({ colors }) => {
    return (
        <div>
            <h1>Welcome to the color factory</h1>
            <Link to="/colors/new">Add a color</Link>
            <Nav colors={colors} />
        </div>
    )

}

export default Home