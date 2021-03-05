import { useState } from "react"
import Button from "./Button"

const BuyAsset = ({ onBuy }) => {
  const [amount, orderType, setAmount] = useState('')

  //Buy Asset
  const buyAsset = async ({ amount }) => {
    const res = await fetch(
      "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-api-key": "vSxwt0bA4J2JMaIfDOrAZ7YUykHi7v64lBhi1Eug",
        },
        body: {
            "accountKey": "8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924",
            "orderType": "BUY",
            "assetAmount": amount,
        }
      }
    );

    const data = await res.json();

    return data;
  };

  //Sell Asset
  const sellAsset = async ({ amount }) => {
    const res = await fetch(
      "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "x-api-key": "vSxwt0bA4J2JMaIfDOrAZ7YUykHi7v64lBhi1Eug",
        },
        body: {
            "accountKey": "8ee1f2c6-ef52-4a6e-ae4c-1dbc5b6f0924",
            "orderType": "SELL",
            "assetAmount": amount,
        }
      }
    );

    const data = await res.json();

    return data;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!amount) {
      alert("Please enter the amount you would like to purchase.");
      return;
    }

    if (!orderType) {
        alert("Please specify BUY or SELL.");
        return;
    }

    onBuy({ amount });

    setAmount('');
  };

  return (
    <div className="container">
        <form className="buy-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Asset Amount</label>
        <input
            className="input"
            type="text"
            placeholder="e.g. 10.00"
            // value={amount}
            // onChange={(e) => setAmount(e.target.value)}
        />

        <input 
            className="input"
            type="text"
            placeholder="BUY or SELL"
            // value={orderType}
            // onChange={(e) => orderType(e.target.value)}
        />

        <Button text="Submit" onClick={
            ""
            //Condition to detect if option is BUY or SELL,
            //then call buyAsset or sellAsset accordingly
        } />

      </div>
    </form>
    </div>
  );
};

export default BuyAsset;