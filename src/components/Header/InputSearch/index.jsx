import { StyledForm } from "./styles"

export const InputSearch = () => {
    return (
        <StyledForm>
            <input
                type={'search'}
                placeholder='Digitar Pesquisa'
            />
            <button type='submit'>Pesquisar</button>
        </StyledForm>
    )
}