import React, { useEffect, useState } from 'react'
import { Shimmer } from './Shimmer'
import MemeCard from './MemeCard'

const Home = () => {

    const [memes, setMemes] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetchData()
        window.addEventListener("scroll", scrollHandler)
        return () => document.removeEventListener("scroll", scrollHandler)
    }, [])

    const scrollHandler = () => {
        //when we reached the bottom of the page we are fetcing the data again
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
            fetchData()
        }
    }



    const fetchData = async () => {

        try {
            setLoading(true)
            const data = await fetch("https://meme-api.com/gimme/20")
            const json = await data.json()
            setMemes((memes) => [...memes, ...json.memes])
            setLoading(false)
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className="App">
            {loading ? <Shimmer /> : memes.map((meme, i) => <MemeCard meme={meme} key={i} />)}
        </div>
    )
}

export default Home