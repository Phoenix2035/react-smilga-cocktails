import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

// import components
import Navbar from './components/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path={"/"} render={(props) => <Home {...props}/>}/>
                <Route path={"/about"} render={(props) => <About {...props}/>}/>
                <Route path={"/cocktail/:id"} render={(props) => <SingleCocktail {...props}/>}/>
                <Route path={"*"} render={(props) => <Error {...props}/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App
