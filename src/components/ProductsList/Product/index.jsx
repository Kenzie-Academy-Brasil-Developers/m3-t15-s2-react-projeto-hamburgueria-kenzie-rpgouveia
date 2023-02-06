import { StyledLi } from "./styles"
import { Button } from "./Button"

export const Product = ({product, handleClick}) => {
    const {id, name, category, price, img} = product

    return (
        <StyledLi>
            <figure>
                <img src={img} />
            </figure>
            <h1>{name}</h1>
            <p>{category}</p>
            <h2>R$ {price.toFixed(2)}</h2>
            <Button id={id} handleClick={handleClick} >
                Adicionar
            </Button>
        </StyledLi>
    )
}