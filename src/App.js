/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import AllRouter from "./all-router";
import { FooterLayout, NavbarLayout } from "./components/common";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <main className="relative">
  
  

      <NavbarLayout />
      <AllRouter />
      <FooterLayout />
    </main>
  );
}

export default App;
