import React, { useState } from 'react'
import {FaPhone, FaBox, FaUser, FaSearch} from 'react-icons/fa';
import {GiShoppingBag,GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {ImCross} from 'react-icons/im'
import {Link} from 'react-router-dom'
const Navba = () => {
  return (
    <div className='navbar'>
       <div className="top">
          <div className="left">
            <p><FaPhone/> Call us free: 000-943-446-000</p>
            <p><FaBox/> Email: Hidesign@domain.com</p>
          </div>
          <div className="right">
           <p><FaUser/> my account</p>
           <p>english</p>
           <p>USD</p>
          </div>
       </div>
     {/*middle */}
      <div className="middle">
           <div className="left">
             <span><GiShoppingBag/>market</span>
           </div>
           <div className="middle-s">
           <div className="navlink">
            <PcNab/>
            <Mobile/>
           </div>
           <div className="icon">
           <span><p>0</p></span>
            <AiOutlineShoppingCart/>
           </div>

           </div>
      </div>

      {/**bottom */}
       <div className="bottom">
          
       <div className="left">
           <h1>CATEGORIES</h1>
       </div>
       <div className="right">
       <div class="select-style">
       <select>
       <option value="javascript">smartphone</option>
       <option value="html">laptop</option>
       <option value="css">farniture</option>
       <option value="php">cloth</option>
       </select>
     </div>
            <div className="input">
             <input type="text" />
              <FaSearch/>
            </div>
       </div>
      

       </div>

    </div>
  )
}

export default Navba;


function Mobile() {

  const [mobile, setMobile] = useState(false)

  const humburger =      <GiHamburgerMenu onClick={()=>setMobile(true)}/>

  const cros =     <ImCross onClick={()=>setMobile(false)}/>

     

 return(
   <div className='mobile'>

    {
      mobile ?  cros : humburger 
    }

     {
       mobile && ( <div className="box">
     
       <NavLink/>
     
     </div>)
     }
    
   </div>
 )

}

function PcNab() {
  
  return(
<div className="pc">
   <NavLink></NavLink>
</div>
  )

}



function NavLink() {

  const navdata = [
    {
      name:"home",
      link:"home",
    },
    {
      name:"features",
      link:"features",
    },
    {
      name:"shop",
      link:"shop",
    },
    {
      name:"collection",
      link:"collection",
    },
    {
      name:"about us",
      link:"about",
    },
    {
      name:"contact",
      link:"contact",
    },
  ]


   return(
 <>
 {
   navdata.map((item)=>(
     <ul className='link'>
     <li><a>{item.name}</a></li>
     </ul>
     ))
    }
    
  </>
    )
  
}