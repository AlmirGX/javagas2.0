

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('ibge').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('ibge').value = (conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";


            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};
function validar() {
    var nome = formulario.nome;
    var cpf = formulario.cpf;
    var email = formulario.email;
    var senha = formulario.senha;
    var cep = formulario.cep;
    var numero = formulario.numero

    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
    }
    if (cpf.value == "") {
        alert("CPF não informado");
        cpf.focus();

    }
    if (email.value == "") {
        alert("Email não informado");
        email.focus();

    }
    if (senha.value == "") {
        alert("Senha não informado");
        senha.focus();

    }
    if (cep.value == "") {
        alert("CEP não informado");
        cep.focus();

    }

    if (numero.value == "") {
        alert("Numero não informado");
        numero.focus();
        return;
    }
    alert("Formulário Enviado");
    location = "loginVendedor.html";
};

function validar3() {
    var nome = formulario.nome;
    var cvv = formulario.cvv;
    var numc = formulario.numc;
    var datavenc = formulario.datavenc;
    var cep = formulario.cep;
    var numero = formulario.numero

    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
    }
    if (cvv.value == "") {
        alert("CVV não informado");
        cvv.focus();

    }
    if (numc.value == "") {
        alert("Numero do cartão não informado");
        numc.focus();

    }
    if (datavenc.value == "") {
        alert("Data de Vencimento não informado");
        datavenc.focus();

    }
    if (cep.value == "") {
        alert("CEP não informado");
        cep.focus();

    }

    if (numero.value == "") {
        alert("Numero não informado");
        numero.focus();
        return;
    }
    alert("Pagamento Efetuado");
    location = "mercado.html";
};