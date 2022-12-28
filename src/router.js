import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import PolticaPrivacidade from './views/poltica-privacidade'
import Home from './views/home'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Poltica-Privacidade',
      path: '/poltica-privacidade',
      component: PolticaPrivacidade,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
  ],
})
