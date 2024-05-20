import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import image1 from '../../images/payments-1.svg';
import chase from '../../images/payments-2.svg';
import { useNavigate } from "react-router-dom";







export default function Payments() {

  const navigate = useNavigate();

    const redirectToSignup = () => {
        navigate(`/signup/brand`);
       
      };

  return (
    <>
       <Navbar />

       <div className="container mx-auto row">
        <div className="container col-md-8 col-lg-8">
          <div className="row txt-1 megaRes">
            #payments
          </div>

          <h1 className="row txt-2 mt-1 me-2" >
          Online payments <br />Faster payments.
            
          </h1>

          <h2 className="row txt-4">
          Accept online payments via net banking, credit card, debit card, upi and more.
          </h2>

         

        
        </div>
        <div className="col-md-4 col-lg-4 img-1">
          <img
            className="img-fluid rounded"
            src={chase}
            priority={true}
            alt="Passion into Profession"
          />
        </div>

        <div className="col-md-4 col-12 get-started-button-credit-card mb-5" >
          <Link to="/login/brand" style={{textDecoration: 'none'}}>
            <button className="btn signup-btn-grad btn-g-fonts" >
              Get Started
            </button>
          </Link>
      </div>

     

      </div>





<div style={{ display : 'flex', flexDirection : 'column', alignItems : 'center', background : '#F0EBE3'}}>

<Typography sx={{ fontSize : '30px', fontWeight : 500, paddingTop : 5, paddingX : 2, alignItems : 'center', textAlign : 'center', display : 'flex', flexWrap : 'wrap' }}>Payment solutions for your business</Typography>

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
      
        <Typography variant="h5" sx={{marginBottom: 2, marginTop : 2, fontWeight : 500}}>Faster payments</Typography>
        <Typography >Get paid in as fast as 1 business day. Customers can click payment link and pay instantly by Credit card, Debit card, UPI, Net Banking. 
        You can accept credit cards and bank payments for as little as 1% + Gst per transaction.</Typography>

        <Typography variant="h5" sx={{marginBottom: 2, marginTop : 6, fontWeight : 500}}>Payment links</Typography>
       <Typography >Razorpay's payment link will be sent to the customer mobile along with invoice in PDF format. Automatic reminders and multiple re-try option.
       </Typography>

        <Typography variant="h5" sx={{marginBottom: 2, marginTop : 6, fontWeight : 500}}>Track your payments</Typography>
       <Typography >Invoice and payment status can be tracked anytime. Never lose track of all payments with timely reminders.</Typography>
      

  </Grid>

  
  

 
</Grid>




    
</div>

<div style={{ display : 'flex', flexDirection : 'column', alignItems : 'center', background : '#8DECB4'}}>

</div>

<div className="container row mx-auto justify-content-center mb-5">
        <div className="col-12 col-md-4 col-lg-4 py-3">
          <div className="border border-primary rounded p-3">
            <div className="row text-center">
              <p><span className="pricing-txt"> Pricing</span></p>
              <p><span className="pricing-txt-price"> Flat 1%</span><span style={{ fontSize: '22px', paddingTop : '4px', paddingLeft: '4px'}}>(INR)</span></p>
              <p style={{ marginBottom : '46px'}}>+18% GST on all successful invoice payments.</p>
            </div>
            <div className="features-details">

<div className="bb-txt-3 cussLine">
<span className="material-icons me-3">receipt_long</span>

  <p>Unlimited Invoices</p>
</div>

<div className="bb-txt-3 cussLine">
<span class="material-icons me-3">payments</span>
  <p>Unlimited Payments*</p>
</div>

<div className="bb-txt-3 cussLine">
<span class="material-icons me-3">groups</span>
  <p>Easy Buyer Integration</p>
</div>

<div className="bb-txt-3 cussLine">
<span class="material-icons me-3">bar_chart</span>
  <p>Real time analytics</p>
</div>

<div className="bb-txt-3 cussLine">
<span class="material-icons me-3">description</span>
  <p>Reports (PDF)</p>
</div>

</div>
           
          </div>
        </div>

       

      </div>

    <Footer />
    </>
  );
}