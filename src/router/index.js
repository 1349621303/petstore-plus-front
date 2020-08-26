import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Test1 from "../views/Test1";
import Cart from "../views/Cart";
import Category from "../views/Category";
import Product from "../views/Product";
import Main from "../views/Main";
import Item from "../views/Item";
import userinfo from "../views/userinfo";

import Test3 from "../views/Test3";
import Test2 from "../views/Test2";

import OrderList from "../views/OrderList";


import Order from "../views/Order";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
      hidden:true
  },

  {
   path: '/userinfo',
   name: 'userinfo',
   component: userinfo
  },

      {
          path: '/test3',
          name: 'Test3',
          component: Test3
      },
      {
          path: '/test2',
          name: 'Test2',
          component: Test2
      },
      {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
          {
              path: '/main',
              name: 'Category',
              component: Category
          }, {
              path: '/test1',
              name: 'Test1',
              component: Test1
          }, {
              path: 'product/:categoryId',
              name: 'Product',
              component: Product
          }, {
              path: 'item/:productId',
              name: 'Item',
              component: Item
          },{
              path: 'order/:itemId',
              name: 'Order',
              component: Order
          },{
              path: '/cart',
              name: 'Cart',
              component: Cart
          },{
              path: '/orderlist',
              name: 'OrderList',
              component: OrderList
          }
      ]
  }
]

const router = new VueRouter({
  routes
})

export default router
