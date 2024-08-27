const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'products', component: () => import('pages/PageProducts.vue') },
      { path: 'checkout', component: () => import('pages/CheckoutPage.vue') }, 
      { path: 'checkoutorder', component: () => import('pages/PageCheckout.vue') }, 
      { path: 'product/:id', component: () => import('pages/ProductDetail.vue') },
      { path: 'cart', component: () => import('pages/CartPage.vue') },
      { path: '/order-confirmation', component: () => import('pages/OrderConfirmation.vue') },
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
