window.onload = function(){
    var nombre = prompt("Ingrese su nombre")
    alert("Bienvenid@ " + nombre);
    var mayor = confirm("Sos mayor de edad?");
    if(!mayor){
        window.location = "https://google.com.ar"
    }
    
    document.getElementById("btnIngresarDatos").onclick=function(){
        var numero1 ="";
        var numero2 ="";
        do{
            var numero1 = prompt("Ingresar un numero: ")
            var numero2 = prompt("Ingresar otro numero: ")
        }while (!confirm("Desea confirmar los datos ingresados? "));
        document.write("Los numeron ingresados son " + numero1 + " y " + numero2);
    } 
}