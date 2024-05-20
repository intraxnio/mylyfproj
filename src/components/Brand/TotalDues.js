import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Box, Typography, Stack } from '@mui/material';
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';




function TotalDues() {

  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState('');
  const user = useSelector((state) => state.brandUser);
//   const baseUrl = "http://localhost:8000/api";





  function formatNumber(number) {
    if (number >= 100000) {
      const lakhs = Math.floor(number / 100000);
      const remainder = number % 100000;
      const decimal = remainder >= 10000 ? "." + (remainder / 10000).toFixed(2).slice(2) : "";
      return lakhs + decimal + "L";
    } else {
      return number.toString();
    }
  }
  
  




  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {

        axios.post("/api/brand/get-total-transactions-amount-dues", {
          userId: user.brand_id,
        }).then(ress=>{
    
            setTotalAmount((ress.data.data));
            setLoading(false);

    
        }).catch(e=>{
    
        })
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
   <>
     <Box sx={{
        borderColor: '1px solid #121481',
        height: '150px',
        paddingLeft: '26px',
        paddingTop : '28px',
        borderRadius:'4px',
        borderWidth : '16px',
        background : 'white'

    }}
    > 
        <Typography sx={{ fontSize: '16px', color : '#61677A'}}>Dues Pending</Typography>

        <div style={{ display: 'flex'}}>
          
        {loading ? (
          <CircularProgress size={25} color="warning" />
        ) : (
          <Typography  sx={{
            fontSize: '30px',
            textAlign: 'center',
            color : '#0C359E',
            

          }}>
            <CurrencyRupeeIcon sx={{ fontSize: 28, color: '#0C359E', marginBottom : '4px'}} />
            <span style={{ fontWeight : 500}}>{formatNumber(totalAmount)}</span></Typography>
        )}
      </div>

    </Box>
   </>
  )
}

export default TotalDues