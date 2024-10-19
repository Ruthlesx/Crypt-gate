


import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistics, Button, Card } from 'antd';
import { Link } from 'react-router-dom'
import { AppleOutlined, GoogleOutlined  } from '@ant-design/icons';

import { Image } from "antd";
//import Other from '../public/Other.png'

const { Title } = Typography;




const Home = () => {
  return ( 
    <>
   
    
    <Row>
      <Col span={12}>
      <div className='first-col'> 
      <h5 >CRYPTO MARKET</h5>
      <Title level={2} className="heading" style={{fontWeight: "bolder"}}> Crypto App <br />for Everyone</Title>
      <p>Simple and safe crypto investment. Starting from IDR 11.000 </p>
      
      <Button className='button1' style={{ width: "260px", height: "40px", marginTop:"20px"}}>Start Investing Now</Button>
      
      <div className='buttons'>
      <Button className='button2'  icon={<AppleOutlined style={{ fontSize: "25px" }} />} style={{ marginTop: "30px", height:"50px",}}> Download on the App store </Button>
      <Button className='button2' icon={<GoogleOutlined style={{ fontSize: "25px"}} />} style={{ marginTop: "30px", height:"50px", marginLeft: "5px"}} >Download on Google Play</Button>
      </div>
      
      <div className='founded'>
      <div style={{ height: "40px", borderRight: "0.5px solid #CE5937", width: "80px",  }}>Founded in <strong>2024</strong></div>
      <div style={{ height: "40px", borderRight: "0.5px solid #CE5937", borderLeft: "0.5px",  width: "80px", marginLeft: "20px"}} > Active user <strong>210k</strong></div>
      <div style={{ height: "40px", borderRight: "0.5px solid #000", borderTop: "0.5px", width: "80px", marginLeft: "20px"}}> Crypto listed <strong>600</strong></div>
      </div>
      
      </div>
      
      </Col>
      <Col span={12}> <Image src="/Other.png"/> </Col>
    </Row>

    <div>
      <h3 className='Header-2'>The World's Fastest Growing Crypto App</h3>


      <Row className='cards' gutter={16}>
        <Col span={6}>
          <Card style={{height: "390px"}} bordered={false}>
            <Image src="/Other-a.png" />

            <h4>Easy</h4>
            <p>With a simple interface, crypto investing is easy for everyone</p>
            <Link>Learn More</Link>
          </Card>
        </Col>

        <Col span={6}>
           <Card style={{height: "390px"}} bordered={false}>
           <h4>Safe</h4>
            <p>Registered and licensed by BAPPEBTI, assets are securely stored in world-class custody</p>
            <Link>Learn More</Link>

            <Image src="/Other-b.png"/>
            </Card>
        </Col>

        <Col span={6}>
          <Card style={{height: "390px"}} bordered={false}>
             <Image src="/Other-c.png" />

              <h4>Customizable</h4>
              <p>You don't  have to buy a whole Bitcoin, buy Bitcoin or any other assets starting from $1</p>
              <Link>Learn More</Link>
          </Card>
        </Col>
      </Row>
    </div>


    <div>
      <Row style={{ marginTop: "50px"}} >
        <Col span={10}  className='start-heading'>
          <h2>Start your investment.</h2>
          <p style={{fontSize: "10px"}}>Start your first trade with easy steps. </p>
        </Col>

        <Col span={10}>

        <div className='founded2'>
      <div style={{ height: "60px", borderRight: "0.5px solid #CE5937", width: "140px",  }}>24h trading volume <strong  style={{color: "purple", marginLeft: "10px"}}>$76 B</strong></div>
      <div style={{ height: "40px", borderRight: "0.5px solid #CE5937", borderLeft: "0.5px",  width: "140px", marginLeft: "20px"}} > App Store ratings <strong style={{color: "purple", marginLeft: "10px"}}>4.6/5</strong></div>
      <div style={{ height: "40px", borderRight: "0.5px solid #000", borderTop: "0.5px", width: "140px", marginLeft: "20px"}}> Google Play Ratings  <strong style={{color: "purple", marginLeft: "10px"}}>4.5/5</strong></div>
      </div>

        </Col>
      </Row>


        <Row gutter={16}>
       <Col span={12} >
        <div className='phone-card'>
            <h5>Step 1</h5>

            <h2>Download and install the App</h2>
            <p>Sign up with your email, verify your accounts by taking photos of your KTP,SIM, or passport  </p>

            <div className='phone-img'>
              <Image src='/Rectangle.png' />
            </div>
            
        </div>

        </Col>


        <Col  span={12}>

          <div className='phone-card2'>
            <div className='phone-img'>
              <Image src='/Rectangle.png'/>  
            </div>
            

            <h5>Step 2</h5>

            <h4>Sign Up and Verify in 10 minutes.</h4>
            <p>Sign up with your email verify your account by taking a photo of your KTP, SIM or passport </p>
          </div>

        </Col>

        <Col span={12} >
        <div className='phone-card' style={{marginTop: "20px"}}> 
            <h5>Step 3</h5>

            <h2>FREE Deposit</h2>
            <p> Deposit your Rupian balance by transferring funds from banks or your preferred e-wallets. </p>

            <div className='phone-img'>
              <Image src='/Rectangle.png' />
            </div>
            
        </div>

        </Col>   
        
        <Col  span={12}>

           <div className='phone-card2' style={{marginTop: "20px"}} >
               <div className='phone-img'>
                <Image src='/Rectangle.png'/>  
              </div>
  

          <h5>Step 4</h5>

          <h4>Start Investing, No Additional Fees</h4>
          <p>Experience the easiest way to buy and sell crypto assets.</p>
          </div>

        </Col>     
      </Row>
      

    </div>

    </>
  )
}

export default Home