<script lang='ts'>

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
</script>

<div class="gallery clearfix">
  <div class="gallery-container clearfix">
    <img  src="asssets/img/1.jpg" id="start" />
    <img  src="asssets/img/2.jpg" id="first-img" />
    <img  src="asssets/img/3.jpg" id="second-img" />
    <img  src="asssets/img/4.jpg" id="third-img" />
    <img  src="asssets/img/5.jpg" id="fourth-img" />
    <img  src="asssets/img/7.jpg" id="fifth-img" />
    <img  src="asssets/img/8.jpg" id="sixth-img" />
    <img  src="asssets/img/9.jpg" id="seventh-img" />
    <img  src="asssets/img/6.jpg" class="g-active" id="eighth-img" />
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

