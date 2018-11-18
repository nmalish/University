import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Vue from 'vue'
import App from './app/App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
