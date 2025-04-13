// offsetTop - A distância em relação do elemento ao scroll
// scrollY - Retorna a quantidade em que o scroll já percorreu
// scroll - Permite mudar o scroll para uma coordenada

/* Transição de mover para os links da nav-bar */

function estruturaMover(seletor) {
    $(seletor).click(function(e) {
        e.preventDefault();
    
        const href = $(this).attr("href");
        const element = $(`${href}`).offset();
    
        mover(element);
    });   
}

estruturaMover(".box-courteous > a") /* Botão de apresentação */
estruturaMover("#link > a") /* Links da nav-bar */

/* Links do footer */

$(".links-footer ul > li > a").click(function(e) {
    e.preventDefault();

    const href = $(this).attr("href");
    const element = $(`${href}`).offset()

    moverRodape(element);
});

/* Funções para mover (nav-bar, botão de apresentação) e rodapé */

function mover(element) {
    window.scroll({
        top: element.top - scrollY,
        behavior: "smooth"
    });
};

function moverRodape(element) {
    window.scroll({
        top: element.top,
        behavior: "smooth"
    });
};