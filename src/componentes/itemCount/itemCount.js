import { useState } from "react";

const ItemContador =({stock, inicial })=>{
    const[valor,setValor]= useState(inicial)

    const incrementar = ()=>{
        if(valor < stock){
            setValor(valor + 1)
        }
    }

    const decrementar = ()=>{
        if(valor >1){
            setValor(valor - 1)
        }
    }

    return(
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={incrementar}>+</button>
                <h4 className="number">{valor}</h4>
                <button className="button" onClick={decrementar}>-</button>
            </div>

        </div>
        
    )

}

export default ItemContador;