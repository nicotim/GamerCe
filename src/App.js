import React from "react";
import { NavBar } from "./Components/navbar/navbar";
import { BrowserRouter, Switch, Route} from "react-router-dom"
import ItemListContainer from "./Containers/itemListContainer";
import { CartProvider } from "./Context/cartContext";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import Cart from "./Components/Cart/cart";

const App = () => {
    return (
        <BrowserRouter>
        <CartProvider>     
                <div className = "App">
                        <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer/>
                        </Route>
                        <Route exact component={ItemDetailContainer} path="/nombre/:id" />
                        <Route path="/cart">
                            <Cart />
                        </Route>
                    </Switch>
                </div>
        </CartProvider>
        </BrowserRouter>  
    )
};

export default App;
