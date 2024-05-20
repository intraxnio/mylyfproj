import React from "react";
import { Link } from 'react-router-dom';
import linkedin from "../../images/icon-linkedin.png"

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-footer-container pt-5 pb-2">
        <div className="container row mx-auto">

        <div className="container col-md-4 col-12 my-2">
            <div className="div">
                
              <ul>
                <li className="footer-head-text">Billsbook</li>
                <li className="footer-content-text"><div className="footer-subhead-decoration">
                  Billsbook is an e-invoicing platform for small businesses and startups that simplifies the invoicing process and
                  payment collection process. With Billsbook, businesses can share GST-compliant invoices & collect payments digitally.
               </div></li>
               
              </ul>
            </div>
          </div>

        <div className="container col-md-3 col-12 my-2">
            <div className="div">
                
              <ul>
                <li className="footer-head-text">Features</li>
                <li className="footer-content-text"><Link to="/invoicing" className="footer-subhead-decoration">Invoicing</Link></li>
                <li className="footer-content-text"><Link to="/payments" className="footer-subhead-decoration">Payments</Link></li>
                <li className="footer-content-text"><Link to="/onboarding" className="footer-subhead-decoration">Onboarding</Link></li>
                <li className="footer-content-text"><Link to="/pricing" className="footer-subhead-decoration">Pricing</Link></li>
                {/* <li className="footer-content-text"><Link to="/sitemap.xml" className="footer-subhead-decoration">Sitemap</Link></li> */}

              </ul>
            </div>
          </div>
          
          <div className="container col-md-3 col-12 my-2">
            <div className="div">
            <ul>
                <li className="footer-head-text">Useful</li>
                <li className="footer-content-text"><Link to="/terms-conditions" className="footer-subhead-decoration">Terms & Conditions</Link></li>
                <li className="footer-content-text"><Link to="/privacy-policy" className="footer-subhead-decoration">Privacy Policy</Link></li>
                <li className="footer-content-text"><Link to="/cancellation-refund" className="footer-subhead-decoration">Cancellation & Refund</Link></li>
                <li className="footer-content-text"><Link to="/shipping-policy" className="footer-subhead-decoration">Shipping Policy</Link></li>
                <li className="footer-content-text"><Link to="/contact-us" className="footer-subhead-decoration">Contact Us</Link></li>
                {/* <li className="footer-content-text"><Link to="/sitemap.xml" className="footer-subhead-decoration">Sitemap</Link></li> */}

              </ul>
            </div>
          </div>
        
          
          <div className="container col-sm-12 col-12 col-md-2 col-lg-2 my-2">
            <div className="div">
              <ul>
                {/* <li className="footer-head-text">Compare</li> */}
                <li className="footer-head-text">Follow Us</li>
                {/* <li className="footer-content-text">
                 Freshbooks Alternative
                </li>
                <li className="footer-content-text">
                 Quickbooks Alternative
                </li>
                <li className="footer-content-text">
                 Xero Alternative
                </li>
                <li className="footer-content-text">
                 Sage Intacct Alternative
                </li>
                <li className="footer-content-text">
                 Netsuite Alternative
                </li> */}
               

                {/* <li className="footer-head-text pt-4">
                  Follow us 
                </li> */}
                <li className="footer-content-text my-1">
                  {/* <Link href="https://www.instagram.com/broadreach.in/"><a><img  className="img-fluid rounded icon-image" src={instagram} alt="instagram-icon" width={50} height={25} /></a></Link> */}
                  {/* <Link href="https://www.facebook.com/broadreach.in"><a><img  className="img-fluid rounded icon-image" src={facebook} alt="facebook-icon" width={50} height={25} /></a></Link> */}
                  {/* <Link href="https://www.youtube.com"><a><Image  className="img-fluid rounded icon-image mt-1" src={youtube} alt="youtube-icon" width={55} height={35} /></a></Link>
                  <Link href="https://www.twitter.com"><a><Image  className="img-fluid rounded icon-image" src={twitter} alt="twitter-icon" width={50} height={25} /></a></Link> */}
                  <Link to="https://www.linkedin.com/company/billsbook" target="_blank" rel="noopener noreferrer"><a><img  className="img-fluid rounded icon-image" src={linkedin} alt="linkedin-icon" width={38} height={22} /></a></Link>

                  
                </li>
              </ul>
            </div>
          </div>
        </div>



        <div className="container text-center my-3">
          <span className="fw-normal" style={{color: "#B9B4C7"}}>&copy;2024, Linck One Enterprises. All Rights Reserved.</span>
        </div>
      </div>
    </>
  );
}
