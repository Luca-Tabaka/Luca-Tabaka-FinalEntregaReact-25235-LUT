Pasos para correr el proyecto local:

npm install para instalar todas las dependencias

npm run dev para poder ejecutar el proyecto

http://localhost:5173 para visualizar el proyecto en el browser


Enlace al proyecto en netlify: https://mondobebible.netlify.app/home

Explicaciones:

La aplicacion permite el inicio de sesion con dos tipos de usuario:

admin: este usuario tiene la capacidad de acceder al crud de productos ademas de poder simular compras

para acceder por admin: <br />
Usuario: admin (minusculas)<br />
Contraseña: admin (minusculas)

Cliente: el cliente solo tiene la capacidad de comprar productos, si se trata de realizar la compra sin haber iniciado sesion, se redirige al login.

para acceder por cliente:<br />
Usuario: cliente (minusculas)<br />
Contraseña: 1234 (minusculas)

Uso:

Se pueden visualizar los productos y agregarlos a un carrito el cual cuenta con el boton de "Realizar compra" que simula la misma dando un mensaje con toast y vaciando el carrito.

El administrador puede acceder a la pestaña de creacion en la cual puede modificar y borrar todos los productos que se encuentran subidos ademas de poder crear nuevos productos mediante un formulario.
