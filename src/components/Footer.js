import React from 'react'
import {AiOutlineMail, AiFillFacebook} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
       <h1>SIGN UP FOR NEWS & GET 20% OFF</h1>
       <div className="box">
       <input type="text" placeholder='Send Your Email address' />
       <button>send</button>
       </div>
      </div>
    <div className="bottom">
         <div className="icon">
            <span><AiOutlineMail/> raiul58208@gmail.com</span>
            <span><a href=""><AiFillFacebook/></a>MD:rasiul Hasan Redoy</span>
         </div>

         <div className="about">
              <p>
                my name is raisul hasan redoy , i live in bangladesh .
                <br />
                i am a programmer, i am use reactjs, framer-motion, sass ,js
                nodejs, express, mongodb, i am fulltime frontend developer and 
                mern in intermediate level ........
              </p>
         </div>
    </div>
      
    </div>
  )
}

export default Footer