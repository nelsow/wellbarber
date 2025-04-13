const telefoneBarbeiro = "61992077259"


/* Animação de tremer no botão de whatsapp */

let delay;
const icone_whatsapp = $(".contact-whatsapp")

icone_whatsapp.click(function () {
    if (delay) return; /* Quando o delay for verdadeiro ele não executa */

    $(this).css("animation", "tremer .2s")
    delay = true;

    /* Delay de animação */
    setTimeout(() => {
        $(this).css("animation", "")

        delay = false;
    }, 2000)
});

/* Eventos de scroll para sumir e aparecer elementos */

window.addEventListener("scroll", () => {
    if (window.scrollY >= 2429) {
        icone_whatsapp.css("opacity", 0)
        icone_whatsapp.css("pointer-events", "none")
    } else {
        icone_whatsapp.css("opacity", 1)
        icone_whatsapp.css("pointer-events", "visible")
    }
});


/* Fazendo o input de horário do agendamento */
for (let i = 8; i < 18; i++) {
    $("#scheduling-hour").append(`<option>${i}:00</option>`)
}

/* Função para atualizar o botão de agendamento após todos os inputs serem preenchidos */
function updateBtnScheduling(nome, data, hora, corte) {
    const msg = encodeURIComponent(`Olá, meu nome é ${nome} e gostaria de agendar um corte de cabelo no(a):\n\n*Dia:* ${data}\n*Hora prevista:* ${hora}\n*Corte de cabelo:* ${corte}`)

    const whatsapp = `https://wa.me/${telefoneBarbeiro}?text=${msg}`;

    $(".btn-scheduling-now > a").attr("href", whatsapp)
}

$(".btn-scheduling-now > a").on("click", function(e) {
    verificarCampos()

    if ($(this).attr("href").includes("#")) {
        e.preventDefault()
    };
})

/* Pegando os valores dos campos de agendamento */
function verificarCampos() {
    const nome = $("#scheduling-name").val()
    const hora = $("#scheduling-hour").val()
    const corte = $("#scheduling-cut").val()
    const data = $("#scheduling-date").val()

    const msgAviso = $("#scheduling-warns");

    if (!nome || !hora || !corte || !data) {
        msgAviso.text("* Preencha todos os campos!")
        .css("opacity", 1)
    } else {
        msgAviso.text("")
        msgAviso.css("opacity", 0)

        updateBtnScheduling(nome, new Date(data).toLocaleDateString("pt-br"), hora, corte)
    }
}

$("#scheduling-name, #scheduling-hour, #scheduling-cut, #scheduling-date").on("input change", verificarCampos)

/* Animação no menu ao clicar e ao fechar */

$(".box-menu-link > ul > li > a").click(function () {
    $(".menu-link").removeClass("active")
    $(".box-menu-link").removeClass("active").slideToggle(1250)
})

$(".menu-link").click(function () {
    $(this).toggleClass("active")
    $(".box-menu-link").toggleClass("active").slideToggle(1000)
});

$(window).resize(function () {
    if ($(this).width() >= 636) {
        $(".menu-link").removeClass("active")
        $(".box-menu-link").css("display", "none").removeClass("active")
    }
})

