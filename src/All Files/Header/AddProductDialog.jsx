import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AddProductDialog() {
  const [open, setOpen] = React.useState(true);
    const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  return (
    <div>
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
              id="name"
              name="product"
              label="Product"
              type="text"
              fullWidth
              variant="standard"
            />
          </form>
                <form  id="subscription-form">
     
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="Customer"
              label="Customer Name"
              type="text"
              fullWidth
              variant="standard"
            />
          </form>
                     <form  id="subscription-form">
     
            <TextField
              autoFocus
              required
              margin="dense"
              id="price"
              name="Price"
              label="Actual Price"
              type="text"
              fullWidth
              variant="standard"
            />
          </form>
                     <form  id="subscription-form">
     
            <TextField
              autoFocus
              required
              margin="dense"
              id="sold"
              name="Sold"
              label="Sold Price"
              type="text"
              fullWidth
              variant="standard"
            />
          </form>

                     <form  id="subscription-form">
     
            <TextField
              autoFocus
              required
              margin="dense"
              id="desc"
              name="Description"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
            />
          </form>



        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}>Cancel</Button>
               <Button variant="contained" >
            ADD DATA
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </div>
  )
}

export default AddProductDialog