import React, { useState } from 'react'
import './Header.css'
import PropTypes from 'prop-types';
import { FaAngleDown } from "react-icons/fa";



import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


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
import { FaAngleUp } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';




const DashboardRow = ({ item }) => {


  const [data, setdata]=useState({})

  
  useEffect(()=>{

    axios.get('http://localhost:8000/api/form/form-subget').then(res=> {
      setsubdata(res.data.data)

    }).catch(err => err)

  },[])

    useEffect(()=>{

    axios.get('http://localhost:8000/api/form/form-get').then(res=> {
      setdata(res.data)

    }).catch(err => err)

  },[])


  console.log("Total Data",data)



  const [subdata , setsubdata]=useState([])

  console.log("Data",subdata)



  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow>
        <TableCell align='center'>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <FaAngleUp /> : <FaAngleDown className='text-[18px]' />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{item.Date}</TableCell>
        <TableCell align="center">{data.sales}</TableCell>
        <TableCell align="center" >${data.price}</TableCell>
        <TableCell align="center">${data.sold}</TableCell>
        <TableCell align="center" sx={{color:"green"}}>${data.profit}</TableCell>
      </TableRow>

      {/* Manual Transition Row */}
      <TableRow 
        sx={{ 
          visibility: open ? 'visible' : 'collapse',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
          backgroundColor: 'white',
        
          // Important: height 0 when closed
          height: open ? 'auto' : 0 
        }}
      >
      
        <TableCell sx={{fontWeight:"bold", color:"gray"}} align='center'>Product Name</TableCell>
        <TableCell sx={{fontWeight:"bold", color:"gray"}} align='center'>Customer</TableCell>
        <TableCell sx={{fontWeight:"bold", color:"gray"}} align='center'>Actual Price</TableCell>
        <TableCell sx={{fontWeight:"bold", color:"gray"}} align='center'>Sold Price</TableCell>
        <TableCell sx={{fontWeight:"bold", color:"gray"}} align='center'>Profit</TableCell>
           <TableCell sx={{fontWeight:"bold", color:"gray"}} align='center'>Description</TableCell>


      
      </TableRow>

      {subdata.map((elements)=>(
           <TableRow   sx={{ 
          visibility: open ? 'visible' : 'collapse',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
          backgroundColor: 'white',
        
          // Important: height 0 when closed
          height: open ? 'auto' : 0 
        }}>

          

        <TableCell sx={{paddingLeft:"50px", width:"200px"}}  align='start'>{elements.product}</TableCell>
        <TableCell  align='center'>{elements.customer}</TableCell>
        <TableCell  align='center'>${elements.price}</TableCell>
        <TableCell  align='center'>${elements.sold}</TableCell>
        <TableCell align='center' sx={{color:"green"}}>${elements.profit}</TableCell>
           <TableCell  align='center'>{elements.desc}</TableCell>

           </TableRow>
           
          )) }
    </>
  );
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 
function Header() {




const [data,setdata]=useState({})


      useEffect(()=>{

    axios.get('http://localhost:8000/api/form/form-get').then(res=> {
      setdata(res.data)

    }).catch(err => err)

  },[])


  console.log("Total Data",data)

  const [formdata, setformdata]=useState({
    product:"",
    customer:"",
    price:"",
    sold:"",
    desc:""
  })


  const OnChange = (e)=>{

    const {name, value}=e.target

    setformdata(prev => ({

      ...prev,
      [name]:value


    }))

    console.log(formdata)





  }



  const onSubmit = ()=>{

axios.post('http://localhost:8000/api/form/form-post',formdata).then(res => {
  console.log(res.data)
})
.catch(err => err)
    




  }










  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
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
      <p className='text-[10px]'>{data.sales}</p>
    </div>
    <div className="card revenue w-[45%]">
      <h3>Revenue</h3>
      <p>${data.sold}</p>
    </div>
    <div className="card profit w-[45%]">
      <h3>Total Profit</h3>
      <p>${data.profit}</p>
    </div>
    <div className="card extra w-[45%]">
      <h3>Total Cost</h3>
      <p>${data.price}</p>
    </div>
  </div>


<div className='flex items-center justify-center gap-4 '>

  <div>
<Button onClick={()=>{setOpen(true)



}}  variant="contained"><Link to="">Add Data</Link></Button>

{open === true?
  <React.Fragment>
     
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{fontWeight:"bold"}}>Add Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
         
          </DialogContentText>
          <form  id="subscription-form">
     
            <TextField
              autoFocus
              required
              margin="dense"
              id="product"
              name="product"
              label="Product"
              type="text"
              fullWidth
              variant="standard"
             onChange={OnChange}
             value={formdata.product}
            />
          </form>
                <form  id="subscription-form">
     
            <TextField
              autoFocus
              required
              margin="dense"
              id="customer"
              name="customer"
              label="Customer Name"
              type="text"
              fullWidth
              variant="standard"
                    onChange={OnChange}
             value={formdata.customer}
            />
          </form>
                     <form  id="subscription-form">
     
            <TextField

            onChange={OnChange}
              autoFocus
              required
              margin="dense"
              id="price"
              name="price"
              label="Actual Price"
              type="text"
              fullWidth
              variant="standard"
                    onChange={OnChange}
             value={formdata.price}
            />
          </form>
                     <form  id="subscription-form">
     
            <TextField
              autoFocus
              required
              margin="dense"
              id="sold"
              name="sold"
              label="Sold Price"
              type="text"
              fullWidth
              variant="standard"
                    onChange={OnChange}
             value={formdata.sold}
            />
          </form>

                     <form  id="subscription-form">
     
            <TextField
              autoFocus
              required
              margin="dense"
              id="desc"
              name="desc"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
                    onChange={OnChange}
             value={formdata.desc}
            />
          </form>



        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose} variant='contained' color='secondary'>Cancel</Button>
               <Button variant="contained" onClick={onSubmit} >
            ADD DATA
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>:""
}
  </div>

  <div className='flex justify-end pl-8 LEft-sideApplyfilter'>
    
    
    <button

    onClick={()=>{setapple(apple===true?false:true),
      setfilter(filter==="Apply Filter"?"Hide Filter":"Apply Filter")


    }}
    
    className='text-blue-400 cursor-pointer underline font-bold text-[15px] MArgin-Filter '>{filter}</button></div>

</div>

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
  {datafor.map((item, index) => (
    <DashboardRow key={index} item={item} />
  ))}
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







