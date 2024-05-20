import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button, Avatar, Typography, Grid, TextField, Dialog, Select, MenuItem, DialogContent, DialogActions, DialogTitle} from '@mui/material';
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { useDispatch } from "react-redux";
import { logout } from "../../store/brandSlice";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';







export default function ProfileSettings() {

  const user = useSelector(state => state.brandUser);
  const [brandName, setBrandName] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [email, setEmail] = useState('');
  const [handle, setHandle] = useState('');
  const [logo, setLogo] = useState('');
  const [newName, setNewName] = useState('');
  const [address, setAddress] = useState('');
  const [gstin, setGstin] = useState('');
  const [kycStatus, setKycStatus] = useState(false);
  const fileInputRef = useRef(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [originalPassword, setOriginalPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordDialogue, setPasswordDialogue] = useState(false);
  // const baseUrl = "http://localhost:8000/api";







  const handleSignOut = () => {
    dispatch(logout());
    navigate(`/`);
   
  };




const fetchProfile = useCallback(async () => {
  try {
    axios.post("/api/brand/settings-brand-details", {
      userId: user.brand_id,
    }).then( ress => {
      setBrandName(ress.data.brandDetails.brand_name);
      setEmail(ress.data.brandDetails.email);
      setLogo(ress.data.brandDetails.brand_logo);
      setAddress(ress.data.brandDetails.address);
      setGstin(ress.data.brandDetails.gstin);
      setBankAccount(ress.data.brandDetails.bank_account);
      setIfscCode(ress.data.brandDetails.ifsc);
      setKycStatus(ress.data.brandDetails.is_approved);

      setLoading(false);
    }).catch(e => {
      // Handle error
    });
  } catch (error) {
    console.error(error);
  }
}, [user.brand_id]);

useEffect(() => {


  if(!user.brand_id){

    navigate("/");

  }
  else if(user.brand_id){
  fetchProfile();

  }


}, [fetchProfile]);

  const openFileExplorer = () => {
    // Programmatically trigger a click event on the hidden file input
    fileInputRef.current.click();
  };


  const updateLogo = async (e) => {
    e.preventDefault();
  
    const selectedFile = e.target.files[0]; // Get the selected file
    const formData = new FormData();
    formData.append('brand_id', user.brand_id);
    formData.append('image', selectedFile);
  
    try {
        const response = await axios.post("/api/brand/update-brand-logo", formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.data.updated) {
        toast.success("Logo is updated");
        fetchProfile();
      } else {
        console.log('Logo Update error');
      }
    } catch (error) {
      console.error('Error uploading logo:', error);
    }
  };

  const handleClickAway = () => {
    //this function keeps the dialogue open, even when user clicks outside the dialogue. dont delete this function
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog
  };

  const handleDialogPasswordClose = () => {
    setPasswordDialogue(false);
  };


const updateBrandName = () => {
      axios.post("/api/brand/update-brand-name", {
        brand_id: user.brand_id,
        newBrandName: newName,
      })
      .then((ress) => {
        if (ress.data.updated) {
            toast.success("Brand Name is updated");
            fetchProfile();
        } else if (!ress.data.success) {
            toast.success("Update failed");
        }
      })
      .catch((e) => {
        // Handle error
      });
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    setIsLoading(true);


    if(!originalPassword || !newPassword){
        setIsLoading(false);
        toast.warning("Enter valid password");
      }


      else {


      await axios.post("/api/brand/change-password",
        { userId: user.brand_id, password : originalPassword, newPassword : newPassword },
        {withCredentials: true}
      )
      .then((res) => {


            if(!res.data.success){

                setIsLoading(false);
                toast.error("Password update failed. Please try again.");

            }
            else if(res.data.success){
                
                setIsLoading(false);
                setPasswordDialogue(false);
                toast.success("Password updated successfully");
                
            }

      })
      .catch((err) => {


        if (err.response && err.response.data.error === "Wrong current password") {
          toast.warning("Wrong current password");
        } 

        else if (err.response && err.response.data.error === "email, password mismatch") {
          toast.warning("Invalid email or password");
        } 
        
        else {
          toast.error("An error occurred. Please try again later.");
        }
      });

    }

    
  };



  return (
    <>

    {loading ? (<CircularProgress />) : (
    <>
    <div style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>

    <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={8}>
    <div>
      {/* 1st Line: Profile Photo */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        {logo !== "" || logo !== null ? (<Avatar src={logo} alt="Profile Avatar"  style={{height: '80px', width: '80px'}}/>):
        (<Avatar alt="Profile Avatar"  style={{height: '80px', width: '80px'}}>Brand</Avatar>)}
        
        <div style={{ marginLeft: '20px' }}>
          <Typography variant="h6">Brand logo</Typography>
        </div>
                

            <Button variant="contained" color="secondary" style={{ marginLeft: 'auto' }} onClick={openFileExplorer}>
                        Upload
                        </Button>
                        {/* Hidden file input element */}
                        <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={updateLogo}
                        />

                </div>

      {/* 2nd Line: Name */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ flex: '1' }}>
                    <Typography variant="body2" style={{ fontWeight: 'bold', marginBottom: '12px' }}>
                    Brand Name
                    </Typography>
                    <Typography variant="body1">
                    {brandName}
                    </Typography>
                </div>
              
        </div>
                <hr style={{ color: 'grey', border: 'none', height: '0.6px', backgroundColor: 'grey' }} />


      {/* 3rd Line: Email */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ flex: '1' }}>
                    <Typography variant="body2" style={{ fontWeight: 'bold', marginBottom: '12px' }}>
                    Email
                    </Typography>
                    <Typography variant="body1">
                    {email}
                    </Typography>
                </div>
              
        </div>
                <hr style={{ color: 'grey', border: 'none', height: '0.6px', backgroundColor: 'grey' }} />


  {/* 3rd Line: Kyc */}

  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ flex: '1' }}>
                    <Typography variant="body2" style={{ fontWeight: 'bold', marginBottom: '12px' }}>
                    KYC Status
                    </Typography>
                    <Typography variant="body1" color='green'>
                    {kycStatus ? 'Approved' : 'In Review'}
                    </Typography>
                </div>
              
        </div>
                <hr style={{ color: 'grey', border: 'none', height: '0.6px', backgroundColor: 'grey' }} />


      {/* 3rd Line: Gst */}

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ flex: '1' }}>
                    <Typography variant="body2" style={{ fontWeight: 'bold', marginBottom: '12px' }}>
                    GSTIN
                    </Typography>
                    <Typography variant="body1">
                    {gstin}
                    </Typography>
                </div>
              
        </div>
                <hr style={{ color: 'grey', border: 'none', height: '0.6px', backgroundColor: 'grey' }} />



                 {/* 3rd Line: Address */}

                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ flex: '1' }}>
                    <Typography variant="body2" style={{ fontWeight: 'bold', marginBottom: '12px' }}>
                    Address
                    </Typography>
                    <Typography variant="body1">
                    {address}
                    </Typography>
                </div>
              
        </div>
                <hr style={{ color: 'grey', border: 'none', height: '0.6px', backgroundColor: 'grey' }} />

                 {/* 3rd Line: Bank */}

                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ flex: '1' }}>
                    <Typography variant="body2" style={{ fontWeight: 'bold', marginBottom: '12px' }}>
                    Bank Account
                    </Typography>
                    <Typography variant="body1">
                    {bankAccount}
                    </Typography>
                </div>
              
        </div>
                <hr style={{ color: 'grey', border: 'none', height: '0.6px', backgroundColor: 'grey' }} />

                  {/* 3rd Line: ifsc */}

                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ flex: '1' }}>
                    <Typography variant="body2" style={{ fontWeight: 'bold', marginBottom: '12px' }}>
                    IFSC
                    </Typography>
                    <Typography variant="body1">
                    {ifscCode}
                    </Typography>
                </div>
              
        </div>
                <hr style={{ color: 'grey', border: 'none', height: '0.6px', backgroundColor: 'grey' }} />

              
      {/* 6th Line: Password */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ flex: '1' }}>
                    <Typography variant="body2" style={{ fontWeight: 'bold', marginBottom: '12px' }}>
                    Password
                    </Typography>
                    <Typography variant="body1">
                    **********
                    </Typography>
                </div>
                <Button variant="outlined" color="primary" onClick={()=> {setPasswordDialogue(true)}}>
                    Change Password
                </Button>
        </div>
                <hr style={{ color: 'grey', border: 'none', height: '0.6px', backgroundColor: 'grey' }} />


      {/* 5th Line: Signout Button */}
      <div style={{ textAlign: 'start', marginBottom : '120px', marginTop : '20px'}}>
        <Button variant="outlined" color="secondary" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>

      <ToastContainer autoClose={2500}/>
    </div>


