function verificarSenha() {
    let senhaCorreta = "027752";
    let easter_egg = "meupeixinhofavorito123"
    let senhaDigitada = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    if (senhaDigitada === senhaCorreta) {
        mensagem.style.color = "green";
        mensagem.innerText = "Senha correta! Redirecionando...";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    } 

    else if (senhaDigitada == easter_egg){
        mensagem.style.color = "green"
        mensagem.innerText = "Pescou meu coração 🐟"
        document.getElementById("imagem-peixe").src = "img2.jpg";
    }
    
    
    else {
        mensagem.style.color = "red";
        mensagem.innerText = "Senha incorreta! Tente novamente.";
    }
}
