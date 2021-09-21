import React, { Component } from 'react';
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">{this.props.ketQua}</div>
                <div className="display-4 text-success">Số Bàn Thắng:    <span className="text-warning">{this.props.soBanThang}</span></div>
                <div className="display-4 text-danger">Tổng Số Bàn Chơi:    <span className="text-warning">{this.props.soBanChoi}</span></div>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return {
        ketQua: state.OanTuXiReducer.ketQua,
        soBanThang: state.OanTuXiReducer.soBanThang,
        soBanChoi: state.OanTuXiReducer.soBanChoi,
    }
}
export default connect(mapStateToProps)(KetQuaTroChoi);