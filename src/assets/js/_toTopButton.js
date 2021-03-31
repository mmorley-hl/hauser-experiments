const elems = document.querySelectorAll('.to_top_button')
const a_test_spacing_value = document.querySelectorAll('.a-test-spacing__value')
console.log('a-test-spacing__value', a_test_spacing_value)

elems.forEach((elem) => {
	elem.onclick = function(e) {
		e.preventDefault()

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
})
const buttonElems = document.querySelectorAll('.button_test')

window.onscroll = (e) => {
	if(a_test_spacing_value) {
		a_test_spacing_value.forEach((elem) => {
			console.log('window.pageYOffset', window.pageYOffset)
			// elem.style.transform = `translate(0px, -${window.pageYOffset}px)`;
			elem.style.margin = `-${window.pageYOffset/3}px 0px 0px 0px`;
		})
	}
	// console.log(window.pageYOffset)
	if (window.pageYOffset > "650") {
		// console.log('button scroll 650 plus')
		buttonElems.forEach((elem) => {
			// console.log("button", elem )
			elem.classList.remove("button_test--hide");
		})
	} else {
		console.log('button scroll 650 minus')
		buttonElems.forEach((elem) => {
			// console.log("button", elem )
			elem.classList.add("button_test--hide");
		})
	}
}