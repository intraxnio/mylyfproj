import React from 'react';
import { Grid, Card, CardContent, CardActions, Divider, List, ListItem, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import Navbar from './Navbar';
import Footer from './Footer';
import image1 from '../../images/invoicing-1.svg';
import chase from '../../images/chase.svg';






export default function Invoicing() {



  return (
    <>
       <Navbar />

       <div className="container mx-auto row">
        <div className="container col-md-8 col-lg-8">
          <div className="row txt-1 megaRes">
            #chase
          </div>

          <h1 className="row txt-2 mt-1 me-2" >
          Stop chasing clients <br />for payments.
            
          </h1>

        
        </div>
        <div className="col-md-4 col-lg-4 img-1">
          <img
            className="img-fluid rounded"
            src={chase}
            priority={true}
            alt="Passion into Profession"
          />
        </div>

     

      </div>



<div style={{ display : 'flex', flexDirection : 'column', alignItems : 'center', background : '#8DECB4'}}>



<Grid container justifyContent="center" spacing={4} sx={{paddingX: '12px', paddingY : '32px', marginBottom : '26px', marginTop : '12px'}}>

  <Grid item xs={12} sm={6} md={4}>
    <Card variant="outlined">
      <CardContent sx={{ padding : '46px', height: '25rem'}}>
        <ReceiptLongIcon  sx={{ height : 50, width : 50, color : '#10439F'}}/>
        <Typography variant="h5" sx={{marginBottom: 3, marginTop : 2, fontWeight : 500}}>Create quick invoices</Typography>
        <Divider />
       <Typography >With each settled invoice, your small business sees an increase in revenue. 
        Generate and send beautiful invoices to your clientele within seconds.</Typography>
        <Divider />
      </CardContent>
      
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card variant="outlined">
      <CardContent sx={{ padding : '46px', height: '25rem'}}>
        <EventRepeatIcon  sx={{ height : 50, width : 50, color : '#10439F'}}/>
        <Typography variant="h5" sx={{marginBottom: 3, marginTop : 2, fontWeight : 500}}>Recurring billing</Typography>
        <Divider />
       <Typography >Ensure timely payments and eliminate the need to pursue clients. Establish recurring invoices and enable automatic credit card payments for loyal customers. 
        Switch between automated and manual billing at your convenience.</Typography>
        <Divider />
      </CardContent>
      
    </Card>
  </Grid>

  <Grid item xs={12} sm={6} md={4}>
    <Card variant="outlined">
      <CardContent sx={{ padding : '46px', height: '25rem'}}>
        <ImportContactsIcon  sx={{ height : 50, width : 50, color : '#10439F'}}/>
        <Typography variant="h5" sx={{marginBottom: 3, marginTop : 2, fontWeight : 500}}>Bookkeeping made easy</Typography>
        <Divider />
       <Typography >Billbook's accounting feature seamlessly synchronizes all your invoicing and payment data automatically.





</Typography>
        <Divider />
      </CardContent>
      
    </Card>
  </Grid>
  

 
</Grid>

</div>

<div style={{ display : 'flex', flexDirection : 'column', alignItems : 'center', background : '#F0EBE3'}}>

<Typography sx={{ fontSize : '30px', fontWeight : 500, paddingTop : 5, paddingX : 2, alignItems : 'center', textAlign : 'center', display : 'flex', flexWrap : 'wrap' }}>Get paid faster</Typography>
<Typography sx={{ fontSize : '18px', fontWeight : 400, paddingTop : 1, paddingX : 2, alignItems : 'center', textAlign : 'center', display : 'flex', flexWrap : 'wrap' }}>
    Reliable, timely payments means better cash flow.
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
      
        <Typography variant="h5" sx={{marginBottom: 2, marginTop : 2, fontWeight : 500}}>Invoice on the go</Typography>
       <Typography >Send invoices whenever and wherever with our mobile friendly website.</Typography>

        <Typography variant="h5" sx={{marginBottom: 2, marginTop : 6, fontWeight : 500}}>Instant SMS</Typography>
       <Typography >Razorpay's payment link will be sent to the customer mobile along with invoice in PDF format. Automatic reminders and multiple re-try option.
       </Typography>

        <Typography variant="h5" sx={{marginBottom: 2, marginTop : 6, fontWeight : 500}}>Accept payments online</Typography>
       <Typography >Get paid in as fast as 1 business day. Customers can click payment link and pay instantly by Credit card, Debit card, UPI, Net Banking. 
        You can accept credit cards and bank payments for as little as 1% + Gst per transaction.</Typography>
      
        <div className="col-md-4 col-12 get-started-button-credit-card mt-5" style={{ marginBottom : 40}} >
          <Link to="/login/brand" style={{textDecoration: 'none'}}>
            <button className="btn signup-btn-grad btn-g-fonts" >
              Try Now
            </button>
          </Link>
      </div>


  </Grid>

  
  

 
</Grid>




    
</div>


    <Footer />
    </>
  );
}