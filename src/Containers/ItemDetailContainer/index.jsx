import { useEffect, useState } from "react";
import MockedItems from "../../mock/MockedItems";
import { ItemDetail } from "../../Components/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productos, setProduct] = useState([]);
    const {itemId} = useParams();

    useEffect(() => {
        const myPromise = new Promise((res, rej) => {
            res(MockedItems)
        });
        myPromise.then(function (res) {
            let single = res.find((element) => {
             return element.id === itemId;
            });
            setProduct(single)
        })},[]);

    return (  <ItemDetail productos={productos}/>)

};

export default ItemDetailContainer;
