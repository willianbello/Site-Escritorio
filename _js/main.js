

$(document).ready(function() {

    var link = $('#linkParaIr');
    var subir = $('#botaoSubir');
    var conteudo1 = $('#conteudo1');
    var conteudo2 = $('#conteudo2');
    var conteudo3 = $('#conteudo3');
    var textoConteudo1 = $('#textoConteudo1');
    var textoConteudo2 = $('#textoConteudo2');
    var textoConteudo3 = $('#textoConteudo3');
    var conteudoSecao3Imagens = $('#conteudoSecao3Imagens');

    conteudo1.css('opacity', 0);
    conteudo2.css('opacity', 0);
    conteudo3.css('opacity', 0);
    textoConteudo1.css('opacity', 0);
    textoConteudo2.css('opacity', 0);
    textoConteudo3.css('opacity', 0);
    conteudoSecao3Imagens.css('opacity', 0);

    /*Rolar até o item clicado*/
    $(link).click(function() {

        var seletor = $(this).attr("href");
        console.log(seletor);
        var posicao = $(seletor).offset().top;
        $("html, body").animate({
            scrollTop: posicao - 50
        }, 1500);

    });

    /* Botão para subir */
    $(subir).click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
    });

    /* Fazer surgir quando atingir uma altura */
    $(window).scroll(function() {
        var minhaPosicao = $(this).scrollTop();

        console.log(minhaPosicao);
        
        if (minhaPosicao >= 200){
            conteudo1.css('opacity', 100);
            conteudo1.addClass('conteudoEsq');
            textoConteudo1.css('opacity', 100);
            textoConteudo1.addClass('conteudoDir');
        }

        if (minhaPosicao >= 600){
            conteudo2.css('opacity', 100);
            conteudo2.addClass('conteudoDir');
            textoConteudo2.css('opacity', 100);
            textoConteudo2.addClass('conteudoEsq');
        }

        if (minhaPosicao >= 1200){
            conteudo3.css('opacity', 100);
            conteudo3.addClass('conteudoEsq');
            textoConteudo3.css('opacity', 100);
            textoConteudo3.addClass('conteudoDir');
        }

        if (minhaPosicao >= 1800){
            conteudoSecao3Imagens.css('opacity', 100);
            conteudoSecao3Imagens.addClass('divisao3Imagens');
        }

        if (minhaPosicao >= 400) {
            //subir.fadeIn();
        } else {
            //subir.fadeOut();
        }
    });


/* ======== Acessibilidade ======== */
    
    /* Aumentar a fonte */

    $('#aumentando').click(function (){
        fonteAcess('a')
    });

    /* Diminuir a fonte */
    $('#diminuindo').click(function (){
        fonteAcess('d')
    });

    /* Restaurar Padrões */
    $('#original').click(function (){
        fonteAcess('o');
    });

    function fonteAcess(e){
        
        var corpo = $('body');
        var fonte = corpo.css('font-size'); //pegando informação do tamanho da fonte do body
        fonte = fonte.substring(0,2);       //tirando o px após o numero
        fonte = parseInt(fonte);            //transformando string em int

        //console.log(fonte); DEBUG
        
        if (e == 'a' && fonte <= 23) {
            corpo.css("fontSize", parseInt(fonte) + 1);
        } 
        
        if (e == 'd' && fonte >= 17){
            corpo.css("fontSize", parseInt(fonte) - 1);
        }

        if (e == 'o'){
            corpo.css("fontSize", 20);
        }
        
    }
    
});