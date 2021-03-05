
import { useState } from 'react'

const BuyAsset = ({ onBuy }) => {
    // const [orderType, setText]
    const [assetAmount, setAmount] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!assetAmount) {
            alert('Please enter the amount you would like to purchase.')
            return
        }

        onBuy({assetAmount})

        setAmount('')
    }

    return (
        <form className='buy-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Asset Amount</label>
                <input
                    type='text'
                    placeholder='Enter amount to purchase'
                    value={assetAmount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
        </form>
    )
}

export default BuyAsset
