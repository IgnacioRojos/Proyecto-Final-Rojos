import {db} from './firebase';
import { collection, getDocs, where, query} from 'firebase/firestore';

export const getAutos = () =>{
    const coleccionAutos =  collection(db,"Autos")
    return getDocs(coleccionAutos)
        .then((respuesta)=>{
            const arrayDocumentos = respuesta.docs
            const resultado = arrayDocumentos.map((doc)=>{
                const id =doc.id;
                const data = doc.data();
                data.id = id;
                return data;
            })
            return resultado
          
        })
        .catch((err) =>{
           console.log("error ") 
        })
}

export const getAutosPorCategoria = (categoriaMarca) =>{
    const coleccionAutos =  collection(db,"Autos")
    const filtro = query(coleccionAutos, where("marca","==",categoriaMarca))
    return getDocs(filtro)
    .then((respuesta)=>{
        const arrayDocumentos = respuesta.docs
        const resultado = arrayDocumentos.map((doc)=>{
            const id =doc.id;
            const data = doc.data();
            data.id = id;
            return data;
    })
    return resultado 
    
    })
    .catch((err) =>{
        console.log(err) 
    })
}

export const filtroAutos = (autoId) =>{
    const coleccionAutos = collection(db,"Autos")
    const filtroId = query(coleccionAutos, where("id", "===",autoId))
    return getDocs(filtroId)
    .then((resultado) =>{
        const arrayDeaAutos = resultado.docs
        const array = arrayDeaAutos.map((doc)=>{
            const id = doc.id
            const data = doc.data()
            data.id = id
            return data

        })
        return array 
    })
    .catch((err) =>{
        console.log(err)
    })
}
