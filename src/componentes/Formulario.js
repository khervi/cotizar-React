import React, {Fragment,useState} from 'react';
import {calcularTotal} from '../helpers'

const Formulario = (props) => {
    //el destructuring puede ir en props
    const {cantidad, grabarCantidad,plazo,grabarPlazo,total,guardarTotal,guardarCargando} = props;
    //DEFINIENDO el useState
    const [error,guardarError] = useState(false);
    /*const leerCantidad = (e)=>{
        grabarCantidad(parseInt(e.target.value)); */
    
    const calcularPrestamo = (e) =>{
        e.preventDefault();
        //validando
        if(cantidad === 0 || plazo=== ''){
            guardarError(true);
            return;
        }
        //eliminando error previo
        guardarError(false);
        //habilitar spinner
        guardarCargando(true);

        setTimeout(() =>{
            //realizar cotizacion 
            const total = calcularTotal(cantidad,plazo);
            //una vez calculado guardarTotal
            guardarTotal(total);
            guardarCargando(false);
        },3000)
        

    }
    return (  
        <Fragment>
        <form onSubmit={calcularPrestamo}>
        
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                                //esta es la funcion leercanttida() pero abreviado o directo
                      onChange={ (e)=>{ grabarCantidad(parseInt(e.target.value))} }
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={ (e)=>{ grabarPlazo(parseInt(e.target.value))} }
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>
{ (error) ? <p className="error">todos los campos son obligatorios</p> : null }
  </Fragment>
    );
}
 
export default Formulario;