import{i as me,g as C,m as V,c as H,h as ne,a as it,p as y,b as le,d as W,e as w,f as J,j as se,k as q,l as ie,n as K,u as oe,o as re,q as ce,r as Q,s as Pe,t as M,v as B,w as l,x as ot,y as rt,z as ue,A as Ie,B as ct,S as ut,C as dt,D as xe,E as Be,F as ee,G as vt,H as u,I as x,J as ft,K as Ae,L as we,M as gt,N as p,O as be,P as mt,T as bt,Q as Ne,R as yt,U as Le,V as ht,W as Te,X as Re,Y as Oe,Z as Ct,_ as $e,$ as F,a0 as Ee,a1 as je,a2 as Me,a3 as U,a4 as D,a5 as te,a6 as ye,a7 as kt,a8 as St,a9 as Z,aa as De,ab as Fe,ac as ae,ad as j,ae as Vt,af as _t,ag as Pt,ah as he,ai as It}from"./index-BoFoeboW.js";const xt=["top","bottom"],Bt=["start","end","left","right"];function At(e,n){let[a,t]=e.split(" ");return t||(t=me(xt,a)?"start":me(Bt,a)?"top":"center"),{side:Ce(a,n),align:Ce(t,n)}}function Ce(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function wt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return C()({name:a??H(it(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...V()},setup(t,s){let{slots:i}=s;return()=>{var o;return ne(t.tag,{class:[e,t.class],style:t.style},(o=i.default)==null?void 0:o.call(i))}}})}const Ge=y({baseColor:String,divided:Boolean,...ie(),...V(),...q(),...se(),...J(),...w(),...W(),...le()},"VBtnGroup"),ke=C()({name:"VBtnGroup",props:Ge(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=K(e),{densityClasses:s}=oe(e),{borderClasses:i}=re(e),{elevationClasses:o}=ce(e),{roundedClasses:d}=Q(e);Pe({VBtn:{height:"auto",baseColor:M(e,"baseColor"),color:M(e,"color"),density:M(e,"density"),flat:!0,variant:M(e,"variant")}}),B(()=>l(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,i.value,s.value,o.value,d.value,e.class],style:e.style},a))}}),ze=Symbol.for("vuetify:v-btn-toggle"),Nt=y({...Ge(),...ot()},"VBtnToggle");C()({name:"VBtnToggle",props:Nt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:s,prev:i,select:o,selected:d}=rt(e,ze);return B(()=>{const r=ke.filterProps(e);return l(ke,ue({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var f;return[(f=a.default)==null?void 0:f.call(a,{isSelected:t,next:s,prev:i,select:o,selected:d})]}})}),{next:s,prev:i,select:o}}});function Ue(e,n){const a=Ie(),t=ct(!1);if(ut){const s=new IntersectionObserver(i=>{t.value=!!i.find(o=>o.isIntersecting)},n);dt(()=>{s.disconnect()}),xe(a,(i,o)=>{o&&(s.unobserve(o),t.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:a,isIntersecting:t}}const Lt=y({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...V(),...Ae(),...w({tag:"div"}),...W()},"VProgressCircular"),Tt=C()({name:"VProgressCircular",props:Lt(),setup(e,n){let{slots:a}=n;const t=20,s=2*Math.PI*t,i=Ie(),{themeClasses:o}=K(e),{sizeClasses:d,sizeStyles:r}=Be(e),{textColorClasses:f,textColorStyles:h}=ee(M(e,"color")),{textColorClasses:R,textColorStyles:O}=ee(M(e,"bgColor")),{intersectionRef:$,isIntersecting:N}=Ue(),{resizeRef:c,contentRect:v}=vt(),k=u(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),S=u(()=>Number(e.width)),_=u(()=>r.value?Number(e.size):v.value?v.value.width:Math.max(S.value,32)),b=u(()=>t/(1-S.value/_.value)*2),I=u(()=>S.value/_.value*b.value),L=u(()=>x((100-k.value)/100*s));return ft(()=>{$.value=i.value,c.value=i.value}),B(()=>l(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":N.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,d.value,f.value,e.class],style:[r.value,h.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:k.value},{default:()=>[l("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${b.value} ${b.value}`},[l("circle",{class:["v-progress-circular__underlay",R.value],style:O.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":I.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),l("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":I.value,"stroke-dasharray":s,"stroke-dashoffset":L.value},null)]),a.default&&l("div",{class:"v-progress-circular__content"},[a.default({value:k.value})])]})),{}}}),Se={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},de=y({location:String},"location");function ve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=we();return{locationStyles:u(()=>{if(!e.location)return{};const{side:i,align:o}=At(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function d(f){return a?a(f):0}const r={};return i!=="center"&&(n?r[Se[i]]=`calc(100% - ${d(i)}px)`:r[i]=0),o!=="center"?n?r[Se[o]]=`calc(100% - ${d(o)}px)`:r[o]=0:(i==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),r})}}const Rt=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...V(),...de({location:"top"}),...J(),...w(),...W()},"VProgressLinear"),Ot=C()({name:"VProgressLinear",props:Rt(),emits:{"update:modelValue":e=>!0},setup(e,n){var g;let{slots:a}=n;const t=gt(e,"modelValue"),{isRtl:s,rtlClasses:i}=we(),{themeClasses:o}=K(e),{locationStyles:d}=ve(e),{textColorClasses:r,textColorStyles:f}=ee(e,"color"),{backgroundColorClasses:h,backgroundColorStyles:R}=p(u(()=>e.bgColor||e.color)),{backgroundColorClasses:O,backgroundColorStyles:$}=p(u(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:N,backgroundColorStyles:c}=p(e,"color"),{roundedClasses:v}=Q(e),{intersectionRef:k,isIntersecting:S}=Ue(),_=u(()=>parseFloat(e.max)),b=u(()=>parseFloat(e.height)),I=u(()=>be(parseFloat(e.bufferValue)/_.value*100,0,100)),L=u(()=>be(parseFloat(t.value)/_.value*100,0,100)),P=u(()=>s.value!==e.reverse),G=u(()=>e.indeterminate?"fade-transition":"slide-x-transition"),T=mt&&((g=window.matchMedia)==null?void 0:g.call(window,"(forced-colors: active)").matches);function z(m){if(!k.value)return;const{left:A,right:X,width:E}=k.value.getBoundingClientRect(),Y=P.value?E-m.clientX+(X-E):m.clientX-A;t.value=Math.round(Y/E*_.value)}return B(()=>l(e.tag,{ref:k,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&S.value,"v-progress-linear--reverse":P.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},v.value,o.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?x(b.value):0,"--v-progress-linear-height":x(b.value),...e.absolute?d.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:Math.min(parseFloat(t.value),_.value),onClick:e.clickable&&z},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",r.value],style:{...f.value,[P.value?"left":"right"]:x(-b.value),borderTop:`${x(b.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${x(b.value/4)})`,width:x(100-I.value,"%"),"--v-progress-linear-stream-to":x(b.value*(P.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",T?void 0:h.value],style:[R.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),l("div",{class:["v-progress-linear__buffer",T?void 0:O.value],style:[$.value,{opacity:parseFloat(e.bufferOpacity),width:x(I.value,"%")}]},null),l(bt,{name:G.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(m=>l("div",{key:m,class:["v-progress-linear__indeterminate",m,T?void 0:N.value],style:c.value},null))]):l("div",{class:["v-progress-linear__determinate",T?void 0:N.value],style:[c.value,{width:x(L.value,"%")}]},null)]}),a.default&&l("div",{class:"v-progress-linear__content"},[a.default({value:L.value,buffer:I.value})])]})),{}}}),We=y({loading:[Boolean,String]},"loader");function Ke(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ne();return{loaderClasses:u(()=>({[`${n}--loading`]:e.loading}))}}function $t(e,n){var t;let{slots:a}=n;return l("div",{class:`${e.name}__loader`},[((t=a.default)==null?void 0:t.call(a,{color:e.color,isActive:e.active}))||l(Ot,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Et=["static","relative","fixed","absolute","sticky"],Xe=y({position:{type:String,validator:e=>Et.includes(e)}},"position");function Ye(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ne();return{positionClasses:u(()=>e.position?`${n}--${e.position}`:void 0)}}function jt(e,n){xe(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&yt(()=>{n(!0)})},{immediate:!0})}const Mt=y({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:ze},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:F,appendIcon:F,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...ie(),...V(),...q(),...$e(),...se(),...Ct(),...We(),...de(),...Xe(),...J(),...Oe(),...Ae(),...w({tag:"button"}),...W(),...le({variant:"elevated"})},"VBtn"),Dt=C()({name:"VBtn",props:Mt(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:s}=K(e),{borderClasses:i}=re(e),{densityClasses:o}=oe(e),{dimensionStyles:d}=Le(e),{elevationClasses:r}=ce(e),{loaderClasses:f}=Ke(e),{locationStyles:h}=ve(e),{positionClasses:R}=Ye(e),{roundedClasses:O}=Q(e),{sizeClasses:$,sizeStyles:N}=Be(e),c=ht(e,e.symbol,!1),v=Te(e,a),k=u(()=>{var g;return e.active!==void 0?e.active:v.isLink.value?(g=v.isActive)==null?void 0:g.value:c==null?void 0:c.isSelected.value}),S=u(()=>k.value?e.activeColor??e.color:e.color),_=u(()=>{var m,A;return{color:(c==null?void 0:c.isSelected.value)&&(!v.isLink.value||((m=v.isActive)==null?void 0:m.value))||!c||((A=v.isActive)==null?void 0:A.value)?S.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:b,colorStyles:I,variantClasses:L}=Re(_),P=u(()=>(c==null?void 0:c.disabled.value)||e.disabled),G=u(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),T=u(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function z(g){var m;P.value||v.isLink.value&&(g.metaKey||g.ctrlKey||g.shiftKey||g.button!==0||a.target==="_blank")||((m=v.navigate)==null||m.call(v,g),c==null||c.toggle())}return jt(v,c==null?void 0:c.select),B(()=>{const g=v.isLink.value?"a":e.tag,m=!!(e.prependIcon||t.prepend),A=!!(e.appendIcon||t.append),X=!!(e.icon&&e.icon!==!0);return Ee(l(g,ue({type:g==="a"?void 0:"button",class:["v-btn",c==null?void 0:c.selectedClass.value,{"v-btn--active":k.value,"v-btn--block":e.block,"v-btn--disabled":P.value,"v-btn--elevated":G.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,i.value,b.value,o.value,r.value,f.value,R.value,O.value,$.value,L.value,e.class],style:[I.value,d.value,h.value,N.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:P.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:z,value:T.value},v.linkProps),{default:()=>{var E;return[Me(!0,"v-btn"),!e.icon&&m&&l("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?l(D,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):l(U,{key:"prepend-icon",icon:e.prependIcon},null)]),l("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&X?l(U,{key:"content-icon",icon:e.icon},null):l(D,{key:"content-defaults",disabled:!X,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var Y;return[((Y=t.default)==null?void 0:Y.call(t))??e.text]}})]),!e.icon&&A&&l("span",{key:"append",class:"v-btn__append"},[t.append?l(D,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):l(U,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&l("span",{key:"loader",class:"v-btn__loader"},[((E=t.loader)==null?void 0:E.call(t))??l(Tt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[je,!P.value&&e.ripple,"",{center:!!e.icon}]])}),{group:c}}}),He=C()({name:"VCardActions",props:V(),setup(e,n){let{slots:a}=n;return Pe({VBtn:{slim:!0,variant:"text"}}),B(()=>{var t;return l("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),Ft=y({opacity:[Number,String],...V(),...w()},"VCardSubtitle"),Gt=C()({name:"VCardSubtitle",props:Ft(),setup(e,n){let{slots:a}=n;return B(()=>l(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},a)),{}}}),zt=wt("v-card-title"),Ut=y({appendAvatar:String,appendIcon:F,prependAvatar:String,prependIcon:F,subtitle:[String,Number],title:[String,Number],...V(),...q()},"VCardItem"),Wt=C()({name:"VCardItem",props:Ut(),setup(e,n){let{slots:a}=n;return B(()=>{var f;const t=!!(e.prependAvatar||e.prependIcon),s=!!(t||a.prepend),i=!!(e.appendAvatar||e.appendIcon),o=!!(i||a.append),d=!!(e.title!=null||a.title),r=!!(e.subtitle!=null||a.subtitle);return l("div",{class:["v-card-item",e.class],style:e.style},[s&&l("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?l(D,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},a.prepend):l(te,null,[e.prependAvatar&&l(ye,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&l(U,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),l("div",{class:"v-card-item__content"},[d&&l(zt,{key:"title"},{default:()=>{var h;return[((h=a.title)==null?void 0:h.call(a))??e.title]}}),r&&l(Gt,{key:"subtitle"},{default:()=>{var h;return[((h=a.subtitle)==null?void 0:h.call(a))??e.subtitle]}}),(f=a.default)==null?void 0:f.call(a)]),o&&l("div",{key:"append",class:"v-card-item__append"},[a.append?l(D,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},a.append):l(te,null,[e.appendIcon&&l(U,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&l(ye,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Kt=y({opacity:[Number,String],...V(),...w()},"VCardText"),Je=C()({name:"VCardText",props:Kt(),setup(e,n){let{slots:a}=n;return B(()=>l(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},a)),{}}}),Xt=y({appendAvatar:String,appendIcon:F,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:F,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...ie(),...V(),...q(),...$e(),...se(),...We(),...de(),...Xe(),...J(),...Oe(),...w(),...W(),...le({variant:"elevated"})},"VCard"),Yt=C()({name:"VCard",directives:{Ripple:je},props:Xt(),setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:s}=K(e),{borderClasses:i}=re(e),{colorClasses:o,colorStyles:d,variantClasses:r}=Re(e),{densityClasses:f}=oe(e),{dimensionStyles:h}=Le(e),{elevationClasses:R}=ce(e),{loaderClasses:O}=Ke(e),{locationStyles:$}=ve(e),{positionClasses:N}=Ye(e),{roundedClasses:c}=Q(e),v=Te(e,a),k=u(()=>e.link!==!1&&v.isLink.value),S=u(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return B(()=>{const _=k.value?"a":e.tag,b=!!(t.title||e.title!=null),I=!!(t.subtitle||e.subtitle!=null),L=b||I,P=!!(t.append||e.appendAvatar||e.appendIcon),G=!!(t.prepend||e.prependAvatar||e.prependIcon),T=!!(t.image||e.image),z=L||G||P,g=!!(t.text||e.text!=null);return Ee(l(_,ue({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":S.value},s.value,i.value,o.value,f.value,R.value,O.value,N.value,c.value,r.value,e.class],style:[d.value,h.value,$.value,e.style],onClick:S.value&&v.navigate,tabindex:e.disabled?-1:void 0},v.linkProps),{default:()=>{var m;return[T&&l("div",{key:"image",class:"v-card__image"},[t.image?l(D,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(St,{key:"image-img",cover:!0,src:e.image},null)]),l($t,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),z&&l(Wt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),g&&l(Je,{key:"text"},{default:()=>{var A;return[((A=t.text)==null?void 0:A.call(t))??e.text]}}),(m=t.default)==null?void 0:m.call(t),t.actions&&l(He,null,{default:t.actions}),Me(S.value,"v-card")]}}),[[kt("ripple"),S.value&&e.ripple]])}),{}}}),qe=Z.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),Qe=Z.reduce((e,n)=>{const a="offset"+H(n);return e[a]={type:[String,Number],default:null},e},{}),Ze=Z.reduce((e,n)=>{const a="order"+H(n);return e[a]={type:[String,Number],default:null},e},{}),Ve={col:Object.keys(qe),offset:Object.keys(Qe),order:Object.keys(Ze)};function Ht(e,n,a){let t=e;if(!(a==null||a===!1)){if(n){const s=n.replace(e,"");t+=`-${s}`}return e==="col"&&(t="v-"+t),e==="col"&&(a===""||a===!0)||(t+=`-${a}`),t.toLowerCase()}}const Jt=["auto","start","end","center","baseline","stretch"],qt=y({cols:{type:[Boolean,String,Number],default:!1},...qe,offset:{type:[String,Number],default:null},...Qe,order:{type:[String,Number],default:null},...Ze,alignSelf:{type:String,default:null,validator:e=>Jt.includes(e)},...V(),...w()},"VCol"),Qt=C()({name:"VCol",props:qt(),setup(e,n){let{slots:a}=n;const t=u(()=>{const s=[];let i;for(i in Ve)Ve[i].forEach(d=>{const r=e[d],f=Ht(i,d,r);f&&s.push(f)});const o=s.some(d=>d.startsWith("v-col-"));return s.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return ne(e.tag,{class:[t.value,e.class],style:e.style},(s=a.default)==null?void 0:s.call(a))}}}),fe=["start","end","center"],pe=["space-between","space-around","space-evenly"];function ge(e,n){return Z.reduce((a,t)=>{const s=e+H(t);return a[s]=n(),a},{})}const Zt=[...fe,"baseline","stretch"],et=e=>Zt.includes(e),tt=ge("align",()=>({type:String,default:null,validator:et})),pt=[...fe,...pe],at=e=>pt.includes(e),nt=ge("justify",()=>({type:String,default:null,validator:at})),ea=[...fe,...pe,"stretch"],lt=e=>ea.includes(e),st=ge("alignContent",()=>({type:String,default:null,validator:lt})),_e={align:Object.keys(tt),justify:Object.keys(nt),alignContent:Object.keys(st)},ta={align:"align",justify:"justify",alignContent:"align-content"};function aa(e,n,a){let t=ta[e];if(a!=null){if(n){const s=n.replace(e,"");t+=`-${s}`}return t+=`-${a}`,t.toLowerCase()}}const na=y({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:et},...tt,justify:{type:String,default:null,validator:at},...nt,alignContent:{type:String,default:null,validator:lt},...st,...V(),...w()},"VRow"),la=C()({name:"VRow",props:na(),setup(e,n){let{slots:a}=n;const t=u(()=>{const s=[];let i;for(i in _e)_e[i].forEach(o=>{const d=e[o],r=aa(i,o,d);r&&s.push(r)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return ne(e.tag,{class:["v-row",t.value,e.class],style:e.style},(s=a.default)==null?void 0:s.call(a))}}}),sa={class:"font-weight-black"},ia=De({__name:"Home",setup(e){const n=[{title:"Polkadot Blockchain Academy",subtitle:"World-class, In-Person Blockchain Education",text:"Two educational programs, created and delivered by key Polkadot figures. We bring blockchain and Polkadot to life for our learners, empowering next generation builders and thought leaders.",url:"https://polkadot.academy/"},{title:"PBA-X",subtitle:"Online Blockchain Education",text:"PBA-X is a flexible, part time, 4 week, cohort based, online blockchain course for anyone who wants to understand blockchain technology properly. It is designed to help you to navigate your Web3 career and is taught by the people behind Polkadot, including Dr Gavin Wood himself.",url:"https://pbax.polkadot.academy/"},{title:"DotCodeSchool",subtitle:"Learn to Code Web3 Apps by Building Real Projects.",text:"Dot Code School is an interactive online school that teaches you how to build meaningful web3 applications using the Polkadot SDK. Learn how to build your own custom blockchain from zero to one hundred.",url:"https://dotcodeschool.com/"},{title:"Polkadot Documentation",subtitle:"Your complete guide to building on Polkadot",text:"Your launchpad for all things Polkadot—access tools, guides, and resources to quickly start building custom chains, deploying smart contracts, and creating dApps.",url:"https://docs.polkadot.com/"}];return(a,t)=>(ae(),Fe(la,{class:"ma-5"},{default:j(()=>[(ae(),Vt(te,null,_t(n,s=>l(Qt,{cols:"12",sm:"4",class:"mb-4",key:s.text},{default:j(()=>[l(Yt,{class:"mx-auto",subtitle:s.subtitle,link:"",href:s.url,target:"_blank"},{title:j(()=>[It("span",sa,he(s.title),1)]),default:j(()=>[l(Je,{class:"pt-4"},{default:j(()=>[Pt(he(s.text),1)]),_:2},1024),l(He,null,{default:j(()=>[l(Dt,{text:"See More",full:"","append-icon":"mdi-arrow-right"})]),_:1})]),_:2},1032,["subtitle","href"])]),_:2},1024)),64))]),_:1}))}}),ra=De({__name:"index",setup(e){return(n,a)=>{const t=ia;return ae(),Fe(t)}}});export{ra as default};
