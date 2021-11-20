import React, { Component } from "react";
import "./Categories.css";
class Categories extends Component {
  render() {
    return (
      <div classNameName="Categories">
        <div
          style={{
            backgroundColor: "#0a1825",
            width: "1000px",
            height: "1000px"
          }}
        >
          <h1 className="heading">Here's a list of the different topics you can discuss about!</h1>
          <button className="buttonleft button1">Technology</button>
          <button className="buttontop button2">Food</button>
          <button className="buttontop button3">Art</button>
          <button className="buttontop button4">Politics</button>
          <button className="buttontop button5">Cars</button>
          <button className="buttontop button6">Sports</button>
          <button className="buttontop button7">Travel</button>
          <button className="buttonleft button8">News</button>
          <button className="button button9">COVID-19</button>
          <button className="button button10">Fitness</button>
          <button className="button button11">Design</button>
          <button className="button button12">Business</button>
          <button className="button button13">Hot Topics</button>
          <button className="buttonleft button14">Celebrities</button>
          <button className="button button15">Movies and TV Shows</button>
          <button className="button button16">Books</button>
          <button className="button button17">Marketing</button>
          <button className="button button18">Innovation</button>
        </div>
      </div>
    );
  }
}

export default Categories;
