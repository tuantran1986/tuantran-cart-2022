// rfc
import React from 'react'
import CartItem from './CartItem'
import CartResult from './CartResult'

export default function CartList(props) {
    let { cartProducts, deleteProduct, updateQuantityProduct } = props;

    const calculateTotalPrice = () => {
        let result = 0;
        if (cartProducts.length) {
            cartProducts.map(item => {
                result += (item.product.price * item.quantity);
            })
        }
        return result;
    }
    const showCartItem = () => {
        return cartProducts.length
            ?
            (cartProducts.map((item, index) => {
                let { product, quantity } = item;
                return <CartItem 
                            key={index} 
                            product={product} 
                            quantity={quantity} 
                            deleteProduct={deleteProduct} 
                            updateQuantityProduct={updateQuantityProduct} 
                        />
            }))
            : null
    }
    // 
    return (
        <section className="section">
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th />
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {showCartItem()}
                        <CartResult calculateTotalPrice={calculateTotalPrice()} />
                    </tbody>
                </table>
            </div>
        </section>
    )
}