import React from 'react'
import './Header.css'
import { MdDelete } from "react-icons/md";

function Header() {
  return (
    <div>
      <div className="container">


  <div className="hero">
    <h1>Sales Performance Dashboard</h1>
    <input type="text" className="search-bar" placeholder="Search sales, revenue, date..."/>
  </div>

 
  <div className="stats-grid">
    <div className="card sales">
      <h3>Total Sales</h3>
      <p>10</p>
    </div>
    <div className="card revenue">
      <h3>Revenue</h3>
      <p>$880,000</p>
    </div>
    <div className="card profit">
      <h3>Total Profit</h3>
      <p>$160,000</p>
    </div>
    <div className="card extra">
      <h3>Total Cost</h3>
      <p>$720,000</p>
    </div>
  </div>


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


  <div className="summary-strip">
    <div>Total Sales: 350</div>
    <div>Total Revenue: $12,400</div>
    <div>Total Profit: $4,850</div>
  </div>


  <div className="date-section">

    <div className="date-header">12 May 2026</div>
    <div className="daily-cards">
      <div className="daily-card">
     <div className='color-black w-[150px] '>Product title</div>
      <div className='color-black'>Customer Name</div>
       <div className='color-black w-[110px] w-[110px] flex justify-center '>Product Cost</div>
       <div className='color-black w-[110px] flex justify-center'>Sold Cost</div>
         <div className='color-black w-[50px] flex justify-center'>Profit</div>
        <div>
       
        </div>
      </div>

        <div className="daily-card">
        <h4 className='w-[150px]'>IPhone 12 Pro max</h4>
        <p>Zeeshan Ali Zafar</p>
        <p className=' w-[110px] flex justify-center'>90000</p>
        <p className='w-[110px] flex justify-center'>110000</p>
          <div className='w-[50px] flex justify-center text-green-600'>$20000</div>
        <div><MdDelete /></div>
      </div>

     <div className="daily-card">
        <h4 className='w-[150px]'>IPhone 12 Pro max</h4>
        <p>Zeeshan Ali Zafar</p>
        <p className=' w-[110px] flex justify-center'>90000</p>
        <p className='w-[110px] flex justify-center'>110000</p>
          <div className='w-[50px] flex justify-center text-green-600'>$20000</div>
        <div><MdDelete /></div>
      </div>

        <div className="daily-card">
        <h4 className='w-[150px]'>IPhone 12 Pro max</h4>
        <p>Zeeshan Ali Zafar</p>
        <p className=' w-[110px] flex justify-center'>90000</p>
        <p className='w-[110px] flex justify-center'>110000</p>
          <div className='w-[50px] flex justify-center text-green-600'>$20000</div>
        <div><MdDelete /></div>
      </div>



        <div className="daily-card">
        <h4 className='w-[150px]'>IPhone 12 Pro max</h4>
        <p>Zeeshan Ali Zafar</p>
        <p className=' w-[110px] flex justify-center'>90000</p>
        <p className='w-[110px] flex justify-center'>110000</p>
          <div className='w-[50px] flex justify-center text-green-600'>$20000</div>
        <div><MdDelete /></div>
      </div>




        <div className="daily-card">
        <h4 className='w-[150px]'>IPhone 12 Pro max</h4>
        <p>Zeeshan Ali Zafar</p>
        <p className=' w-[110px] flex justify-center'>90000</p>
        <p className='w-[110px] flex justify-center'>110000</p>
          <div className='w-[50px] flex justify-center text-green-600'>$20000</div>
        <div><MdDelete /></div>
      </div>





        <div className="daily-card">
        <h4 className='w-[150px]'>IPhone 12 Pro max</h4>
        <p>Zeeshan Ali Zafar</p>
        <p className=' w-[110px] flex justify-center'>90000</p>
        <p className='w-[110px] flex justify-center'>110000</p>
          <div className='w-[50px] flex justify-center text-green-600'>$20000</div>
        <div><MdDelete /></div>
      </div>




        <div className="daily-card">
        <h4 className='w-[150px]'>IPhone 12 Pro max</h4>
        <p>Zeeshan Ali Zafar</p>
        <p className=' w-[110px] flex justify-center'>90000</p>
        <p className='w-[110px] flex justify-center'>110000</p>
          <div className='w-[50px] flex justify-center text-green-600'>$20000</div>
        <div><MdDelete /></div>
      </div>



        <div className="daily-card">
        <h4 className='w-[150px]'>IPhone 12 Pro max</h4>
        <p>Zeeshan Ali Zafar</p>
        <p className=' w-[110px] flex justify-center'>90000</p>
        <p className='w-[110px] flex justify-center'>110000</p>
       <div className='w-[50px] flex justify-center text-green-600'>$20000</div>
    
        <div><MdDelete /></div>
      </div>
    </div>
  </div>







  <div className="date-section">
    <div className="date-header">13 May 2026</div>
    <div className="daily-cards">
        <div className="daily-card">
        <h4 className='w-[150px]'>IPhone 12 Pro max</h4>
        <p>Zeeshan Ali Zafar</p>
        <p className=' w-[110px] flex justify-center'>90000</p>
        <p className='w-[110px] flex justify-center'>110000</p>
       <div className='w-[50px] flex justify-center text-green-600'>$20000</div>
    
        <div><MdDelete /></div>
      </div>

      <div className="daily-card">
        <h4 className='w-[150px]'>IPhone 12 Pro max</h4>
        <p>Zeeshan Ali Zafar</p>
        <p className=' w-[110px] flex justify-center'>90000</p>
        <p className='w-[110px] flex justify-center'>110000</p>
       <div className='w-[50px] flex justify-center text-green-600'>$20000</div>
    
        <div><MdDelete /></div>
      </div>
    </div>
  </div>




</div>
    </div>
  )
}

export default Header