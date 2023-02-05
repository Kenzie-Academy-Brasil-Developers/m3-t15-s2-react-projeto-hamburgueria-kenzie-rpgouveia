import { StyledImage } from "./styles"
import BurguerKenzie from "/src/assets/BurguerKenzie.png"

export const Logo = () => {
    return (
        <StyledImage 
            src={BurguerKenzie}
            alt="Burguer Kenzie Logo"
        />
    )
}