import { Product } from "./Product"
import { StyledUl } from "./styles"

export const ProductsList = ({products}) => {
    return (
        <StyledUl>
            {
                products.map(product => {
                    return (
                        <Product key={product.id} product={product}/>
                    )
                })
            }
        </StyledUl>
    )
}