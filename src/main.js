import Vue from 'vue'
import App from './App.vue'
import Datepicker from 'vuejs-datepicker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(require('vue-moment'));

library.add(fas, far)

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('vue-datepicker', Datepicker)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
