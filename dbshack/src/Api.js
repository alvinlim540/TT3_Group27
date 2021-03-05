var axios = require('axios');

export async function CallApi() {
    
    var data = '';
    
    var config = {
      method: 'post',
      url: 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current',
      headers: { 
        'x-api-key': 'vSxwt0bA4J2JMaIfDOrAZ7YUykHi7v64lBhi1Eug'
      },
      data : data
    };

    var result;

    await axios(config)
    .then(function (response) {
      result=response.data;
      console.log(JSON.stringify(response.data));
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });

    return result;
}

