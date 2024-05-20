import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Box, TextField, Button, Typography, Link, Grid } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch} from 'react-redux';
import {login} from '../../store/brandSlice';
import { useSelector } from "react-redux";
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from '@mui/material/useMediaQuery';
import Cookies from 'js-cookie';





function BrandLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.brandUser);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // const baseUrl = "http://localhost:8000/api";


  
  const fetchData = async () => {
    try {

      setIsLoading(true);

      const token = Cookies.get('billsBookToken'); // Retrieve the token from cookies

      if(user.brand_id && token)
      {

        await axios.post(
          "/api/brand/check-user-token",
          { brand_id: user.brand_id, token : token },
        ).then((tokenResponse) =>{
          
          if(tokenResponse.data.tokenMatches){

            setIsLoading(false);
            navigate("/brand/dashboard");

          }

          else{
            setIsLoading(false);
          }

         
        }).catch((err)=>{
          if (err.response && err.response.status === 401) {
            // Handle 401 error (Unauthorized)
            toast.error('Session expired. Please login again.'); // Display toast notification
            // navigate('/login/brand');
          } else {
  
            toast.error('Server Error. Please login again.'); // Display toast notification
            // navigate('/login/brand');
          }
        })

      }

      else {

        setIsLoading(false);
      }

    
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle 401 error (Unauthorized)
        toast.error('Session expired. Please login again.'); // Display toast notification
        // navigate('/login/brand');
      } 
    }
  };
  

  useEffect(() => {

    fetchData();

  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email || !password){
      toast.warning("All fields are mandatory");
    }

    else{
      setIsLoading(true);

      
      await axios.post("/api/brand/brand-login",
        { email: email.toLowerCase(), password: password },
        {withCredentials: true}
      )
      .then((res) => {
          const brand_id = res.data.brandObj.brand_id;
          const brand_name = res.data.brandObj.brand_name;
          const brand_category = res.data.brandObj.brand_category;
          const userDetails = { email, brand_id, brand_name, brand_category };

           dispatch(login(userDetails));
           setIsLoading(false);
          navigate("/brand/dashboard");

      })
      .catch((err) => {

        setIsLoading(false);
        if (err.response && err.response.data.error === "All fields are mandatory") {
          toast.warning("All fields are mandatory");
        } 

        else if (err.response && err.response.data.error === "User does not exists!") {
          toast.warning("User does not exists");
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

  const signupButton = async () => {

    navigate("/signup/brand");
    

  }

  return (
    <>

{isSmallScreen ? (

<Grid item xs={12} paddingX ={2}>

<form action="#" method="post">

{isLoading ? (
 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', marginTop: '30%' }}>
 <CircularProgress color= 'success' />
</div>
) : ( <>
  <Box
    display="flex"
    flexDirection={"column"}
    maxWidth={450}
    margin="auto"
    marginTop={15}
    padding={1}
  >
    <Typography variant="h5" padding={3} textAlign="center">
      Merchant Login
    </Typography>

    <TextField
      type="email"
      id="email"
      onChange={(e) => {
        getEmail(e.target.value);
      }}
      margin="normal"
      variant="outlined"
      label="Work Email"
    ></TextField>
    <TextField
      type="password"
      id="password"
      onChange={(e) => {
        getPassword(e.target.value);
      }}
      margin="normal"
      variant="outlined"
      label="Enter Password"
    ></TextField>

      <Typography variant="body2" sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Link href="/forgotPassword" underline="none" sx={{ color: '#362FD9'}}>
      Forgot password?
      </Link>
    </Typography>

    <Button
      type="submit"
      onClick={handleSubmit}
      variant="contained"
      sx={{
        marginTop: 2,
        textTransform: "capitalize",
        fontWeight: "300",
        fontSize: 16,
        background: '#362FD9'
      }}
      size="large"
    >
      Login
    </Button>
    <ToastContainer autoClose= {2000}/>


    <Typography variant="body2" sx={{marginTop : '5px'}}>
                I agree to{" "}
                <Link href="https://billsbook.cloud/terms-conditions" target="_blank" underline="none" sx={{color: '#362FD9'}}>
                  BillsBook's Terms of Service
                </Link>
              </Typography>
    <Button
      variant="outlined"
      size="large"
      sx={{
        marginTop: 3,
        textTransform: "capitalize",
        fontWeight: "400",
        fontSize: 16,
        color: '#362FD9'
      }}
      onClick={signupButton}
    >
      Create new Account Here
    </Button>
  </Box>
  </> )}
</form>

</Grid> ): (


      <Grid container spacing="1" sx={{ height: '100vh' }}>

      <Grid item xs={4} sx={{ background: '#362FD9' }}>

              <Box
              display="flex"
              flexDirection={"column"}
              margin="auto"
              padding={1}
              
               >
                      
              <Typography textAlign="start"  sx={{
                fontSize: '46px', 
                fontWeight: '500', 
                color: 'white', 
                paddingX: '20px', 
                paddingTop: '25%',

                }}>
                Create Invoices Online.
              </Typography>

              <Typography textAlign="start"  sx={{fontSize: '22px', color: 'white', paddingX: '20px', paddingTop: '3%'}}>
              Cease the hunt for payments.
              </Typography>

              </Box>


                <Box
                  display="flex"
                  flexDirection={"column"}
                  margin="auto"
                  padding={1}
                  sx={{ marginTop : '20%'}}
                >
                    
         

                    <Typography textAlign="start"  sx={{fontSize: '22px', color: 'white', paddingX: '20px', paddingTop: '2%'}}>
                    .Create <br />
                    .Send <br />
                    .Get Paid
                      </Typography>



                </Box>




        </Grid>

        
        
        <Grid item xs={8}>


          <form action="#" method="post">

          {isLoading ? (
           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', marginTop: '30%' }}>
           <CircularProgress color= 'success' />
         </div>
         ) : ( <>
            <Box
              display="flex"
              flexDirection={"column"}
              maxWidth={450}
              margin="auto"
              marginTop={15}
              padding={1}
            >
              <Typography variant="h5" padding={3} textAlign="center">
                Merchant Login
              </Typography>

              <TextField
                type="email"
                id="email"
                onChange={(e) => {
                  getEmail(e.target.value);
                }}
                margin="normal"
                variant="outlined"
                label="Work Email"
              ></TextField>
              <TextField
                type="password"
                id="password"
                onChange={(e) => {
                  getPassword(e.target.value);
                }}
                margin="normal"
                variant="outlined"
                label="Enter Password"
              ></TextField>

                <Typography variant="body2" sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Link href="/forgotPassword" underline="none" sx={{ color: '#362FD9'}}>
                Forgot password?
                </Link>
              </Typography>

              <Button
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  marginTop: 2,
                  textTransform: "capitalize",
                  fontWeight: "300",
                  fontSize: 16,
                  background: '#362FD9'
                }}
                size="large"
              >
                Login
              </Button>
              <ToastContainer autoClose= {2000}/>


              <Typography variant="body2" sx={{marginTop : '5px'}}>
                I agree to{" "}
                <Link href="https://billsbook.cloud/terms-conditions" target="_blank" underline="none" sx={{color: '#362FD9'}}>
                  BillsBook's Terms of Service
                </Link>
              </Typography>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  marginTop: 3,
                  textTransform: "capitalize",
                  fontWeight: "400",
                  fontSize: 16,
                  color: '#362FD9'
                }}
                onClick={signupButton}
              >
                Create new Account Here
              </Button>
            </Box>
            </> )}
          </form>
        </Grid>


        

      </Grid>)}
    </>
  );
}

export default BrandLogin;
