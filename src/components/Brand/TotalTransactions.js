import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';




function TotalTransactions() {

  const [loading, setLoading] = useState(false);
  const [totalCampaigns, setTotalCampaigns] = useState('');
  const user = useSelector((state) => state.brandUser);





  function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    } else {
      return number.toString();
    }
  }




  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {

        axios.post("/api/brand/get-total-transactions", {
          userId: user.brand_id,
        }).then(ress=>{
    
            setTotalCampaigns(formatNumber(ress.data.data));
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
        <Typography sx={{ fontSize: '16px', color : '#61677A'}}>Number of Payments</Typography>

        <div style={{ display: 'flex'}}>
        {loading ? (
          <CircularProgress size={25} color="warning" />
        ) : (
          <Typography sx={{
            fontSize: '30px',
            textAlign: 'center',
            color : '#0C359E',
            fontWeight : 500
          }}>{formatNumber(totalCampaigns)}</Typography>
        )}
      </div>

    </Box>
   </>
  )
}

export default TotalTransactions