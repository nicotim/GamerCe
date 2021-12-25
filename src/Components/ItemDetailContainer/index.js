import { useEffect, useState } from "react";
import MockedItems from "../../mock/MockedItems";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({greeting}) => {
    const [product, setProduct] = useState([]);
    const {itemId} = useParams();

    useEffect(() => {
        const getItems = new Promise((res, rej) => {
            setTimeout(() => {
                const myData = MockedItems.filter((item) => item.category === itemId ) 

                
                res(myData);
            }, 1000 )
        });

        getItems.then((res) => {
            setProduct(res);
        });

    },[itemId]);

    return (  <ItemDetail {...product}/>)

};

export default ItemDetailContainer;
