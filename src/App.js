import React ,{Fragment,useState} from 'react';//con el elemnto fragment encierras tu modulo
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner.js';
//import { Fragment } from 'react';

function App() {
  //aca puedo escribir codigo javaScript
  //definir el state
  const [cantidad,grabarCantidad] = useState(0);//cantidad es variable y grabarcanti es funcion
  const [plazo,grabarPlazo] = useState('');
  const [total,guardarTotal] = useState(0);
  const [cargando,guardarCargando] = useState(false);

let componente;
if (cargando){
componente= <Spinner />
} else if (total === 0) {
  componente= <Mensaje />
}else{
  componente = <Resultado 
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
                />
}
  
  return (
    <Fragment>
      <Header 
          titulo="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario 
            cantidad={cantidad}
            grabarCantidad={grabarCantidad}
            plazo={plazo}
            grabarPlazo={grabarPlazo}
            total={total}
            guardarTotal={guardarTotal}
            guardarCargando={guardarCargando}
        />
          <div className="mensajes">
            {componente}
          </div>
      </div>  
    </Fragment>
  );
}

export default App;
