
        var mensagemElement = document.getElementById("mensagem");
        var bannerWidth = document.getElementById("banner").offsetWidth;
    
        function animarMensagem() {
            var left = -200; // Inicializa a posição à esquerda da tela
            var interval = setInterval(function() {
                left += 5; // Move 5 pixels à direita a cada iteração
                mensagemElement.style.left = left + "px";
    
                // Verifica se a mensagem atingiu o final do banner
                if (left >= bannerWidth) {
                    clearInterval(interval); // Para a animação
                    setTimeout(function() {
                        mensagemElement.style.left = "-200px"; // Reinicia a mensagem à esquerda
                        animarMensagem(); // Inicia a animação novamente
                    }, 1000); // Espera 1 segundo antes de reiniciar
                }
            }, 30); // Intervalo de 30 milissegundos para suavizar a animação
        }
    
        animarMensagem(); // Inicia a animação quando a página carrega
