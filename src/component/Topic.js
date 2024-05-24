import React from 'react'
const Topic = (topic) => {
    console.log(topic)
    return (
            <div className='bg-red-300 m-2 p-4 shadow-xl rounded-md hover:bg-slate-200'>
                {topic.topic}
            </div>
    )
}

export default Topic