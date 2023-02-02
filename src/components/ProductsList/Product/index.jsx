import { StyledLi } from "./styles"

export const Product = ({product}) => {
    return (
        <StyledLi>
            <figure>
                <img src={product.img} />
            </figure>
            <h1>{product.name}</h1>
            <p>{product.category}</p>
            <h2>R$ {product.price.toFixed(2)}</h2>
            <button>Adicionar</button>
        </StyledLi>
    )
}