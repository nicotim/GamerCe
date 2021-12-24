import { useEffect, useState } from "react";
import MockedItems from "../../mock/MockedItems";
import ItemList from "../itemList";


const ItemListContainer = () => {
    
    const [items, setItems] = useState([]);
    useEffect(() => {
        const itemPromise = new Promise((res, rej) => {
            res(MockedItems);
        });
        itemPromise.then((res) => setItems(res));
    }, [items]);

    return ( <ItemList items={items}/>)
};

export default ItemListContainer;