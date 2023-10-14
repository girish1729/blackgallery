const imageList: any[] = [{
        "src": "assets/img/1.jpg",
        "alt": "Beautiful scenery I "
    },
    {
        "src": "assets/img/2.jpg",
        "alt": "Beautiful scenery II "
    },
    {
        "src": "assets/img/3.jpg",
        "alt": "Beautiful scenery III "
    },
    {
        "src": "assets/img/4.jpg",
        "alt": "Beautiful scenery IV "
    },
    {
        "src": "assets/img/5.jpg",
        "alt": "Beautiful scenery V"
    },
    {
        "src": "assets/img/6.jpg",
        "alt": "Beautiful scenery VI "
    },
    {
        "src": "assets/img/7.jpg",
        "alt": "Beautiful scenery VII"
    },
    {
        "src": "assets/img/8.jpg",
        "alt": "Beautiful scenery VII "
    },
];

function loadImagesToDiv() {
    var galleryArea: any = document.getElementById("galleryArea");
    var listImages: any = document.getElementById("listImages");

    for (let i = 0; i < imageList.length; i++) {
        let src = imageList[i].src;
        let caption = imageList[i].alt;
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
