<template>
  <div id="app">
    <div class="hero_area"> 
      <NavBar />
      <SliderComponent />
    </div>
    <GalleryComponent />
    <AboutUsComponent />
    <BlogComponnet />
    <RateComponent />
    <ContactUsComponent />
    <InfoComponent />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import SliderComponent from "./components/SliderComponent.vue";
import GalleryComponent from "./components/GalleryComponent.vue";
import AboutUsComponent from "./components/AboutUsComponent.vue";
import BlogComponnet from "./components/BlogComponnet.vue";
import RateComponent from "./components/RateComponent.vue";
import ContactUsComponent from "./components/ContactUsComponent.vue";
import InfoComponent from "./components/InfoComponent.vue";
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
    BlogComponnet,
    RateComponent,
    ContactUsComponent,
    InfoComponent,
  },
  methods: {
    
  },
};
</script>
