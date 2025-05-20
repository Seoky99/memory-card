function CustomButton({buttonType, handleClick}) {
    return (
        <button name={buttonType} onClick={(e) => handleClick(e)}>{buttonType}</button>
    )
}
export default CustomButton;