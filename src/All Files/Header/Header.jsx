import React, { useContext, useState } from 'react'
import './Header.css'
import PropTypes from 'prop-types';
import { FaAngleDown } from "react-icons/fa";

import instagram from './Image/instagram-logo_1080029-106-removebg-preview.png'
import Snapchat from './Image/sdjsakdaaskda-removebg-preview.png'


import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import toast, { Toaster } from 'react-hot-toast';

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
import logo from './Image/Design-Studio-2026-06-08 (1).png'











const DashboardRow = ({ item }) => {




  const href = () =>{

    window.location.href = "/";


  }


  const [data, setdata]=useState({})

  
 

  console.log("Total Data",data)



  const [subdata , setsubdata]=useState([])

  console.log("Data",subdata)



  const [open, setOpen] = React.useState(false);


const [deleterecord ,setdeleterecord] = useState({

})

const deletingdata = (ball) =>{

  
  console.log("balllllllllll",ball)

}


const Searchs = localStorage.getItem("Search")

const Search = Number(Searchs)



useEffect(()=>{



},[])


  return (
    <>
    <Toaster  style={{ borderRadius: "20px" }}/>
      <TableRow>
        <TableCell align='center' width={20
        }   sx={{
    width: 180,
    wordBreak: "break-word",
  }}>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <FaAngleUp /> : <FaAngleDown className='text-[18px]' />}
          </IconButton>
        </TableCell>
        <TableCell align="center">
          { new Date(item._id).toLocaleString("en-US",{
  day:"2-digit",
  month:"short",
  year:"numeric",

 })}
        </TableCell>
        <TableCell align="center">{item.sales}</TableCell>
        <TableCell align="center" >${item.price?.toLocaleString()}</TableCell>
        <TableCell align="center">${item.sold?.toLocaleString()}</TableCell>
        <TableCell align="center" sx={{color:"green"}}>${item.profit?.toLocaleString()}</TableCell>
         <TableCell align="center" sx={{color:"green"}}>
            <IconButton  >
          <MdDelete className='text-[20px]' />
          </IconButton>
         </TableCell>
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
           <TableCell sx={{fontWeight:"bold", color:"gray"}} align='center'>Delete</TableCell>


      
      </TableRow>

      {item.records.map((elements)=>(
           <TableRow   sx={{ 
          visibility: open ? 'visible' : 'collapse',
          opacity: open ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out',
          backgroundColor: 'white',
        
          // Important: height 0 when closed
          height: open ? 'auto' : 0 
        }}>

          

        <TableCell sx={{paddingLeft:"30px", width:"200px"}}  align='start'>
          <div>{elements.product}</div>
          


    
  {Search > 0 ? <>
 { new Date(elements.createdAt).toLocaleString("en-US",{
  day:"2-digit",
  month:"short",
  year:"2-digit",
  hour:"2-digit",
  minute:"2-digit",
  hour12:true
 })}
 </>
 :""
  }
 

         
        </TableCell>
        <TableCell  align='center'>{elements.customer}</TableCell>
        <TableCell  align='center'>${elements.price}</TableCell>
        <TableCell  align='center'>${elements.sold}</TableCell>
        <TableCell align='center' sx={{color:"green"}}>${elements.profit}</TableCell>
           <TableCell  align='center'>{elements.desc}</TableCell>
             <TableCell  align='center'>
              <Button onClick={()=>{

                console.log(elements._id)

                axios.delete("https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-subdelete",{
                  params:{
                    _id:elements._id
                  }
                })
                .then(res=> {
                  console.log(res.data)
                 toast.success("Record Delete Successfully")

                 setRefresh(prev => prev + 1);
                 href()


              localStorage.setItem("Delete",1)
                
                })
                .catch(err => err)
             

              }}>
                 <IconButton aria-label="delete">
  <MdDelete className='text-[20px]' />
      </IconButton>


              </Button>
              
              </TableCell>

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
const [datafor, setdatafor]=useState([])

      useEffect(()=>{

    axios.get('https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-get').then(res=> {
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

  


  
let obj = []
const [state, setstate] =useState()
  const OnChange = (e)=>{

    const {value}=e.target




   
    console.log(obj)

    

    obj[0]= {
      product:value
    }

    console.log(obj[0].product)

    
   

    





  }
  console.log("State",state)
   const OnChange2 = (e)=>{

    const {value}=e.target


  

    


   obj[1]= {
      "customer":value
    }

   
    console.log(obj)

   

    console.log(value)





  }
  const OnChange3 = (e)=>{

    const {value}=e.target

  

    console.log(value)
  obj[2]= {
      "price":value
    }




  }
   const OnChange4 = (e)=>{

    const {value}=e.target
 
      obj[3]= {
      "sold":value
    }

   

    console.log(value)





  }
     const OnChange5 = (e)=>{

    const {value}=e.target
   obj[4]= {
      "desc":value
    }

    console.log(obj)
  
    console.log(value)





  }

  const variable = 1

  /*
https://asad-mobile-shop-backend-delta.vercel.app

https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-datesget

*/



  const navigate = useNavigate()

  


  const onSubmit = async()=>{
 const payload = {
    product: obj[0]?.product || "",
    customer:obj[1]?.customer || "",
    price:obj[2]?.price || 0, 
    sold: obj[3]?.sold || 0,  
    desc: obj[4]?.desc || ""
  };
    

 axios.post('https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-post',payload).then(res => {
  console.log(res.data)
  toast.success("Data Added Successfully!")
  setOpen(false)


     

  





  
axios.get('https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-get').then(res=> {
      setdata(res.data)
      setOpen(false);

    }).catch(err => err)

  
    axios.get('https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-datesget')
      .then(res=> {


        setdatafor(res.data.data)

         setOpen(false);


      }).catch(err => err)
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

    


    const fetchData = async () => {
  const res = await axios.get('https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-get')
  setdata(res.data)
}


const deleted = localStorage.getItem("Delete")
useEffect(()=>{
if(deleted === "1" ){


  localStorage.setItem("Delete",2)

}
},[])




useEffect(()=>{
    axios.get('https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-datesget')
      .then(res=> {


        setdatafor(res.data.data)


      }).catch(err => err)
},[])


        console.log("New All Data",datafor)





  


      const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };



  const onspecificdays = (e)=>{

    const selectValue = e.target.value
    localStorage.setItem("days",selectValue)

    axios.get('https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-sevenget',{
      params:{
        days:selectValue
      }

    }).then(res =>{ 
      console.log("res",res.data)

       const apple = res.data.data

      if(apple && apple.length > 0){
      setdatafor(res.data.data)
      setdata(res.data.totalsevendaysdata[0])

      }
       else {
    setdata({
      price:"0",
      sold:"0",
      profit:"0",
      sales:"0",
    }); 
  
  }
      

    
    }).catch(err => err)



  }

  const onspecificdate = (e)=>{




    const datevalue = e.target.value

    localStorage.setItem("date",datevalue)


    axios.get('https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-date',{

      params:{
        date:datevalue
      }



    }).then(res =>{ 




      console.log("specific date",res.data)

      const apple = res.data.data

      if(apple && apple.length > 0){
      setdatafor(res.data?.data)
      setdata(res.data?.data[0])

      }
       else {
    setdata({
      price:"0",
      sold:"0",
      profit:"0",
      sales:"0",
    });
   
  }
      
    
    }).catch(err => err)


  }
  


 const onyearchange =  (e)=>{

      const value = e.target.value

      localStorage.setItem("Year",value)
   

      axios.get("https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-year",{
        params:{
          year:value
        }
      }).then(res =>{ console.log(res)
        const result = res.data.data

        if(result && result.length >0){

       
        setdata(res.data.data[0])
        setdatafor(res.data.data)}
        else{
         setdata({
      price:"0",
      sold:"0",
      profit:"0",
      sales:"0",
    })}
        
      }
    )
      .catch(err => err)




    }

  const [apple , setapple]=useState(false)
  const [filter, setfilter]=useState("Apply Filter")


  const [open, setOpen] = React.useState(false);

  const onmonthChange = (e)=>{
const month = e.target.value
console.log(month)
const year = localStorage.getItem("Year")
axios.get("https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-month",{

  params:{
    month:month,
    year:year
  }

}).then(res => {console.log(res)


const result = res.data.data
if(result && result.length > 0){
  setdata(res.data.data[0])
  setdatafor(res.data.data)

}

else{  setdata({
      price:"0",
      sold:"0",
      profit:"0",
      sales:"0",
    }); }



}).catch(er => err)



    }




  return (
    <div>
       <Toaster  style={{ borderRadius: "30px" }}/>
      <div className="container">


  <div className="hero">
    <h1 className='font-bold'>
      <img src={logo}/>
  </h1>
    <input type="text" className="search-bar"
     placeholder="Search product, name, sales..."

     onChange={(e)=>{
     const value = e.target.value

     localStorage.setItem("Search",1)
     if(value ===""){
      localStorage.setItem("Search","")

      axios.get('https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-datesget')
      .then(res=> {


        setdatafor(res.data.data)


      }).catch(err => err)

    

     }

      axios.get('https://asad-mobile-shop-backend-delta.vercel.app/api/form/form-search',{
        params:{
          search:value
        }
      }).then(res => {

        console.log(res.data)
        setOpen(false)
        const result = res.data.data


        
        if(result && result.length > 0){
        setdata(res.data.data[0])
        setdatafor(res.data.data)
      
      }


        else{
           setdata({
      price:"0",
      sold:"0",
      profit:"0",
      sales:"0",
    }); 


     




        }

      }).catch(err => err)
    

     }}
     
     
     />
  </div>

 
  <div className="stats-grid  ">
    <div className="card sales w-[45%]">
      <h3 >Total Sales</h3>
      <p className='text-[10px]'>{data.sales?.toLocaleString()}</p>
    </div>
    <div className="card revenue w-[45%]">
      <h3>Revenue</h3>
      <p>${data.sold?.toLocaleString()}</p>
    </div>
    <div className="card profit w-[45%]">
      <h3>Total Profit</h3>
      <p>${data.profit?.toLocaleString()}</p>
    </div>
    <div className="card extra w-[45%]">
      <h3>Total Cost</h3>
      <p>${data.price?.toLocaleString()}</p>
    </div>
  </div>


<div className='flex items-center justify-center gap-4 '>

  <div>
<Button onClick={()=>{setOpen(true)



}}  variant="contained"><Link to="">Add Data</Link></Button>


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
      
            />
          </form>
                <form  id="subscription-form">
     
            <TextField
              
              required
              margin="dense"
              id="customer"
              name="customer"
              label="Customer Name"
              type="text"
              fullWidth
              variant="standard"
                     onChange={OnChange2}
                   
            />
          </form>
                     <form  id="subscription-form">
     
            <TextField

    
           
              required
              margin="dense"
              id="price"
              name="price"
              label="Actual Price"
              type="text"
              fullWidth
              variant="standard"
                          onChange={OnChange3}
      
            />
          </form>
                     <form  id="subscription-form">
     
            <TextField
         
              required
              margin="dense"
              id="sold"
              name="sold"
              label="Sold Price"
              type="text"
              fullWidth
              variant="standard"
                      onChange={OnChange4}
               
            />
          </form>

                     <form  id="subscription-form">
     
            <TextField
           
              required
              margin="dense"
              id="desc"
              name="desc"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
               onChange={OnChange5}
               
                   
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
    </React.Fragment>
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
    <input placeholder='date' type="date" onChange={onspecificdate}/>
    
    <select onChange={onmonthChange}>
      <option>Month</option>
<option value="0">January</option>
<option value="1">February</option>
<option value="2">March</option>
<option value="3">April</option>
<option value="4">May</option>
<option value="5">June</option>
<option value="6">July</option>
<option value="7">August</option>
<option value="8">September</option>
<option value="9">October</option>
<option value="10">November</option>
<option value="11">December</option>

    </select>

    <select onChange={onyearchange}>
      <option>Year</option>
      <option value="2024">2024</option>
      <option value="2025">2025</option>
      <option value="2026">2026</option>
       <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2027">2029</option>
        <option value="2028">2030</option>
                <option value="2027">2031</option>
        <option value="2028">2032</option>
              <option value="2027">2033</option>
        <option value="2028">2034</option>
           <option value="2027">2035</option>
    </select>

    <select onChange={onspecificdays} >
          <option  >Last Days</option>
      <option  value={7} >Last 7 Days</option>
      <option value={15} >Last 15 Days</option>
      <option value={30} >Last 30 Days</option>
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
      <Table sx={{ minWidth: 650 , fontWeight: "bold"}} aria-label="simple table"  stickyHeader 
      
     >
        <TableHead>
          <TableRow className='font-bold'>
               <TableCell sx={{ fontWeight: 'bold', fontSize:"16px" }} align='center'>Detail</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize:"16px" }} align='center'>Date</TableCell>
            <TableCell  sx={{ fontWeight: 'bold', fontSize:"16px" }} align="center">Total Sales</TableCell>
            <TableCell sx={{ fontWeight: 'bold' , fontSize:"16px"}} align="center">T.Actual Cost</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize:"16px" }} align="center">T.Sale</TableCell>
            <TableCell sx={{ fontWeight: 'bold', fontSize:"16px" }} align="center">T.Profit</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', fontSize:"16px" }} align="center">Delete</TableCell>
          </TableRow>
        </TableHead>


       <TableBody>
    
  {datafor?.map((item, index) => (
    <DashboardRow key={index} item={item} fetchData={fetchData}  variable={variable} />
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



<div className='Footer-Margin gap-1 jusce'>
  <div className='flex items-center justify-center '>
     <div> <Link to="https://www.facebook.com/itx.asad.khan.lodhi"> <img className='w-[23px] h-[23px] ' src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original' />
 </Link>  
 
 </div> 
 <Link to="https://www.instagram.com/itx_asad001"><img className='w-[23px] h-[23px]  ml-2 MArgin-left-insta' src={instagram} />
    
    </Link>
    <Link to="https://www.linkedin.com/in/asad-khan-lodhi-9b6523282"> <img className='w-[30px] h-[30px] ' src='https://static.vecteezy.com/system/resources/thumbnails/023/986/970/small/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png' />
    </Link>
    <img className='w-[35px] h-[38px] Marginrigght ' src={Snapchat} />
</div>
     </div>









</div>

    </div>

  )


 




}







export default Header







