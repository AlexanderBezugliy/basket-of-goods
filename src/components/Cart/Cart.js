import { useEffect, useState } from "react"
import CartFooter from "../CartFooter/CartFooter";
import CartHeader from "../CartHeader/CartHeader";
import Product from "../Product/Product";

import data from "../../data";

const Cart = () => {
    const [cart, setCart] = useState(data);
    const [total, setTotal] = useState({
        price: cart.reduce((prev, curr) => { return prev + curr.priceTotal }, 0),
        count: cart.reduce((prev, curr) => { return prev + curr.count }, 0),
    });

    useEffect(() => {
        setTotal({
            price: cart.reduce((prev, curr) => { return prev + curr.priceTotal }, 0),
            count: cart.reduce((prev, curr) => { return prev + curr.count }, 0),
        })
    }, [cart])

    const deleteCart = (id) => {
        setCart((cart) => cart.filter((product) => id !== product.id));
    };

    const increase = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: ++product.count,
                        priceTotal: product.count * product.price
                    }
                }

                return product;
            })
        })
    }

    const decrease = (id) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id && product.count > 1) {
                    return {
                        ...product,
                        count: --product.count,
                        priceTotal: product.count * product.price
                    }
                }

                return product;
            })
        })
    }

    const changeValue = (id, value) => { 
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) { 
                    return {
                        ...product,
                        count: value,
                        priceTotal: value * product.price
                    }
                }

                return product
            })
        })
    }

    return (
        <section className="cart">
            <CartHeader />

            {
                cart.map((product) => {
                    return <Product key={product.id} 
                                    product={product} 
                                    deleteCart={deleteCart} 
                                    increase={increase}
                                    decrease={decrease}  
                                    changeValue={changeValue} />;
                })
            }

            <CartFooter total={total} />
        </section>
    )
}

export default Cart;