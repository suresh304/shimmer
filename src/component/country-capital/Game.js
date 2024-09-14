import React, { useEffect, useState } from 'react'
import './game.css'

const Game = ({ data }) => {
    const md = {
        "india": "delhi",
        "srilanka": "colombo",
        "japan": "tokyo",
        "USA": "washington",
        "canada": "ottava"
    }
    let rand = Object.entries(md).flat()
    const [selected, setSelected] = useState([])
    const [wrong, setWrong] = useState()
    const clickHandler = (e) => {
        const { target } = e
        if (selected.includes(target.innerText)) {
            setSelected([ new Set([...selected].pop())])
        }
        else
            setSelected([... new Set([...selected, target.innerText])])
    }

    return (
        <div className='container' onClick={clickHandler}>
            {console.log(selected)}
            {
                rand.map((option, i) => {

                    let isSelected = selected.includes(option)
                    let isWrong = selected.length==2&&(option==wrong || option==selected[0])
                    return <div key={option} className={`option ${isSelected && "select"} ${isWrong && "wrong"}`}>{option}</div>
                })
            }
        </div>
    )
}

export default Game