// INICIO BEBOUNCE
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// FIM DEBOUNCE

//VARIÁVEIS
const targetEmpresa = document.querySelectorAll('.empresa-article');
const targetPortLeft = document.querySelectorAll('.blocoLeft');
const targetPortRight = document.querySelectorAll('.blocoRight');
const animacaoFadeInLeft = 'fadeInLeft';
const animacaoFadeInRight = 'fadeInRight';
const animacaoFadeInUp = 'fadeInUp';



//FUNÇÃO DE ANIMAÇÃO DE SCROLL

//GATILHO ANIMACAO SUBINDO
function animeScrollUP(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.75));
    targetEmpresa.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animacaoFadeInUp);
        }else{
            element.classList.remove(animacaoFadeInUp);
        }
    })
}

animeScrollUP(); 

if(targetEmpresa.length) {
    window.addEventListener('scroll', function() {
        animeScrollUP();
    });
}
//FIM ANIMACAO SUBINDO


//GATILHO ANIMACAO ESQUERDA
function animeScrollLeft(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.75));
    targetPortLeft.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animacaoFadeInLeft);
        }else{
            element.classList.remove(animacaoFadeInLeft);
        }
    })
}

animeScrollLeft(); 

if(targetPortLeft.length) {
    window.addEventListener('scroll', function() {
        animeScrollLeft();
    });
}
//FIM ANIMACAO ESQUERDA

//GATILHO ANIMACAO DIREITA
function animeScrollRight(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.75));
    targetPortRight.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animacaoFadeInRight);
        }else{
            element.classList.remove(animacaoFadeInRight);
        }
    })
}

animeScrollLeft(); 

if(targetPortRight.length) {
    window.addEventListener('scroll', function() {
        animeScrollRight();
    });
}
//FIM ANIMACAO DIREITA

