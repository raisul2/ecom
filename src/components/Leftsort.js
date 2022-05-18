import React from 'react'

const Leftsort = ({h1,p}) => {

    
    

  return (
    <div className='shop'>
        <h1>{h1}</h1>
        {
            p.map((item)=>(

                <p>{item.pname}</p>
            ))
        }
    </div>
  )
}

export default Leftsort