import React from "react";
import { NavBar } from "./Components/navbar/navbar";
import { BrowserRouter, Switch, Route} from "react-router-dom"
import ItemListContainer from "./Components/itemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";

const App = () => {
    return (
        <BrowserRouter>      
            <div className = "App">
                    <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/categories/:catId">
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/products/:itemId">
                        <ItemDetailContainer/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>  
    )
};

export default App;
