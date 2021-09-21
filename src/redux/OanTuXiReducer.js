const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './images/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './images/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './images/bao.png', datCuoc: false },
    ],
    ketQua: "I'm Iron Man, I Love You 3000",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './images/keo.png', datCuoc: true }
}

const OanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHON_KEO_BUA_BAO": {
            let mangCuocUpdate = [...state.mangDatCuoc]
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangCuocUpdate
            return { ...state }
        }
        case "RANDOM": {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]
            state.computer = quanCuocNgauNhien
            return { ...state }
        }
        case "END_GAME": {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Draw !!!'
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Lose !!!'
                    } else {
                        state.soBanThang++;
                        state.ketQua = "I'am Iron Man, I Love You 3000 !!!"
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'bua') {
                        state.ketQua = 'Draw !!!'
                    } else if (computer.ma === 'bao') {
                        state.ketQua = 'Lose !!!'
                    } else {
                        state.soBanThang++;
                        state.ketQua = "I'am Iron Man, I Love You 3000 !!!"
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'bao') {
                        state.ketQua = 'Draw !!!'
                    } else if (computer.ma === 'keo') {
                        state.ketQua = 'Lose !!!'
                    } else {
                        state.soBanThang++;
                        state.ketQua = "I'am Iron Man, I Love You 3000"
                    }
                    break;
                default: state.soBanThang++; state.ketQua = "I'am Iron Man, I Love You 3000 !!!";
            }
            state.soBanChoi++
            return { ...state }
        }
        default: return { ...state }
    }
}
export default OanTuXiReducer;