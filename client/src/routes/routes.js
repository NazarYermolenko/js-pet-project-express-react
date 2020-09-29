import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from "../components/NavBar/NavBar"
import Auth from "../containers/auth/Auth"
import Cargos from "../containers/cargos/CargosContainer/CargosContainer"
import CreateCargo from "../containers/cargos/CreateCargo/CreateCargo"

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <NavBar />
                <p>Hello World</p>
                <Route exact path="/cargos" component={Cargos} />
                <Route path="/create" component={CreateCargo} />
                <Redirect to="/cargos" />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path="/auth" component={Auth} />
                <Redirect to="/auth" />
            </Switch>
        )
    }
}