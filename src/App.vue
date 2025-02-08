<template>
  <div id="app">
    <div class="hero_area"> 
      <NavBar />
      <SliderComponent />
    </div>
    <GalleryComponent />
    <AboutUsComponent />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import SliderComponent from "./components/SliderComponent.vue";
import GalleryComponent from "./components/GalleryComponent.vue";
import AboutUsComponent from "./components/AboutUsComponent.vue";
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
    AboutUsComponent,
  },
  methods: {
    
  },
};
</script>
