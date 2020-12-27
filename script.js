let theme = localStorage.getItem('theme');

if (theme == null) {
	setTheme('light');
} else {
	setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i=0; i < themeDots.length; i++) {
	themeDots[i].addEventListener('click', function() {
		let mode = this.dataset.mode;
		console.log('Options clicked' + mode);
		setTheme(mode);
	})
}

function setTheme(mode) {
	switch (mode) {
		case 'light':
			document.getElementById('theme-style').href = 'default.css';
			localStorage.setItem('theme', mode);
			break;
		case 'blue':
			document.getElementById('theme-style').href = 'blue.css';
			localStorage.setItem('theme', mode);
			break;
		case 'green':
			document.getElementById('theme-style').href = 'green.css';
			localStorage.setItem('theme', mode);
			break;
		case 'purple':
			document.getElementById('theme-style').href = 'purple.css';
			localStorage.setItem('theme', mode);
			break;			
	}
}