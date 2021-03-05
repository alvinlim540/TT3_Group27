export default function GetUserAsset() {
  var axios = require("axios");
  var data = JSON.stringify({
    accountKey: "8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924",
  });

  var config = {
    method: "post",
    url:
      "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance",
    headers: {
      "x-api-key": "vSxwt0bA4J2JMaIfDOrAZ7YUykHi7v64lBhi1Eug",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
