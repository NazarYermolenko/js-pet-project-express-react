import React from "react"
import Cargo from "./Cargo"
import { getCargos, deleteCargo } from "../hooks/CargoHooks"

export default class Cargos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cargos: []
        }
    }

    deleteCargoHandler(id) {
        deleteCargo(id).then((data) => {
            if (data.message) {
                this.setState({
                    cargos: this.state.cargos.filter((cargo) => {
                        return id !== cargo._id
                    })
                })
            }
        })
    }

    componentDidMount() {
        getCargos().then(data => {
            this.setState({ cargos: data })
        })
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3">
                        {this.state.cargos.map((cargo) => {
                            return <Cargo
                                cargo={cargo}
                                key={cargo._id}
                                onDelete={this.deleteCargoHandler.bind(this)} />
                        })}
                    </div>
                </div>
            </main>
        )
    }
}