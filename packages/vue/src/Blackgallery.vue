<script lang="ts">

export default {
    data() {
  	return {
	galleryArea: '',
imageList:  [{
        "src": "assets/img/1.jpg",
        "alt": "Beautiful scenery I ",
	isActive: false,
    },
    {
        "src": "assets/img/2.jpg",
        "alt": "Beautiful scenery II ",
	isActive: false,
    },
    {
        "src": "assets/img/3.jpg",
        "alt": "Beautiful scenery III ",
	isActive: false,
    },
    {
        "src": "assets/img/4.jpg",
        "alt": "Beautiful scenery IV ",
	isActive: false,
    },
    {
        "src": "assets/img/5.jpg",
        "alt": "Beautiful scenery V",
	isActive: false,
    },
    {
        "src": "assets/img/6.jpg",
        "alt": "Beautiful scenery VI ",
	isActive: false,
    },
    {
        "src": "assets/img/7.jpg",
        "alt": "Beautiful scenery VII",
	isActive: false,
    },
    {
        "src": "assets/img/8.jpg",
        "alt": "Beautiful scenery VII ",
	isActive: false,
    },
]
 }
 }, methods: {
	switchImage(idx) {
		this.imageList[idx].isActive = true;
	}
 }


}
</script>

<template>

 <h1> Blackgallery </h1>

<section class="gallery clearfix">
  <!-- Images are shown in this container on switching -->
  <div v-for="(item,id) in imageList" :key="id" class="gallery-container clearfix">
     <div v-if="id == 0">
	<figure id="start" class="gallery-display show-image" >
		<img  :src="item.src"  />
  		<figcaption>{{item.alt}}</figcaption>
	</figure>
      </div>
      <div v-else>
	<figure id="id+'-img'" v-bind:class = "(item.isActive)? 'gallery-display show-image':'gallery-display'" >
		<img  :src="item.src"  />
  		<figcaption>{{item.alt}}</figcaption>
	</figure>
      </div>
  </div>

  <!-- XXX This is the gallery switcher -->
  <nav>
    <ul v-for="(item, id) in imageList" :key="id" class="gallery-nav"> 
       <li id="id" @click="$emit('switchImage', id)" v-bind:class =
"(item.isActive)? 'switch-image':''" ></li>
    </ul>
  </nav>
</section>
</template>

<style scoped>
@import url("assets/css/gallery.css");
</style>
