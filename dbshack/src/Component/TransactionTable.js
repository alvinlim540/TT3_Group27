import React from 'react';

export const TransactionTable = () => {
  const headerTitles = ['Transaction Id', 'Order Type', 'Date of order', 'Asset Symbol', 'Asset Amount', 'Asset Price', 'Cash Amount'];
  const mockData = [
    {
      "accountKey": "8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924",
      "orderType": "BUY",
      "timestamp": 1614324803,
      "assetAmount": 25,
      "assetSymbol": "TTK",
      "assetPrice": 27.4,
      "cashAmount": 685,
      "transactionId": 133448
    },
    {
      "accountKey": "8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924",
      "orderType": "SELL",
      "timestamp": 1614324804,
      "assetAmount": 25,
      "assetSymbol": "TTK",
      "assetPrice": 28.75,
      "cashAmount": 718.75,
      "transactionId": 221568
    },
    {
      "accountKey": "8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924",
      "orderType": "BUY",
      "timestamp": 1614324796,
      "assetAmount": 7,
      "assetSymbol": "TTK",
      "assetPrice": 25.68,
      "cashAmount": 179.76,
      "transactionId": 235837
    },
    {
      "accountKey": "8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924",
      "orderType": "SELL",
      "timestamp": 1614324781,
      "assetAmount": 24,
      "assetSymbol": "TTK",
      "assetPrice": 24.46,
      "cashAmount": 587.04,
      "transactionId": 325361
    },
    {
      "accountKey": "8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924",
      "orderType": "BUY",
      "timestamp": 1614324786,
      "assetAmount": 20,
      "assetSymbol": "TTK",
      "assetPrice": 23.58,
      "cashAmount": 471.6,
      "transactionId": 372445
    }];
  return (
    <table style={{width:'600px'}}>
      <thead>
        <tr style={{}}>
          {headerTitles.map(e => <th style={{textAlign:'center'}}>{e}</th>)}
        </tr>
      </thead>
      {<tbody>
        {mockData.map(e =>
          <tr>
            <td style={{textAlign:'center'}}>{e.transactionId}</td>
            <td style={{textAlign:'center'}}>{e.orderType}</td>
            <td style={{textAlign:'center'}}>{e.timestamp}</td>
            <td style={{textAlign:'center'}}>{e.assetSymbol}</td>
            <td style={{textAlign:'center'}}>{e.assetAmount}</td>
            <td style={{textAlign:'center'}}>{e.assetPrice}</td>
            <td style={{textAlign:'center'}}>{e.cashAmount}</td>
          </tr>)}
      </tbody> }

    </table>
  )
}