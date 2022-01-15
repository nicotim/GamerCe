import React, { useEffect, useState } from "react";
import MockedItems from "../../mock/MockedItems";
import { ItemList } from "../../Components/itemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { nombre } = useParams();

    useEffect(() => {
        const getItems = new Promise((res) => {
            res(MockedItems);
        });
        if (nombre) {
            getItems.then(function (res) {
                let match = res.filter((element) => {
                return element.category === nombre}
                );
            setItems(match);
            });
        }else{
            getItems.then((res) => setItems(res));
        }
    }, [items]);

    return (
        <>
        <ItemList items={items}/>
        </>
    );

};

export default ItemListContainer;