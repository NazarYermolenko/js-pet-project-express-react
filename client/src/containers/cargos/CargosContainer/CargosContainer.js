import React, { Component } from "react"

import Cargo from "../../../components/Cargo/Cargo"
import LoadSpinner from "../../../components/LoadSpinner/LoadSpinner"

import { getCargos, deleteCargo } from "../../../utils/CargoUtils"
import { cargosReceive, cargoDelete } from '../../../state/actions/cargos'
import { connect } from 'react-redux'

class Cargos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    deleteCargoHandler(id) {
        deleteCargo(id).then(() => {
            this.props.cargoDelete(id)
        })
    }

    updateCargos() {
        this.setState({
            loading: true
        })
        getCargos().then(data => {
            this.props.cargosReceive(data);
            this.setState({
                loading: false
            })
        })
    }

    componentDidMount() {
        this.updateCargos()
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.loading ?
                            <LoadSpinner /> :
                            this.props.cargos.map((cargo) => {
                                return <Cargo
                                    cargo={cargo}
                                    key={cargo._id}
                                    onDelete={this.deleteCargoHandler.bind(this)}
                                    updateHandler={this.updateCargos.bind(this)} />
                            })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cargos: state.cargosReducer.cargos
    };
}

export default connect(mapStateToProps, {
    cargosReceive,
    cargoDelete
})(Cargos);