import { useCallback, useEffect, useState } from 'react'
import Input from '../Input'

import './App.css'
function App() {
const [fromcurrency,setFromCurrency] = useState('inr')
const [tocurrency,setToCurrency] = useState('eur')
const [options,setOption] = useState({})
const [submit,setSubmit] = useState(false)
const [data,setData] = useState({})

 const handleOnSubmit=async(e)=>{
  e.preventDefault()
  setSubmit(true)
  console.log(data[tocurrency],'data from useCllback')
 }
useEffect(()=>{
  fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${fromcurrency}.json`)
  // .then((res)=>console.log(res,'res'))
  .then(res=>res.json())
  // .then(res=>console.log(res[fromcurrency],'res'))
  .then(res=>setData(res[fromcurrency]))
  // .then(res=>console.log(res,'res'))
  console.log(data)
},[fromcurrency])
 useEffect(()=>{
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
  .then(res=>res.json())
  .then(res=>setOption(res))},[]
)
  return (
    
    <div
    className='w-full h-screen flex flex-wrap justify-center items-center bg-black'
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border  border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white'>
          <div className=' flex flex-col gap-4 max-w-md mx-auto border  border-yellow-600 rounded-lg p-5 backdrop-blur-sm bg-white'>
          <Input val="from" options={options} currencyy={fromcurrency} setCurrency={setFromCurrency}/>
          <Input val="to" options={options} currencyy={tocurrency} setCurrency={setToCurrency}/>
          <button type='submit' value={submit} onClick={handleOnSubmit}>Calculate</button>
          {submit&&(
            <h1>{data[tocurrency]}</h1>
          )
        }
          
          </div>
          
        </div>
      </div>
 </div>
  )
}

export default App





