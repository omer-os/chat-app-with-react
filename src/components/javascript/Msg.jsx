import React from 'react';


export default function Msg({name, text}) {
    return (
        <div className='msg'>
            
            <div className="name">{name} : </div>
            <div className="text">{text}</div>
        </div>
    );
}
