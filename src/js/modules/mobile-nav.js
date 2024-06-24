function mobileNav() {
	// Mobile nav button
	const navBtns = document.querySelectorAll('.sidebar__nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuForeground = document.querySelector('.mobile-nav-foreground');

	navBtns.forEach((el) => {
		el.onclick = function () {
			const menuIcon = el.getElementsByTagName('div')[0];

			nav.classList.toggle('mobile-nav--open');
			menuIcon.classList.toggle('_active');
			menuForeground.classList.toggle('_active');
			document.body.classList.toggle('no-scroll');
			document.querySelector('.wrapper').classList.toggle('no-scroll');
		};
	})

}

export default mobileNav;


