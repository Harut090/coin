import React from 'react';
import {HomePage} from "./pages/HomePage"
import {Routes, Route} from "react-router-dom"
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './hooks/redux'
import { fetching, fetchSuccess, fetchError } from './store/slices/ammountSlice'
import { fetchingScrolls, fetchSuccessScrolls, fetchErrorScrolls } from "./store/slices/scrollSlice";
import { fetchAmmounts } from './store/actions/ammountSlice';
import { fetchScrolls } from './store/actions/scrollSlice';


export default function App() {
  const ammounts = useAppSelector(state => state?.ammounts?.ammounts)
  const dispatch = useAppDispatch()

  
  useEffect(()=>{
    dispatch(fetchAmmounts())
    dispatch(fetchScrolls())
  }, []);



  

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
     <Footer/>
    </div>
  );
}
