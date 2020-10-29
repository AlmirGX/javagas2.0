var arrayFunc = [];
var ultimo = [];
var form = document.getElementById('form-func');
var btnedit = document.getElementById('editar');

btnedit.addEventListener('click', function () {

    arrayFunc = [];
    var arr = JSON.parse(localStorage.getItem('tblFuncionario')) || [];
    ultimo = JSON.parse(localStorage.getItem('EditFunc')) || [];

    for (let i = 0; i < arr.length; i++) {
        arrayFunc.push(arr[i]);
    }

    ultimo.id = ultimo.id;
    ultimo.Nome = form.Nome.value;
    ultimo.Cpf = form.Cpf.value;
    ultimo.Func = form.Func.value;
    ultimo.Sal= form.Sal.value;

    for(let j = 0; j<arrayFunc.length; j++){
        if(j == ultimo.id){
            arrayFunc[j] = JSON.stringify(ultimo);
        }
    }

    localStorage.setItem("tblFuncionario", JSON.stringify(arrayFunc));
    alert("Funcionário Alterado com Sucesso!");
    location = './funcionarios.html';

});

//voltando para a pagina principal
var btncancelar = document.getElementById('cancelar');

btncancelar.addEventListener('click', ()=>{
    location = 'funcionarios.html';
});