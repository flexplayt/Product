// ======================> Inputs / Campos  <======================
const precio = document.getElementById("precio");
const producto = document.getElementById("producto");
const fecha = document.getElementById("fecha");
const inpust = document.querySelector('input')

// ======================>  Eliminar campos <======================
function removeCampos() {
    precio.value = ""
    producto.value = ""
    fecha.value = ""
}
// ======================> List content  <======================
const list = document.getElementById("list");
// ======================> buttom evend  <======================
const btn = document.querySelector("#btn");
btn.addEventListener("click", function() {


    if (!inpust.value == "") {
        list.innerHTML = `<div class="cart">
         <p>${producto.value}</p>
          <p>${precio.value}</p>
         <p>${fecha.value}</p>
          <button class="delete" id="delete">Delete</button></div>`;
        add();
        setRemove();
        removeCampos();
    } else {
        agregador.innerHTML = `<div class="error"><h1>Tienes que rellenar los campos</h1></div>`;
        setRemove();
    }
});




function setRemove() {
    setTimeout(() => {
        agregador.children[0].remove();
    }, 3000);
}
let agregador = document.querySelector(".agregado");

function add() {
    agregador.innerHTML = `<div class="exito"><h1>Agregado con exito</h1></div>`;
}

function remove() {
    agregador.innerHTML = `<div class="remove"><h1>Removido con exito</h1></div>`;
}
// ======================> delete btn  <======================
const contenedor = document.querySelector(".contenedor");
contenedor.addEventListener("click", function(e) {
    if (e.target.classList[0] == "delete") {
        e.target.parentNode.remove();
        remove();
        setRemove();
    } else {
        console.log("Algo salio mal");
    }
});
