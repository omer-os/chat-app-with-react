import React, { useEffect, useState } from 'react'
import structure from '../styles/structure.css'
import Msg from "./Msg"
import db from './firebase.config'
import firebase from 'firebase/app'

export default function Structure() {

    const [Text, setText] = useState('')
    const [Name, setName] = useState('user')
    const [List, setList] = useState([])

    const getData = async()=>{
        const res = db.ref('chat')
        res.on('value',(snapshot)=>{
            const u = snapshot.val()
            const usersList =[]
            for (let  id in u){
                usersList.push(u[id])
            }
            setList(...List, usersList)
        })
    }
    
    
    
    
    
    
    
    
    
    
    useEffect(()=>{
        getData()
        const nm = prompt('ENTER YOUR NAME : ')
        if (nm){
            setName(nm)
        }        

    },[])
    
    const sendData = ()=>{
        const res = db.ref('chat')
        const msg = {
            name:Name,
            text:Text
        }
        if(!msg.text==''){
            res.push(msg)
        }
    }


    const inputTextHandeler = (e)=>{
        setText(e.target.value)
    }
    const submitBtnHandeler = (e)=>{
        e.preventDefault();
        sendData()
        setText('')
    }


    return (
        <div className='structure'>
            <div className="elementsInCenter">
                <nav>
                    <div className="navImg"></div>
                    <p className='navText'>awesome room</p>
                </nav>

                
                <div className="messegeingSection">
                    <div className='messeges'>
                        {List.map(i=>{
                            return <Msg name={i.name} text={i.text} />
                        })}
                    </div>
                </div>
                
                <div className="inputSection">
                    <input type="text" className="inputText" onChange={inputTextHandeler} value={Text}/>
                    <button className="sendBtn" onClick={submitBtnHandeler}>send</button>
                </div>
            </div>
        </div>
    )
}
