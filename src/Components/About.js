import React, { useEffect } from 'react'
import Typed from 'typed.js'
import { Link } from 'react-router-dom'

export const About = () => {

    useEffect( () => {
        let options = {
            strings: ['5', '6', '7', '8', '9', '10', '11', 'NaN'],
            typeSpeed: 60,
            backDelay: 1500,
            smartBackspace: true,
            backSpeed: 60,
            showCursor: true,
            cursorChar: '|',
            loop: true
        }
        let typed = new Typed('#abt-typed-text', options)
    }, [])

    return (
        <div className="aboutme-wrapper">
            <div className="abt-container">
                <div className="aboutme-container">
                    <div className="aboutme-title">
                        About me
                    </div>
                    <div className="aboutme-text">
                        Hi, I'm self-taught JavaScript developer based in Serbia.
                        If I'm not learning a new flavor of the month JS framework then I'm probably tinkering with Node.js or doing leetcode.
                    </div>
                    <div className="tech-wrapper">
                        <div className="tech-container">
                            <div className="tech-title">Here is what I primarily use:</div>
                            <div className="tech-stack">
                                <ul>
                                <li className="tech-item"><span className="white-item">JavaScript ( <span className="grey">ES<span id="abt-typed-text"></span></span>)</span></li>
                                <li className="tech-item"><span className="white-item">Node.js</span></li>
                                <li className="tech-item"><span className="white-item">SQL</span>/<span className="white-item">NoSQL</span></li>
                                <li className="tech-item"><span className="white-item">React</span></li>
                                <li className="tech-item"><span className="white-item">HTML</span></li>
                                <li className="tech-item">S<span className="white-item">CSS</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-pos-wrapper">
                            <Link className='contact-btn' to='/contact'>contact</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}