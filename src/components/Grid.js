import React, { useState } from 'react'
import { data, shop } from './Json'
import ReactPaginate from 'react-paginate'
import {AiOutlineHeart,AiOutlineSearch,AiFillFlag} from 'react-icons/ai'
import {FaArrowLeft,FaArrowRight, FaStar} from 'react-icons/fa'
import Leftsort from './Leftsort'

const Grid = () => {


  
  const [user, setUser] = useState(data.slice(0 , Infinity))
  
   
   const [pageNumber, setPageNumber] = useState(0)
    
     const usersPerPage = 10


     const pagesVisited = pageNumber *  usersPerPage

      const displayUsers = user.slice(pagesVisited, pagesVisited + usersPerPage).map((item, index)=>{
        return(
          <div className="box-2">
          <img src={item.img} alt="" />
          <div className="icon">
         <span>
         <AiOutlineHeart/>
         </span>
         <span>
         <AiFillFlag/>
         </span>
         <span>
         <AiOutlineSearch/>
         </span>
          </div>
          <div className="text-box">
          <div>
          <Star/>
          </div>
          <h3>{item.name}</h3>
          <h1>${item.price}</h1>
           <button>Add to cart </button>
 
           </div>
      </div>
        )
      })
    const pageCount = Math.ceil(user.length / usersPerPage)

    const changePage = ({selected}) =>{
            setPageNumber(selected)
    }
   return (
    <div className='shoping'>
         <div className="left">
         {

          shop.map((item)=>(
            <Leftsort
                h1={item.name}
                p={item.p}
            />

          ))
           
         }
            
         </div>

                                

         {/**here is right sectin*/}

         <div className="right">
            <div className="top">

            <div class="select-style ">
            <h4>Show :</h4>
            <select>
            <option value="javascript">1</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
          </div>

            <ReactPaginate
            previousLabel={<FaArrowLeft/>}
            nextLabel={<FaArrowRight/>}
            pageCount={pageCount}
            onPageChange={changePage}
            pageRangeDisplayed={2}
            initialPage={2}
            containerClassName={"pagination"}
            previousLinkClassName={"pre"}
            nextLinkClassName={"next"}
            disabledClassName={"paginationDisibled"}
             activeClassName={"active"}
         />
            </div>
            <div className="room">
            {displayUsers}

            </div>

        
         </div>
    </div>
  )
}

export default Grid




function Star() {
  
  const star = Array(5).fill(0)
  const [starsVal, setStarsVal] = useState(2)

  const [hoverValue, setHoverValue] = useState(undefined)

  const handleClick = value =>{
    setStarsVal(value)
  }

  const handlehoverOver = value =>{
    setHoverValue(value)
  }
  const handlehoverLeave = () =>{
    setHoverValue(undefined)
  }

  return(
    <>
    
    {
      star.map((item, index)=>(
        
        <>
        <FaStar key={index}
          size={14}

          style={{
             marginRight: 10,
             cursor:"pointer"

          }}

            color={(hoverValue || starsVal) > index ? "orange" : "gray"}
           onClick={()=>handleClick(index + 1)}
           onMouseOver={()=> handlehoverOver(index + 1)}
           onMouseLeave={handlehoverLeave}
         
        />
         
        </> 
      ))
    }
    </>
  )
 }