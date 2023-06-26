//Validación del formulario de contacto//







function validarFormulario() {
    const form = document.getElementsByTagName("form")[0]
    let valNom = false
    let valApe = false
    let valEma = false
    let valAsu = false

    let validData = false


    if (form[0].value.length < 2) {
        form[0].value = ""
        form[0].setAttribute('placeholder', "Por favor, ingrese su nombre");
        form[0].focus();

        valNom = false
    }

    else {valNom = true}



    if (form[1].value.length < 2) {
        form[1].value = ""
        form[1].setAttribute('placeholder', "Por favor, ingrese su apellido");
        form[1].focus();
        valApe = false
    }

    else {valApe = true}




    if (form[3].value.length < 5) {
        subject.setAttribute('placeholder', "Por favor, ingrese su mensaje");
        subject.focus();
        valAsu = false
    }

    else {valAsu = true}


    validarEmail(email)
    if (form[2].value.length < 2 && !validarEmail(form[2])) {
        form[2].setAttribute('placeholder', "Por favor, ingrese su email");
        form[2].focus();
        valEma = false
    }

    else {valEma = true}

    if (valNom &&  valApe && valEma && valEma) {
        form.setAttribute(`onsubmit`, `true`)
        form.setAttribute(`action`, `https://formsubmit.co/exepa@hotmail.com`)
        form.setAttribute(`method`, `POST`)
        form.submit()
    }




    function validarEmail(email) {
        console.log("Entro acá")
        console.log(email.value)
        const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(expresion.test(email.value))
        return expresion.test(email);

    }

}
