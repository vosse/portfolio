import React, { useEffect } from 'react'
import Typed from 'typed.js'






export const Landing = () => {


    
    useEffect( () => {
        let options = {
            strings: ['React', 'Node.js', 'JavaScript'],
            typeSpeed: 60,
            backDelay: 1500,
            smartBackspace: true,
            backSpeed: 60,
            loopCount: 2,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        }
        
        let typed = new Typed('#typed-text', options)
    }, [])

    

    return (
        <div className="container">
            <div className='title'>
                <div className="title-text">hi, my name is 
                    <div className="name-text">
                        relja jovicevic
                    </div>
                    
                </div>
                <div  className="header-text">
                <span className="grey-text">I build stuff with</span> <span id="typed-text"></span>
                </div>
            </div>
            <div className="header">
            </div>
        </div>
    )
}