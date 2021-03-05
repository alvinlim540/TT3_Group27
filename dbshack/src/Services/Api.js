var axios = require("axios");

export async function GetUserAsset() {
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

  var result;
  await axios(config)
    .then(function (response) {
      //console.log(JSON.stringify(response.data));
      result = response.data;
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });
  return result;
}
