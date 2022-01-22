import { useEffect, useState } from "react";
import { ItemDetail } from "../../Components/ItemDetail";
import { useParams } from "react-router-dom";
import { getFriestore } from "../../Firebase";

const ItemDetailContainer = () => {
    const [productos, setProduct] = useState([]);

    /* useEffect(() => {
        const myPromise = new Promise((res, rej) => {
            res(MockedItems)
        });
        myPromise.then(function (res) {
            let single = res.find((element) => {
             return element.id === itemId;
            });
            setProduct(single)
        })},[]); */

        useEffect(() => {
            const bd = getFriestore();
            const itemCollection = bd.collection("items");
            itemCollection.get().then((value) => {
                let single = value.docs.map((e) => {return e.data()})
            setProduct(single)
            })
        },[])

    return (  <ItemDetail productos={productos}/>)

};

export default ItemDetailContainer;
