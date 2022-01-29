import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import About from "./Components/pages/About/About";
import Contact from "./Components/pages/Contact/Contact";
import Home from "./Components/pages/Home/Home";
import Services from "./Components/pages/Service/Service";
import Testimonial from "./Components/pages/Testimonial/Testimonial";
import Login from "./Components/pages/Registeration/login";
import Register from "./Components/pages/Registeration/register";
import Navbar from "./Components/NavBar";
import ScrollButton from './Components/ScrollButton';
  
import { useState } from "react";

// import { Langcontext } from './context/lang';
export const Langcontext = React.createContext();

const App = () => {
  const [langcont, Setlangcontext] = useState("ENGLISH");
  console.log(langcont, "langcont app");
  return (
    <div dir={langcont === "ENGLISH" ? "ltr" : "rtl"}>
      <Router>
        <Langcontext.Provider value={{ langcont, Setlangcontext }}>
          <main>
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/service" exact>
                <Services />
              </Route>
              <Route path="/testimonial" exact>
                <Testimonial />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </Langcontext.Provider>
      </Router>
      <ScrollButton />
    </div>
  );
};

export default App;
