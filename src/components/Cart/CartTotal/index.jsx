import { StyledForm } from "./styles"

export const CartTotal = ({removeAllProductsFromCart, cartTotal}) => {

    function submit(event) {
        event.preventDefault()
        removeAllProductsFromCart()
    }

    return (
        <StyledForm onSubmit={submit}>
            <div>
                <p>Total</p>    
                <p><span>R$ {cartTotal.toFixed(2)}</span></p>
            </div>
            <button type='submit'>Remover Todos</button>
        </StyledForm>
    )
}