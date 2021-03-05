import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';


var axios = require('axios');




//TO DO: LINK AFTER SUCCESFUL LOGIN TO NEXT PAGE

// TO DO: REQUEST LOGIN FROM USER
//following code from postman
export async function loginUser(username,password){
  // var data = '{\n    "username":"Group27" ,\n    "password":"wmaAjjDuetiXreh"\n}';
  
  var data = JSON.stringify({"username": username ,"password":password});
  // var credentials = {​​​​​​username: ID ,password:pass}​​​​​​​​;
  // var data = JSON.stringify(credentials);


  var config = {
    method: 'post',
    mode: "no-cors",
    url: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login',
    headers: { 
      'x-api-key': 'vSxwt0bA4J2JMaIfDOrAZ7YUykHi7v64lBhi1Eug', 
      'Content-Type': 'text/plain'
    },
    data : data
  };
  var result;
  await axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    result = response.data;
    
  })
  .catch(function (error) {
    console.log(error);
  });
    return result
  }


// async function loginUser(credentials) {
//   return fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', {
//     method: 'POST',
//     headers: {
//       'username':'Group27',
//       'password': 'wmaAjjDuetiXreh'

//     },
//     body: JSON.stringify(credentials)
//   })
//     .then(data => data.json())
//  }


export default function Login({setToken}) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return(
    <div className="login-wrapper">
    <h1>Please Log In</h1>
    <form onSubmit = {handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}


Login.propTypes = {
  setToken: PropTypes.func.isRequired
}