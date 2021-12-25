import React, { useEffect, useState } from "react";
import MockedItems from "../../mock/MockedItems";
import ItemList from "../itemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { catId } = useParams();

    useEffect(() => {
        const getItems = new Promise((res) => {
            setTimeout(() => {
                const myData = catId 
                ? MockedItems.filter((item) => item.category === catId ) 
                : MockedItems;
                
                res(myData);
            }, 1000 )
        });

        getItems.then((res) => {
            setItems(res);
        });

    },[catId]);

    return (
        <>
        <ItemList items={items}/>
        </>
    )

}

export default ItemListContainer;