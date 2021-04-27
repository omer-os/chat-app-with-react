import React, { useEffect } from 'react'
import structure from '../styles/structure.css'
import Msg from "./Msg"
import db from './firebase.config'

export default function Structure() {

    const [Text, setText] = useState('')

    const getData = async()=>{
        const res = db.ref('chat')
        res.on('value',(snapshot)=>{
          const u = snapshot.val()
          const usersList =[]
          for (let  id in u){
            usersList.push(u[id])
          }
          console.log(usersList);
      })


    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <div className='structure'>
            <div className="elementsInCenter">
                <nav>
                    <div className="navImg"></div>
                    <p className='navText'>awesome room</p>
                </nav>

                <div className="messegeingSection">
                    <Msg />
                    <Msg />
                </div>
                <div className="inputSection">
                    <input type="text" className="inputText" onChange={inputTextHandeler}/>
                    <button className="sendBtn">send</button>
                </div>
            </div>
        </div>
    )
}
