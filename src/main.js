import Vue from 'vue'
import App from './App.vue'
import Datepicker from 'vuejs-datepicker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import store from '@/store/index'
// filter
import { status } from '@/utils'
Vue.filter('status', status)

Vue.use(require('vue-moment'));

// import ClickOutside from 'vue-click-outside'
// Vue.use(ClickOutside)

library.add(fas, far)

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('vue-datepicker', Datepicker)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
