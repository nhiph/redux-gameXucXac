const stateDefault = {
    taiXiu: true, // true Tai (3-11); false Xiu (12-18)
    mangXucXac: [
        {ma: 1, hinhAnh: './images/1.png'},
        {ma: 1, hinhAnh: './images/1.png'},
        {ma: 1, hinhAnh: './images/1.png'}
    ],
    soBanThang: 0,
    tongLanChoi: 0
}

const GameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC':{
            console.log(action);
            state.taiXiu = action.taiXiu;
            return {...state};
        }
        case 'PLAY_GAME':{
            //B1: random ngau nhien xuc xac
            let mangXucXacNgauNhien = [];
            for(let i=0; i<3; i++){
                //render moi lan lap tu 1-6
                let soNgauNhien = Math.floor(Math.random()*6) + 1;
                //tao ra 1 doi tuong xuc xac tu so ngau nhien
                let xucXacNgauNhien = {ma: soNgauNhien, hinhAnh: `./images/${soNgauNhien}.png` };
                //push vao mangXuxXacNgauNHien
                mangXucXacNgauNhien.push(xucXacNgauNhien);
        
            }
            // gan state.mangXucXac = mangXucXacNgauNhien
            state.mangXucXac = mangXucXacNgauNhien;
            //xu ly tongLanChoi
            state.tongLanChoi += 1;
            //xu ly soBanThang
            let tongDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
                return tongDiem += xucXac.ma;
            },0);
            //xu ly dieu kien Win Game khi diem >11 & XIU(false) hoac diem<12 & TAI (true)
            if((tongDiem>11 && state.taiXiu) || (tongDiem<=11 && state.taiXiu===false)){
                state.soBanThang += 1;
            }
            return {...state};
        }
        default:
            return {...state};
    }
}

export default GameXucXacReducer;