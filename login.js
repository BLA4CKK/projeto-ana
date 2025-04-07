function verificarSenha() {
    let senhaCorreta = "027752";
    let easter_egg = {
        "meupeixinhofavorito123": {
            mensagem: "Pescou meu coração 🐟",
            imagem: "img2.jpg"
        },
        "bocó": {
            mensagem: "Bocó é você oxi 😡😡",
            imagem: "img7.jpg"

        }
    }
    let senhaDigitada = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");
    const imagem = document.getElementById("imagem-peixe");

    if (senhaDigitada === senhaCorreta) {
        mensagem.style.color = "green";
        mensagem.innerText = "Senha correta! Redirecionando...";

        setTimeout(() => {
            window.location.href = "Home.html";
        }, 1500);
    } 

    else if (senhaDigitada in easter_egg){
        const ovo = easter_egg[senhaDigitada]
        mensagem.style.color = "green"
        mensagem.innerText = ovo.mensagem
        imagem.src = ovo.imagem
    }
    
    
    else {
        mensagem.style.color = "red";
        mensagem.innerText = "Senha incorreta! Tente novamente.";
    }
}
