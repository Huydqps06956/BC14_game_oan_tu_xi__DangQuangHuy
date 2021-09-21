import React, { Component } from 'react';
import { connect } from 'react-redux'
class Player extends Component {
    render() {
        return (
            <div className="text-center playerGame d-flex">
                <div className="theThink">
                    <img className="mt-3" width={100} height={100} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./images/player.png" alt="./images/player.png" />
                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {
                        let border = {}
                        if (item.datCuoc) {
                            border = { border: '3px solid orange' }
                        }
                        return <div className="col-4" key={index}>
                            <button onClick={() => { this.props.datCuoc(item.ma) }} style={border} className="btnItem">
                                <img src={item.hinhAnh} alt={item.hinhAnh} />
                            </button>
                        </div>
                    })}

                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.OanTuXiReducer.mangDatCuoc
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: "CHON_KEO_BUA_BAO",
                maCuoc,
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);