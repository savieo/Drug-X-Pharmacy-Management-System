import React from "react";
// import "./index.css";

import Footer from "../common/Footer"; //refer to Footer.js
import Header from "../common/Header";
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import NavAdmin from "./NavAdmin";
import Showstaff from "./Showstaff";
import { Link } from "react-router-dom";

class AdminMain extends React.Component {
  constructor(props) {
    super(props); 
}


  render() {
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    console.log('horray!!', loginData);
   
    return (
      <article>
        <NavAdmin/>
        <Showstaff/>
      </article>
    );   
  }
}

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <AdminMain />
        <Footer />
      </div>
    );
  }
}

export default Root;
