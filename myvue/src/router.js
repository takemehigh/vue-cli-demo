import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Home from './views/home'

import demo1 from './components/demo1'
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
    {
        path: '/',
        name:'home',
        component: Home
    }
    ,
    {
        path: '/helloworld12',
        name:'helloworld2',
        component: HelloWorld
    }
    ,
    {
        path: '/home',
        name:'home',
        component: Home,
        children: [
            {
              path: '/demo1sub',
              name: 'demo1',
              component: demo1
            }, {
              path: '/helloworldsub',
              name: 'helloworld',
              component: HelloWorld,
              props:true
            },{
                path: '/demo1',
                name:'demo1',
                component: demo1
            },
            {
                path: '/helloworld',
                name:'helloworld',
                component: HelloWorld,
                props:true
            }
          ]
    }
    ]}
)