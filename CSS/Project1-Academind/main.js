
//var images = document.querySelectorAll(.images); PARA CASO CADA UMA DAS IMAGENS TIVESSE O MESMO NOME DE CLASSE seleciona todos os itens do array da classe
var images = document.querySelector('.images');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}  

//images[0].addEventListener('click', openModal);primeira imagem //IF U PUT THE PARENTHESIS IT WILL EXECUTE AUTMATICALLY
//images[1].addEventListener('click', openModal);segunda imagem

//PARA NÃO FAZER ISSO MIL VEZES, FAZER LOOP
//for (i = 0; i < images.length; i++) {
//    images[i].addEventListener('click', openModal);
//}

//images.addEventListener('click', openModal);
//backdrop.addEventListener('click', closeModal);

images.onclick = openModal; //IF U PUT THE PARENTHESIS IT WILL EXECUTE AUTMATICALLY
backdrop.onclick = closeModal;
