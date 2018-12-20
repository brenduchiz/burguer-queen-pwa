
# Burger Queen

![burger-queen](https://user-images.githubusercontent.com/27248841/50257976-3db09700-03c3-11e9-9709-690f3e6e46d8.png)

Usuario: admi-mesero@burger.com ,
Contraseña: 1234567890

## Preámbulo

Nos acaban de enviar un correo con una solicitud para un nuevo proyecto. Hay un
restaurante que nos ha contactado porque quieren que alguien les construya una
interfaz donde puedan tomar pedidos usando una tablet.

![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Como punto de partida,
nos comparten el siguiente correo recibido del cliente:

> Somos **Burguer Queen**, una cadena de comida rápida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
> expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
> clientes.
>
> Tenemos 2 menús: uno para el desayuno, que es muy sencillo:
>
> | Item                      |Precio|
> |---------------------------|------|
> | Cafe americano            |    5 |
> | Cafe con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo natural              |    7 |
>
> Y un menú para el resto del dia:
>
> <table width="100%">
>   <tbody>
>     <tr>
>       <td colspan="2" rowspan="1">Hamburguesas</td>
>       <td>Acompañamientos ($5)</td>
>       <td colspan="3" rowspan="1">Bebidas</td>
>     </tr>
>     <tr>
>       <td>Simple</td>
>       <td>10</td>
>       <td>Papas fritas</td>
>       <td></td>
>       <td>500ml</td>
>       <td>750ml</td>
>     </tr>
>     <tr>
>       <td>Doble</td>
>       <td>15</td>
>       <td>Onion Rings</td>
>       <td>Agua</td>
>       <td>5</td>
>       <td>8</td>
>     </tr>
>     <tr>
>       <td></td>
>       <td></td>
>       <td></td>
>       <td>refresco</td>
>       <td>7</td>
>       <td>10</td>
>     </tr>
>   </tbody>
> </table>
>
> Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana.
> **Y por $1 pueden agregarle queso o huevo.**
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el
> pedido varias veces antes de finalizarlo.

## Introducción

Partiendo de los requerimientos de negocio detallados en el correo del cliente,
nos piden construir **una interfaz que permita a lxs cajerxs tomar los pedidos
en una tablet, y desde ahí se puedan enviar a cocina** a través de un backend del
que nos darán detalles más adelante.

El primer paso de este proyecto debe ser convertir el menú descrito por el
cliente en una estructura que podamos poner en un archivo JSON para después
_pintar_ en la pantalla.

Nuestra interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo que _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## Objetivos

El objetivo principal de aprendizaje de este proyecto es construir una
_interfaz web_ usando el _framework_ elegido (React, Vue o Angular). Todos estos
frameworks de front-end atacan el mismo problema: **cómo mantener la interfaz y
el estado sincronizados**. Así que esta experiencia espera familiarizarse con
el concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

Como objetivo secundario, la implementación debe además seguir las
recomendaciones para PWAs (_Progressive Web Apps_), lo cual incluye conceptos
como **offline**. Para guiarte con respecto a este tema te recomendamos usar
[Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es), que es
una herramienta de Google que nos ayuda a asegurar que nuestras web apps sigan
buenas prácticas. De hecho, usaremos Lighthouse a la hora de evaluar el
proyecto.

Finalmente, la interfaz debe estar diseñada específicamente para correr en
**tablets**.

Tópicos: _react_, _angular_, _vue_, _pwa_, _offline-first_, _service-worker_.

## Consideraciones generales

Este proyecto se debe "resolver" de forma individual.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
En este proyecto SI está permitido usar librerías o frameworks
(debes elegir entre [React](https://reactjs.org/), [Vue](https://vuejs.org/) o
[Angular](https://angular.io/)).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**. También necesitamos botones
grandes para escoger los productos, y el estado actual del pedido siempre
visible para poder confirmar con el cliente.
