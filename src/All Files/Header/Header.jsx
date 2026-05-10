import React, { useState } from 'react'
import './Header.css'
import PropTypes from 'prop-types';
import { FaAngleDown } from "react-icons/fa";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TablePagination from '@mui/material/TablePagination';
import { MdDelete } from "react-icons/md";

import IconButton from '@mui/material/IconButton';







function Header() {
    const [page, setPage] = React.useState(4);

    const datafor = [
        {Date:"12-May-2026"},
           {Date:"13-May-2026"},
              {Date:"14-May-2026"},
                 {Date:"15-May-2026"},
                    {Date:"16-May-2026"},
                       {Date:"17-May-2026"},
                       {Date:"12-May-2026"},
           {Date:"18-May-2026"},
              {Date:"19-May-2026"},
                 {Date:"20-May-2026"},
                    {Date:"21-May-2026"},
                       {Date:"22-May-2026"}
    ]


      const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };



  const [apple , setapple]=useState(false)
  const [filter, setfilter]=useState("Apply Filter")


  const [open, setOpen] = React.useState(false);

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

   
    <div className="daily-cards">
    

   




   




     








      

    </div>
  </div>





    <TableContainer component={Paper} sx={{ maxHeight: 440 }} >
      <Table sx={{ minWidth: 650 , fontWeight: "bold"}} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow className='font-bold'>
               <TableCell sx={{ fontWeight: 'bold', fontSize:"16px" }} align='center'>Detail</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize:"16px" }} align='center'>Date</TableCell>
            <TableCell  sx={{ fontWeight: 'bold', fontSize:"16px" }} align="center">Total Sales</TableCell>
            <TableCell sx={{ fontWeight: 'bold' , fontSize:"16px"}} align="center">T.Actual Cost</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize:"16px" }} align="center">T.Sale Cost</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize:"16px" }} align="center">T.Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {datafor.map((item)=>(

            <TableRow
            
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell align='center'>

            <IconButton>

                {open===false? <FaAngleDown className='text-[18px]'/>:""}
            </IconButton>

        </TableCell>
              <TableCell align="center">{item.Date}</TableCell>
                   <TableCell align="center">Zeeshan Ali Zafar</TableCell>
              <TableCell align="center">150,000</TableCell>
              <TableCell align="center">170,000</TableCell>
              <TableCell align="center">10,000</TableCell>
            </TableRow>
))}



  <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse  timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
           
                    <TableRow >
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center">
                  
                      </TableCell>
                    </TableRow>
             
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>





      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align='center'>

            <IconButton>

                {open===false? <FaAngleDown className='text-[18px]'/>:""}
            </IconButton>

        </TableCell>
        <TableCell align='center' component="th" scope="row">
        12-May-2026
        </TableCell>
        <TableCell align="center">20</TableCell>
        <TableCell align="center">150,000</TableCell>
        <TableCell align="center">200,000</TableCell>
        <TableCell align="center">50,000</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                      <TableCell component="th" scope="row">
                
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center">
                  
                      </TableCell>
                    </TableRow>
        
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
           
  
        </TableBody>
      </Table>
    </TableContainer>

      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={3}
          rowsPerPage={5}
         page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />










</div>

    </div>

  )


 




}







export default Header







