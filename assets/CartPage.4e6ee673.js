import{Q as u}from"./QImg.cea53b65.js";import{a as n}from"./QBtn.e96c6d1d.js";import{Q as m,a as p}from"./QCard.948ba5c4.js";import{Q as _}from"./QBanner.f5e48ece.js";import{Q as h}from"./QPage.6857a7bc.js";import{q as v,a5 as f,s as c,t as l,u as s,y as a,W as C,X as g,Y as k,v as o,x as d,Z as r,U as Q,V as I}from"./index.76c2a997.js";import{_ as y}from"./plugin-vue_export-helper.72c2f8e0.js";import"./use-router-link.3e8e2949.js";const b={computed:{...v("cart",["cartItems","cartItemCount","totalAmount"])},methods:{...f("cart",["removeFromCart"]),goToCheckout(){this.$router.push("/checkoutorder")}}},$=t=>(Q("data-v-5365e768"),t=t(),I(),t),B={class:"cart-items-container"},S={class:"card-content"},T={class:"item-details"},A={class:"button-group"},P=$(()=>a("br",null,null,-1));function V(t,q,x,F,N,i){return c(),l(h,{padding:""},{default:s(()=>[a("div",B,[(c(!0),C(k,null,g(t.cartItems,e=>(c(),l(m,{key:e.id,class:"my-card"},{default:s(()=>[o(u,{src:e.image,class:"cart-image"},null,8,["src"]),o(p,null,{default:s(()=>[a("div",S,[a("div",T,[a("h2",null,r(e.name),1),a("p",null,"Quantity: "+r(e.quantity),1),a("p",null,"Price: $"+r(e.price),1)]),a("div",A,[o(n,{onClick:w=>t.removeFromCart(e.id),color:"negative",label:"Remove",class:"remove-btn"},null,8,["onClick"]),o(n,{onClick:i.goToCheckout,color:"primary",label:"Checkout",class:"checkout-btn"},null,8,["onClick"])])])]),_:2},1024)]),_:2},1024))),128))]),o(_,{class:"q-mt-md total-banner"},{default:s(()=>[d(" Total Items: "+r(t.cartItemCount)+" ",1),P,d(" Total Amount: $"+r(t.totalAmount),1)]),_:1})]),_:1})}var Y=y(b,[["render",V],["__scopeId","data-v-5365e768"]]);export{Y as default};
