import { Logo } from "./Logo"
import { InputSearch } from "./InputSearch"
import { StyledHeader } from "./styles"

export const Header = () => {
  return (
    <StyledHeader>
        <Logo />
        <InputSearch />
    </StyledHeader>
  )
}