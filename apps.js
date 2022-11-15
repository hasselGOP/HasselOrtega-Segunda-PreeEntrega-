//  Segunda pre entrega: Estructura, variables y objetos
// Deberas entregar la estructura del proyecto , las variables de JS necesarias y los objetos de JS, correspondientes a la segunda entrega de tu proyecto final

let nombre = prompt('Ingrese su usuario');

const ingresarNombre = () => {// Funcion para ingresar el nombre del usuario
    while (nombre === "" || nombre === null  ) {
      nombre = prompt('Ingrese su nombre');
    }
    alert(`Bienvenido ${nombre} a ONIXGLAM la tienda mas grande de LATINOAMERICA`);
}

ingresarNombre();

class Producto {// Clase Producto
    // Atributos
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }// Metodo
    disminucionStock() {// Metodo para disminuir el stock del producto en 1 unidad  
        this.stock = this.stock - 1; 
        console.log(`El stock de ${this.nombre} ha sido actualizado`)
    }
}

// Instancias de la clase Producto
const producto0 = new Producto(0, "Mouse", 360, 25);
const producto1 = new Producto(1, "carcasa de smartphone", 500, 200);
const producto2 = new Producto(2, "audifono", 680, 155);
const producto3 = new Producto(3, "teclado", 980, 15);

const productos = [producto0, producto1, producto2, producto3];

const carrito = [] // Array para guardar los productos elegidos

let productosDisponibles = `Hola ${nombre} ¿Qué deseas comprar? - Ingrese solamente un numero de las siguientes opciones:` 

const agregarCarrito  = () => {// Funcion para agregar productos al carrito
    for (item of productos) {// Recorremos los productos
        productosDisponibles += `\n ${item.id} - ${item.nombre} a $ ${item.precio}`
    }// Mostramos los productos
    productosDisponibles += "\n Ingrese el numero correspondiente al producto que desea adquirir. Para finalizar ingrese 4"
    let respuesta = parseInt(prompt(productosDisponibles))
// Si la respuesta es 4, finalizamos la compra

    while (isNaN(respuesta)) {// Si la respuesta no es un numero, volvemos a preguntar
        alert("Ingrese un número válido")
        respuesta = parseInt(prompt(productosDisponibles))// Preguntamos nuevamente
    }
    while (respuesta != 4) {// Mientras la respuesta sea distinta de 4, seguimos preguntando
        switch (respuesta) {
            case 0:
                carrito.push(productos[0])
                alert(`Agregando al carrito el producto ${productos[0].nombre}`)
                productos[0].disminucionStock()
                break;
            case 1:
                carrito.push(productos[1])
                alert(`Agregando al carrito el producto ${productos[1].nombre}`)
                productos[1].disminucionStock()
                break;
            case 2:
                carrito.push(productos[2])
                alert(`Agregando al carrito el producto ${productos[2].nombre}`)
                productos[2].disminucionStock()
                break;

            case 3:
                carrito.push(productos[3])
                alert(`Agregando al carrito el producto ${productos[3].nombre}`)
                productos[3].disminucionStock()
                break;
            default:
                alert("Ingresó una opcion invalida, Intentelo de nuevo");  
                break;
        }
        respuesta = parseInt(prompt(productosDisponibles))// Preguntamos nuevamente
    }

    alert("Finalizando tu pedido")// Finalizamos la compra

    mostrarCarrito()

}

let productosCarrito = "Tu pedido es: "// Variable para mostrar los productos del carrito
let precioCarrito = 0

agregarCarrito()

function mostrarCarrito() {// Funcion para mostrar el carrito de compras y el precio total de la compra   
    for (itemsElegidos of carrito) { // Recorremos el carrito
        productosCarrito += `\n - ${itemsElegidos.nombre}`; // Agregamos los productos al carrito
        precioCarrito += itemsElegidos.precio; // Sumamos el precio de los productos
    }
}

alert(`${productosCarrito} \n por un total de $ ${precioCarrito} MXN `)// Mostramos el resumen del carrito

const descuento = (precioCarrito) =>  {// Funcion para aplicar un descuento del 15% si el precio supera los 1000 pesos
    let resultado = precioCarrito * 0.85// Aplicamos el descuento
    alert(`${nombre} Gracias por visitar ONIX GLAM la tienda numero uno en tecnologia. Se te ha aplicado un descuento del 15%  en tu compra ya que es mayor de 1000 MXN el total es $ ${resultado} MXN`)
}
if (precioCarrito >= 1000) {// Si el precio es mayor a 1000 pesos se aplica el descuento
    descuento(precioCarrito)// Llamamos a la funcion descuento
} else {
// Si el precio es menor a 1000 pesos no se aplica el descuento
    alert(`${nombre} Gracias por tu visita, Vuelve pronto`)
}
alert(`${nombre} Gracias por tu visita, Vuelve pronto`)

console.table(productos)// Imprimimos en consola el array de productos

