import React, { useEffect, useState } from "react";
import { ItemList } from "../../Components/itemList";
import { getFriestore } from "../../Firebase";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const bd = getFriestore();
        const itemCollection = bd.collection("items");
        itemCollection.get().then((value) => {
            let aux = value.docs.map((e) => {return {...e.data(), id: e.id}})
        setItems(aux)
        })
    },[])

    return (
        <>
        <ItemList items={items}/>
        </>
    );

};

export default ItemListContainer;