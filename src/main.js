import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import './registerServiceWorker'

import Login from './views/Login'
import Dashboard from './views/Dashboard'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
	{path: '/', component: Login},
	{path: '/dashboard', component: Dashboard}
];

var router = new VueRouter({
	routes: routes,
	mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})