import React, { useEffect, useState } from 'react'
import './grid.css'

const GridSelect = ({ data = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]] }) => {
  const fltGridcnfg = data.flat(Infinity)
  const visibleGrids = fltGridcnfg.filter(ele => ele).length
  const [selectedId, setSelectedId] = useState([])
  let x = selectedId.length
  let gridContainer = document.getElementsByClassName('grid-container');
  if (gridContainer[0] && data.length > 0 && data[0].length > 0) {
    gridContainer[0].style.gridTemplateColumns = `repeat(${data[0].length}, 1fr)`;
  } else {
    console.error('Invalid data or grid container');
  }
  const clickHandler = (e) => {
    const { target } = e
    const boxInd = target.getAttribute("box-index")
    setSelectedId(prev => [...prev, boxInd])
  }

  useEffect(() => {
    let r
    let selected = selectedId
    if (x >= visibleGrids) {
      r = setInterval(() => {
        selected.pop()
        if (!selected.length) {
          clearInterval(r)
        }
        setSelectedId([...selected])
      }, 100)


    }
  }, [selectedId, gridContainer])

  return (
    <div className='grid-container' onClick={clickHandler}>
      {fltGridcnfg.map((ele, ind) =>
        <div className={`box ${ele == 0 ? "hide" : ""} ${selectedId.includes(JSON.stringify(ind)) ? "active" : ""}`}
          box-index={ind}
          box-status={ele == 1 ? "" : "hide"}
          key={ind}
        >
        </div>

      )}
    </div>
  )
}

export default GridSelect