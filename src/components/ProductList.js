// rfc
import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList(props) {
    let { productList, handleAddProductToCart } = props;

    const showProductList = () => {
        return productList.length
            ?
            (productList.map((item, index) => {
                // let {id, name, price, image, description, inventory, ratting} = item;
                return <ProductItem
                    key={index}
                    product={item}
                    handleAddProductToCart={handleAddProductToCart}
                    // key={id} name={name} 
                    // price={price} image={image} 
                    // description={description} 
                    // inventory={inventory} ratting={ratting} 
                />
            }))
            : null;
    }

    // 
    return (
        <section className="section">
            <h1 className="h1center">Danh Sách Sản Phẩm</h1>
            {/* <h1 className="section-heading">Danh Sách Sản Phẩm</h1> */}
            <div className="row">
                {/* Product */}
                {showProductList()}
            </div>
        </section>
    )
}
