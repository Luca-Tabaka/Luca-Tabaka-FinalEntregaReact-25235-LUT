import React, { createContext, useEffect, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({children}) =>{
    const [carrito, setCarrito] = useState(() => { // esto toma el carrito del localstorage si esta
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    useEffect(() => { // para guardar el estado del carrito y no perderlo al actualizar la pagina
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const agregarAlCarrito = (producto) => {
        const existeProducto = carrito.find(p=> p.id === producto.id)
        if(existeProducto){
            setCarrito(carrito.map(p=>p.id === producto.id ?{...p, cantidad: p.cantidad + 1}:p))
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }
    }
    const eliminarDelCarrito = (id) => {
        setCarrito(prevCarrito =>
        prevCarrito
            .map(item =>
            item.id === id
                ? { ...item, cantidad: item.cantidad - 1 } 
                : item
            )
            .filter(item => item.cantidad > 0) 
        );
    };

    const vaciarCarrito = () =>{
        setCarrito([])
    }

    return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}