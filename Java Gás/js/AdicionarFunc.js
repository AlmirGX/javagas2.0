var btnCadastrar = document.getElementById('cadastrar');
var form = document.getElementById('form-func');
var arrayProd = [];
var ultimo = [];
var ValId = 0;

btnCadastrar.addEventListener('click', function () {

    var arr = JSON.parse(localStorage.getItem('tblFuncionarios')) || [];
    var diff = arr.length;

    if (diff > 0) {
        arrayProd = [];

        for (let i = 0; i < arr.length; i++) {
            arrayProd.push(arr[i]);
        }

        ultimo = JSON.parse(arr[diff - 1]);
        ValId = parseInt(ultimo.id);
        ValId += 1;

        localStorage.clear();
    }

    let nome = form.Nome.value;
    let cpf = form.Cpf.value;
    let func = form.Func.value;
    let sal = form.Sal.value;

    var prod = JSON.stringify({
        id: ValId,
        Nome: nome,
        Cpf: cpf,
        Func: func,
        Sal: sal
    });

    arrayProd.push(prod);
    localStorage.setItem("tblFuncionarios", JSON.stringify(arrayProd));

    alert("Funcionário Registrado Com Sucesso!");
	  location = './funcionarios.html';

    form.Nome.value = "--";
    form.Cpf.value = "--";
    form.Func.value = "";
    form.Sal.value = "";
	
});

var btnCancel = document.getElementById('cancel');

btnCancel.addEventListener('click', () => {
    location = 'funcionarios.html';
})
