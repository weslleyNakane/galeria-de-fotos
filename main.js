//chamando JQuery $(document)
$(document).ready(function () {
    $("header button").click(function () {
        $("form").slideDown();
        //formulario com display none ,para nao apareceus no css ,agora vamos chamar ele quando clicarmos.

    })
    //chamando o botao cancelar e dando a funcao do formulario subir quando clicado
    $("#btn-cancelar").click(function () {
        $("form").slideUp();
    })
    //linha de codigo para a pagina nao atualizar quando clicar em adicionar.Usando jquery
    $("form").on("submit", function (e) {
        e.preventDefault();
        //quando usar o botao submit,colocar a imagem dentro da lista de imagem com o link da imagem
        const enderecoNovaImagem = $("#endereco-imagem-nova").val();
        //colocando display:none na nova imagem para depois adicionar o efeito de fade
        const novoitem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoitem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target= "_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>    
            `).appendTo(novoitem);
        //.appendTo(novoitem); usando para adicionar
        $(novoitem).appendTo("ul");
        //adicionando efeito de fade,foi dado como display none quando adiciona e aqui adiciona o fade
        $(novoitem).fadeIn(1000);
        //limpando o campo quando adicionar a imagem.
        $("#endereco-imagem-nova").val("");
    })



})