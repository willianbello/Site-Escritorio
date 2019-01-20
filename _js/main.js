
$(document).ready(function() {
    
    var link = $('menu li a');
    var inicio = $('#inicio');
    
    var botaoModal = $('#abrirModal');
    var formulario = $('.formulario');
    var balanca = $('.balanca');
    var balancaFrase = $('.frase');
    var areas = $('.textoFiguras');

    /*animação inicial*/
    botaoModal.addClass('enter-left-bounce');
    formulario.addClass('enter-left-bounce');

    /*Rolar até o item clicado*/
    $(link).click(function() {

        var seletor = $(this).attr("href");
        //console.log(seletor);
        var posicao = $(seletor).offset().top;
        $("html, body").animate({
            scrollTop: posicao - 50
        }, 1500);

    });

    /* Botão para subir */
    $(inicio).click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
    });
   
    /* Fazer surgir quando atingir uma altura */
    $(window).scroll(function() {
       
        var minhaPosicao = $(this).scrollTop();

        //console.log(minhaPosicao);

        if (minhaPosicao == 0){
            $('.logoSite').css('height', '2em');
        }else{
            $('.logoSite').css('height', '1.7em');
        }

        if (minhaPosicao >= 200){
            balancaFrase.css('opacity', 100);
            balancaFrase.addClass('animated');
            balancaFrase.addClass('flip-left');
        }

        if (minhaPosicao >= 250){
            balanca.css('opacity', 100);
            balanca.addClass('animated');
            balanca.addClass('flip-right');
        }

        if (minhaPosicao >= 700){
            areas.css('opacity', 100);
            areas.addClass('animated');
            areas.addClass('flip-right');

            /*areas.addClass('flip-bottom');*/
        }

        if (minhaPosicao >= 400) {
            /*subir.fadeIn();*/
        } else {
            /*subir.fadeOut();*/
        }
    });


/* ======== Acessibilidade ======== */
    
    /* Aumentar a fonte */
    /*
    $('#aumentando').click(function (){
        fonteAcess('a')
    });

    /* Diminuir a fonte
    $('#diminuindo').click(function (){
        fonteAcess('d')
    });

    /* Restaurar Padrões 
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
    */
    
});