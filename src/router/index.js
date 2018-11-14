import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Mine from '@/components/Mine'
import Home from '@/components/Home'
import Order from '@/components/Order'
import Menu from '@/components/Menu'
import ShopList from '@/components/ShopList'
import KeyLogin from '@/components/KeyLogin'
import ShopDetail from '@/components/ShopDetail'
import NewsList from '@/components/NewsList'
import NewsDetail from '@/components/NewsDetail'
import ShareList from '@/components/ShareList'
import EvaluateDetail from '@/components/EvaluateDetail'
import Queue from '@/components/Queue'
import ShopQueue from '@/components/ShopQueue'
import QueueDetail from '@/components/QueueDetail'
import Book from '@/components/Book'
import BookDetail from '@/components/BookDetail'
import RecommendList from '@/components/RecommendList'
import TakeOut from '@/components/TakeOut'
import TakeOutPayment from '@/components/TakeOutPayment'
import ShopCity from '@/components/ShopCityList' 
import OrderDetail from '@/components/OrderDetail' 
import Evaluate from '@/components/Evaluate' 


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', redirect: '/index/home' },
    { path: '*', redirect: '/index/home' },
    { path: '/index', redirect: '/index/home' },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
      {
				path: '/index/mine',
				name: 'mine',
				component: Mine,
      },
      {
				path: '/index/order',
				name: 'order',
				component: Order,
      },
      {
				path: '/index/home',
				name: 'home',
				component: Home,
      },
      {
				path: '/index/menu',
				name: 'menu',
				component: Menu,
      },
      {
				path: '/index/shopList',
				name: 'shopList',
				component: ShopList,
      },
      {
				path: '/index/keyLogin',
				name: 'keylogin',
				component: KeyLogin,
      },
      {
				path: '/index/shopDetail',
				name: 'shopDetail',
				component: ShopDetail,
      },
      {
				path: '/index/newsList',
				name: 'newsList',
				component: NewsList,
      },
      {
				path: '/index/newsDetail/:id',
				name: 'newsDetail',
				component: NewsDetail,
      },
      {
				path: '/index/shareList',
				name: 'shareList',
				component: ShareList,
      },
      {
				path: '/index/evaluateDetail/:id',
				name: 'evaluateDetail',
				component: EvaluateDetail,
      },
      {
				path: '/index/queue',
				name: 'queue',
				component: Queue,
      },
      {
				path: '/index/shopQueue',
				name: 'shopQueue',
				component: ShopQueue,
      },
      {
				path: '/index/queueDetail',
				name: 'queueDetail',
				component: QueueDetail,
      },
      {
				path: '/index/book',
				name: 'book',
				component: Book,
	  },
	  {
				path: '/index/BookDetail',
				name: 'bookDetail',
				component: BookDetail,
		},
		{
			path: '/index/RecommendList',
			name: 'recommendList',
			component: RecommendList,
		},
		{
			path: '/index/TakeOut',
			name: 'takeOut',
			component: TakeOut,
		},
		{
			path: '/index/TakeOutPayment',
			name: 'takeOutPayment',
			component: TakeOutPayment,
		},
		{
			path: '/index/ShopCity',
			name: 'shopCity',
			component: ShopCity,
		},
		{
			path: '/index/orderDetail',
			name: 'orderDetail',
			component: OrderDetail,
		},
		{
			path: '/index/evaluate',
			name: 'evaluate',
			component: Evaluate,
		}
    ],
    
    }
  ]
})
