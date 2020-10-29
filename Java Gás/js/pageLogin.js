

var cnpj = document.getElementById('cpf');
var senha = document.getElementById('senha');
var mostrarSenha = document.getElementById('mostrarSenha');

// Criar mascará campo CNPJ
function mascaraCNPJ() {


    if (cnpj.value.length == 2 || cnpj.value.length == 6) {
        cpf.value += ".";
    } else if (cnpj.value.length == 10) {
        cpf.value += "/";
    } else if (cnpj.value.length == 15) {
        cpf.value += "-";
    }
}
function mascaraCPF() {


    if (cnpj.value.length == 3 || cnpj.value.length == 6) {
        cpf.value += ".";
    } else if (cnpj.value.length == 11) {
        cpf.value += "/";
    } 
}

// Validar o preenchimento dos campos
function validarCampos() {

    if (cnpj.value.length == 0 || senha.value.length == 0) {

        alert("Campo CNPJ ou Senha não preenchido.");

    } else if (cnpj.value.length != 18) {

        alert("CNPJ ou Senha inválido.");

    } else {
        location = 'vendedor.html';
    }

}
function validarCampos2() {

    if (cnpj.value.length == 0 || senha.value.length == 0) {

        alert("Campo CPF ou Senha não preenchido.");

    } else if (cpf.value.length != 14) {

        alert("CPF ou Senha inválido.");

    } else {
        location = 'mercado.html';
    }

}



// Mostrar/Esconder Senha
var checkboxPass = document.getElementById('checkboxPass')
var checkboxSpan = document.querySelector(".checkboxControl span")
checkboxSpan.innerHTML = 'Mostrar senha'

checkboxPass.addEventListener('click', function(){
    if (senha.type === "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
})

