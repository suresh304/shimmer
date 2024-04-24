import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import MemeCard from './component/MemeCard';
import { Shimmer } from './component/Shimmer';

function App() {
  const [memes, setMemes] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    try {
      const data = await fetch("https://meme-api.com/gimme/20")
      const json = await data.json()
      setMemes(json.memes)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <center>
      <h1>Hello shimmer</h1>
      <div className="App">
        {loading ? <Shimmer /> : memes.map((meme,i) => <MemeCard meme={meme} key={i}/>)}
      </div>
    </center>
  );
}

export default App;
