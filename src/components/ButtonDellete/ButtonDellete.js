

const ButtonDellete = ({ deleteCart, id }) => {
    return (
        <button type="button" onClick={() => deleteCart(id) } >
            <img src="./img/icons/cross.svg" alt="Delete" />
        </button>
    )
}

export default ButtonDellete;