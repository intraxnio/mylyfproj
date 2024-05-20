import React from 'react';
import { Grid, Card, CardContent, CardActions, Divider, List, ListItem, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Navbar from './Navbar';
import Footer from './Footer';
import image1 from '../../images/onboarding-1.svg';






export default function Onboarding() {



  return (
    <>
       <Navbar />

       <div style={{ display : 'flex', flexDirection : 'column', alignItems : 'center', background : '#E3FDFD'}}>

<Typography sx={{ fontSize : '30px', fontWeight : 500, paddingTop : 5, paddingX : 2, alignItems : 'center', textAlign : 'center', display : 'flex', flexWrap : 'wrap' }}>24hrs* Onboarding Process</Typography>
<Typography sx={{ fontSize : '18px', fontWeight : 400, paddingTop : 1, paddingX : 2, alignItems : 'center', textAlign : 'center', display : 'flex', flexWrap : 'wrap' }}>
    Get onboard as fast as a same-day delivery
</Typography>

<Grid container justifyContent="center" spacing={4} sx={{paddingX: '12px', marginBottom : '26px', marginTop : '18px'}}>

  <Grid item xs={12} sm={4} md={4}>
  <img
            className="img-fluid rounded"
            src={image1}
            priority={true}
            alt="Passion into Profession"
            
          />
  </Grid>

  <Grid item xs={12} sm={6} md={6}>
      
    <div style={{ padding : '20px'}}>

        <Typography variant="h5" sx={{marginBottom: 2, marginTop : 2, fontWeight : 500}}>Business KYC</Typography>
       <Typography >We follow RBI, GST & Payment Gateway guidelines in onboarding a business for payments & e-invoices. It would not take more than 24 Hrs (with all required documents).</Typography>

        <Typography variant="h5" sx={{marginBottom: 2, marginTop : 6, fontWeight : 500}}>Required documents</Typography>
       <Typography >1. Business Details <br />2. Proprietor/Director's PAN, AADHAAR <br />3. GSTIN <br />4. Company Bank Account (CURRENT) <br />5. Labour License/Certificate of Incorporation/UAM <br />6. Company/Business Stamp <br />7. One Cancelled Cheque
       </Typography>

        <Typography variant="h5" sx={{marginBottom: 2, marginTop : 6, fontWeight : 500}}>Accept payments online</Typography>
       <Typography >Get paid in as fast as 1 business day. Customers can click payment link and pay instantly by Credit card, Debit card, UPI, Net Banking. 
        You can accept credit cards and bank payments for as little as 1% + Gst per transaction.</Typography>
      
        <div className="col-md-4 col-12 get-started-button-credit-card mt-5" style={{ marginBottom : 40}} >
          <Link to="/login/brand" style={{textDecoration: 'none'}}>
            <button className="btn signup-btn-grad btn-g-fonts" >
              Register Now
            </button>
          </Link>
      </div>
      </div>


  </Grid>

  
  

 
</Grid>




    
</div>



<div style={{ display : 'flex', flexDirection : 'column', alignItems : 'center', background : '#8DECB4'}}>



<Grid container justifyContent="center" spacing={4} sx={{paddingX: '12px', paddingY : '32px', marginBottom : '26px', marginTop : '12px'}}>

  <Grid item xs={12} sm={6} md={4}>
    <Card variant="contained" style={{ background : '#8DECB4'}}>
      <CardContent sx={{ padding : '46px', height: '25rem'}}>
        <ReceiptLongIcon  sx={{ height : 50, width : 50, color : '#10439F'}}/>
        <Typography variant="h5" sx={{marginBottom: 3, marginTop : 2, fontWeight : 500}}>Create quick invoices</Typography>
       <Typography >With each settled invoice, your small business sees an increase in revenue. 
        Generate and send beautiful invoices to your clientele within seconds.</Typography>
      </CardContent>
      
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card variant="contained" style={{ background : '#8DECB4'}}>
      <CardContent sx={{ padding : '46px', height: '25rem'}}>
        <EventRepeatIcon  sx={{ height : 50, width : 50, color : '#10439F'}}/>
        <Typography variant="h5" sx={{marginBottom: 3, marginTop : 2, fontWeight : 500}}>Recurring billing</Typography>
       <Typography >Ensure timely payments and eliminate the need to pursue clients. Establish recurring invoices and enable automatic credit card payments for loyal customers. 
        Switch between automated and manual billing at your convenience.</Typography>
      </CardContent>
      
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card variant="contained" style={{ background : '#8DECB4'}}>
      <CardContent sx={{ padding : '46px', height: '25rem'}}>
        <ImportContactsIcon  sx={{ height : 50, width : 50, color : '#10439F'}}/>
        <Typography variant="h5" sx={{marginBottom: 3, marginTop : 2, fontWeight : 500}}>Bookkeeping made easy</Typography>
       <Typography >Billbook's accounting feature seamlessly synchronizes all your invoicing and payment data automatically.

</Typography>
      </CardContent>
      
    </Card>
  </Grid>
  

 
</Grid>

</div>




    <Footer />
    </>
  );
}