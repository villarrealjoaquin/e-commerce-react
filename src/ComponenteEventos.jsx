import React from 'react'

export const ComponenteEventos = () => {

    const handlerClick = (event) => {
        // console.log(even.target);
        event.stopPropagation();
        console.log('click en el boton');
    }

    const handlerChange = (even) => {
        console.log(even.target);
        console.dir(even.target);
        console.log(even.target.value);
    }

    const eventoPrevenido = (e) => {
        e.preventDefault();
        console.log('Prevenido');
    }

    const tecleoPrevenido = (evento) => {
      evento.preventDefault();
      console.log('tecleo Prevenido');
    }

    const handlerClickDiv = () => {
      console.log('click en el div');
    }

  return (
    <div onClick={handlerClickDiv}>
        <h1>ComponenteEventos</h1>
        <button onClick={handlerClick}>Click</button>
        <input onHeyDown = {tecleoPrevenido} type="text" onChange={handlerChange} />
        <a onClick={eventoPrevenido} href="http://google.com">Ir a google</a>
    </div>
  )
}
