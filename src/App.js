import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation  from "./Components/navbar/Navigation";
import { BrowserRouter, Switch, Route} from "react-router-dom"
import ItemListContainer  from "./Containers/itemListContainer";
import { CartContext } from "./Context/cartContext";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import Cart from "./Components/Cart/cart";

const App = () => {
    return (
        <BrowserRouter>
        <CartContext>
                <Navigation/>
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route exact component={ItemDetailContainer} path="/item/:productID" />
                    <Route path="/categoria/:nombre">
                        <ItemListContainer/>
                    </Route>
                    <Route path="/cart">
                        <Cart/>
                    </Route>
                </Switch>
        </CartContext>
        </BrowserRouter>  
    )
};

export default App;
