import React from 'react'
import { Grid, Avatar, Stack, Typography, Box } from "@mui/material";
import review1img from '../../images/IMG_1025.jpg'
import review2img from '../../images/IMG_1023.jpg'
import review3img from '../../images/IMG_1027.jpeg'
import { Link } from 'react-router-dom';
import image1 from '../../images/onboarding-1.svg';






function BodyCards() {
  return (
    <>
    
   <Grid container marginTop={8} marginBottom={5} paddingX={1}>

    <Grid xs={12} md={4} lg={4} bgcolor={'#DFCCFB'}  paddingX={3} paddingY={3}>

      <Box sx={{ paddingTop : '22px'}}>

      <Stack sx={{ display: 'flex', flexDirection : 'row'}}>
      <Avatar  sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={review1img}/>

      <Stack sx={{ display : 'flex', flexDirection : 'column', paddingLeft : '12px', paddingY : '6px'}}>
      <Typography sx={{ fontSize : '16px', fontWeight : '500'}}>Pradeep Reddy</Typography>
      <Typography sx={{ fontSize : '14px'}}>Back to roots</Typography>
      </Stack>

      </Stack>

      </Box>

      <Box paddingTop={3} paddingBottom={4} sx={{ display: 'flex', flexDirection : 'column'}}>

      <div className="reviews-text"> "The majority of my clients pay with credit cards using the secure link on the invoice. 
      That is a&nbsp;
      <span style={{ fontWeight : 500, background : '#C6EBC5'}}>great time saver and helps me get paid faster!"</span>
      </div>
      </Box>

    </Grid>

    <Grid xs={12} md={4} lg={4} bgcolor={'#FFEEF4'}  paddingX={3} paddingY={3}>

<Box sx={{ paddingTop : '22px'}}>

<Stack sx={{ display: 'flex', flexDirection : 'row'}}>
<Avatar  sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={review2img}/>

<Stack sx={{ display : 'flex', flexDirection : 'column', paddingLeft : '12px', paddingY : '6px'}}>
<Typography sx={{ fontSize : '16px', fontWeight : '500'}}>Akhila Sri</Typography>
<Typography sx={{ fontSize : '14px'}}>Forest Kisan</Typography>
</Stack>

</Stack>

</Box>

<Box paddingTop={3} paddingBottom={4} sx={{ display: 'flex', flexDirection : 'column'}}>

<div className="reviews-text"> "It's more than just a trendy software; it offers peace of mind. 
You should feel assured&nbsp;
<span style={{ fontWeight : 500, background : '#DC84F3'}}>that your taxes won't be a year-long worry."</span>
</div>
</Box>

</Grid>

<Grid xs={12} md={4} lg={4} bgcolor={'#B2C8BA'}  paddingX={3} paddingY={3}>

<Box sx={{ paddingTop : '22px'}}>

<Stack sx={{ display: 'flex', flexDirection : 'row'}}>
<Avatar  sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={review3img}/>

<Stack sx={{ display : 'flex', flexDirection : 'column', paddingLeft : '12px', paddingY : '6px'}}>
<Typography sx={{ fontSize : '16px', fontWeight : '500'}}>Chandu Lal</Typography>
<Typography sx={{ fontSize : '14px'}}>Jyoram Clinics</Typography>
</Stack>

</Stack>

</Box>

<Box paddingTop={3} paddingBottom={4} sx={{ display: 'flex', flexDirection : 'column'}}>

<div className="reviews-text"> "BillsBook has been a game-changer for me. Managing my expenses and invoices used to be a headache, but now it's a breeze.&nbsp;
<span style={{ fontWeight : 500, background : '#FF8E8F'}}>It's saved me so much time and hassle!"</span>
</div>
</Box>

</Grid>


   </Grid>

   <Grid container justifyContent={'center'} paddingX={5} marginBottom={6}> 
            <Grid xs={12} md={3} lg={3}>

            <Link to="/login/brand" style={{textDecoration: 'none'}}><button className="btn signup-btn-grad-2 btn-g-fonts text-white">Explore Now</button></Link>


            </Grid>

         </Grid>

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
    
    </>
  )
}

export default BodyCards