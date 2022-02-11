import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { NavDropdown} from "react-bootstrap";

const Categorias = [
    {catId:1, nombre:'Accion'},
    {catId:2, nombre:'Aventura'},
];

function Categoria() {
    const[categorias, setCategorias] = useState([]);

    useEffect(() => {
        const catPromise = new Promise((res, rej) => {
            res(Categorias);
        });
        catPromise.then((res) => setCategorias(res));
    },[]);

    return (
        <>
            {categorias.map((categorias) => {
                return (
                    <NavDropdown.Item 
                        as={NavLink}
                        to={`/categoria/${categorias.nombre}`}
                        key={categorias.catId}
                        >
                        {categorias.nombre}
                    </NavDropdown.Item>
                );
            })};
        </>
    );
};

export default Categoria;