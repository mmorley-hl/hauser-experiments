import Flickity from 'flickity'

const carousel = document.querySelectorAll('.carousel')

carousel.forEach((elem) => {

	let arrows = false

	if (elem.classList.contains('carousel--arrows')) {
		arrows = true
	}

	window.addEventListener('DOMContentLoaded', () => {

		const flkty = new Flickity(elem, {
			prevNextButtons: arrows,
			imagesLoaded: true,
			groupCells: true,
			cellAlign: 'left',
			wrapAround: true,
			contain: true,
		})

		setTimeout(() => {
            flkty.resize()
        }, 500)

	})

})