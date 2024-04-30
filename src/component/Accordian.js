import React, { useState } from 'react'
import Single from './Single'

const Accordian = () => {
    const [openInd, setOPenInd] = useState(1)
    const data = [
        {
            title: "home",
            body: "this is the home title gibberish"
        },
        {
            title: "about",
            body: "this is the home title gibberish"
        },
        {
            title: "contact",
            body: "this is the home title gibberish"
        }
    ]
    return (
        <div>
            {data.map((data, ind) => <Single key={ind} title={data.title} body={data.body} open={openInd === ind} setOPenInd={setOPenInd} openInd={openInd} ind={ind}/>)}
        </div>
    )
}

export default Accordian




