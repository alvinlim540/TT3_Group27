import PropTypes from 'prop-types'

const BuyButton = ({ color, text, onClick}) => {
    return (
        <button
            onClick = {onClick}
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
