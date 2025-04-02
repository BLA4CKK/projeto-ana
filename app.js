//Parte do calculo das datas(Maldito seja o datetime)
const dataInicio = new Date(2024, 9, 23);

function calcularTempoJuntos() {
    const hoje = new Date();
    
    hoje.setHours(0, 0, 0, 0);

    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();
    let dias = hoje.getDate() - dataInicio.getDate();

    if (dias < 0) {
        meses--;
        dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    document.getElementById('tempo-juntos').innerText = 
        `${anos} anos, ${meses} meses e ${dias} dias`;
}

function calcularProximasDatas() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    let aniversarioNamoro = new Date(hoje.getFullYear(), 10, 23)
    let aniversarioEla = new Date(hoje.getFullYear(), 3, 16)
    let aniversarioEu = new Date(hoje.getFullYear(), 2, 2)

    if (aniversarioNamoro < hoje) aniversarioNamoro.setFullYear(hoje.getFullYear() + 1);
    if (aniversarioEla < hoje) aniversarioEla.setFullYear(hoje.getFullYear() + 1);
    if (aniversarioEu < hoje) aniversarioEu.setFullYear(hoje.getFullYear() + 1);

    function diasRestantes(data) {
        return Math.ceil((data.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
    }

   
    document.getElementById('aniversario-namoro').innerText = 
        `faltam ${diasRestantes(aniversarioNamoro)} dias (${aniversarioNamoro.toLocaleDateString('pt-BR')})`;
    document.getElementById('aniversario-ela').innerText = 
        `faltam ${diasRestantes(aniversarioEla)} dias (${aniversarioEla.toLocaleDateString('pt-BR')})`;
    document.getElementById('aniversario-eu').innerText = 
        `faltam ${diasRestantes(aniversarioEu)} dias (${aniversarioEu.toLocaleDateString('pt-BR')})`;
}

calcularTempoJuntos();
calcularProximasDatas();

//Codigo pra parte das fotos

document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const imagens = document.querySelectorAll(".carousel-image");
    const total = imagens.length;

    function mostrarImagem(i) {
        imagens.forEach(img => img.classList.remove("active"));
        imagens[i].classList.add("active");
    }

    document.getElementById("next").addEventListener("click", function () {
        index = (index + 1) % total;
        mostrarImagem(index);
    });

    document.getElementById("prev").addEventListener("click", function () {
        index = (index - 1 + total) % total;
        mostrarImagem(index);
    });

    setInterval(() => {
        index = (index + 1) % total;
        mostrarImagem(index);
    }, 5000);
});

