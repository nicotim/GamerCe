const Link = ({ruta, nombre}) => {
    return ( 
    <a href={ruta}>
        <li>{nombre}</li>
    </a>
    )
}

export default Link;