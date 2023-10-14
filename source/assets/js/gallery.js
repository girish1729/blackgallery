var imageList = [{
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
    var galleryArea = document.getElementById("galleryArea");
    var listImages = document.getElementById("listImages");
    for (var i = 0; i < imageList.length; i++) {
        var src = imageList[i].src;
        var caption = imageList[i].alt;
        if (i == 0) {
            galleryArea.innerHTML += "\n\t<figure id=\"start\" class=\"gallery-display show-image\" >\n\t\t<img  src=\"".concat(src, "\"   />\n  \t\t<figcaption>").concat(caption, "</figcaption>\n\t</figure>\n\t");
            listImages.innerHTML += "\n\t\t<li id=\"".concat(i, "\" class=\"switch-image\"></li>\n\t\t");
        }
        else {
            galleryArea.innerHTML += "\n\t<figure id=\"".concat(i, "-img\" class=\"gallery-display\" >\n\t\t<img  src=\"").concat(src, "\"   />\n  \t\t<figcaption>").concat(caption, "</figcaption>\n\t</figure>\n\t");
            listImages.innerHTML += "\n\t\t<li id=\"".concat(i, "\"></li>\n\t\t");
        }
    }
}
loadImagesToDiv();
var gallery_nav_li = document.getElementsByTagName("li");
var gallery_img = document.getElementsByTagName("figure");
var navli;
function switchImage() {
    for (var y = 0; y < gallery_nav_li.length; y++) {
        gallery_nav_li[y].classList.remove('switch-image');
    }
    this.classList.add("switch-image");
    for (var y = 0; y < gallery_img.length; y++) {
        gallery_img[y].classList.remove("show-image");
        var myid = this.getAttribute("id");
        var the_image = document.getElementById(myid + "-img");
        if (the_image) {
            the_image.classList.add("show-image");
        }
        else {
            var the_image_1 = document.getElementById("start");
            the_image_1.classList.add("show-image");
        }
    }
    ;
}
for (var x = 0; x < gallery_nav_li.length; x++) {
    navli = gallery_nav_li[x];
    navli.addEventListener('click', switchImage, false);
}
