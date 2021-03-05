import React, { Component } from "react";
// import GetUserProfile from './Services/Api.js'

// class UserProfilePage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

// class UserProfilePage extends Component {
//        // Create state variables
//   let [responseData, setResponseData] = React.useState('')
    
//        // fetches data
//   const fetchData = (e) => {
//             e.preventDefault()
    
//              GetUserProfile.getData()
//              .then((response)=>{
//                  setResponseData(response.data)
//                 //  console.log(response)
//                 //  console.log(response.status);
//                 //  console.log(response.statusText);
//                 //  console.log(response.headers);
//                 //  console.log(response.config);
//              })
//              .catch((error) => {
//                  console.log(error)
//              })
//          }
//          }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.userid}</h1>
//       </div>
//     );
//   }
// }

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{this.state.userid}</h1>
      </div>
    );
  }
}

export default UserProfilePage;
