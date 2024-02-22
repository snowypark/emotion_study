import logo from './logo.svg';
import './App.css';
import { Reset } from 'styled-reset';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (

    <>
      <Reset />
      <SideBar />
      <Routes>
        
        <Route path='/mypage' element={<>마이페이지</>}></Route>
        <Route path='/board' element={<>게시판</>}></Route>
        <Route path='/notice' element={<>공지사항</>}></Route>

      </Routes>
    </>
    
  );
}

export default App;
