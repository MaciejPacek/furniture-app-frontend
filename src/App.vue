<template>
  <div id="app">
    <NavBar />
    <SliderComponent />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import SliderComponent from "./components/SliderComponent.vue";
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
  },
  methods: {
    
  },
};
</script>
