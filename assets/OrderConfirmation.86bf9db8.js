import{Q as c,a as h,b as m,c as I,d as p}from"./QItemLabel.ab617438.js";import{Q as k,a as g}from"./QCard.948ba5c4.js";import{Q as y}from"./QPage.6857a7bc.js";import{_ as S}from"./plugin-vue_export-helper.72c2f8e0.js";import{z as C,s as r,t as _,u as a,v as o,W as d,y as n,Z as e,a6 as Q,X as D,Y as v,x as i,U as x,V as N}from"./index.76c2a997.js";import"./use-router-link.3e8e2949.js";const O={data(){return{checkoutInfo:JSON.parse(localStorage.getItem("checkoutInfo"))||{}}}},u=l=>(x("data-v-9b039c34"),l=l(),N(),l),V=u(()=>n("h4",null,"Order Confirmation",-1)),b=u(()=>n("h6",null,"Shipping Details",-1)),q={key:0},B=u(()=>n("h6",null,"Order Summary",-1));function L(l,w,z,E,t,T){const f=C("q-container");return r(),_(y,{class:"order-confirmation-page"},{default:a(()=>[o(f,null,{default:a(()=>[o(k,null,{default:a(()=>[o(g,null,{default:a(()=>[V,o(c),b,t.checkoutInfo.shippingDetails?(r(),d("div",q,[n("p",null,"Name: "+e(t.checkoutInfo.shippingDetails.name),1),n("p",null,"Email: "+e(t.checkoutInfo.shippingDetails.email),1),n("p",null,"Address: "+e(t.checkoutInfo.shippingDetails.address),1),n("p",null,"City: "+e(t.checkoutInfo.shippingDetails.city),1),n("p",null,"State: "+e(t.checkoutInfo.shippingDetails.state),1),n("p",null,"Zip Code: "+e(t.checkoutInfo.shippingDetails.zip),1),n("p",null,"Country: "+e(t.checkoutInfo.shippingDetails.country),1)])):Q("",!0),o(c),B,o(h,null,{default:a(()=>[(r(!0),d(v,null,D(t.checkoutInfo.cartItems,s=>(r(),_(I,{key:s.id},{default:a(()=>[o(p,null,{default:a(()=>[i(e(s.name)+" - "+e(s.quantity)+" x $"+e(s.price),1)]),_:2},1024),o(p,null,{default:a(()=>[i(" $"+e(s.quantity*s.price),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),o(c),o(m,null,{default:a(()=>[i("Total: $"+e(t.checkoutInfo.amount),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var W=S(O,[["render",L],["__scopeId","data-v-9b039c34"]]);export{W as default};
