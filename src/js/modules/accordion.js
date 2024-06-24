function accordion() {
	let accrodionBtn = document.querySelectorAll('.direction__accordion-btn');

	accrodionBtn.forEach((el) => {
		el.addEventListener('click', () => {
			let content = el.nextElementSibling;
			let accrodionBtnArrow = el.getElementsByTagName('div')[1];
			let accordionContainer = el.parentElement;

			
			if (content.style.maxHeight) {
				document.querySelectorAll('.direction__accordion-content').forEach((el) => {
					el.style.maxHeight = null
					el.classList.remove('_active');
					accordionContainer.classList.remove('_active');
				})
				document.querySelectorAll('.direction__accordion-btn-arrow').forEach((el) => {
					el.classList.remove('_active');
				})

				
			} else {
				document.querySelectorAll('.direction__accordion-content').forEach((el) => {
					el.style.maxHeight = null;
					el.classList.remove('_active');
				})
				document.querySelectorAll('.direction__accordion-btn-arrow').forEach((el) => {
					el.classList.remove('_active');
				})
				document.querySelectorAll('.direction__accordion').forEach((el) => {
					el.classList.remove('_active');
				})

				content.style.maxHeight = content.scrollHeight + 'px';
				content.classList.add('_active');
				accrodionBtnArrow.classList.add('_active');
				accordionContainer.classList.add('_active');
			}
		})
	})
}

export default accordion;