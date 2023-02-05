import { StyledLi } from "./styles"

export const CartProduct = ({productInCart, removeProductFromCart}) => {
    const {id, name, img, category} = productInCart
    return (
        <StyledLi key={id}>
            <figure>
                <img src={img}/>
            </figure>
            <section>
                <div className={'product-details'}>
                    <h3>{name}</h3>
                    <p>{category}</p>
                </div>
                <a onClick={() => {removeProductFromCart(id)}}>Remover</a>
            </section>
        </StyledLi>
    )
}