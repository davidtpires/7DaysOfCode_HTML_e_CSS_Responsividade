const botaoAdicionar = document.querySelector('.button_adicionar');
const buttonConsultaLocal = document.querySelector('.button_consulta-local');
const buttonConsultaVideo = document.querySelector('.button_consulta-video');
const blackscreen = document.querySelector('.blackscreen');
const formularioContainer = document.querySelector('.formulario__container');
const botaoCadastrarConsulta = document.querySelector('.button_cadastrar_consulta');
const botaoFecharFormulario = document.querySelector('.formulario__fechar');


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

botaoCadastrarConsulta.addEventListener('click', () => {
    formularioContainer.classList.add('formulario__container-checked');
    botaoCadastrarConsulta.classList.add('button_cadastrar_consulta-checked');
});

botaoFecharFormulario.addEventListener('click', () => {
    formularioContainer.classList.remove('formulario__container-checked');
    botaoCadastrarConsulta.classList.remove('button_cadastrar_consulta-checked');
})

