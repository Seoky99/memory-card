function CustomButton({buttonType, handleClick, selected}) {
    return (
        <button name={buttonType} onClick={(e) => handleClick(e)} className={selected ? "active-button" : ""}>{buttonType}</button>
    )
}
export default CustomButton;