import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPages from './components/AllPages';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<App/>}></Route>
  <Route path='/btn' element={<AllPages/>}></Route>
  <Route path='/home' element={<AllPages/>}></Route>
  <Route path='/about' element={<AllPages/>}></Route>
  <Route path='/risk' element={<AllPages/>}></Route>
  <Route path='/forwork' element={<AllPages/>}></Route>
  <Route path='/journal' element={<AllPages/>}></Route>
  <Route path='/shop' element={<AllPages/>}></Route>
  <Route path='/privacy' element={<AllPages/>}></Route>
  <Route path='/terms' element={<AllPages/>}></Route>
  <Route path='/' element={<App/>}></Route>
  <Route path='/' element={<App/>}></Route>
  <Route path='/' element={<App/>}></Route>
  <Route path='/' element={<App/>}></Route>
  <Route path='/' element={<App/>}></Route>
  <Route path='/' element={<App/>}></Route>
  <Route path='/' element={<App/>}></Route>
</Routes>
</BrowserRouter>
);

