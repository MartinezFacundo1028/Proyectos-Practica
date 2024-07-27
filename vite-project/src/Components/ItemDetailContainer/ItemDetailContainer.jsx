import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../asymock";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { productId } = useParams()
    
    useEffect(() => {
        getProductById(parseInt(productId))
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => console.log(err));
    }, [productId]);

    return (
        <>
            {product ? (
                <ItemDetail product={product} />
            ) : (
                <div className="loading-container">
                    <p className="loading-text">Loading...</p>
                    <div className="spinner"></div>
                </div>
            )}
        </>
    );
}

export default ItemDetailContainer