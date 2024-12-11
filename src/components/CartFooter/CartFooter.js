import './style.scss';

const CartFooter = ({ total }) => {
    const { count, price } = total;

    const priceFormater = new Intl.NumberFormat();//что бы цена имелла разделение для читабельности

    return (
        <footer className="cart-footer">
            <div className="cart-footer__count">{count} ед.</div>
            <div className="cart-footer__price">{priceFormater.format(price)} грн</div>
        </footer>
    )
}

export default CartFooter;
