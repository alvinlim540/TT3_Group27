  
import React from "react";
import axios from "axios";
import {CallApi} from "./Api.js";

export default class CurrentPrice extends React.Component {
  get= () => {
    CallApi().then((res) => {
        console.log(res);
      });
  };
  
  constructor(props) {
    super(props);
    this.state = {
        assetSymbol: "", 
        price: "",
        timestamp:"",};
  }

  componentDidMount() {
      this.get();
  }


  /*async componentDidMount() {
    const url = "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current";
    const response = await fetch(url);
    const data = await response.json();
    this.setState(
        { assetSymbol: data.assetSymbol, 
            price: data.price,
            timestamp:data.timestamp,
        });
  }
  */

  render() {
    return (
      <div>
        <div>
            <h1>Your current asset price is:</h1>
        </div>
        <div>{this.state.assetSymbol}</div>
        <div>{this.state.price}</div>
        <div>{this.state.timestamp}</div>
        <button onClick={CallApi}>
          Fetch Latest
        </button>
      </div>
    );
  }
}