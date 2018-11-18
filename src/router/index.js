import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Router from 'vue-router'
import routes from '@/app/routes'

Vue.use(Vuex)
Vue.use(Vuetify)
Vue.use(Router)

const router = new Router({
  routes: routes,
  mode: 'history'
})

export default router
