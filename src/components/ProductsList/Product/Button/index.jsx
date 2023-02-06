export const Button = ({children, handleClick, id}) => {
    return (
        <button
            type='submit'
            onClick={() => handleClick(id)}
        >{children}</button>
    )
}