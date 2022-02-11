import { useState } from "react";
import  {ButtonGroup, Button} from "react-bootstrap";

const ItemCount = ({onAdd}) => {
    const [contador, setContador] = useState(1);

    const handlerOnAdd = () => {
        onAdd(contador);
    };

    function Check(props) {
        return contador < props.cantidad;
    };

    return (
        <>
        <ButtonGroup className="mb-2">
            <Button onClick={contador > 1 ? () => {setContador(contador - 1)}
            : () => {setContador(contador)}
            }>
                -
            </Button>
            <Button disabled>{contador}</Button>
            <Button onClick={Check ? () => {setContador(contador + 1)}
            : () => {setContador(contador)}
            }>
                +
            </Button>
        </ButtonGroup>
        <Button className="mb-2 ml-3" onClick={handlerOnAdd}>
            Añadir
        </Button>
        </>
    );
};

export default ItemCount;