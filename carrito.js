
//------------ENTREGABLE 1---------------------------
/*let nombreIngresado = prompt ("Ingrese su nombre")
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
    
    let ingresarProductos = parseInt( prompt("Cantidad de productos a llevar") )
    let total = 0
     for (let p = 0; p < ingresarProductos ; p++) {
        const producto = new Producto ( prompt("Ingrese el nombre del producto"),prompt("Precio"))    
        total += producto.precio
    }
        
    alert("Precio total de los productos: " + total)
}else{
    alert("¡Gracias por visitarnos!");
}*/






//--------------------PRE ENTREGA 1-------------------
let nombreIngresado = prompt ("Ingrese su nombre")
function saludar (){
    alert ("Bienvenido/a a la tienda de Ossana " + nombreIngresado)    
}

saludar();

alert("Nuestros productos disponibles:")


class Producto {

    constructor(id, nombre, precio){

        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto(1, 'Agua Micelar', 450);
const producto2 = new Producto(2, 'Tónico Facial', 350);
const producto3 = new Producto(3, 'Bálsamo Labial', 200);
const producto4 = new Producto(4, 'Agua de Rosas', 450);
const producto5 = new Producto(5, 'Crema Corporal', 500);
const producto6 = new Producto(6, 'Crema Facial', 350);
const producto7 = new Producto(7, 'Bruma Corporal', 400);


const datos = [
    producto1, 
    producto2, 
    producto3, 
    producto4,
    producto5,
    producto6,
    producto7
]

let CARRITO = []



let renderizar= "" ;
datos.forEach((element) => {
    renderizar += ` 
                ID: ${element.id}
                NOMBRE: "+ ${element.nombre} 
                PRECIO: " + ${element.precio}`;

})
alert(renderizar);


function comprar() {
    let elijo = parseInt(prompt('ingrese el ID del producto'))
    let agregar = datos.find((prod) => prod.id == elijo)
    CARRITO.push(agregar)
    console.log(CARRITO)
    
}
comprar();


function actualizarCarrito() {
    console.log('cantidad de productos agregados ' + CARRITO.length)
    let suma = CARRITO.reduce((acc, el) => acc + el.precio, 0)

    console.log('la suma total de su carrito es $' + suma)
}


actualizarCarrito();

    
