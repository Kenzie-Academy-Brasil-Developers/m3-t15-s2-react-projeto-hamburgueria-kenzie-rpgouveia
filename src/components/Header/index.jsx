import { Logo } from "./Logo"
import { InputSearch } from "./InputSearch"
import { StyledHeader } from "./styles"
import { StyledContainer } from "../../styles/container"

export const Header = ({setSearch}) => {
  return (
    <StyledContainer>
        <StyledHeader>
            <Logo />
            <InputSearch setSearch={setSearch} />
        </StyledHeader>
    </StyledContainer>
  )
}