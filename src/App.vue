<template>
  <div id="app">
    <div class="hero_area"> 
      <NavBar />
      <SliderComponent />
      <GalleryComponent />
    </div>
    
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import SliderComponent from "./components/SliderComponent.vue";
import GalleryComponent from "./components/GalleryComponent.vue";
import '@/assets/css/bootstrap.css'
import '@/assets/css/responsive.css'
import '@/assets/css/slick.css'
import '@/assets/css/slick-theme.css'
import '@/assets/css/style.css'

export default {
  name: "App",
  components: {
    NavBar,
    SliderComponent,
    GalleryComponent,
  },
  methods: {
    
  },
};
</script>
