

<script lang='ts'>

import {
    writable
} from "svelte/store";
const imageList  = writable([]);


let fetchJson = fetch('config.json').then(res => res.json()).
	then((res) => ( imageList.set(res)));

const emptyMsg = `
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


const switchImage = (idx) => {
    for (let i = 0; i < $imageList.length; i++) {
        $imageList[i].isActive = false;
    }
    $imageList[idx].isActive = true;

    console.log(idx);
    console.log("I am switching image now");
    imageList.set([...$imageList]);
};

const onLoad = () => {
	switchImage(0);
};

   </script>


 <h1> Blackgallery </h1>
<!-- XXX This is the gallery switcher -->
  <nav>
    <ul id="listImages" class="gallery-nav"> 
  {#each $imageList as {src, alt, isActive}, index } 
   <li id={index} on:click= {() => switchImage(index)} class="{ isActive ?  'switch-image' : ''}" >
 </li>
  {/each}
    </ul>
 
  </nav>


<section class="gallery clearfix">
  <!-- Images are shown in this container on switching -->
  <div id="galleryArea" class="gallery-container clearfix">
	{#if $imageList.length == 0}
		{@html emptyMsg}
	{/if}
  {#each $imageList as {src, alt, isActive}, index } 
	{#if index == 0}
	<figure id="start"  style="opacity:{ isActive ? '1' : '0'}" class="gallery-display show-image" >
  		<figcaption>{alt}</figcaption>
		<img  on:load={onLoad} src={src}  />
	</figure>

	{:else}
	<figure id={index +'-img'} class="{ isActive ?  'gallery-display show-image':'gallery-display'}" >
  		<figcaption>{alt}</figcaption>
		<img  src={src}  />
	</figure>
	{/if}

  {/each}
  </div>

</section>




