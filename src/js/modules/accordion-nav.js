function accordionNav() {
	let accrodionNavBtn = document.querySelectorAll('.mobile-nav__list-title');


	accrodionNavBtn.forEach((el) => {
		el.addEventListener('click', () => {
			let content = el.nextElementSibling;
			let accrodionBtnArrow = el.getElementsByTagName('div')[0];
			let accordionContainer = el.parentElement;

			
			if (content.style.maxHeight) {
				document.querySelectorAll('.mobile-nav__sub-list').forEach((el) => {
					el.style.maxHeight = null
					el.classList.remove('_active');
					accordionContainer.classList.remove('_active');
				})
				document.querySelectorAll('.mobile-nav__list-title-btn').forEach((el) => {
					el.classList.remove('_active');
				})

				
			} else {
				document.querySelectorAll('.mobile-nav__sub-list').forEach((el) => {
					el.style.maxHeight = null;
					el.classList.remove('_active');
				})
				document.querySelectorAll('.mobile-nav__list-title-btn').forEach((el) => {
					el.classList.remove('_active');
				})

				content.style.maxHeight = content.scrollHeight + 'px';
				content.classList.add('_active');
				accrodionBtnArrow.classList.add('_active');
			}
		})
	})
}

export default accordionNav;