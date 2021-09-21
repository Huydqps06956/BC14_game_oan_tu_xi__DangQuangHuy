import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25%{top: 100px;}
            50% {top: -50px;}
            75% {top: -100px;}
            100% {top: 0px;}
        }`;
        return (
            <div>
                <div className="text-center playerGame d-flex">
                    <style>{keyframe}</style>
                    <div className="theThink" style={{ position: `relative`, overflow: `hidden` }}>
                        <img
                            style={{
                                left: `30%`,
                                position: "absolute",
                                animation: `randomItem${Date.now()} 0.5s`,
                            }}
                            className="mt-3"
                            width={100}
                            height={100}
                            src={this.props.computer.hinhAnh}
                        />
                    </div>
                    <div className="speech-bubble"></div>
                    <img
                        style={{ width: 200, height: 200 }}
                        src="./images/playerComputer.png"
                        alt="./images/playerComputer.png"
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        computer: state.OanTuXiReducer.computer,
    };
};
export default connect(mapStateToProps)(Computer);
