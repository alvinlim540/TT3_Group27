import React, { Component } from "react";
import Table from "../Components/Table";

class UserAssetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Your current asset</h1>
        <Table />
      </div>
    );
  }
}

export default UserAssetPage;
