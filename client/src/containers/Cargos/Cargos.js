import React, { Component } from "react"

import Cargo from "../../components/Cargo/Cargo"
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner"

import { getCargos, deleteCargo } from "../../utils/CargoUtils"
import { cargosReceive, cargoDelete } from '../../actions/index'
import { connect } from 'react-redux'

class Cargos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cargos: [],
            loading: true
        }
    }

    deleteCargoHandler(id) {
        const { cargoDeleted: cargoDeletedProps } = this.props
        deleteCargo(id).then((data) => {
            if (data.message) {
                cargoDeletedProps(id)
            }
        })
    }

    componentDidMount() {
        const { cargosReceive: cargosReceiveProps } = this.props
        getCargos().then(data => {
            cargosReceiveProps(data);
            this.setState({
                loading: false
            })
        })
    }

    render() {
        console.log(this.props.cargos)
        return (
            <main>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3">
                        {
                            this.state.loading ?
                                <LoadSpinner /> :
                                this.props.cargos.map((cargo) => {
                                    return <Cargo
                                        cargo={cargo}
                                        key={cargo._id}
                                        onDelete={this.deleteCargoHandler.bind(this)} />
                                })
                        }
                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        cargos: state.cargosStorage.cargos
    };
}

export default connect(mapStateToProps, {
    cargosReceive,
    cargoDelete
})(Cargos);