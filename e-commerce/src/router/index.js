import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Detail from '@/pages/Detail';

// Admin Components
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/NewCommodities';
import Commodities from '@/pages/admin/Commodities';
import EditCommodities from '@/pages/admin/EditCommodities';
import Vendors from '@/pages/admin/Vendors';
import NewVendors from '@/pages/admin/NewVendors';
import EditVendors from '@/pages/admin/EditVendors';
import Login from '@/pages/user/Login';
import Register from'@/pages/user/Register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: '',
          name: 'Commodities',
          component: Commodities,
        },
        {
          path: 'edit/:id',
          name: 'EditCommodities',
          component: EditCommodities,
        },
        {
          path: 'vendors',
          name: 'Vendors',
          component: Vendors,
        },
        {
          path: 'vendors/new',
          name: 'NewVendors',
          component: NewVendors,
        },
        {
          path: 'vendors/edit/:id',
          name: 'EditVendors',
          component: EditVendors,
        },
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ],
});
