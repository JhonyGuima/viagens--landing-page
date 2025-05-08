// Right carousel

let imagemIndex = 0;
let imagens = document.querySelectorAll('.imagem-direita-slide');
let circulos = document.querySelectorAll('.circulo-direita');


function mostrarImagem(index) {
  
    const offset = -index * 33.33; 
    document.querySelector('.imagens-direita').style.transform = `translateX(${offset}%)`;

    
    circulos.forEach(circulo => circulo.classList.remove('active'));
    circulos[index].classList.add('active');

    
    imagemIndex = index;
}


function moverCarrossel() {
    imagemIndex = (imagemIndex + 1) % imagens.length;
    mostrarImagem(imagemIndex);
}


setInterval(moverCarrossel, 5000);


mostrarImagem(imagemIndex);


// Left carousel



let imagemIndexEsq = 0;
let imagensEsq = document.querySelectorAll('.imagem-esquerda-slide');
let circulosEsq = document.querySelectorAll('.circulo-esquerda');


function mostrarImagemEsq(index) {
    
    const offset = -index * 33.33; 
    document.querySelector('.imagens-esquerda').style.transform = `translateX(${offset}%)`;

    
    circulosEsq.forEach(circulo => circulo.classList.remove('active'));
    circulosEsq[index].classList.add('active');

    
    imagemIndexEsq = index;
}


function moverCarrosselEsq() {
    imagemIndexEsq = (imagemIndexEsq + 1) % imagensEsq.length;
    mostrarImagemEsq(imagemIndexEsq);
}

setInterval(moverCarrosselEsq, 5000);


mostrarImagemesq(imagemIndexEsq);

