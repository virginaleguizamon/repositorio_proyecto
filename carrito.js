let nombreIngresado = prompt ("Ingrese su nombre")
function saludar (){
    alert ("Bienvenido/a a la tienda de Ossana " + nombreIngresado)    
}

saludar();

class Producto {
    
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }

}

let ingresarProductos = parseInt( prompt("Cantidad de productos a llevar") )
let total = 0
for (let p = 0; p < ingresarProductos ; p++) {
    const producto = new Producto ( prompt("Ingrese el nombre del producto"),prompt("Precio"))    
    total += producto.precio
}

alert("Precio total de los productos: " + total)

let continuar = prompt ("¿Desea continuar comprando?")

if (continuar=="si"){
    alert=("Continua tu compra " + Producto);
}else{
    alert("¡Gracias por visitarnos!");
}
