import React from 'react';

export const TransactionTable = ({ items=[] }) => {
  const headerTitles = ['Transaction Id', 'Order Type', 'Date of order', 'Asset Symbol', 'Asset Amount', 'Asset Price', 'Cash Amount'];
  
  return (
    <table style={{width:'600px'}}>
      <thead>
        <tr style={{}}>
          {headerTitles.map(e => <th style={{textAlign:'center'}}>{e}</th>)}
        </tr>
      </thead>
      {<tbody>
        {items.map(e =>
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