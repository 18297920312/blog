import Vue from 'vue'
import Router from 'vue-router'
import create from '@/pages/Create/create.vue'
import login from '@/pages/Login/login.vue'
import detail from '@/pages/Detail/detail.vue'
import edit from '@/pages/Edit/edit.vue'
import index from '@/pages/Index/index.vue'
import my from '@/pages/My/my.vue'
import register from '@/pages/Register/register.vue'
import user from '@/pages/User/user.vue'
Vue.use(Router)

export default new Router({
  routes: [
      {
         path:'/',
         component:login
      },{
         path:'/create',
         component: create
      },{
        path:'/detail',
        component: detail
      },{
        path:'/edit',
        component: edit
      },{
        path:'/index',
        component: index
      },{
        path:'/login',
        component: login
      },{
        path:'/my',
        component: my
      },{
        path:'/register',
        component: register
      },{
        path:'/user',
        component: user
      }

    ]
})
