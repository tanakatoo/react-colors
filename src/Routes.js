import React from "react"
import ColorPage from "./ColorPage"
import { Switch, Route } from "react-router-dom"
import { v4 as uuid } from "uuid"
import Home from "./Home"
import Form from "./Form"

const Routes = ({ colors, addData }) => {
    return (
        <Switch>
            <Route exact path="/colors"><Home colors={colors} /></Route>
            <Route exact path="/colors/new"><Form addData={addData} /></Route>
            {colors.map(c => (
                <Route key={uuid()} exact path={`/colors/${c.name}`}>
                    <ColorPage color={c} key={uuid()} />
                </Route>
            ))}
            <Route><Form addData={addData} /></Route>
        </Switch>
    )

}

export default Routes