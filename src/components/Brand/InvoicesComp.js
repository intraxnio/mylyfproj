import React, { useState, useEffect, useRef } from "react";
// import { format } from 'date-fns-tz';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { Button, TableContainer, Card, CardContent, Typography, CardActions, Stack, Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
 } from "@mui/material";
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import { deepOrange, green, purple, blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ReceiptIcon from '@mui/icons-material/Receipt';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);





const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: green[500],
    },
    warning: {
      main: purple[500],
    },
    info: {
      main: blue[500],
    },
  },
});






export default function LinksCard() {

  const navigate = useNavigate();
  const user = useSelector((state) => state.brandUser);

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 10,
  });
  // State for managing loading state
  // State for storing fetched rows
  // State for storing total row count
  const [isLoading, setIsLoading] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [rowCountState, setRowCountState] = React.useState(0);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [openProd, setOpenProd] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [ authorized, setAuthorized] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // const baseUrl = "http://localhost:8000/api";




  const calculateSerialNumber = (index) => {
    // Calculate serial number based on current page and page size
    return paginationModel.page * paginationModel.pageSize + index;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenProd = () => {
    setOpenProd(true);
  };

  const handleCloseProd = () => {
    setOpenProd(false);
  };

  const goToProductsScreen = () => {
    navigate("/brand/products");
  };

  const openPdfInvoice = (invoiceId) => {

    try {

      setIsLoading(true);

      axios.post("/api/brand/is-pdf-link-available", {
          invoiceId: invoiceId,
        })
        .then((ress) => {
        setIsLoading(false);
    window.open(ress.data.filePdf, "_blank");

        })
        .catch((e) => {
          // Handle error
        });
  
  
      } catch (error) {
        console.error(error);
      }

    
    // Open the PDF URL in a new tab
    // window.open(pdfUrl, "_blank");
};

const fetchDataFromServer = async (page, pageSize) => {

  try {

    const token = Cookies.get('billsBookToken');
    const response = await axios.post("/api/brand/all-invoices", 
    { brand_id: user.brand_id, page: page, pageSize: pageSize },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if(response.data){

      const { data, totalRowCount } = response.data;
    setRowCountState(totalRowCount || 0);
    setHasMore(data.length > 0);
    setAuthorized(true);
    setIsLoading(false);
    return { rows: data, pageInfo: { totalRowCount } };

    }

    else{
      
      setAuthorized(false);
      setIsLoading(false);
      toast.error('Session expired. Please login again.'); // Display toast notification
      setTimeout(() => {
        navigate('/login/brand');
          
        }, 1500);
      return { rows: [], pageInfo: { totalRowCount: 0 } };

    }
    

  } catch (error) {

    setAuthorized(false);
    setIsLoading(false);
    toast.error('Session expired. Please login again.'); // Display toast notification
    setTimeout(() => {
      navigate('/login/brand');
        
      }, 1500);
    return { rows: [], pageInfo: { totalRowCount: 0 } };
  }
};


const fetchData = async () => {
  setIsLoading(true);
  try {

    if(isSmallScreen){

      const { rows: fetchedRows, pageInfo } = await fetchDataFromServer(page, pageSize);
      setRows(fetchedRows);
      setRowCountState(pageInfo.totalRowCount || 0);

    }
    
    else{
    const { rows: fetchedRows, pageInfo } = await fetchDataFromServer(paginationModel.page, paginationModel.pageSize);
    setRows(fetchedRows);
    setRowCountState(pageInfo.totalRowCount || 0);
    }

  } catch (error) {
    console.log('error:::', error);
    setRows([]);
    setRowCountState(0);
    setIsLoading(false);
    toast.warning("Server is busy, try again later.");
  } finally {
    setIsLoading(false);
  }
};


const loadMoreData = async () => {
  setIsLoading(true);
  try {

      const nextPage = page + 1;
      const { rows: fetchedRows } = await fetchDataFromServer(nextPage, pageSize);
      setRows(prevRows => [...prevRows, ...fetchedRows]);
      

  } catch (error) {
    
    setRows([]);
    setRowCountState(0);
    setIsLoading(false);
    toast.warning("Server is busy, try again later.");
  } finally {
    setIsLoading(false);
  }
};
  

  
  useEffect(() => {

      fetchData();

  }, [paginationModel]);



  const createCampaign = async (e) => {
    e.preventDefault();

    try {

        setLoading(true);

          axios.post("/api/brand/check-kyc-status", {
          userId: user.brand_id,
        }).then((ress) => {

          if(ress.data.approved){

            axios.post("/api/brand/get-brand-products", {
              userId: user.brand_id,
            }).then((ress) => {
    
              if(ress.data.data.length !== 0){
    
          setLoading(false);
          navigate("/brand/createInvoice");
    
              }
    
              else{
                setLoading(false);
                handleClickOpenProd();
                
              }
            })
            .catch((error) => {
              toast.error("Server Error. Please try again later.");
            });

          }

          else{
            setLoading(false);
            handleClickOpen();
            
          }
        })
        .catch((e) => {
          toast.error("Server Error. Please try again later.");
         
        });
  
  
      } catch (error) {
        toast.error("Server Error. Please try again later.");
       
      }



  };

  

  const columns = [
    { 
      field: 'id', 
      headerName: 'S.No', 
      width: 60,
      renderCell: (params) => calculateSerialNumber(params.value),
    },

    { 
      field: 'createdDate', 
      headerName: 'Created Date', 
      width: 160,
      renderCell: (params) => {
        const formattedDateTime = dayjs.utc(params.value).locale('en').format('DD-MM-YYYY');
    
        return (
          <div>
            <div style={{ whiteSpace: 'pre-wrap' }}>
              {formattedDateTime}
            </div>
          </div>
        );
      },
    },
  
    { 
      field: 'payeeName', 
      headerName: 'Payee', 
      width: 160,
      renderCell: (params) => (
        <div>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {params.value.length > 45
              ? params.value.substr(0, 45) + '...'
              : params.value}
          </div>
        </div>
      ),
    },

    { 
      field: 'payeeMobile', 
      headerName: 'Mobile Number', 
      width: 160,
      renderCell: (params) => (
        <div>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {params.value.length > 45
              ? params.value.substr(0, 45) + '...'
              : params.value}
          </div>
        </div>
      ),
    },
  
    {
      field: "invoice",
      headerName: "Invoice",
      width: 100,
      renderCell: (params) => (
        <span
          onClick={() => openPdfInvoice(params.value)} // Pass the ID or necessary parameter
          style={{ cursor: "pointer", color: "blue" }}
        >
          Invoice
        </span>
      ),
    },

    { 
      field: 'invoiceAmount', 
      headerName: 'Amount', 
      width: 130,
      renderCell: (params) => (
        <div>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            Rs. {params.value}
          </div>
        </div>
      ),
    },

    { 
      field: 'paymentStatus', 
      headerName: 'Payment Status', 
      width: 160,
      renderCell: (params) => (
        <div>
          <div style={{ whiteSpace: 'pre-wrap', color: params.value === 'paid' ? green[500] : deepOrange[500] }}>
            {params.value === 'paid'? 'PAID' : 'Created'}
          </div>
        </div>
      ),
    },

   
  
  
  ];


  return (
<>
<ThemeProvider theme={theme}>


{isSmallScreen && authorized ? 

( <Grid sx={{ paddingX : '6px', paddingBottom : '22px'}}>

  <Button
  startIcon = { < AddLinkIcon />}
  variant="outlined"
  color="primary"
  onClick={createCampaign}
  sx={{ marginTop: "14px", marginBottom : '16px', color: deepOrange[500], cursor: 'pointer', textDecoration: 'none', textTransform: 'none'}}
  >
  Create Invoice
  </Button>


  {isLoading ? ( <CircularProgress
                  size={24}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: -12, // Center the CircularProgress
                    marginLeft: -12, // Center the CircularProgress
                  }}
                />) : (
                  <>


{rows !== null && rows.length !== 0  ? ( 
<>

      {rows.map((invoice, index) => (

<>
        <Card key={index} sx={{ marginBottom : '16px'}}>
    <CardContent sx={{ display : 'flex', flexDirection : 'row', justifyContent: 'space-between', alignItems : 'flex-start'}}>
  
    <Stack sx={{ display: 'flex', flexDirection : 'column'}}>
      <div className ="card-headings" >Date</div>
      <div className ="card-headings-content">{dayjs.utc(invoice.createdDate).locale('en').format('DD-MM-YYYY')}</div>
      </Stack>

      <Stack sx={{ display: 'flex', flexDirection : 'column'}}>
      <div className ="card-headings" >Name</div>
      <div className ="card-headings-content" >{invoice.payeeName}</div>
      </Stack>

      <Stack sx={{ display: 'flex', flexDirection : 'column'}}>
      <div className ="card-headings" >Mobile</div>
      <div className ="card-headings-content" >{invoice.payeeMobile}</div>
      </Stack>

     

    </CardContent>

    <CardContent sx={{ display : 'flex', flexDirection : 'row', justifyContent: 'space-between'}}>

       <Stack sx={{ display: 'flex', flexDirection : 'column'}}>
      <div className ="card-headings">Amount</div>
      <div className ="card-headings-content" >Rs. {invoice.invoiceAmount}</div>
      </Stack>

      <Stack sx={{ display: 'flex', flexDirection : 'column'}}>
      <div className ="card-headings">Payment Status</div>
      <div className ="card-headings-content" style={{ color: invoice.paymentStatus === 'paid'? green[500] : deepOrange[500]}}>{invoice.paymentStatus === 'paid'? 'PAID' : 'Created'}</div>
      </Stack>

      <Stack sx={{ display: 'flex', flexDirection : 'column'}}>
      <div className ="card-headings">Download</div>
      <div  className ="card-headings-content" style={{ color: 'blue', cursor : 'pointer'}} onClick={() => openPdfInvoice(invoice.invoice)} >Invoice</div>
      </Stack>

    </CardContent>

    <CardActions>
     
    </CardActions>
  </Card>

  
      </>
  
      ))}

{ (rows.length < rowCountState) ? ( 
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      
      }}
    >
      <Button
      variant="outlined"
      color="info"
      onClick={()=> loadMoreData(true)}
      sx={{ marginTop: "14px", marginBottom: '46px', color: blue[500], width: '80%'}}
      style={{
        cursor: 'pointer',
        textDecoration: 'none',
        textTransform: 'none',
      }} 
      >
      Load More
      </Button>
      </div>) :
      (
       <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      
      }}
    >
      <Button
      variant="outlined"
      color="primary"
      sx={{ marginTop: "14px", marginBottom: '46px', color: deepOrange[500], width: '80%'}}
      style={{
        cursor: 'pointer',
        textDecoration: 'none',
        textTransform: 'none',
      }} 
      >
      End of the list
      </Button>
      </div>
      ) }

      </>
      ) : (
      <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "50vh", // Adjust the height as needed
    }}
  >
    <ReceiptIcon style={{ fontSize: '60px', marginBottom: '20px', color: '#5D12D2'}}/>
    <div> Create your first Invoice</div>
  </div>
      )}
      </>)}

     

    </Grid>) :(

    <>

<Button
startIcon = { < AddLinkIcon />}
variant="outlined"
color="primary"
onClick={ createCampaign}
sx={{ marginBottom: "14px", color: deepOrange[500],  cursor: 'pointer',
textDecoration: 'none',
textTransform: 'none' }}
>
Create Invoice
</Button>

<TableContainer sx={{ width : '90%', height: '100vh'}}>

{isLoading ? ( <CircularProgress
                  size={24}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: -12, // Center the CircularProgress
                    marginLeft: -12, // Center the CircularProgress
                  }}
                />) : (
                  <>

{rows !== null && rows.length !== 0  ? ( 


      <DataGrid
       autoHeight
        rows={rows}
        columns={columns}
        loading={isLoading}
        rowCount={rowCountState}
        paginationModel={paginationModel}
        paginationMode="server"
        pageSizeOptions={[5]}
        onPaginationModelChange={setPaginationModel}
      />) : (
       <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "50vh", // Adjust the height as needed
    }}
  >
    <ReceiptIcon style={{ fontSize: '60px', marginBottom: '20px', color: '#5D12D2'}}/>
    <div> Create your first Invoice</div>
  </div>)
      }
      </>)
}

    </TableContainer>
    </>
     ) }

           {/* Kyc Dialog  */}

  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"KYC In Review"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Once the review process is completed and approved, 
          you will be able to proceed with creating invoices. We appreciate your patience.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined' autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>

       {/* Products Dialog  */}
       <Dialog
        open={openProd}
        onClose={handleCloseProd}
        aria-labelledby="prod-dialog-title"
        aria-describedby="prod-dialog-description"
      >
        <DialogTitle id="prod-dialog-title">
          {"Continue to add Products"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="prod-dialog-description">
          Please add your products to the Inventory to create your first Invoice. Click 'Add Products' below to proceed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={goToProductsScreen} variant='outlined' autoFocus>
            Add Products
          </Button>
        </DialogActions>
      </Dialog>

      </ThemeProvider>



<ToastContainer autoClose= {2000}/>
    
    </>
  );
}
