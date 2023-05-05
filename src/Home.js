import React from "react"
import { Link } from "react-router-dom"
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