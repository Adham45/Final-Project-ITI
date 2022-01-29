import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './Components/pages/About/About';
import Contact from './Components/pages/Contact/Contact';
import Home from './Components/pages/Home/Home';
import Services from './Components/pages/Service/Service';
import Testimonial from './Components/pages/Testimonial/Testimonial';
import Navbar from './Components/NavBar';
import ThemesContext , {themes} from  './Components/themes';
import {BsFillMoonStarsFill , BsFillSunFill} from  'react-icons/bs';

const App = () => {
  
  const [theme , setTheme] = useState(themes.light)
  const [theme_icon , setThemeIcon] = useState(<BsFillMoonStarsFill/>)

  const toggle_theme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light)
      document.body.style.backgroundColor = themes.light.background
      setThemeIcon(<BsFillMoonStarsFill/>) 

      localStorage.setItem('theme' , themes.light.background)
      localStorage.setItem('theme_icon' , 'moon')
      localStorage.setItem('theme_state' , 'lighe')
      
    } else {
      setTheme(themes.dark)
      document.body.style.backgroundColor = themes.dark.background
      setThemeIcon(<BsFillSunFill/>)
      
      localStorage.setItem('theme' , themes.dark.background)
      localStorage.setItem('theme_icon' , 'sun' )
      localStorage.setItem('theme_state' , 'dark')

    }
  }

  window.onload = ()=>{

    document.body.style.backgroundColor = `${localStorage.getItem('theme')}`
    localStorage.getItem('theme_icon') === 'sun' ?  setThemeIcon(<BsFillSunFill/>) :  setThemeIcon(<BsFillMoonStarsFill/>)
    localStorage.getItem('theme_state') === 'lighe' ?  setTheme(themes.light) :  setTheme(themes.dark)
  
  }

  return (
   <Router>
     <main>
    <Navbar/>
    <ThemesContext.Provider value={theme } >
            <div onClick={toggle_theme} id='box_theme'>
              { theme_icon }
            </div>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/service" exact>
          <Services/>
        </Route>
        <Route path="/testimonial" exact>
          <Testimonial/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Redirect to="/" />
      </Switch>
      </ThemesContext.Provider>
    </main>
   </Router>
  );
}

export default App;
