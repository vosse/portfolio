import React from 'react'
import { Link } from 'react-router-dom'
import Pdf from '../assets/relja_jovicevic_cv.pdf'
import linkedIn from '../assets/linkedin-white.png'
import github from '../assets/github-white.png'


export const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-title">
                Get in touch
            </div>
            <div className='contact-text'>
                Whether you have a question or want to talk inbox is open
            </div>
            <div className='resume-link'>
                Get my resume
                <a className='resume' target='_blank' href={Pdf} rel="noreferrer"> here.</a>
            </div>
            <div className='lt-btn-container'>
                    <a href='mailto:relja.jovicevic@gmail.com'><button className='lt-btn'>let's talk</button></a>
            </div>
            <div className="links-container">
                <a href='https://github.com/vosse'><img className='link-icon' src={github}/></a>
                <a href='https://www.linkedin.com/in/relja-jovicevic-7a3222173/'><img className='link-icon' src={linkedIn}/></a>
            </div>
        </div>
    )
}
