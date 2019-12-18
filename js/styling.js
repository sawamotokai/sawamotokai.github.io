const nav = document.querySelector('.nav');

var hasScrolledPast = false;

window.onscroll = () => {
	let top = window.scrollY;
	if (top > 880) {
		if (!hasScrolledPast) {
			hasScrolledPast = true;
			var projectHeader = new Typed('.projectHeaderText', {
				stringsElement: '#projectHeaderTyped',
				typeSpeed: 40,
				backSpeed: 40
			});
		}
		nav.classList.add('navColored');
	} else {
		nav.classList.remove('navColored');
	}
};
