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
    {
        "src": "https://source.unsplash.com/featured/900x600",
        "alt": "Beautiful scenery III ",
	isActive: false,
    },
    ]
 }
 }, methods: {
	switchImage(idx) {
		for(let i = 0; i < this.imageList.length; i++) {
			this.imageList[i].isActive = false;
		}
		this.imageList[idx].isActive = true;
		console.log(idx);
		console.log("I am switching image now");
	}
 }


}
</script>

<template>

 <h1> Blackgallery </h1>
  <!-- XXX This is the gallery switcher -->
    <ul class="gallery-nav"> 
       <li v-for="(item, id) in imageList" :key="id" :id="id"
@click="switchImage(id)" v-bind:class="(item.isActive)? 'switch-image':''" ></li>
    </ul>


  <!-- Images are shown in this container on switching -->
  <div  class="gallery-container">
    <div v-for="(item,id) in imageList" :key="id">

     <div v-if="id == 0">
	<figure id="start" class="gallery-display show-image" >
		<img  :src="item.src"  />
  		<figcaption>{{item.alt}}</figcaption>
	</figure>
      </div>

      <div v-else>
	<figure :id="id+'-img'" v-bind:class = "(item.isActive)? 'gallery-display show-image':'gallery-display'" >
		<img  :src="item.src"  />
  		<figcaption>{{item.alt}}</figcaption>
	</figure>
      </div>

     </div>

</div>

</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/gh/girish1729/blackgallery/source/assets/css/gallery.css");
</style>
