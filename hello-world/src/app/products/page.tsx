import Link from "next/link";

const Products = () => {
    const ONE = 1;
    const TWO = 2;
    const THREE = 3;

    return (
        <>
            <h1>Lista de productos</h1>
            <Link href={`products/${ONE}`}>Producto1</Link>
            <Link href={`products/${TWO}`}>Producto2</Link>
            <Link href={`products/${THREE}`} replace>Producto3</Link>
        </>
    )
}

export default Products;