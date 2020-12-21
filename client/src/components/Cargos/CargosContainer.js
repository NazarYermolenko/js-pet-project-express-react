import React, { Component } from "react"

import Cargo from "./Cargo/Cargo"
import { LoadSpinner } from "../BaseComponents"

import { getCargos, deleteCargo } from "../../utils/CargoUtils"
import { cargosReceive, cargoDelete } from '../../state/actions/cargos'
import { connect } from 'react-redux'

class CargoContainer extends Component {
    constructor(props) {
        super(props)
        this.handleCargoDelete = this.handleCargoDelete.bind(this)
        this.handleCargoUpdate = this.handleCargoUpdate.bind(this)
        this.state = {
            loading: true
        }
    }

    handleCargoDelete(id) {
        this.setState({ loading: true })
        deleteCargo(id, this.props.token).then(() => {
            this.props.cargoDelete(id)
            this.setState({ loading: false })
        })

    }

    handleCargoUpdate() {
        this.setState({
            loading: true
        })
        getCargos(this.props.token).then(data => {
            this.props.cargosReceive(data);
            this.setState({
                loading: false
            })
        })
    }

    componentDidMount() {
        this.handleCargoUpdate()
    }

    render() {
        return (
            <div className="container row wrap margin_left_1_5">
                {
                    this.state.loading ?
                        <LoadSpinner /> :
                        this.props.cargos.map((cargo) => {
                            return <Cargo
                                cargo={cargo}
                                key={cargo._id}
                                onDelete={this.handleCargoDelete}
                                updateHandler={this.handleCargoUpdate} />
                        })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cargos: state.cargosReducer.cargos,
        token: state.authReducer.user_auth.user.token
    };
}

export default connect(mapStateToProps, {
    cargosReceive,
    cargoDelete
})(CargoContainer);