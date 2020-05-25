import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('../views/Login.vue') 
const Main = () => import('../views/Main.vue')
const CategoryEdit = () => import('../views/CategoryEdit.vue')
const CategoryList = () => import('../views/CategoryList.vue')
const ItemEdit = () => import('../views/ItemEdit.vue')
const ItemList = () => import('../views/ItemList.vue')
const HeroEdit = () => import('../views/HeroEdit.vue')
const HeroList = () => import('../views/HeroList.vue')
const ArticleEdit = () => import('../views/ArticleEdit.vue')
const ArticleList = () => import('../views/ArticleList.vue')
const AdEdit = () => import('../views/AdEdit.vue')
const AdList = () => import('../views/AdList.vue')
const AdminUserEdit = () => import('../views/AdminUserEdit.vue')
const AdminUserList = () => import('../views/AdminUserList.vue')


Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {isPublic: true}
    },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[{
      path: 'categories/create',
      name: 'CategoryEdit',
      //redirect: 'categories/create',
      component: CategoryEdit
    },
    {
      path: 'categories/list',
      name: 'CategoryList',
      component: CategoryList
    },
    {
      path: 'categories/edit/:id',
      component: CategoryEdit,
      props: true
     },
     {
      path: '/items/create',
      name: 'ItemEdit',
      component: ItemEdit
    },
    {
      path:'',
      redirect: 'items/create',
    },
    {
      path: '/items/list',
      name: 'ItemList',
      component: ItemList
    },
    {
      path: '/items/edit/:id',
      component: ItemEdit,
      props: true
     },
     {
      path: '/heroes/create',
      name: 'HeroEdit',
      component: HeroEdit
    },
    {
      path: '/heroes/list',
      name: 'HeroList',
      component: HeroList
    },
    {
      path: '/heroes/edit/:id',
      component: HeroEdit,
      props: true
     },
     {
      path: '/articles/create',
      name: 'ArticleEdit',
      component: ArticleEdit
    },
    {
      path: '/articles/list',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/articles/edit/:id',
      component: ArticleEdit,
      props: true
     },
     {
      path: '/ads/create',
      name: 'AdEdit',
      component: AdEdit
    },
    {
      path: '/ads/list',
      name: 'AdList',
      component: AdList
    },
    {
      path: '/ads/edit/:id',
      component: AdEdit,
      props: true
     },
     {
      path: '/admin_users/create',
      name: 'AdminUserEdit',
      component: AdminUserEdit
    },
    {
      path: '/admin_users/list',
      name: 'AdminUserList',
      component: AdminUserList
    },
    {
      path: '/admin_users/edit/:id',
      component: AdminUserEdit,
      props: true
     }]
  },
]



const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})
export default router
