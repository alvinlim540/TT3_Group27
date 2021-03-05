import PropTypes from 'prop-types'

const BuyButton = ({ color, text, onBuy}) => {
    return (
        <button
            onClick = {onBuy}
            className = 'btn'
            >
                {text}
            </button>
    )
}

BuyButton.defaultProps = {
    color: '#C01125',
}

BuyButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default BuyButton
