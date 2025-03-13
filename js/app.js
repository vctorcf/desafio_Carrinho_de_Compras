function setarQuantidadePara1(){
    document.getElementById("quantidade").value = 1;
}

function adicionar(){
    let novoProduto = document.getElementById("produto").value;
    const nomeEPreco = novoProduto.split(" - R$");
    let novoProdutoNome = nomeEPreco[0];
    let novoProdutoPreco = parseFloat(nomeEPreco[1]);
    let novoProdutoQuantidade = parseInt(document.getElementById('quantidade').value);
    let novoProdutoPrecoTotal = novoProdutoPreco*novoProdutoQuantidade;
    console.log(`O usuário adicionou ${novoProdutoQuantidade} item(ns) do produto ${novoProdutoNome} por R$${novoProdutoPreco} cada um, totalizando R$${novoProdutoPrecoTotal}.`);

    let produtos = document.getElementById("lista-produtos");

    //Preciso usar o método produtos.appendChild(HTML) para adicionar o novo produto a lista
    //Porém o método .appendChild() precisa de um HTML como parametro, logo preciso cria-lo
    let produtoElemento = document.createElement("section");//criando um novo elemento(a tag <section>)
    produtoElemento.classList.add('carrinho__produtos__produto');//adicionando á tag <section> a classe 'carrinho__produtos__produto'
    produtoElemento.innerHTML=`<span class="texto-azul">${novoProdutoQuantidade}x</span> ${novoProdutoNome} <span class="texto-azul">R$${novoProdutoPreco}</span>`;//adicionando o texto html que fica dentro da classe
    produtos.appendChild(produtoElemento);

    let total = document.getElementById("valor-total");
    let totalAnterior = parseFloat(total.innerHTML.replace("R$",""));
    let novoTotal = novoProdutoPrecoTotal+totalAnterior;
    total.innerHTML=`R$${novoTotal}`;
    console.log(`A quantidade de ${novoProdutoQuantidade} do produto ${novoProdutoNome} foi adicionada ao carrinho, isso fez o total passar de R$${totalAnterior} para R$${novoTotal}.`);
}

function limpar(){
    console.log("Limpando o carrinho...");
    document.getElementById("lista-produtos").innerHTML="";
    document.getElementById("valor-total").innerHTML=`R$0`
}

document.addEventListener("DOMContentLoaded", setarQuantidadePara1());

limpar();