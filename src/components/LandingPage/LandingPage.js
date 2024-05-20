import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar'
import BodyMain from './BodyMain'
import Accordian from './Accordian'
import Footer from './Footer'
import BodyBlocks from './BodyBlocks'
import BodyCards from './BodyCards'
// import Script from 'next/script'

export default function LandingPage() {

  return (
    
    <>
      <Helmet>
        {/* <title>Short link Generator: linck</title> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="description" content="Reach driven micro-influencer marketing platform for businesses and brands to create campaigns for increased ROI." /> */}
        {/* <meta content="Automated Influencer Marketing Platform: BroadReach" property="og:title" /> */}
        {/* <meta content="Reach driven micro-influencer marketing platform for businesses and brands to create campaigns for increased ROI." property="og:description" /> */}
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.billsbook.cloud" />
        
      </Helmet> 

      <Navbar />
      <BodyMain />
      <BodyBlocks />
      <BodyCards />
      <Accordian />
      <Footer />
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D0SY7XGY0L"></Script>

        <Script id="analytics-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){
                dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-D0SY7XGY0L');`}}></Script> */}

         </>
  )
}
