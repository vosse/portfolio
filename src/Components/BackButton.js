import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class BackButton extends Component {

    handleBack = () => {
        this.props.history.goBack()
    }


    render() {
        return (
            <button onClick={this.handleBack} className='back-btn-wrapper'>
                <img className='back-btn' src={require("../assets/left-arrow.png")}/>
            </button>
        )
    }
}

export default withRouter(BackButton)

//<button className='back-btn' onClick={this.handleBack}>