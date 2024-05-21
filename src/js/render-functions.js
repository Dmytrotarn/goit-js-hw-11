function renderImages(


)


const createGallery = images.map(({ original, preview, description }) => {
    return `
<li class="gallery-item">
	<a class="gallery-link" href="${original}">
		<img
			class="gallery-image"
			src="${preview}"
			alt="${description}"
			/>
	</a>
</li>`}).join('')

gallery.innerHTML = createGallery