function setarQuantidadePara1(){
    document.getElementById("quantidade").value = 1;
}

function adicionar(){
    let novoProduto = document.getElementById("produto").value;
    console.log(novoProduto);
    const nomeEPreco = novoProduto.split(" - R$");
    let novoProdutoNome = nomeEPreco[0];
    let novoProdutoPreco = nomeEPreco[1];
    console.log(`${nomeEPreco};${novoProdutoNome};${novoProdutoPreco}`);
    let novoProdutoQuantidade = document.getElementById('quantidade').value;
    console.log(novoProdutoQuantidade);

    let produtos = document.getElementById("lista-produtos");

    //Preciso usar o método document.getElementbyId(id).appendChild(HTML) para adicionar o novo produto a lista
    //Porém o método .appendChild() precisa de um HTML como parametro, logo preciso cria-lo
    let produtoElemento = document.createElement("section");//criando um novo elemento(a tag <section>)
    produtoElemento.classList.add('carrinho__produtos__produto');//adicionando á tag a classe 'carrinho__produtos__produto'
    produtoElemento.innerHTML=`<span class="texto-azul">${novoProdutoQuantidade}x</span> ${novoProdutoNome} <span class="texto-azul">R$${novoProdutoPreco}</span>`;//adicionando o texto html que fica dentro da classe
    produtos.appendChild(produtoElemento);


    // let produtosAdicionados = `<section class="carrinho__produtos__produto">
    //       <span class="texto-azul">${novoProdutoQuantidade}x</span> ${novoProdutoNome} <span class="texto-azul">R$${novoProdutoPreco}</span>
    //     </section>`;

    // produtos.appendChild(produtosAdicionados);
    console.log(produtos);

}

function limpar(){

}

document.addEventListener("DOMContentLoaded", setarQuantidadePara1());