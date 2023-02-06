import { StyledForm } from "./styles"
import { useState } from "react"

export const InputSearch = ({setSearch}) => {
    const [searchValue, setSearchValue] = useState('')
    const submit = (event) => {
        event.preventDefault()
        setSearch(searchValue)
        setSearchValue('')
    }
    return (
        <StyledForm onSubmit={submit}>
            <input
                type={'search'}
                placeholder='Digitar Pesquisa'
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <button type='submit'>Pesquisar</button>
        </StyledForm>
    )
}