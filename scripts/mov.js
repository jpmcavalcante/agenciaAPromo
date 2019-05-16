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

const target = document.querySelectorAll('.empresa-article');
const animacao = 'fadeInUp';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.75));
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animacao);
        }else{
            element.classList.remove(animacao);
        }
    })
}

animeScroll(); 

if(target.length) {

    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 200));
}