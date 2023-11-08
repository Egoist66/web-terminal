const Button = ({children, ...attrs}) => {
    return (
        <button {...attrs}>{children}</button>
    )
}

export default Button