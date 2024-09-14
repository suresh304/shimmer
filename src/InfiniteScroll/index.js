import React, { useEffect, useState } from 'react'
import './scroll.css'

const InfiniteScroll = () => {
    const [count, setCount] = useState(5)
    let ele = []
    for (let i = 0; i < count; i++) {
        ele.push(<div className='card'>
            {i + 1}<p>India is my country all indians are my brothers .i love my country im proud of it</p>
        </div>)

    }


    const handleScroll = (e) => {
        if (window.innerHeight + window.scrollY >= document.body.clientHeight) {
            setCount((prev) => prev + 1)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])


    return (
        <>
        <h1 className='text-3xl flex justify-center'>InfiniteScroll</h1>
            <div className='card-container'>
                {ele.length > 100 ? ele.slice(ele.length - 100, ele.length) : ele}
            </div>
        </>

    )
}

export default InfiniteScroll