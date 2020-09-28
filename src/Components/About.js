import React, { useEffect } from 'react'
import Typed from 'typed.js'


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
        }
        
        let typed = new Typed('#typed-text', options)
    }, [])



    return (
        <div className="container">
            <div className="aboutme-text">
                Hi, I'm self-taught web developer based in Serbia.
                If I'm not learning new flavor of the month JS framework then I'm probably tinkering with React or doing leetcode.
            </div>
            <div className="tech-container">
                <div className="tech-title">Here is what i primarily use:</div>
                <div className="tech-stack">
                    Javascript (ES<span id="typed-text"></span>)
                    React
                    Node.js
                    HTML
                    CSS
                </div>
            </div>
        </div>
    )
}