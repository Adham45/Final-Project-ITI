import React from "react";


export const themes = {
    dark: {
        color: 'white',
        background: '#212123' ,
      
    } ,
    light : {
        color : 'black',
        background : 'white' ,
       
    }
} 

const ThemesContext = React.createContext(themes)
export default ThemesContext;
