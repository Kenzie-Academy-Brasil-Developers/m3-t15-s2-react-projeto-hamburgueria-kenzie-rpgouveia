import { Logo } from "./Logo"
import { InputSearch } from "./InputSearch"
import { StyledHeader } from "./styles"

export const Header = ({setSearch}) => {
  return (
    <StyledHeader>
        <Logo />
        <InputSearch setSearch={setSearch} />
    </StyledHeader>
  )
}