import{d as f,a0 as m,A as _,f as x,g as o,C as a,t as r,D as v,b as u,i,w as c,a as g,o as n}from"../modules/vue-BJkuVcjI.js";import{l as k,_ as h}from"../index-B1ZP17-K.js";import"../modules/shiki-Dos0pH17.js";const C={class:"grid justify-center text-center pt-15% gap-5"},N={class:"text-2xl"},w={class:"op-60"},y={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},B=f({__name:"404",setup(R){const{currentRoute:l}=m(),{total:d}=k(),s=_(()=>{const t=l.value.path.match(/\d+/);if(t){const e=+t[0];if(e>0&&e<=d.value)return e}return null});return(p,t)=>{const e=g("RouterLink");return n(),x("div",C,[o("div",null,[t[2]||(t[2]=o("h1",{class:"text-9xl font-light"}," 404 ",-1)),o("p",N,[t[0]||(t[0]=a(" Page ")),o("code",w,r(v(l).path),1),t[1]||(t[1]=a(" not found "))])]),o("div",y,[s.value!==1?(n(),u(e,{key:0,to:"/",class:"page-link"},{default:c(()=>t[3]||(t[3]=[a(" Go Home ")])),_:1})):i("v-if",!0),s.value?(n(),u(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:c(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):i("v-if",!0)])])}}}),G=h(B,[["__scopeId","data-v-63128303"]]);export{G as default};
