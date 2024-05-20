import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Grid } from "@mui/material";


export default function AccordionExpandIcon() {
  return (
    <>

    <Grid container sx={{ display: 'flex', flexDirection : 'row', marginY: '42px', paddingX : '22px'}}>

    <Grid xs={12} md={6} lg={6} paddingY={2} paddingX={16} >
      <div className='faq-text'>Frequently Asked Questions</div>
      </Grid>

    <Grid xs={12} md={6} lg={6} className="my-accordion-item my-3 mx-auto">

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>How BillsBook works?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="accordion-body">
              <strong>
                Create Invoice &#8594; Buyer &#8594;
                Payment Success &#8594; Payment Settlement
              </strong>{" "}
              <br />
              When an invoice is created, a payment link will get automatically sent to the buyer's mobile number. 
              Upon successful payment by the buyer, funds will be processed into your (merchant's) bank 
              account within T+1 days.
            </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Pricing</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className="accordion-body">
            <strong>No Hidden Charges</strong><br />
            Flat 1% (excl GST) Platform Fee per successful invoice payment. 18% GST will be applicable
            on platform fee on all successful invoice payments.

            </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>What is the onboarding process ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="accordion-body">
              <strong>
                Signup &#8594; Business Verification &#8594;
                KYC &#8594; Oboarded
              </strong>{" "}
              <br />We follow RBI, GST & Payment Gateway guidelines in onboarding a business for payments & e-invoices.
              It would not take more than 24 Hrs (with all required documents).
            </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography> What are the documents required ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="accordion-body">
              <strong>Mandatory Documents: </strong>
               1. Business Details 2. Proprietor/Director's PAN, AADHAR 3. GSTIN 4. Company Bank Account (CURRENT), 5. Labour License/Certificate of Incorporation 6. Company/Business Stamp
            7. One Cancelled Cheque</div>
        </AccordionDetails>
      </Accordion>
    </Grid>

    </Grid>

    </>
  );
}

// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// export default function AccordionExpandIcon() {
//   return (
//     <>
//     <div className="display-5 text-center mb-5">FAQ</div>
//     <div className="my-accordion-item my-3 mx-auto">

//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ArrowDropDownIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           <Typography>How BillsBook works?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//         <div className="accordion-body">
//               <strong>
//                 Create Invoice &#8594; Buyer &#8594;
//                 Payment Success &#8594; Payment Settlement
//               </strong>{" "}
//               <br />
//               When an invoice is created, a payment link will get automatically sent to the buyer's mobile number. 
//               Upon successful payment by the buyer, funds will be processed into your (merchant's) bank 
//               account within T+1 days.
//             </div>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ArrowDropDownIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography>Pricing</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//             <div className="accordion-body">
//             <strong>No Hidden Charges</strong><br />
//             Flat 2% Platform Fee per successful invoice payment. 18% GST will be applicable
//             on platform fee on all successful invoice payments.

//             </div>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ArrowDropDownIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography>What is the onboarding process ?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//         <div className="accordion-body">
//               <strong>
//                 Signup &#8594; Business Verification &#8594;
//                 KYC &#8594; Oboarded
//               </strong>{" "}
//               <br />We follow RBI, GST & Payment Gateway guidelines in onboarding a business for payments & e-invoices.
//               It would not take more than 24 Hrs (with all required documents).
//             </div>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ArrowDropDownIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography> What are the documents required ?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//         <div className="accordion-body">
//               <strong>Mandatory Documents: </strong>
//                1. Business Details 2. Proprietor/Director's PAN, AADHAR 3. GSTIN 4. Company Bank Account (CURRENT), 5. Labour License/Certificate of Incorporation 6. Company/Business Stamp
//             7. One Cancelled Cheque</div>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//     </>
//   );
// }

