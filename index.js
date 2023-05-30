const btns = document.querySelectorAll('[data-links] > div > img');
btns.forEach(expand);

function expand(target) {
	target.onclick = () => {
		if (target.parentElement.className !== 'open') btns.forEach(reset);
		target.parentElement.classList.toggle('open');
	};
}

function reset(target) {
	target.parentElement.classList.remove('open');
}

