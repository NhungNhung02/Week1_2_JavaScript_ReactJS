import "./ProductCard.css";

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
}

const ProductCard = ({ image, name, price }: ProductCardProps) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />

            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-price">${price}</p>
                <button className="add-to-cart">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
