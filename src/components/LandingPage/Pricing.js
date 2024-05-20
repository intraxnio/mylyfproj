import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";





function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);
  const navigate = useNavigate();


  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };

  const redirectToSignup = () => {
    navigate(`/signup/brand`);
   
  };

  return (
    <>
      <header>
        <title>Pricing: billsbook</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="HvvX1gisMdTNXS66CRCrbZTdRWr_q-P5JXjMDhwP3_4" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D0SY7XGY0L"></script>
      </header>

      <Navbar />

      {/* <div className="container mt-5 mb-5">
        <div className="text-center">
          <div className={`btn-group custom-btn-group ${isMonthly ? 'monthly' : 'yearly'}`} role="group">
            <button
              type="button"
              className={`btn ${isMonthly ? 'price-btn-color-1' : 'price-btn-color-2'} ${isMonthly ? 'active' : ''}`}
              onClick={togglePricing}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`btn ${isMonthly ? 'price-btn-color-1' : 'price-btn-color-2'} ${isMonthly ? '' : 'active'}`}
              onClick={togglePricing}
            >
              Annual (2 months free)
            </button>
          </div>
        </div>
      </div> */}

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

{/* <div className="bb-txt-3 cussLine">
<span class="material-icons me-3">search</span>
  <p>GSTIN Search</p><span style={{ fontSize: '12px', paddingTop : '5px', paddingLeft: '4px'}}>(coming soon)</span>
</div>

<div className="bb-txt-3 cussLine">
<span class="material-icons me-3">receipt</span>
  <p>e-invoice upload</p><span style={{ fontSize: '12px', paddingTop : '5px', paddingLeft: '4px'}}>(coming soon)</span>
</div> */}

</div>
            <div className="container my-4 mx-auto d-flex justify-content-center">
              <button className="btn login-btn-grad btn-g-fonts text-white" onClick={redirectToSignup} >Get Started</button>
            </div>
          </div>
        </div>

       

      </div>

      <Footer />
    </>
  );
}

export default Pricing;
