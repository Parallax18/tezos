import React from 'react';
import { Helmet } from "react-helmet";
import {img} from './assets/images/index';
import './assets/style.css';


function App() { 
  return (
      <>
       <Helmet>
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap"
              rel="stylesheet"
            />


            <link 
            rel="stylesheet" 
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" 
            crossorigin="anonymous"/>
            <title> Tezos</title>
        </Helmet>
         <main className="row my-main">
        <div className="col-12 col-md-6 left">
            <div className="my-textContent">
                <div className="my-backToEarn">
                    <a href="#" className="my-backLink my-link"><i className="fa fa-chevron-left"></i><p className="my-backText">Back to Earn</p></a>
                </div>
                <div className="my-mainHead">
                    <h1 className="my-head">Earn Tezos</h1>
                </div>
                <p className="my-mainText">
                    Tezos is a cryptocurrency and blockchain designed for safety, 
                    open participation, and upgradability.Learn how it works and you'll earn up to $6 in XYZ.
                </p>
                <div className="my-btn">
                    <a href="#" className="my-btnLink my-link">Get started</a>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-6">
            <img src= {img} alt="" class="my-img"/>
        </div>
        </main>
      </>
   
  );
}

export default App;
