import React from "react"
import { Link } from "react-router-dom"
import { v4 as uuid } from "uuid"


const Nav = ({ colors }) => {
    return (<div className="Nav">
        {colors.map(c => <div key={uuid()}><Link key={uuid()} to={`/colors/${c.name}`}>{c.name}</Link></div>)}
    </div>
    )

}

export default Nav