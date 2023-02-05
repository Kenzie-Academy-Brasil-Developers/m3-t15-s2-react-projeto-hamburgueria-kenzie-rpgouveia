import { StyledAside } from "./styles"
import { CartWarning } from "./CartWarning"
import { CartProduct } from "./CartProduct"
import { CartTotal } from "./CartTotal"

export const Cart = ({currentSale, removeProductFromCart, removeAllProductsFromCart, cartTotal}) => {
    return (
        <StyledAside>
            <div className={'cart_header'}>
                <h2>Carrinho de Compras</h2>
            </div>
            <ul>
                {   
                    currentSale.length == 0 ? (
                        <CartWarning />
                    ) : (
                        currentSale.map(productInCart => {
                            return (
                                <CartProduct
                                    key={productInCart.id} 
                                    productInCart={productInCart}
                                    removeProductFromCart={removeProductFromCart}
                                />
                            )
                        })
                    )
                }
            </ul>
            {
                currentSale.length !== 0 && (
                    <CartTotal
                        removeAllProductsFromCart={removeAllProductsFromCart}
                        cartTotal={cartTotal}
                    />
                )
            }
        </StyledAside>
    )
}