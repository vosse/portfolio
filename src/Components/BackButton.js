import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import LeftArrow from '../assets/left-arrow.png'

class BackButton extends Component {

    handleBack = () => {
        this.props.history.goBack()
    }


    render() {
        return (
            <button onClick={this.handleBack} className='back-btn-wrapper'>
                <img className='back-btn' src={LeftArrow} alt=""/>
            </button>
        )
    }
}

export default withRouter(BackButton)