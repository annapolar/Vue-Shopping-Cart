import Vue from 'vue'
import App from './App.vue'
import shoppingCart from './components/shoppingCart.vue'

Vue.config.productionTip = false
Vue.component('shoppingCart',shoppingCart)


new Vue({
  render: h => h(App),
}).$mount('#app')
