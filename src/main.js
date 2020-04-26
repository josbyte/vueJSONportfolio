import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'
import router from './router'
import store from './store'
import axios from 'axios'
import VModal from 'vue-js-modal'
import vueScrollto from 'vue-scrollto'

Vue.use(VModal)
Vue.use(vueScrollto)

Vue.use(axios)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
