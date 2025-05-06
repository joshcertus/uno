function suma(v1,v2){
    var res = v1+v2;
    document.getElementById("resultado").innerHTML = "Resultado: "+res;
}

let pedro = 23;

function ageConfirm(edad){
    const adulto = 18;
    return edad > adulto ? "Eres mayor de edad " : "Eres menor de edad";
}

ageConfirm(pedro)