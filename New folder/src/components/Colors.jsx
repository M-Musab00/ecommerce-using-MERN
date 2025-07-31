import React, { useEffect, useState } from 'react'

export default function Colors({color}) {

    const [colors,setColor] = useState([]);

    useEffect(()=>{

        setColor(color);


    },[])

  return (
    
        <div className="flex mt-3 mb-3" >
            <div className='mr-36'>Colors: </div>
            {
            colors.map((i)=>{
            
                return(         
           
                    <div className=" ml-2 p-2 w-5 h-5 border rounded-4xl" style={{backgroundColor:i}}></div>
           
            
            );
        
            
        })

    }
        </div>
    

  )
}
