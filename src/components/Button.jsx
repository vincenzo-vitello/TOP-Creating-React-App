const Button = ({ text = 'Clicky', color = "blue", fontSize = 25, handleClick}) => {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return <button style={buttonStyle} onClick={handleClick} >{text}</button>
}

export default Button