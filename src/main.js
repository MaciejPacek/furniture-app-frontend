import './assets/css/bootstrap.css'
import './assets/css/responsive.css'
import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/css/style.css'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
