import React, { Component } from "react";
import {GetUserProfile} from "./Services/Api";

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserProfile: []
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.GetUserProfile()}</h1>
        <h2>{this.state.response.data}</h2>
      </div>
    );
  }
}


export default UserProfilePage;