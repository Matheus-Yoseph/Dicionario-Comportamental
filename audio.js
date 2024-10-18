document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('musica');
    const playBtn = document.getElementById('play-btn');

    // Carregar o tempo salvo do LocalStorage
    const savedTime = localStorage.getItem('audioTime');
    if (savedTime) {
        audio.currentTime = savedTime; // Continua de onde parou
    }

    // Controlar a reprodução e pausa da música
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = '&#10074;&#10074;'; // Ícone de Pause
        } else {
            audio.pause();
            playBtn.innerHTML = '&#9658;'; // Ícone de Play
        }
    });

    // Salvar o tempo da música antes de sair da página
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('audioTime', audio.currentTime);
    });

    // Garantir que o áudio seja retomado corretamente ao voltar para a página
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) { // Página carregada do cache
            const savedTime = localStorage.getItem('audioTime');
            if (savedTime) {
                audio.currentTime = savedTime;
            }
            audio.play(); // Retomar a reprodução
            playBtn.innerHTML = '&#10074;&#10074;'; // Alterar o botão para Pause
        }
    });


//Adiciona o loop da música
audio.loop = true;

});

