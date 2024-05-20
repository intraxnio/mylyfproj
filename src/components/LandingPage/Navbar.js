import React, { useState } from "react";
import { Link } from "react-router-dom";
import WebStoriesIcon from '@mui/icons-material/WebStories';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light mt-3">
      <div className="container">
      
        <Link
          to="/"
          className="navbar-brand"
          style={{
            fontSize: "22px",
            fontWeight: 500,
            color: "#803D3B",
            fontFamily: "Poppins",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* <div className="material-icons">web_stories</div> */}
            <WebStoriesIcon />

            <div
              style={{ color: "#803D3B", fontSize: "22px", marginLeft: "08px" }}
            >
              bills book
            </div>
          </div>
        </Link>

<div className=" desktop-menu">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingRight : '5rem'
          }}
        >
          <div>
            <ul className="navbar-nav">
              <li>
                <Link to="/invoicing" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      font : "poppins",
                      fontSize: "17px",
                      color: "#11009E",
                      marginLeft: "16px",
                      marginRight: "16px",
                      fontWeight : 500
                    }}
                  >
                    Invoicing
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/payments" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      color: "#11009E",
                      font : "poppins",
                      fontSize: "17px",
                      marginLeft: "16px",
                      marginRight: "16px",
                      fontWeight : 500
                    }}
                  >
                    Payments
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/onboarding" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      color: "#11009E",
                      font : "poppins",
                      fontSize: "17px",
                      marginLeft: "16px",
                      marginRight: "16px",
                      fontWeight : 500
                    }}
                  >
                    Onboarding
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/pricing" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      color: "#11009E",
                      font : "poppins",
                      fontSize: "17px",
                      marginLeft: "16px",
                      marginRight: "16px",
                      fontWeight : 500

                    }}
                  >
                    Pricing
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  to="/support"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      color: "#11009E",
                      font : "poppins",
                      fontSize: "17px",
                      marginLeft: "16px",
                      marginRight: "16px",
                      fontWeight : 500

                    }}
                  >
                    Support
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div style={{ paddingLeft: "22px" }}>
            <Link to="/login/brand" style={{ textDecoration: "none" }}>
              <button className="btn signup-btn-grad-desk-menu btn-g-fonts">
                Log In
              </button>
            </Link>
          </div>
        </div>

        </div>

        <div className="mobile-menu">
          <button
            className={`navbar-toggler ${isMenuOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        ></div>

        <div className={`menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/invoicing" onClick={toggleMenu}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: "60px",
                  }}
                >
                  <div
                    style={{ color: "#11009E", fontSize: "22px" }}
                    className="material-icons"
                  >
                    change_circle
                  </div>
                  <div
                    style={{
                      color: "#11009E",
                      fontSize: "18px",
                      marginLeft: "18px",
                    }}
                  >
                    Invoicing
                  </div>
                 
                </div>
              </Link>
            </li>

            <li>
              <Link to="/payments" onClick={toggleMenu}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{ color: "#11009E", fontSize: "22px" }}
                    className="material-icons"
                  >
                    account_balance
                  </div>
                  <div
                    style={{
                      color: "#11009E",
                      fontSize: "18px",
                      marginLeft: "18px",
                    }}
                  >
                    Payments
                  </div>
                 
                </div>
              </Link>
            </li>


            <li>
              <Link to="/onboarding" onClick={toggleMenu}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{ color: "#11009E", fontSize: "22px" }}
                    className="material-icons"
                  >
                    storefront
                  </div>
                  <div
                    style={{
                      color: "#11009E",
                      fontSize: "18px",
                      marginLeft: "18px",
                    }}
                  >
                    Onboarding
                  </div>
                 
                </div>
              </Link>
            </li>



            <li>
              <Link to="/pricing" onClick={toggleMenu}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{ color: "#11009E", fontSize: "22px" }}
                    className="material-icons"
                  >
                    check_circle
                  </div>
                  <div
                    style={{
                      color: "#11009E",
                      fontSize: "18px",
                      marginLeft: "18px",
                    }}
                  >
                    Pricing
                  </div>
                 
                </div>
              </Link>
            </li>

            <li>
              <Link to="/support" onClick={toggleMenu}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{ color: "#11009E", fontSize: "22px" }}
                    className="material-icons"
                  >
                    support_agent
                  </div>
                  <div
                    style={{
                      color: "#11009E",
                      fontSize: "18px",
                      marginLeft: "18px",
                    }}
                  >
                    Support
                  </div>
                 
                </div>
              </Link>
            </li>

            <li>
              <Link to="/contact-us" onClick={toggleMenu}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{ color: "#11009E", fontSize: "22px" }}
                    className="material-icons"
                  >
                    apartment
                  </div>
                  <div
                    style={{
                      color: "#11009E",
                      fontSize: "18px",
                      marginLeft: "18px",
                    }}
                  >
                    Contact Us
                  </div>
                 
                </div>
              </Link>
            </li>
          </ul>

          <div style={{ paddingLeft: "22px" }}>
            <Link to="/login/brand" style={{ textDecoration: "none" }}>
              <button className="btn signup-btn-grad-side-menu btn-g-fonts">
                Log In
              </button>
            </Link>
          </div>

          <div style={{ paddingLeft: "22px", marginTop: "16px" }}>
            <Link to="/signup/brand" style={{ textDecoration: "none" }}>
              <button className="btn signup-btn-grad-side-menu btn-g-fonts">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
