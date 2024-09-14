import React, { useState } from 'react'
import './barchart.css'
import chartData from '../../MockData/chartData.json'

const Barchart = () => {
    const [show,setShow] = useState(true)
    console.log(chartData)
    return (
        <div className='container'>
            <button onClick={()=>setShow(prev=>!prev)}>charts</button>
            <div className='marks'>marks</div>
            {show&&<div className='bar_chart'>
                {
                    chartData.map((data,ind) => {
                        return <Bar key={ind} data={data} />
                    })
                }
            </div>}
            <div className='persons'>persons</div>


        </div>
    )
}

export default Barchart

const Bar = ({ data }) => {
    console.log(data)
    return (
        < >
        <div className='bar' style={{ '--final-height': `${data.percentage}%` }}>
        <div className='tooltip'>{data.name}</div>
        </div>
        </>
    )
}
