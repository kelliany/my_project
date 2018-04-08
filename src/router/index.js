import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import total from '@/components/total'

Vue.use(Router)

const option1 = {
  template: '<div>option1</div>'
}
const option2 = {
  template: '<div>option2</div>'
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/item1/option1',
      component: total
    },
    {
      path: '/item1/option2',
      component: option2
    }
  ]
})
