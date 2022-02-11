import { useEffect, useState } from "react";
import ItemDetail from "../../Components/ItemDetail";
import { useParams } from "react-router-dom";
import { Items } from "../../mock/MockedItems";

function ItemDetailContainer() {
    const[productos, setProductos] = useState([]);
    const { productID } = useParams();

    useEffect(() => {
        const myPromise = new Promise((res, rej) => {
            res(Items);
        });
        myPromise.then(function(res) {
            let singleItem = res.find((elem) => {
                return elem.productID == productID;
            });
            setProductos(singleItem)
        });
    },[productID]);

    return (
        <>
        <ItemDetail productos={productos}/>
        </>
    );
}

export default ItemDetailContainer;
