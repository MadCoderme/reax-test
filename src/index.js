import A from "../components/A.js" 
import React, { useState } from 'react'

export default function App() { 
    const [txt, setTxt] = useState('')
    
    return (
        <>
            <A label="Huhahahah" />
            <button onClick={() => {
                console.log('hello')
            }}>
                Hello
            </button> 
        </>
    )
}