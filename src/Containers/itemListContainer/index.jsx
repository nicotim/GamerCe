import React, { useEffect, useState } from "react";
import ItemList from "../../Components/itemList/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Items }  from "../../mock/MockedItems";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const { nombre } = useParams();

    useEffect(() => {
        const myPromise = new Promise((res, rej) => {
            res(Items);
        });

    if (nombre) {
        myPromise.then(function (res) {
            let match = res.filter((elem) => {
                return elem.categoria === nombre;
            });
            setProductos(match);
        });
    }else{
        myPromise.then((res) => setProductos(res));
         }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[productos]);

    return (
        <>
            <Container className="p-2">
                <Row xs={1} sm={2} md={3} lg={4}>
                    <ItemList productos={productos}/>
                </Row>
            </Container>
        </>
    );
};

export default ItemListContainer;