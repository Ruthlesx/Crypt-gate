import React, {useState, useEffect} from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import Home  from '../Components/Home'
import Features  from '../Components/Features'
import Testimonials  from '../Components/Testimonials'
import FAQ  from '../Components/FAQ'
import Subscribe  from '../Components/Subscribe'
import Page  from '../Components/Page'


//import icon from '../images/cryptocurrency.png';




const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar />
        <Typography.Title >
          <Link to="/">
            <h5 className='logo-crypt'> CryptoGate</h5>
          </Link>
        </Typography.Title>

        <Menu theme="dark" className='menu'>
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item icon={<HomeOutlined />}>
            <Link to="./features">Features</Link>
          </Menu.Item>

          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/FAQ">FAQ</Link>
          </Menu.Item>

          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/Subcribe">Subscribe</Link>
          </Menu.Item>

          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/Page">Page</Link>
          </Menu.Item>

          <Menu.Item>
            <Button>Connect Wallet</Button>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )

}

export default Navbar