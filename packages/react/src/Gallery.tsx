import React, {
    Fragment,
    useState,
    useRef,
    useEffect,
    Component
} from "react";
import './assets/css/gallery.css';


function imageGallery() {

    const gallery_nav_li:HTMLCollectionOf<HTMLLIElement> = document.getElementsByTagName("li");

   const gallery_img:HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName("img");
   
    for(let x = 0; x < gallery_nav_li.length; x++) {
	let navli:any = gallery_nav_li[x];
        navli.onclick = function() {
            
            var myid = navli.getAttribute("id");
            
            for(let z = 0; z < gallery_nav_li.length; z++) {
                gallery_nav_li[z].removeAttribute("class");
            };
            
            navli.setAttribute("class", "g-n-active");
            
            for(let y = 0; y < gallery_img.length; y++) {
                gallery_img[y].removeAttribute("class");
                var the_image:any = document.getElementById(myid + "-img");
                the_image.setAttribute("class", "g-active");
            };
        };
    };
};

imageGallery();



return ( <Fragment>

<section className="dark:bg-gray-800 dark:text-white">

<div class="gallery clearfix">
  <div class="gallery-container clearfix">
    <img  src="assets/img/1.jpg" id="start" />
    <img  src="assets/img/2.jpg" id="first-img" />
    <img  src="assets/img/3.jpg" id="second-img" />
    <img  src="assets/img/4.jpg" id="third-img" />
    <img  src="assets/img/5.jpg" id="fourth-img" />
    <img  src="assets/img/7.jpg" id="fifth-img" />
    <img  src="assets/img/8.jpg" id="sixth-img" />
    <img  src="assets/img/9.jpg" id="seventh-img" />
    <img  src="assets/img/6.jpg" class="g-active" id="eighth-img" />
  </div>
  <nav>
    <ul class="gallery-nav">
      <li class="g-n-active" id="fifth"></li>
      <li id="first"></li>
      <li id="second"></li>
      <li id="third"></li>
      <li id="fourth"></li>
      <li id="fifth"></li>
      <li id="sixth"></li>
      <li id="seventh"></li>
      <li id="eighth"></li>
    </ul>
  </nav>
</div>

</section>

  </Fragment>
  );
}

export default Gallery;
