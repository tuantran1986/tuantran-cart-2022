// rfc
import React from 'react';

export default function ProductItem(props) {
    let { product, handleAddProductToCart } = props;
    let { id, name, price, image, description, inventory, ratting } = product;

    // 
    const showRattings = () => {
        let result = [];
        for (let i = 0; i < ratting; i++) {
            result.push(<li key={i}><i className="fa fa-star" /></li>);
        }
        for (let i = ratting; i < 5; i++) {
            result.push(<li key={i}><i className="fa fa-star-o" /></li>);
        }

        return result;
    }

    // 
    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src={image} alt={name} />
                    <a>
                        <div className="mask waves-light waves-effect waves-light" />
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a>{name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        {showRattings()}
                    </ul>
                    <p className="card-text">
                        {description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{price}$</span>
                        <span className="right">
                            <a
                                className="btn-floating blue-gradient"
                                data-toggle="tooltip" data-placement="top"
                                title="true" data-original-title="Add to Cart"
                                onClick={() => { handleAddProductToCart(product, 1) }}
                            >
                                <i className="fa fa-shopping-cart" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}