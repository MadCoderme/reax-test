import React, { useState } from 'react'

export default function App() { 
    const [txt, setTxt] = useState('') 
     
    return (
        <> 
            <button onClick={() => {
                console.log('hello') 
            }}>
                Hello boy, Click me!
            </button> 
        </>
    )
}
