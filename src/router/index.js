import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  //{
  //  path: '/cadastrar',
  //  name: 'cadastrar',
  //  component: CadastrarView
  //},
  {
    path: '/cadastrarCliente',
    name: 'cadastrarCliente',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastrarCliente.vue')
  },
  {
    path: '/cadastrarParceiro',
    name: 'cadastrarParceiro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastrarParceiro.vue')
  },
  {
    path: '/consultarCliente',
    name: 'consultarCliente',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PesquisarCliente.vue')
  },
  {
    path: '/consultarParceiro',
    name: 'consultarParceiro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PesquisarParceiro.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
