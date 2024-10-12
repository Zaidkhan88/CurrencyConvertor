import React, { useState } from 'react'
const Input = ({val,options,currencyy,setCurrency}) => {
  
  return (
    <div className='border p-5 border-purple-800 rounded-md text-xs'>
      <div className='w-1/2 flex'>
      <p className='text-xs'>{val}</p>
      <select value={currencyy} onChange={e=>setCurrency(e.target.value)} >
      {Object.keys(options).map((currency)=>(
        <option key={currency}  value={currency} >
        {currency}
      
      </option>
      ))}
      </select>
      

      </div>
      

      
    </div>
  )
}

export default Input
