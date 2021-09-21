import React, { Component } from 'react';
import Computer from './computer';
import KetQuaTroChoi from './ketquatrochoi';
import './oantuxi.css'
import Player from './player';
import { connect } from 'react-redux'
class OanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi">
                <div className="row text-center mt-5">
                    <div className="col-4 mt-3">
                        <Player />
                    </div>

                    <div className="col-4 mt-3">
                        <KetQuaTroChoi />
                        <button className="btn btn-success p-2" onClick={() => this.props.playGame()} >Play Game</button>
                    </div>

                    <div className="col-4 mt-3">
                        <Computer />
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            let count = 0
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: "RANDOM"
                })
                count++;
                if (count > 20) {
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: "END_GAME"
                    })
                }
            }, 100)

        }
    }
}
export default connect(null, mapDispatchToProps)(OanTuXi);