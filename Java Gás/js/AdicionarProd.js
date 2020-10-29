var btnCadastrar = document.getElementById('cadastrar');
var form = document.getElementById('form-prod');
var arrayProd = [];
var ultimo = [];
var ValId = 0;

btnCadastrar.addEventListener('click', function () {

    var arr = JSON.parse(localStorage.getItem('tblProdutos')) || [];
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

    let nome = form.Produto.value;
    
    let ncm = form.Codigo.value;
    let estoque = form.qtdEstoque.value;
    let preco = form.Preco.value;

    var prod = JSON.stringify({
        id: ValId,
        Nome: nome,
        CodNCM: ncm,
        Estoque: estoque,
        Preco: preco
    });

    arrayProd.push(prod);
    localStorage.setItem("tblProdutos", JSON.stringify(arrayProd));

    alert("Produto Registrado Com Sucesso!");
	  location = './vendedor.html';

    form.Produto.value = "--";
    form.Codigo.value = "--";
    form.qtdEstoque.value = "";
    form.Preco.value = "";
	
});

var btnCancel = document.getElementById('cancel');

btnCancel.addEventListener('click', () => {
    location = 'vendedor.html';
})
