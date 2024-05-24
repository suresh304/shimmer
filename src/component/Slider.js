import React, { useEffect, useState } from 'react'

const Slider = () => {
    const [active,setActive] = useState(0)
    const images = [
        "https://media.istockphoto.com/id/1451079337/photo/customer-review-good-rating-concept-hand-pressing-user-and-five-star-icon-on-visual-screen.jpg?s=2048x2048&w=is&k=20&c=aR1i98EfikimG_N-7J_QfPZwzqMWIP6n_JBELdNazdE=",
        "https://media.istockphoto.com/id/1398247146/photo/document-management-concept-with-icons-on-virtual-screen-erpbusinessman-working-on-the.jpg?s=612x612&w=0&k=20&c=Mrsq0TmBTG-Qf4tCG5_JxuNXSPnw6iNnAnUf1el_2Mo=",
        "https://media.istockphoto.com/id/1779891370/photo/portrait-tablet-and-black-woman-designer-in-an-office-for-planning-strategy-or-creative.jpg?s=2048x2048&w=is&k=20&c=FhwmbpLRp522M-aIWW8DTLpZCHXyPDnwdvUmD49ecnw=",
        "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
useEffect(() => {
  let x =setInterval(()=>{
    next()
  },1000)

  return () => {
    clearInterval(x)
  }
}, [])


const next = ()=>{
    setActive(pre=>(pre+1)%images.length)
}
const prev = ()=>{
    setActive(active-1<0?images.length-1:active-1)
}

  return (
    <div>
        <center className='flex justify-center items-center my-5'>
        <button className='bg-black rounded-lg text-white' onClick={prev}>prev</button>
        {

            images.map((ele,ind)=>{
             return      <img className ={`w-[600px] h-[350px] ${active==ind?"":"hidden"}`} src={images[ind]} />

            })
        }

     {/* <img className ="w-[600px] h-[350px]" src={images[active]}/> */}
     <button className='bg-black rounded-lg text-white' onClick = {next}>next</button>
        </center>


    </div>
  )
}

export default Slider
