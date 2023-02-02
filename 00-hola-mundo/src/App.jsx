import React from 'react'
import { useState } from 'react'
import './App.css'
import { TwiterFollowCard } from './TwitterFollowCard.jsx'

export function App (){
   // const format = (userName) => `@${userName}`

    const [name, setName] =  useState('micha')
    return (
    <div className='App'>
    <TwiterFollowCard userName={name}>
        Michelle Jordan
    </TwiterFollowCard>   
        
     <TwiterFollowCard userName="MiguelAngel">
        Miguel Angel
    </TwiterFollowCard>
    <button onClick={()=>setName('pedromichel')}>Cambio nombre</button>
    </div>


    )
}