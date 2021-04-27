import React from 'react'
import structure from '../styles/structure.css'

export default function Structure() {

    return (
        <div className='structure'>
            <div className="elementsInCenter">
                <nav>
                    <div className="navImg"></div>
                    <p className='navText'>awesome room</p>
                </nav>

                <div className="messegeingSection"></div>
                <div className="inputSection">
                    <input type="text" className="text"/>
                    <button className="sendBtn">send</button>
                </div>
            </div>
        </div>
    )
}
