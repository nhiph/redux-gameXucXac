import React, { Component } from 'react';
import {connect} from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import GameXucXacReducer from '../reducers/GameXucXacReducer';

class XucXac extends Component {


    showXucXac = () => {
        return this.props.mangXucXac.map((xucXac, index) => {
            return <img key={index} className="mr-3 mt-4" style={{width: 50, height: 50}} src={xucXac.hinhAnh} alt={xucXac.hinhAnh}/>
        })
    }

    render() {
        return (
            <div>
                {this.showXucXac()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangXucXac: state.GameXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps, null)(XucXac); 
