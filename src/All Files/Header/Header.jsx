import React, { useState } from 'react'
import './Header.css'
import { MdDelete } from "react-icons/md";

function Header() {

  const [apple , setapple]=useState(false)
  const [filter, setfilter]=useState("Apply Filter")
  return (
    <div>
      <div className="container">


  <div className="hero">
    <h1 className='font-bold'>Asad Mobile Shop</h1>
    <input type="text" className="search-bar" placeholder="Search sales, revenue, date..."/>
  </div>

 
  <div className="stats-grid  ">
    <div className="card sales w-[45%]">
      <h3 >Total Sales</h3>
      <p className='text-[10px]'>10</p>
    </div>
    <div className="card revenue w-[45%]">
      <h3>Revenue</h3>
      <p>$880,000</p>
    </div>
    <div className="card profit w-[45%]">
      <h3>Total Profit</h3>
      <p>$160,000</p>
    </div>
    <div className="card extra w-[45%]">
      <h3>Total Cost</h3>
      <p>$720,000</p>
    </div>
  </div>

  <div className='flex justify-end pl-8 LEft-sideApplyfilter'>
    
    
    <button

    onClick={()=>{setapple(apple===true?false:true),
      setfilter(filter==="Apply Filter"?"Hide Filter":"Apply Filter")


    }}
    
    className='text-blue-400 cursor-pointer underline font-bold text-[15px] mb-5 MArgin-Filter '>{filter}</button></div>
{
apple === true ? 
  <div className="filter-bar">
    <input type="date"/>
    
    <select>
      <option>Month</option>
      <option>January</option>
      <option>February</option>
      <option>March</option>
    </select>

    <select>
      <option>Year</option>
      <option>2024</option>
      <option>2025</option>
      <option>2026</option>
    </select>

    <select>
      <option>Last 7 Days</option>
      <option>Last 15 Days</option>
      <option>Last 30 Days</option>
    </select>

    <button>Apply Filters</button>
  </div>
:""
}



  <div className="date-section">

    <div className="date-header">12 May 2026</div>
    <div className="daily-cards">
    

        <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px] text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>




         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>




         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>





         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>



         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>



         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>



         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>



         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>



         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>



         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>


 

   






     








      

    </div>
  </div>







  <div className="date-section">
    <div className="date-header">13 May 2026</div>
    <div className="daily-cards">
     

       <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>
         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>
         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>
         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>
         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>
         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>
         <div className="daily-card">
          <div className='flex items-center gap-10'>
        <h4 className='Mobile-Width1 font-bold italic'>IPhone 12 Pro max</h4>
         <div className='text-orange-500 text-[15px]'> PKR 90000</div></div>
        <p className='Mobile-Width1 text-[12px] MArgincard'>Zeeshan Ali Zafar</p>
<div className='flex gap-5 MArgincard2 '>

        <div className='flex items-center Mobile-Width1'>
  <p className=''>Profit:</p>
          <div className='  text-green-600'>$20000</div>
          </div>
        <div className='flex items-center Mobile-Width1 '>
       <p className=''>Revenue:</p>
        <p className='text-black  font-bold'>110000</p>
</div>
      <div><MdDelete /></div>
</div>
  
      </div>
    </div>
  </div>




</div>
    </div>
  )
}

export default Header