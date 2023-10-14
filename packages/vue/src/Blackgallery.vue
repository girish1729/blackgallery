<script lang="ts">

export default {
    data() {
  	return {
imageList:  [{
        "src": "https://source.unsplash.com/featured/800x600",
        "alt": "Beautiful scenery I ",
	isActive: false,
    },
    {
        "src": "https://source.unsplash.com/featured/700x500",
        "alt": "Beautiful scenery II ",
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

<div class="gallery clearfix">
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
</div>
</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/gh/girish1729/blackgallery/source/assets/css/gallery.css");
</style>
