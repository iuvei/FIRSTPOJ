import Home from './components/home.vue'
import User from './components/user.vue'

import History from '@/components/lottoreyhistory'

export default [
	{ path: '/',name:'Home',component: Home },
  { path: '/user',name:'User',component: User },
  { path: '/lottoryhistory', name: 'lottoryhistory', component: History }
]
