import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import index from '@/views/index'
import user from '@/views/user'
import general from '@/views/general'
import info from '@/views/info'
import set from '@/views/setup'
Vue.use(Router)
const route = [{
	  path: '/',
	  name: 'login',
	  component: login
	},{
	  path: '/access',
	  name: '门参数',
	  component: index,
	  children:[{
	  	path:'/access/user',
	  	name:'user',
	  	component:user
	  },{
	  	path:'/access/info',
	  	name:'info',
	  	component:info
	  }]
    },{
	  path: '/setup',
	  name: '网络',
	  component: index,
	  children:[{
	  	path:'/setup/general',
	  	name:'general',
	  	component:general
	  }]
}]
export default new Router({
  routes: route
})
