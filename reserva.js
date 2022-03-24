console.log("hola")
let contenedor=document.getElementById("contenedor")
console.log(contenedor)

let bandera=true

contenedor.addEventListener("click",function(evento){


    if(bandera==true){
        
        if(evento.target.classList.contains="w-100"){
            evento.target.src="img/rojo.png"
            bandera=false
        }

    }else{

        if(evento.target.classList.contains="w-100"){
            evento.target.src="img/cinema-chair.png"
            bandera=true
        }

    }


})


let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){

    evento.preventDefault()

    let cantidad=document.getElementById("cantidad").value
    let asiento=document.getElementById("asiento").value
    let pelicula=document.getElementById("pelicula").value

    if(asiento=="general"){
        let precio=18000
        let total=precio*cantidad
        alert("Sus entradas valen"+total)
    
    }else{
        let precio=26000
        let total=precio*cantidad
        alert("Sus entradas valen"+total)
    }
})