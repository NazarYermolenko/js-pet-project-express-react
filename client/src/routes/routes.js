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
                <Route exact path="/cargo">
                    <Cargos />
                </Route>
                <Route path="/create">
                    <CreateCargo />
                </Route>
                <Redirect to="/cargo" />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route exact path="/auth">
                    <Auth />
                </Route>
                <Redirect to="/auth" />
            </Switch>
        )
    }
}