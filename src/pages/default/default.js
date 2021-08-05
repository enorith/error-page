import Vue from 'vue'
import Default from './Default.vue'
import '@/assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(Default),
}).$mount('#app')
