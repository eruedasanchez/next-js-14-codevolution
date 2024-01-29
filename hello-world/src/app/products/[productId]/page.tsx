const ProductDetails = ({ params } : { params : {productId: string}}) => {
    const { productId } = params;
    
    return (
        <h1>Details about product {productId}</h1>
    )
}

export default ProductDetails;