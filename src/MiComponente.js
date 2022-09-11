import React, {useState} from 'react'

const MiComponente = () => {
    const [contador, setContador] = useState(1); 

    const Sumar = () => {
        setContador(contador + 1);
    }

    const Restar = () => {
        setContador(contador - 1);
        if (contador === 0){
        setContador(0);
        }
    }

    const reset = () => {
        setContador(0);
    }

    return (
        <>
         <div>Micomponente</div>
         <h1>{contador}</h1>
         <button onClick={Sumar}>Sumar</button>
         <button onClick={Restar}>Restar</button>
         <button onClick={reset}>Reset</button>
        </>
    )
}

export default MiComponente