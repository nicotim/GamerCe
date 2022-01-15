import { useEffect, useState } from "react"
import Item from "../Components/item";

const Generos = [
    {catId:1, category:"A"},
    {catId:2, category:"B"},
];

function Category() {
    const[categories, setCategories] = useState([]);

    useEffect(() => {
        const catPromise = new Promise((res, rej) => {
            res(Generos);
        });
        catPromise.then((res) => setCategories(res));
    },[]);

    return (
        <>
            {categories.map((Generos) => 
            <Item to={`/categoria/${Generos.category}`} key={Generos.catId}/>)};
        </>
    );
};

export default Category;