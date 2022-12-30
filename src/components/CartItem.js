// rfc
import React from 'react'

export default function CartItem(props) {
    let { product, quantity, deleteProduct, updateQuantityProduct } = props;
    let { id, name, price, image, description, inventory, ratting } = product;

    const showTotalPriceProduct = () => {
        return quantity * price;
    }
    // 
    return (
        <tr>
            <th scope="row">
                <img src={image} alt={name} className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{name}</strong>
                </h5>
            </td>
            <td>{price}$</td>
            <td className="center-on-small-only">
                <span className="qty"> {quantity} </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label 
                        onClick={()=>{updateQuantityProduct(product, -1)}}
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                    >
                        <a>—</a>
                    </label>
                    <label 
                        onClick={()=>{updateQuantityProduct(product, 1)}}
                        className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                    >
                        <a>+</a>
                    </label>
                </div>
            </td>
            <td> {showTotalPriceProduct()} $</td>
            <td>
                <button type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" data-placement="top" title="true" 
                    data-original-title="Remove item"
                    onClick={()=>{ deleteProduct(product)}}
                >
                    XÓA SP KHỎI GIỎ HÀNG
                </button>
            </td>
        </tr>
    )
}
