import React, { useEffect, useState} from "react";
import { Grid, Typography, Box } from "@mui/material";
import TotalTransactions from "./TotalTransactions";
import TotalTransactionsAmount from "./TotalTransactionAmount";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import TotalDues from "./TotalDues";
import PendingPayments from "./PendingPayments";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';








function BrandMainScreen() {



  const user = useSelector(state => state.brandUser);
  const [ balance, setBalance] = useState('');
  const [ authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const baseUrl = "http://localhost:8000/api";


  function formatNumber(number) {
    return number.toFixed(2); // Display balance with two digits after decimal
  }


  const fetchData = async () => {
    try {

      const token = Cookies.get('billsBookToken'); // Retrieve the token from cookies

      if(user.brand_id && token){

        await axios.post("/api/brand/get-account-balance",
          { brand_id: user.brand_id },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        ).then((fetchBalance) =>{
          setBalance(fetchBalance.data.balance);
          setAuthorized(true);
          setLoading(false);
  
  
        }).catch((err)=>{
          if (err.response && err.response.status === 401) {
            // Handle 401 error (Unauthorized)
            setAuthorized(false);
            toast.error('Session expired. Please login again.'); // Display toast notification
            setTimeout(() => {
              navigate('/login/brand');
                
              }, 2000);
          } else {
  
            toast.error('Server Error. Please login again.'); // Display toast notification
            navigate('/login/brand');
          }
        })

      }

      else{
        setLoading(false);
        toast.error('Session expired. Please login again.'); // Display toast notification
            setTimeout(() => {
              navigate('/login/brand');
                
              }, 2000);


      }
  
     

    
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Handle 401 error (Unauthorized)
        console.log('check-3');
        toast.error('Session expired. Please login again.'); // Display toast notification
        // navigate('/login/brand');
      } 
    }
  };

  useEffect(() => {

    fetchData();

  }, []);

  return (
    <>


{loading ? (<CircularProgress />) : (<>

        
<Box 
sx={{
      borderColor: '1px solid #121481',
      paddingLeft: '26px',
      paddingY : '12px',
      borderWidth : '16px',
      background : 'white',
      display : 'flex',
      marginBottom : '12px'


  }}
  > 
      <Typography sx={{ fontSize: '18px', color : '#61677A'}}>Balance:&nbsp;</Typography>
      <CurrencyRupeeIcon sx={{ fontSize: 20, color: '#0C359E', marginTop : '3px'}} />


      <div style={{ display: 'flex'}}>
        
      {loading ? (
        <CircularProgress size={25} color="warning" />
      ) : (
        <Typography  sx={{
          fontSize: '18px',
          textAlign: 'center',
          color : '#0C359E',
          

        }}>
          <span style={{ fontWeight : 500}}>{formatNumber(balance)}</span></Typography>
      )}
    </div>

  </Box>
        
     

  </>)}


    {authorized && (
      <>
       <Grid
       container
       direction="row"
       alignItems="center"
       justifyContent = "center"
       spacing={1}
       marginBottom={15}
     >
       <Grid
         item
         xs={12}
         sm={12}
         md={3}
         spacing={0}
         direction="column"
         alignItems="center"
         justifyContent="center"
       >
         <TotalTransactionsAmount />
       </Grid>

       <Grid
         item
         xs={12}
         sm={12}
         md={3}
         spacing={0}
         direction="column"
         alignItems="center"
         justifyContent="center"
       >
       <TotalTransactions />
       </Grid>

       <Grid
         item
         xs={12}
         sm={12}
         md={3}
         spacing={0}
         direction="column"
         alignItems="center"
         justifyContent="center"
       >
         <TotalDues />
       </Grid>

       <Grid
         item
         xs={12}
         sm={12}
         md={3}
         spacing={0}
         direction="column"
         alignItems="center"
         justifyContent="center"
       >
         <PendingPayments />
       </Grid>


       </Grid>


      </>
     
    )}
   
  
  <ToastContainer autoClose= {2000}/>    

    </>
  );
}

export default BrandMainScreen;
