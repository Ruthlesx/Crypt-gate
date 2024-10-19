
import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Home, Features, Testimonials, FAQ, Subscribe, Page } from './Components/index.js'

function App() {
  return (
    
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>

      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/Features' element={<Features/>} />
              <Route  exact path='/Testimonials' element={<Testimonials/>} />
              <Route exact path='/FAQ' element={<FAQ/>} />
              <Route exact path='/Subscribe' element={<Subscribe/>} />
              <Route exact path='/Page' element={<Page/>} />

            </Routes>
          </div>
        </Layout>
        
      </div>
      <div className='footer' >
        <Typography.Title style={{ color: 'white', textAlign: 'center' }}>
          Crypt-gate <br />
          All rights reserved.
        </Typography.Title>

        <Space>
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/Page">Page</Link>
        </Space>
      </div>
    </div>
    
  );
}

export default App;
