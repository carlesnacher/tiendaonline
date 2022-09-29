// Variables

let totalCarro = document.getElementById("totalCarro");
let totalPrecio = 0;
totalCarro.innerHTML = `${totalPrecio} €`;

//Declaramos los productos muebles

let objetos = [
    {
        id: "aparador",
        precio: 199
    },
    {
        id: "armario",
        precio: 189
    },
    {
        id: "lampara",
        precio: 59
    },
    {
        id: "libreria",
        precio: 35
    },
    {
        id: "mesita",
        precio: 82
    },
    {
        id: "recibidor",
        precio: 125
    }
];

//Arrastrar los items

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);

};

const allowDrop = (ev) => {
    ev.preventDefault();
};

const drop = (ev) => {
    ev.preventDefault(); 
    let data = ev.dataTransfer.getData("text");
    
    let objetoDeseo = objetos.find(objeto => {
        return objeto.id == data
    });

    totalPrecio += objetoDeseo.precio;

    totalCarro.innerHTML = `${totalPrecio} €`;
};

// Llamamos a la funcion reset carrito compra 0

var reset = function(){
    a = '0 €';
    totalPrecio = 0;
    document.getElementById('totalCarro').innerHTML = a;

}
