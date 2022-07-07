import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ProductsData } from "../../Data/ProductsData";
import './styles.modules.scss'

const Products = () => {
    const { addItemToCart } = useContext(CartContext)


    return (
        <div className="productosContainer">
            {ProductsData.map((product, i) =>
                <div key={i} className="product">
                    <img src={product.img} alt={product.name} />
                    <div>
                        <p>
                            {product.name} - ${product.price}
                        </p>
                    </div>
                    {!product.inCart ? (
                        <button onClick={() => addItemToCart(product)}>
                            Agregar al carrito
                        </button>
                    ) : (
                        <button>En el carrito</button>
                    )}
                </div>
            )}
        </div>
    )
}

export default Products