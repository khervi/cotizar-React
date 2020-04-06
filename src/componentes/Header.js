import React from 'react'; //sacamos el {Fragment} , no es necesario con el arrow functions
 
/*function Header({titulo},{description}) {
//(props)//props es un objeto con el cual puedo utilizar lo metodos o llamar a los atributos  
    return (
        <Fragment>
            <h1>{titulo}</h1>
            <p>{description}</p>
    </Fragment>
      )
 }*/
 const Header = ({titulo}) => (//usamos { } cuando pongamos codigo encima de  return() 
    <h1>{titulo}</h1>
    )

 
 export default Header;