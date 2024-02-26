import './App.css';
import React from 'react';
import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import SideBarTop from './components/SideBarTop/SideBarTop';
import SideBar from './components/SideBar/SideBar';
import RootLayout from './components/RootLayout/RootLayout';
import Mypage from './pages/Mypage/Mypage';
import { MENUS } from './constants/menu';


function App() {
  return (

    <>
      <Reset />
      <SideBarTop />
      <SideBar />
      <RootLayout>
      <Routes>   
        {MENUS.map(menu => <Route key={menu.id} path={menu.path} element={menu.element} />)}     


      </Routes>
      </RootLayout>
    </>
    
  );
}

export default App;
