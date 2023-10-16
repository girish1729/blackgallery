
declare var images: any;
function loadImagesToDiv() {
    var galleryArea: any = document.getElementById("galleryArea");
    var listImages: any = document.getElementById("listImages");

    for (let i = 0; i < images.length; i++) {
        let src = images[i].src;
        let caption = images[i].alt;
        if (i == 0) {
            galleryArea.innerHTML += `
	<figure id="start" class="gallery-display show-image" >
		<img  src="${src}"   />
  		<figcaption>${caption}</figcaption>
	</figure>
	`;
            listImages.innerHTML += `
		<li id="${i}" class="switch-image"></li>
		`;
        } else {

            galleryArea.innerHTML += `
	<figure id="${i}-img" class="gallery-display" >
		<img  src="${src}"   />
  		<figcaption>${caption}</figcaption>
	</figure>
	`;
            listImages.innerHTML += `
		<li id="${i}"></li>
		`;
        }

    }

    if(images.length == 0) {
	galleryArea.innerHTML	= `
		<h2> Please configure by inserting images and caption
		using images.js file </h2>
		
		<pre>
		 const images = [{
        		"src": "https://source.unsplash.com/featured/800x600",
        		"alt": "Beautiful scenery I "
    		},
    		{
        		"src": "https://source.unsplash.com/featured/700x500",
        		"alt": "Beautiful scenery II "
    		}
		];
		</pre>
	`;
    }

}

loadImagesToDiv();

const gallery_nav_li: HTMLCollectionOf < HTMLLIElement > = document.getElementsByTagName("li");

const gallery_img: HTMLCollectionOf < HTMLElement > = document.getElementsByTagName("figure");
let navli: any;

function switchImage() {
    for (let y = 0; y < gallery_nav_li.length; y++) {
        gallery_nav_li[y].classList.remove('switch-image');
    }
    this.classList.add("switch-image");
    for (let y = 0; y < gallery_img.length; y++) {
        gallery_img[y].classList.remove("show-image");
        let myid = this.getAttribute("id");
        let the_image: any = document.getElementById(myid + "-img");
        if (the_image) {
            the_image.classList.add("show-image");
        } else {
            let the_image: any = document.getElementById("start");
            the_image.classList.add("show-image");
        }
    };
}


for (let x = 0; x < gallery_nav_li.length; x++) {
    navli = gallery_nav_li[x];
    navli.addEventListener('click', switchImage, false);
}
