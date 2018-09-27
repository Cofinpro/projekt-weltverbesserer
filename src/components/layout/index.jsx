
import React, { Component } from "react";
import Header from "../header/index.jsx"
import Footer from "../footer/index.jsx"
import "./index.css"


class Layout extends React.Component {
render() {
  return(

    <div>
        <Header/>
        <div class="bg">
            { this.props.children}
            </div>
        <Footer/>
    </div>
  );

  
}
}
export default Layout;