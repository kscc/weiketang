import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import App from './App'
Vue.config.productionTip = false

Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 
    'inline': true, 
    'button': true, 
    'navbar': true, 
    'title': false, 
    'toolbar': true, 
    'tooltip': true, 
    'movable': true, 
    'zoomable': true, 
    'rotatable': false, 
    'scalable': false, 
    'transition': true,
    'fullscreen': true, 
    'keyboard': true, 
    'url': 'data-source',
    
  }

})
const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/components/Home'], resolve),
    },
    {
      path:'/imgs',
      name:'imgs',
      component:resolve => require(['@/components/Imgs'],resolve)
    }
  ]
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
