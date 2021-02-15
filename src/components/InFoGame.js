import React, { Component } from 'react';
import './GameXucXac.css';
import {connect} from 'react-redux';


class InFoGame extends Component {
    render() {
        let {taiXiu, soBanThang, tongLanChoi} = this.props;
        return (
            <div className="mt-3">
                <div className="text-danger text-result">BẠN CHỌN :  
                    <span className="text-success ml-2">
                        {taiXiu ? 'TÀI' : 'XỈU'}
                    </span>
                </div>
                <div className="text-danger text-result">BÀN THẮNG :  
                    <span className="text-success ml-2">
                        {soBanThang}
                    </span>
                </div>
                <div className="text-danger text-result">TỔNG SỐ LẦN CHƠI :  
                    <span className="text-success ml-2">
                        {tongLanChoi}
                    </span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        taiXiu: state.GameXucXacReducer.taiXiu,
        soBanThang: state.GameXucXacReducer.soBanThang,
        tongLanChoi: state.GameXucXacReducer.tongLanChoi
    }
}

export default connect(mapStateToProps, null)(InFoGame);
