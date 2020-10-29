var arrayProd = [];
var ultimo = [];
var form = document.getElementById('form-prod');
var btnedit = document.getElementById('editar');

btnedit.addEventListener('click', function () {

    arrayProd = [];
    var arr = JSON.parse(localStorage.getItem('tblProdutos')) || [];
    ultimo = JSON.parse(localStorage.getItem('EditProd')) || [];

    for (let i = 0; i < arr.length; i++) {
        arrayProd.push(arr[i]);
    }

    ultimo.id = ultimo.id;
    ultimo.Nome = form.Produto.value;
    ultimo.Cod = form.Codigo.value;
    ultimo.Estoque = form.qtdEstoque.value;
    ultimo.Preco = form.Preco.value;

    for(let j = 0; j<arrayProd.length; j++){
        if(j == ultimo.id){
            arrayProd[j] = JSON.stringify(ultimo);
        }
    }

    localStorage.setItem("tblProdutos", JSON.stringify(arrayProd));
    alert("Produto Alterado com Sucesso!");
    location = './vendedor.html';

});

//voltando para a pagina principal
var btncancelar = document.getElementById('cancelar');

btncancelar.addEventListener('click', ()=>{
    location = 'vendedor.html';
});