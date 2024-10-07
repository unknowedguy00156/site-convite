document.getElementById("botaoSim").addEventListener("click", function() {
    const gif = document.getElementById("GIF");
    gif.src = "coisas/happy cat.gif"; // Substitua pelo caminho do seu GIF feliz
    gif.style.display = "block"; // Mostra a imagem
});

document.getElementById("botaoNao").addEventListener("click", function() {
    const gif = document.getElementById("GIF");
    gif.src = "coisas/sad cat.gif"; // Substitua pelo caminho do seu GIF triste
    gif.style.display = "block"; // Mostra a imagem
});

