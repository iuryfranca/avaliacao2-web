function validaForm(frm) {

    if(frm.nome.value == "" || frm.nome.value == null || frm.nome.value.lenght < 3) {
        alert("Por favor, indique o seu nome.");
        frm.nome.focus();
        return false;
    }
    if(frm.email.value.indexOf("@") == -1 ||
      frm.email.valueOf.indexOf(".") == -1 ||
      frm.email.value == "" ||
      frm.email.value == null) {
        alert("Por favor, indique um e-mail válido.");
        frm.email.focus();
        return false;
    }

    escolhaSexo = -1;
    for(x = frm.sexo.lenght -1; x > -1; x--) {

        if(frm.sexo[x].checked) {
           escolhaSexo = x;
        }
    }
    if(escolhaSexo == -1) {
        alert("qual o seu sexo?");
        frm.sexo[0].focus();
        return false;
    }
    if(frm.prof.value == "" || from.prof.value == "Todas") {
        alert("De momento, precisamos de especialistas nas três áreas indicadas");
        frm.prof.focus();
        return false;
    }
    if(frm.sobre.value == "" || frm.sobre.value == null) {
        alert("Por favor, conte-nos um pouco sobre si.");
        frm.sobre.focus();
        return false;
    }
}
