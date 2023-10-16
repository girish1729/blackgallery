function loadImagesToDiv() {
    var galleryArea = document.getElementById("galleryArea");
    var listImages = document.getElementById("listImages");
    for (var i = 0; i < images.length; i++) {
        var src = images[i].src;
        var caption = images[i].alt;
        if (i == 0) {
            galleryArea.innerHTML += "\n\t<figure id=\"start\" class=\"gallery-display show-image\" >\n  \t\t<figcaption>".concat(caption, "</figcaption>\n\t\t<img  src=\"").concat(src, "\"   />\n\t</figure>\n\t");
            listImages.innerHTML += "\n\t\t<li id=\"".concat(i, "\" class=\"switch-image\"></li>\n\t\t");
        }
        else {
            galleryArea.innerHTML += "\n\t<figure id=\"".concat(i, "-img\" class=\"gallery-display\" >\n  \t\t<figcaption>").concat(caption, "</figcaption>\n\t\t<img  src=\"").concat(src, "\"   />\n\t</figure>\n\t");
            listImages.innerHTML += "\n\t\t<li id=\"".concat(i, "\"></li>\n\t\t");
        }
    }
    if (images.length == 0) {
        galleryArea.innerHTML = "\n\t\t<h2> Please configure by inserting images and caption\n\t\tusing images.js file </h2>\n\t\t\n\t\t<pre>\n\t\t const images = [{\n        \t\t\"src\": \"https://source.unsplash.com/featured/800x600\",\n        \t\t\"alt\": \"Beautiful scenery I \"\n    \t\t},\n    \t\t{\n        \t\t\"src\": \"https://source.unsplash.com/featured/700x500\",\n        \t\t\"alt\": \"Beautiful scenery II \"\n    \t\t}\n\t\t];\n\t\t</pre>\n\t";
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
            var start = document.getElementById("start");
            start.style.opacity = 0;
            the_image.classList.add("show-image");
        }
        else {
            var start = document.getElementById("start");
            start.classList.add("show-image");
            start.style.opacity = 1;
        }
    }
    ;
}
for (var x = 0; x < gallery_nav_li.length; x++) {
    navli = gallery_nav_li[x];
    navli.addEventListener('click', switchImage, false);
}
