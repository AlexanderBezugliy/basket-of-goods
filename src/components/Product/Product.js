import ButtonDellete from '../ButtonDellete/ButtonDellete';
import Count from '../Count/Count';
import './style.scss';

const Product = ({ product, deleteCart, increase, decrease, changeValue }) => {
    const { img, title, priceTotal, count, id } = product;

    const priceFormater = new Intl.NumberFormat();//что бы цена имелла разделение для читабельности
    
    return (
        <section className="product">
            <div className="product__img">
                <img src={`./img/products/${img}`} alt={title} />
            </div>
            <div className="product__title">{title}</div>
            <div className="product__count">
                <Count count={count} increase={increase} decrease={decrease} id={id} changeValue={changeValue} />
            </div>
            <div className="product__price">
                {priceFormater.format(priceTotal)} грн
                </div>
            <div className="product__controls">
                <ButtonDellete deleteCart={deleteCart} id={id} />
            </div>
        </section>
    )
}

export default Product;