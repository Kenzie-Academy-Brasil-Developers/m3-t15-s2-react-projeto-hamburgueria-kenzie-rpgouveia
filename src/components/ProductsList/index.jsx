import { Product } from "./Product"
import { StyledUl } from "./styles"

export const ProductsList = ({filteredProducts, handleClick}) => {
    return (
        <StyledUl>
            {filteredProducts.map(product => {
                return (
                    <Product 
                        key={product.id} 
                        product={product} 
                        handleClick={handleClick}
                    />
                )
            })}
        </StyledUl>
    )
}