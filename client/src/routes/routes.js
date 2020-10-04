import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from "../components/NavBar/NavBar"
import Auth from "../components/Auth/Auth"
import Cargos from "../components/Cargos/CargosContainer"
import CreateCargo from "../components/Cargos/CreateCargo"

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/cargos" component={Cargos} />
                    <Route path="/create" component={CreateCargo} />
                    <Redirect to="/cargos" />
                </Switch>
            </div>
        )
    } else {
        return (
            <div>
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Redirect to="/auth" />
                </Switch>
            </div>

        )
    }
}