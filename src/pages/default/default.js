import Vue from 'vue'
import Default from './Default.vue'
import '@/assets/tailwind.css'

if (process.env.NODE_ENV != 'production') {
    require('./mock.js')
}

Vue.config.productionTip = false


new Vue({
    render: h => h(Default),
}).$mount('#app')
