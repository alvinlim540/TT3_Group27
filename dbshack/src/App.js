import { useEffect } from 'react'
import BuyButton from './components/BuyButton'
import BuyAsset from './components/BuyAsset'

const App = () => {

  //Buy Asset
  const buyAsset = async (amount) => {
    const res = await fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'x-api-key': 'vSxwt0bA4J2JMaIfDOrAZ7YUykHi7v64lBhi1Eug',
      },
      body: JSON.stringify(amount),
    })

    const data = await res.json()

    return data
  }

  return (
    <div className="App">
      <BuyAsset/>
      <BuyButton
        text='Buy'
      />
    </div>
  );
}

export default App;