{/* {name dialogue starts} */}

    {brandName && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Dialog
            open={isDialogOpen}
            onClose={handleCloseDialog}
            disableEscapeKeyDown
            keepMounted
          >
            <DialogContent>
            <TextField type='text' id="brandName" onChange={(e)=>{setNewName(e.target.value)}} margin='normal' variant='outlined' label='Enter Brand Name'></TextField>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  updateBrandName();
                  handleCloseDialog();
                }}
                color="success"
              >
                Update
              </Button>
            </DialogActions>
          </Dialog>
        </ClickAwayListener>
      )}
{/* {name dialogue ends} */}



{/* {category dialogue ends} */}
    </Grid>
    </Grid>

    </div>

    {isLoading && (
          <CircularProgress
            size={24}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -12, // Center the CircularProgress
              marginLeft: -12, // Center the CircularProgress
            }}
          />
        )}


{user && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Dialog
            open={passwordDialogue}
            onClose={handleDialogPasswordClose}
            disableEscapeKeyDown
            keepMounted
          >
            <DialogTitle>Change Password</DialogTitle>
            <DialogContent dividers>
          
            <Typography sx={{fontSize: '16px', marginTop: '5px'}} >
                Please enter current password
              </Typography>

              <TextField
                type="password"
                id="password"
                onChange={(e) => {
                  setOriginalPassword(e.target.value);
                }}
                margin="normal"
                variant="outlined"
                label="Current Password"
              />

              <Typography sx={{fontSize: '16px', marginTop: '5px'}} >
                Please enter new password
              </Typography>

              <TextField
                type="password"
                id="password"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                margin="normal"
                variant="outlined"
                label="New Password"
              />

        </DialogContent>
            <DialogActions>
              <Button onClick={()=> setPasswordDialogue(false)} color="primary">
                Cancel
              </Button>
              <Button color="success" onClick={updatePassword}>
                SUBMIT
              </Button>
            </DialogActions>
          </Dialog>
        </ClickAwayListener>
      )}
    </>
    )}
    </>
  );
}
