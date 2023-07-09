

//bienvenida inicial

const nombreUsuario = prompt("por favor ingrese su nombre completo");
const apellidoUsuario = prompt("a continuacion, ingrese su apellido completo");

if (nombreUsuario =="" || apellidoUsuario ==""){                                           
    alert("alguno de los campos de nombre o apellido esta incompleto, por favor reingreselos o prueve mas tarde")
}

let sexoUsuario = prompt("ingrese su sexo, recuerde poner solo masculino, femenino u otros")

if (sexoUsuario == "masculino"){
    sexoUsuario = "señor";
}else{
    if(sexoUsuario == "femenino"){
        sexoUsuario = "señorita";
    }else{
        if(sexoUsuario |= "masculino" && "femenino"){
            sexoUsuario = NaN;     //null genera un 0
        }
    }
}

let saludo = ("bienvenido" + " " + sexoUsuario + " " + apellidoUsuario + " " + nombreUsuario +" " + "al sistema de solicitud de turnos para licencias de conducir");

console.log(saludo);

// edad minima para iniciar un tramite     

const edad = parseInt(prompt ("a continuación ingrese su edad"));
const edadMinima = 18     //edad minima en santa fe para iniciar tramites de licencia de conducir


if (edad >= edadMinima){
    console.log ("felicidades" + " " + sexoUsuario + " " + nombreUsuario + " " + apellidoUsuario + " " + "ustes tiene la edad minima para iniciar tramites de licencia de conducir en la localidad")
}else{
    if (edad < edadMinima){
        alert (sexoUsuario +" " + nombreUsuario + " " + apellidoUsuario + " " + "usted no cuenta con la edad minima requerida para iniciar tramites originales ni renovaciones de licencia de conducir en esta localidad por favor vuelva a intentarlo cuando cumpla con un minimo de 18 años")
    }

}

// tipo de tramite

const tipoDeTramite = prompt("por favor indique el tipo de tramite original, renovación o renovación con ampliación ")


if (tipoDeTramite == ""){
    alert("a ocurrido un error a la hora de seleccionar un tramite, por favor intentelo de nuevo")
}else{
    if(tipoDeTramite == "original"){
        console.log("para tramites originales deberá poseer la siguiente documentación: dni con el domicilio en la localidad; formulario CENAT el cual podra tramitar desde la pag:WWW.santafe.gov.ar/cenat;grupo sanguineo certificado por bioquimico")
    }else{
        if(tipoDeTramite == "renovación"){
            console.log("para renovaciónes deberá poseer la siguiente documentación: dni con el domicilio en la localidad y formulario CENAT el cual podra tramitar desde la pag:WWW.santafe.gov.ar/cenat")
        }else{
            if(tipoDeTramite = "renovación con ampliación"){
                console.log("para renovaciones con ampliación deberá poseer la siguiente documentación: dni con el domicilio en la localidad; formulario CENAT el cual podra tramitar desde la pag:WWW.santafe.gov.ar/cenat y rendir el examen correspondiente acorde a la categoria solicitada")
            }
        }
    }
}

if(tipoDeTramite == "original"){
    console.log("pora su tramite" + " " + tipoDeTramite + " " + "indique las categorias que desea tramitar")
}else{
    console.log("para su tramite" + " "+ tipoDeTramite + " " + "por favor ingrese las categoria que posee actualmente")
}

// categoria de licencia
//opcion 1 funciona 

let categoriaActual1 = prompt("ingrese la primer categoría por ejemplo B1, A3, etc.")


while(categoriaActual1 != "N" || categoriaActual1 != "n"){
    console.log("usted a ingresado la categoria" + " " + categoriaActual1);
    categoriaActual1 = (prompt("desea agregar nueva categoria? Y/N"))
    if(categoriaActual1 == "Y" || categoriaActual1 == "y"){
        categoriaActual1= prompt("ingrese nueva categoria")
    }else{
        break;
    }
}

console.log("muchas gracias por utilizar nuestros servicios")

// opcion 2 funciona 

// let i = 0;

// for(i; i<5;i++){
//     const categoriaActual1 = prompt("ingrese la categoria");

//     if(categoriaActual1 == "N" || categoriaActual1 == "n"){
//         break;
//     }else{
//         console.log("usted agrego la categoria" + " " + categoriaActual1);
//     }
//     console.log(prompt("quiere ingresar otra categoria? Y/N"))
// }

// console.log("fin de la seleccion");