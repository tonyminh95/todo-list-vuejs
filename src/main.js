import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Datepicker from 'vuejs-datepicker';

library.add(fas, far)

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('vue-datepicker', Datepicker)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
