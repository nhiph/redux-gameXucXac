import React, { Component } from 'react';
import './GameXucXac.css';
import InFoGame from './InFoGame';
import XucXac from './XucXac';
import {connect} from 'react-redux';

class GameXucXac extends Component {
    render() {
        return (
            <div className="game">
                <div className="text-center display-4 title-game py-3">
                    GAME XÚC XẮC
                </div>
                <div className="row text-center">
                    <div className="col-5">
                        <button 
                            className="btn btn-warning px-5 py-2 btnGame"
                            onClick={() => this.props.datCuoc(true)}>
                            TÀI
                        </button>
                    </div>
                    <div className="col-2">
                        <XucXac />
                    </div>
                    <div className="col-5">
                        <button 
                            className="btn btn-warning px-5 py-2 btnGame"
                            onClick={() => this.props.datCuoc(false)}>
                            XỈU
                        </button>
                    </div>
                </div>
                <div className="InfoGame text-center">
                    <InFoGame />
                    <button 
                        className="btn btn-success mt-4 playGame"
                        onClick={() => this.props.playGame()}
                    >PLAY GAME</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (taiXiu) => {
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            dispatch(action);
        },
        playGame: () => {
            let action = {
                type: 'PLAY_GAME'
            }
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(GameXucXac);
