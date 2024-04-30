import React from 'react'

const Single = ({ title, body, open, setOPenInd, openInd, ind }) => <div >


    <div style={{ backgroundColor: "lightblue" }} onClick={() => open ? setOPenInd(null) : setOPenInd(ind)}>
        {title}
    </div>
    {open && <div>
        {body}
    </div>}


</div>

export default Single