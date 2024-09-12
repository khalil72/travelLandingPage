/* eslint-disable jsx-a11y/img-redundant-alt */
import AllRouter from "./all-router";
import { FooterLayout, NavbarLayout } from "./components/common";




function App() {
  return (
    <main>
      {/* <div className="absolute right-0">
        <img src='/asset/image/Decore.png' alt='image'/>
      </div> */}
     <NavbarLayout />

     <AllRouter />
{/* 
     <FooterLayout /> */}
    
    </main>
  );
}

export default App;
