
import React, { Component } from "react";
import Header from "../header/index.jsx"
import Footer from "../footer/index.jsx"


class Layout extends React.Component {
render() {
  return(

    <div>
        <Header/>
            { this.props.children}
        <Footer/>
    </div>
  );

  
}
}
export default Layout;