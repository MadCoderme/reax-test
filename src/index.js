import A from "../components/A.js" 
import React from 'react'
import { test } from '../utils'

export default function App() {
    const [txt, setTxt] = React.useState('')
    return (
        <>
            <A label="Huhahahah" />
            <button onClick={() => console.war('hello')}>Hello</button>
        </>
    )
}