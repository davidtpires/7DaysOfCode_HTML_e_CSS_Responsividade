const botaoAdicionar = document.querySelector('.button_adicionar');
const buttonConsultaLocal = document.querySelector('.button_consulta-local');
const buttonConsultaVideo = document.querySelector('.button_consulta-video');
const blackscreen = document.querySelector('.blackscreen');


blackscreen.addEventListener('click', () => {    
    // Ação a ser executada ao clicar
    blackscreen.classList.remove('blackscreen-checked');
    buttonConsultaLocal.classList.remove('button_consulta-local-checked');
    buttonConsultaVideo.classList.remove('button_consulta-video-checked');
});

botaoAdicionar.addEventListener('click', () => {
    blackscreen.classList.add('blackscreen-checked');
    buttonConsultaLocal.classList.add('button_consulta-local-checked');
    buttonConsultaVideo.classList.add('button_consulta-video-checked');

});