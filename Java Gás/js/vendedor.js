var corpo = document.getElementById('corpo');
var todos = JSON.parse(localStorage.getItem('tblProdutos')) || [];

window.onload = RenderProd;

function RenderProd() {
    corpo.innerHTML = '';

    for(var prod in todos) {
        
        var p = JSON.parse(todos[prod]);

        //vai dentro do corpo
        var div1 = document.createElement('div');
        div1.setAttribute('class', 'col md-3');
        div1.setAttribute('id', 'conteudo');

        //vai dentro da div1
        var div2 = document.createElement('div');
        div2.setAttribute('class', 'card');
        div2.setAttribute('id', 'carta');

        //vai dentro da div2
        var div3 = document.createElement('div');
        div3.setAttribute('class', 'imagem');

        var div4 = document.createElement('div');
        div4.setAttribute('class', 'info');

        var div5 = document.createElement('button');
        div5.setAttribute('class', 'editar');
        div5.setAttribute('id', 'editar');
        div5.setAttribute('onclick', `edit(${p.id});`);

        div2.appendChild(div3);
        div2.appendChild(div4);
        div2.appendChild(div5);

        //vai dentro da div3
        var img = document.createElement('img');
        img.setAttribute('src', 'img/produtos/'+p.Nome+'.jpeg');
        img.setAttribute('alt', `${p.Nome}`);
        div3.appendChild(img);

        //vai dentro da div4
        var span1 = document.createElement('span');
        span1.setAttribute('id', 'nome');
        span1.innerHTML = `Item: ${p.Nome}`;
        
        var span3 = document.createElement('span');
        span3.setAttribute('id', 'valor');
        span3.innerHTML = `Valor: ${p.Preco}`;
        var span4 = document.createElement('span');
        span4.setAttribute('id', 'NCM');
        span4.innerHTML = `Código: ${p.CodNCM}`;
        var span5 = document.createElement('span');
        span5.setAttribute('id', 'Estoque');
        span5.innerHTML = `Estoque: ${p.Estoque}`;
        div4.appendChild(span1);
       
        div4.appendChild(span3);
        div4.appendChild(span4);
        div4.appendChild(span5);

        //vai dentro da div5
        var div6 = document.createElement('div');
        div6.setAttribute('class', 'img');
        div6.innerHTML = '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"> <path d="M15.0678 2.55016L13.8564 1.33877C13.7266 1.20902 13.5162 1.20902 13.3865 1.33877C13.2567 1.46853 13.2567 1.67897 13.3865 1.80873L14.5978 3.02011C14.6627 3.08503 14.7478 3.11746 14.8328 3.11746C14.9178 3.11746 15.0029 3.08499 15.0678 3.02011C15.1976 2.89032 15.1976 2.67991 15.0678 2.55016Z" fill="black" /> <path d="M15.4487 3.06873C15.0211 3.06873 15.0204 3.73339 15.4487 3.73339C15.8764 3.73339 15.8771 3.06873 15.4487 3.06873Z" fill="black" /> <path d="M16.5551 2.18795L14.8131 0.44635C14.5256 0.158512 14.1431 0 13.7362 0C13.3293 0 12.9468 0.158512 12.6593 0.44625L11.6588 1.44639C11.6587 1.44646 11.6587 1.44649 11.6586 1.44656L1.35259 11.7526C1.30797 11.7972 1.27898 11.8516 1.26507 11.9088L0.0127806 16.5816C-0.0179655 16.6963 0.0148392 16.8187 0.0987766 16.9027C0.161929 16.9658 0.246796 17 0.333755 17C0.362443 17 0.391362 16.9963 0.419751 16.9887L5.09953 15.7345C5.10049 15.7342 5.10136 15.7338 5.10232 15.7336C5.11533 15.73 5.12822 15.7257 5.1408 15.7205C5.14166 15.7201 5.14246 15.7197 5.14329 15.7193C5.15451 15.7146 5.1655 15.709 5.17626 15.703C5.17925 15.7013 5.18217 15.6995 5.18509 15.6978C5.19373 15.6926 5.20213 15.6869 5.2104 15.6808C5.21318 15.6787 5.21604 15.6768 5.21873 15.6747C5.22899 15.6666 5.23902 15.658 5.24845 15.6485L5.24848 15.6485L15.5543 5.34301C15.5544 5.34295 15.5544 5.34291 15.5545 5.34285L16.5551 4.34214C17.1486 3.7482 17.1486 2.78192 16.5551 2.18795ZM11.8936 2.15153L13.1367 3.39472L3.30075 13.2307L2.05759 11.9876L11.8936 2.15153ZM0.803778 16.1976L1.13285 14.9698L2.03166 15.8686L0.803778 16.1976ZM2.77295 15.6699L1.33151 14.2285L1.75993 12.6299L3.06547 13.9355C3.06554 13.9355 3.06561 13.9356 3.06571 13.9357C3.06581 13.9358 3.06587 13.9358 3.06597 13.9359L4.37155 15.2415L2.77295 15.6699ZM5.01353 14.9435L3.77071 13.7007L13.6066 3.86478L14.8496 5.1078L5.01353 14.9435ZM16.0852 3.87221L15.3196 4.63785L13.8433 3.1614C13.8428 3.16087 13.8423 3.16027 13.8418 3.15971C13.8412 3.15914 13.8406 3.15871 13.8401 3.15818L12.3636 1.68161L13.1293 0.916141C13.2914 0.753977 13.5069 0.664627 13.7362 0.664627C13.9655 0.664627 14.181 0.753943 14.3432 0.916273L16.0851 2.65784C16.4197 2.99266 16.4197 3.53746 16.0852 3.87221Z" fill="black" /> </g> <defs> <clipPath id="clip0"> <rect width="17" height="17" fill="white" /> </clipPath> </defs> </svg>';
        div5.appendChild(div6);

        //armazenando todos as divs na div1
        div1.appendChild(div2);

        //armazenando as informações na div principal
        corpo.appendChild(div1);

    }

};

//enviando um produto especifico para edicao
function edit(indice){
    var produto = [];

    var arrEd = JSON.parse(localStorage.getItem('tblProdutos')) || [];

    produto = arrEd[indice];

    localStorage.setItem('EditProd', produto);
    location = 'EditarProd.html';
}

//Botão de navBar Mobile
var btnNav = document.getElementById('nav_but');

btnNav.addEventListener('click', function () {
    let footer = document.getElementById('foot');
    if (footer.style.display === 'none') {
        setTimeout(function () {
            footer.style.display = 'unset';
        }, 200);
    } else {
        footer.style.display = 'none';
    }
});

//sair
var btnSair = document.getElementById('sair');

btnSair.addEventListener('click', function () {
    location = 'index.html';
});