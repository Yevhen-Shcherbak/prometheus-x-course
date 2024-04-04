"use strict";(self.webpackChunkprometheus_x_course=self.webpackChunkprometheus_x_course||[]).push([[799],{2799:(e,s,a)=>{a.r(s),a.d(s,{default:()=>H});var t=a(5043),r=a(3519),n=a(8628),l=a(4282),o=a(8139),c=a.n(o),i=a(7852),d=a(579);const m=t.forwardRef(((e,s)=>{let{bsPrefix:a,size:t,vertical:r=!1,className:n,role:l="group",as:o="div",...m}=e;const x=(0,i.oU)(a,"btn-group");let u=x;return r&&(u="".concat(x,"-vertical")),(0,d.jsx)(o,{...m,ref:s,role:l,className:c()(n,u,t&&"".concat(x,"-").concat(t))})}));m.displayName="ButtonGroup";const x=m;var u=a(1072),f=a(8602),h=a(6723),N=a(9109);const j=2**31-1;function b(e,s,a){const t=a-Date.now();e.current=t<=j?setTimeout(s,t):setTimeout((()=>b(e,s,a)),j)}function p(){const e=(0,h.A)(),s=(0,t.useRef)();return(0,N.A)((()=>clearTimeout(s.current))),(0,t.useMemo)((()=>{const a=()=>clearTimeout(s.current);return{set:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(a(),r<=j?s.current=setTimeout(t,r):b(s,t,Date.now()+r))},clear:a,handleRef:s}}),[])}var A=a(8062),g=a(8072);const y={[A.ns]:"showing",[A.ze]:"showing show"},v=t.forwardRef(((e,s)=>(0,d.jsx)(g.A,{...e,ref:s,transitionClasses:y})));v.displayName="ToastFade";const w=v;var C=a(1456),T=a(5632);const k=t.createContext({onClose(){}}),R=t.forwardRef(((e,s)=>{let{bsPrefix:a,closeLabel:r="Close",closeVariant:n,closeButton:l=!0,className:o,children:m,...x}=e;a=(0,i.oU)(a,"toast-header");const u=(0,t.useContext)(k),f=(0,C.A)((e=>{null==u||null==u.onClose||u.onClose(e)}));return(0,d.jsxs)("div",{ref:s,...x,className:c()(a,o),children:[m,l&&(0,d.jsx)(T.A,{"aria-label":r,variant:n,onClick:f,"data-dismiss":"toast"})]})}));R.displayName="ToastHeader";const P=R,E=t.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:r="div",...n}=e;return t=(0,i.oU)(t,"toast-body"),(0,d.jsx)(r,{ref:s,className:c()(a,t),...n})}));E.displayName="ToastBody";const U=E,B=t.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,transition:n=w,show:l=!0,animation:o=!0,delay:m=5e3,autohide:x=!1,onClose:u,onEntered:f,onExit:h,onExiting:N,onEnter:j,onEntering:b,onExited:A,bg:g,...y}=e;a=(0,i.oU)(a,"toast");const v=(0,t.useRef)(m),C=(0,t.useRef)(u);(0,t.useEffect)((()=>{v.current=m,C.current=u}),[m,u]);const T=p(),R=!(!x||!l),P=(0,t.useCallback)((()=>{R&&(null==C.current||C.current())}),[R]);(0,t.useEffect)((()=>{T.set(P,v.current)}),[T,P]);const E=(0,t.useMemo)((()=>({onClose:u})),[u]),U=!(!n||!o),B=(0,d.jsx)("div",{...y,ref:s,className:c()(a,r,g&&"bg-".concat(g),!U&&(l?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,d.jsx)(k.Provider,{value:E,children:U&&n?(0,d.jsx)(n,{in:l,onEnter:j,onEntering:b,onEntered:f,onExit:h,onExiting:N,onExited:A,unmountOnExit:!0,children:B}):B})}));B.displayName="Toast";const S=Object.assign(B,{Body:U,Header:P});var I=a(9922),O=a(1521);function H(e){let{bookData:s}=e;const[o,c]=(0,t.useState)(1),[i,m]=(0,t.useState)(!1),[h,N]=(0,t.useState)(!1),{cartData:j,setCartData:b}=(0,t.useContext)(O.A),[p,A]=(0,t.useState)(!1);(0,t.useEffect)((()=>window.scrollTo({top:0,behavior:"instant"})),[]),(0,t.useEffect)((()=>{!s.amount||o<2?m(!0):m(!1),!s.amount||o>=s.amount?N(!0):N(!1)}),[o]);const g=()=>!s.amount;return(0,d.jsx)(t.Suspense,{fallback:(0,d.jsx)(I.A,{}),children:(0,d.jsxs)(r.A,{className:"d-flex flex-wrap justify-content-evenly gap-5 p-2 p-sm-3",expand:"sm",children:[(0,d.jsxs)(n.A,{className:"p-2 p-sm-3 m-0",style:{maxWidth:"40rem"},children:[(0,d.jsxs)(r.A,{className:"d-flex flex-column flex-lg-row p-0 border-bottom border-secondary",children:[(0,d.jsx)("div",{className:"d-flex align-items-center",children:(0,d.jsx)(n.A.Img,{src:s.image||a(6740),style:{maxWidth:"18rem",maxHeight:"24rem"},className:"object-fit-contain p-1 p-sm-3 m-auto"})}),(0,d.jsxs)(n.A.Body,{children:[(0,d.jsx)(n.A.Title,{className:"mb-3",children:s.title}),(0,d.jsxs)(n.A.Text,{className:"mb-2",children:[(0,d.jsx)("span",{className:"fw-semibold",children:"Author:"})," ",s.author]}),(0,d.jsxs)(n.A.Text,{className:"mb-2",children:[(0,d.jsx)("span",{className:"fw-semibold",children:"Book level:"})," ",s.level]}),(0,d.jsxs)(n.A.Text,{className:"mb-2",children:[(0,d.jsx)("span",{className:"fw-semibold",children:"Book tags:"})," ",s.tags.join(", ")]}),(0,d.jsxs)(n.A.Text,{className:"mb-2",children:[(0,d.jsx)("span",{className:"fw-semibold",children:"Available amount:"})," ",s.amount?(0,d.jsx)("span",{className:"fw-semibold text-success",children:s.amount}):(0,d.jsx)("span",{className:"fw-semibold text-danger",children:"out of stock"})]})]})]}),(0,d.jsx)(r.A,{children:(0,d.jsx)(n.A.Text,{className:"pt-3 pb-2",children:s.description})})]}),(0,d.jsxs)(n.A,{className:"align-self-start p-2 p-sm-3 m-0 mb-4 gap-2",style:{minWidth:"20rem"},children:[(0,d.jsxs)(u.A,{children:[(0,d.jsx)(f.A,{children:(0,d.jsx)(n.A.Title,{className:"fs-5 m-0",children:"Price, $"})}),(0,d.jsx)(f.A,{children:(0,d.jsx)(n.A.Text,{className:"m-0 text-end",children:s.price})})]}),(0,d.jsxs)(u.A,{children:[(0,d.jsx)(f.A,{children:(0,d.jsx)(n.A.Title,{className:"fs-5 m-0 h-100 align-middle",children:"Count"})}),(0,d.jsx)(f.A,{className:"d-flex justify-content-end",children:(0,d.jsxs)(x,{"aria-label":"Basic example",size:"sm",children:[(0,d.jsx)(l.A,{variant:"primary",style:{width:"2rem"},disabled:i,onClick:()=>c(o-1),children:"-"}),(0,d.jsx)("input",{className:"books-input-number bg-secondary fs-5 m-0 text-center border-0",style:{width:"3rem"},type:"number",value:o,onChange:e=>{var a;(a=+e.target.value)<1||!Number.isInteger(a)?c(1):a>s.amount||!Number.isInteger(a)?c(s.amount):c(a)},disabled:g()}),(0,d.jsx)(l.A,{variant:"primary",style:{width:"2rem"},disabled:h,onClick:()=>c(o+1),children:"+"})]})})]}),(0,d.jsxs)(u.A,{children:[(0,d.jsx)(f.A,{children:(0,d.jsx)(n.A.Title,{className:"fs-5 m-0",children:"Total price, $"})}),(0,d.jsx)(f.A,{children:(0,d.jsx)(n.A.Text,{className:"m-0 text-end",children:(s.price*o).toFixed(2)})})]}),(0,d.jsx)(u.A,{style:{height:"3rem"},children:(0,d.jsx)(f.A,{className:"toast-container",children:(0,d.jsx)(S,{onClose:()=>A(!1),show:p,delay:2e3,autohide:!0,className:"toast",children:(0,d.jsx)(S.Body,{children:"some message"})})})}),(0,d.jsx)(u.A,{children:(0,d.jsx)(f.A,{className:"d-flex justify-content-end",children:(0,d.jsx)(l.A,{variant:"primary",size:"sm",className:"w-50",onClick:()=>{!function(){c(1);const e={id:s.id,bookName:s.title,amount:o},a=j,t=a.findIndex((s=>s.id===e.id));-1===t?a.push(e):j[t].amount+o>=43?a[t].amount=42:a[t].amount+=o;localStorage.setItem("cart",JSON.stringify(a)),b(JSON.parse(localStorage.getItem("cart")))}(),A(!0)},disabled:g(),children:"Add to Cart"})})})]})]})})}},8628:(e,s,a)=>{a.d(s,{A:()=>U});var t=a(8139),r=a.n(t),n=a(5043),l=a(7852),o=a(579);const c=n.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:n="div",...c}=e;return t=(0,l.oU)(t,"card-body"),(0,o.jsx)(n,{ref:s,className:r()(a,t),...c})}));c.displayName="CardBody";const i=c,d=n.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:n="div",...c}=e;return t=(0,l.oU)(t,"card-footer"),(0,o.jsx)(n,{ref:s,className:r()(a,t),...c})}));d.displayName="CardFooter";const m=d;var x=a(1778);const u=n.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,as:c="div",...i}=e;const d=(0,l.oU)(a,"card-header"),m=(0,n.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,o.jsx)(x.A.Provider,{value:m,children:(0,o.jsx)(c,{ref:s,...i,className:r()(t,d)})})}));u.displayName="CardHeader";const f=u,h=n.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,variant:n,as:c="img",...i}=e;const d=(0,l.oU)(a,"card-img");return(0,o.jsx)(c,{ref:s,className:r()(n?"".concat(d,"-").concat(n):d,t),...i})}));h.displayName="CardImg";const N=h,j=n.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:n="div",...c}=e;return t=(0,l.oU)(t,"card-img-overlay"),(0,o.jsx)(n,{ref:s,className:r()(a,t),...c})}));j.displayName="CardImgOverlay";const b=j,p=n.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:n="a",...c}=e;return t=(0,l.oU)(t,"card-link"),(0,o.jsx)(n,{ref:s,className:r()(a,t),...c})}));p.displayName="CardLink";const A=p;var g=a(4488);const y=(0,g.A)("h6"),v=n.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:n=y,...c}=e;return t=(0,l.oU)(t,"card-subtitle"),(0,o.jsx)(n,{ref:s,className:r()(a,t),...c})}));v.displayName="CardSubtitle";const w=v,C=n.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:n="p",...c}=e;return t=(0,l.oU)(t,"card-text"),(0,o.jsx)(n,{ref:s,className:r()(a,t),...c})}));C.displayName="CardText";const T=C,k=(0,g.A)("h5"),R=n.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:n=k,...c}=e;return t=(0,l.oU)(t,"card-title"),(0,o.jsx)(n,{ref:s,className:r()(a,t),...c})}));R.displayName="CardTitle";const P=R,E=n.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,bg:n,text:c,border:d,body:m=!1,children:x,as:u="div",...f}=e;const h=(0,l.oU)(a,"card");return(0,o.jsx)(u,{ref:s,...f,className:r()(t,h,n&&"bg-".concat(n),c&&"text-".concat(c),d&&"border-".concat(d)),children:m?(0,o.jsx)(i,{children:x}):x})}));E.displayName="Card";const U=Object.assign(E,{Img:N,Title:P,Subtitle:w,Body:i,Link:A,Text:T,Header:f,Footer:m,ImgOverlay:b})},6740:(e,s,a)=>{e.exports=a.p+"static/media/imageNotFound.298b98203c3825c61303.png"}}]);
//# sourceMappingURL=799.db90b738.chunk.js.map