import { useState } from "react";
import Button from "./Button";

const BuyAsset = ({ onBuy }) => {
  const [amount, setAmount] = useState("");

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

    onBuy({ amount });

    setAmount("");
  };

  return (
    <form className="buy-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Asset Amount</label>
        <input
          type="text"
          placeholder="Enter amount to purchase"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select>
            <option value="BUY">Buy</option>
            <option value="SELL">Sell</option>
        </select>

        <Button text="Submit" onClick={buyAsset} />

      </div>
    </form>
  );
};

export default BuyAsset;
