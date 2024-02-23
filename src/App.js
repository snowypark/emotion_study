import './App.css';
import React from 'react';
import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import SideBarTop from './components/SideBarTop/SideBarTop';
import SideBar from './components/SideBar/SideBar';
import RootLayout from './components/RootLayout/RootLayout';
import Mypage from './pages/Mypage';

function App() {
  return (

    <>
      <Reset />
      <SideBarTop />
      <SideBar />
      <RootLayout>
      <Routes>        
        
        <Route path='/mypage' element={<Mypage/>}></Route>
        <Route path='/board' element={<>게시판</>}></Route>
        <Route path='/notice' element={<>공지사항</>}></Route>

      </Routes>
      </RootLayout>
    </>
    
  );
}

export default App;
