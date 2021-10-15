import React, { useState } from 'react';
import '../styles/ProductItem.scss';

import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const [cart, setCart] = useState([]);

	const handleClic = () => {
		setCart([]);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>$ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClic} >
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;