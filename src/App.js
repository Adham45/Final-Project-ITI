import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { useState } from 'react';


import About from './Components/pages/About/About';
import Contact from './Components/pages/Contact/Contact';
import Home from './Components/pages/Home/Home';
import Services from './Components/pages/Service/Service';
import Testimonial from './Components/pages/Testimonial/Testimonial';
import Navbar from './Components/NavBar';
// Transalation context
export const Langcontext = React.createContext()

const App = () => {
    const [langcont, Setlangcontext] = useState("ENGLISH")
    console.log(langcont, "langcont app")
    return (
        <div dir={langcont === "ENGLISH"? "ltr": "rtl"}>
              <Router>
              <Langcontext.Provider value={{langcont,Setlangcontext}}>
                <main>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact="exact">
                            <Home/>
                        </Route>
                        <Route path="/about" exact="exact">
                            <About/>
                        </Route>
                        <Route path="/service" exact="exact">
                            <Services/>
                        </Route>
                        <Route path="/testimonial" exact="exact">
                            <Testimonial/>
                        </Route>
                        <Route path="/contact" exact="exact">
                            <Contact/>
                        </Route>
                        <Redirect to="/"/>
                    </Switch>
                </main>
                </Langcontext.Provider>
            </Router>
        </div>
    );
}

export default App;
