import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import About from './components/about/About.vue'

// 二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import Guide from './components/about/Guide.vue'
import History from './components/about/History.vue'

// 三极路由
import Phone from './components/about/Phone.vue'
import PersonName from './components/about/PersonName.vue'

export const routes = [{
    path: '/',
    // component: Home,
    // 复用router-view
    components:{
      default: Home,
      'guide': Guide,
      'delivery': Delivery,
      'history': History
    },
    name: 'homeLink'
  },
  {
    path: '/menu',
    component: Menu,
    name: 'menuLink'
  },
  {
    path: '/login',
    component: Login,
    name: 'loginLink'
  },
  {
    path: '/register',
    component: Register,
    name: 'registerLink'
  },
  {
    path: '/admin',
    component: Admin,
    name: 'adminLink',
    // 路由独享守卫
    // beforeEnter: (to, from, next) => {
    //   // 和全局守卫很像，只不过这是针对某一个路由而设定的，用法和全局守卫差不多
    //     if (to.path == '/login' || to.path == '/register') {
    //       next()
    //     } else {
    //       alert('还没有登录，请先登录！')
    //       next('/login')

    //     }

    // }
  },
  {
    path: '/about',
    component: About,
    name: 'aboutLink',
    redirect: '/about/contact',
    children: [{
        path: '/about/contact',
        name: 'contactLink',
        component: Contact,
        redirect: '/about/contact/phone',
        children: [{
            path: '/about/contact/phone',
            name: 'phoneLink',
            component: Phone
          },
          {
            path: '/about/contact/person',
            name: 'personLink',
            component: PersonName
          },
        ]
      },
      {
        path: '/about/history',
        name: 'historyLink',
        component: History
      },
      {
        path: '/about/guide',
        name: 'guideLink',
        component: Guide
      },
      {
        path: '/about/delivery',
        name: 'deliveryLink',
        component: Delivery
      },
    ]
  },
  {
    path: '*', //用于检测路径，如果以上路径都没有检测到，自动重定位到 / - Home组件上去（防止用户写错路径）
    redirect: '/'
  },
]

// 全局守卫
// to:要到哪一个路由中去
// from:从哪一个路由离开
// next：函数，这个方法决定是否能展示要看到的页面
// router.beforeEach((to,from,next) =>{
//   //  alert('还没有登录，请先登录！')
//   //  next()

//   // 判断store.getters.isLogin === false
//   if(to.path == '/login' || to.path == '/register'){
//     next()
//   }
//   else{
//    alert('还没有登录，请先登录！')
//    next('/login')

//   }
// })


// 后置钩子
// router.afterEach((to,from) =>{
//   // 跟全局守卫类似，只不过无论如论都会展示界面
//   // 点击导航之后，会先弹出一个窗口，点击确定之后，就会正常显示界面
//   // 不是很常用，先了解
//   alert('after each')
// })

// 路由独享的守卫
// 见上方path代码块中的注释

// 组建内守卫
// 见Admin.vue中
