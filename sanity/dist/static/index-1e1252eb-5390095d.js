import{r as u,t as o,au as re,aq as U,aY as oe,av as ie,cB as ae,K as H,M as ce,T as le,aG as ue,H as v,P as de,cC as me,$ as pe,cD as fe,cE as he,cF as ye,aK as ge,bd as Te,U as G,v as x,ao as A,ag as Ie,bK as Le,af as _,ae as D,ar as be,F as Re,b4 as Se,cG as Pe,am as k,y as ve,I as Ce,J as _e,b8 as w,cH as Ee,cI as Fe,cJ as De,cK as Oe,b2 as M,k as je,cL as xe,cj as we,ck as $e,b6 as Ae,cM as ke,cN as Me,bO as N,bQ as Ne,cO as qe,bF as Be,b9 as We,bl as Ue,cP as He,cQ as Ge,cR as Ke,bG as Ye}from"./desk-eb7b3548-937623ad.js";import{useDeskTool as Ve,useDeskToolSetting as q,Delay as ze}from"./index-66ec8894-e70a0b61.js";import{P as Qe}from"./PaneItem-59fdbcf0-a60e6cd7.js";import"./index-013247a6.js";const B=100,$=2e3,K={by:[{field:"_updatedAt",direction:"desc"}]},Xe={};function Je(e,s){return e._id?G(e._id):"item-".concat(s)}function Ze(e){return De(e).map(s=>({...s.draft||s.published,hasPublished:!!s.published,hasDraft:!!s.draft}))}const et=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function tt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=e.match(et);if(!n)return null;const t=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(t[0]==="$"){const a=t.slice(1),c=s[a];return typeof c=="string"?c:null}return t}function nt(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function st(e){return e.map(s=>[rt(s),(s.direction||"").toLowerCase()].map(n=>n.trim()).filter(Boolean).join(" ")).join(",")}function rt(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function ot(e,s){const n=e.by.map(t=>{if(t.mapWith)return t;const a=it(s,t.field);return a?ct(a,"datetime")?{...t,mapWith:"dateTime"}:a.jsonType==="string"?{...t,mapWith:"lower"}:t:t});return n.every((t,a)=>t===e.by[a])?e:{...e,by:n}}function it(e,s){const n=pe(s);let t=e;for(const a of n){if(!t)return;if(typeof a=="string"){t=at(t,a);continue}if(!(fe(a)||he(a))||t.jsonType!=="array")return;const[r,i]=t.of||[];if(i||!r)return;if(!ye(r)){t=r;continue}const[f,h]=r.to||[];if(h||!f)return;t=f}return t}function at(e,s){if(!("fields"in e))return;const n=e.fields.find(t=>t.name===s);return n?n.type:void 0}function ct(e,s){let n=e.type;for(;n;){if(n.name===s||!n.type&&n.jsonType===s)return!0;n=n.type}return!1}function lt(e){const{childItemId:s,error:n,filterIsSimpleTypeContraint:t,fullList:a,isActive:c,isLoading:r,items:i,layout:f,onListChange:h,onRetry:l,showIcons:y}=e,R=H(),{collapsed:b}=ge(),{collapsed:L,index:g}=Te(),[S,P]=u.useState(!1);u.useEffect(()=>{if(L)return;const d=setTimeout(()=>{P(!0)},0);return()=>{clearTimeout(d)}},[L]);const T=u.useCallback(d=>{const I=G(d._id),m=s===I;return o(Qe,{icon:y===!1?!1:void 0,id:I,pressed:!c&&m,selected:c&&m,layout:f,schemaType:R.get(d._type),value:d})},[s,c,f,R,y]),p=u.useMemo(()=>{if(!S)return null;if(n)return o(x,{align:"center",direction:"column",height:"fill",justify:"center",children:o(A,{width:1,children:v(Ie,{paddingX:4,paddingY:5,space:4,children:[o(Le,{as:"h3",children:"Could not fetch list items"}),v(_,{as:"p",children:["Error: ",o("code",{children:n.message})]}),l&&o(D,{children:o(U,{icon:be,onClick:l,text:"Retry",tone:"primary"})})]})})});if(i===null)return o(x,{align:"center",direction:"column",height:"fill",justify:"center",children:o(ze,{ms:300,children:v(Re,{children:[o(Se,{muted:!0}),o(D,{marginTop:3,children:o(_,{align:"center",muted:!0,size:1,children:"Loading documents…"})})]})})});if(!r&&i.length===0)return o(x,{align:"center",direction:"column",height:"fill",justify:"center",children:o(A,{width:1,children:o(D,{paddingX:4,paddingY:5,children:o(_,{align:"center",muted:!0,size:2,children:t?"No documents of this type":"No matching documents"})})})});const d=a&&i.length===$;return v(D,{padding:2,children:[i.length>0&&o(Pe,{gap:1,getItemKey:Je,items:i,renderItem:T,onChange:h},"".concat(g,"-").concat(L)),r&&o(k,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:o(_,{align:"center",muted:!0,size:1,children:"Loading…"})}),d&&o(k,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:v(_,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",$," documents"]})})]})},[n,t,a,h,r,i,l,T,S,L,g]);return o(ve,{overflow:b?void 0:"auto",children:p})}const Y=u.memo(e=>{let{index:s,initialValueTemplates:n=[],menuItems:t=[],menuItemGroups:a=[],setLayout:c,setSortOrder:r,title:i}=e;const{features:f}=Ve(),h=u.useMemo(()=>({setLayout:l=>{let{layout:y}=l;c(y)},setSortOrder:l=>{r(l)}}),[c,r]);return o(re,{backButton:f.backButton&&s>0&&o(U,{as:oe,"data-as":"a",icon:ie,mode:"bleed"}),title:i,actions:o(ae,{initialValueTemplateItems:n,actionHandlers:h,menuItemGroups:a,menuItems:t})})});Y.displayName="DocumentListPaneHeader";const ut={result:null,error:!1},dt=e=>({result:{documents:e},loading:!1,error:!1}),mt=e=>({result:null,loading:!1,error:e}),pt=function(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=new Oe,t=n.next.bind(n);return e.pipe(M(r=>({client:r.client,query:r.query,params:r.params})),je(xe),we(1),$e()).pipe(Ae(r=>{const i=ke(r.client,r.query,r.params,s).pipe(M(dt),Me());return N(w({loading:!0}).pipe(Ne(400),qe(i)),i)})).pipe(Be(ut),We((r,i)=>Ue(w(mt(r)),N(He(window,"online"),n).pipe(Ge(1),Ke(i)))),Ye((r,i)=>({...r,...i,onRetry:t})))};function ft(e){var s;const{apiVersion:n,filter:t,params:a,sortOrder:c}=e,r=Ce(_e),[i,f]=u.useState(!1),h=u.useRef(i),[l,y]=u.useState(null),R=(l==null?void 0:l.error)||null,b=(l==null?void 0:l.loading)||l===null,L=l==null?void 0:l.onRetry,g=(s=l==null?void 0:l.result)==null?void 0:s.documents,S=u.useMemo(()=>g?Ze(g):null,[g]),P=u.useMemo(()=>{const p=c==null?void 0:c.extendedProjection,d=["_id","_type"],I=d.join(","),m=(c==null?void 0:c.by)||[],C=i?$:B,E=m.length>0?m:K.by,F=st(E);if(p){const O=d.concat(p).join(",");return["*[".concat(t,"] {").concat(O,"}"),"order(".concat(F,") [0...").concat(C,"]"),"{".concat(I,"}")].join("|")}return"*[".concat(t,"]|order(").concat(F,")[0...").concat(C,"]{").concat(I,"}")},[t,i,c]),T=u.useCallback(p=>{let{toIndex:d}=p;b||h.current||d>=B/2&&(f(!0),h.current=!0)},[b]);return u.useEffect(()=>{const p=i?m=>Boolean(m.result):()=>!0;y(m=>m?{...m,loading:!0}:null);const I=pt(w({client:r,query:P,params:a}),{apiVersion:n,tag:"desk.document-list"}).pipe(Ee(p)).subscribe(y);return()=>I.unsubscribe()},[n,r,i,P,a]),u.useEffect(()=>{y(null),f(!1),h.current=!1},[t,a,c,n]),{error:R,fullList:i,handleListChange:T,isLoading:b,items:S,onRetry:L}}const W=[];function ht(e){const s=u.useRef(e);return Fe(s.current,e)||(s.current=e),s.current}const Lt=u.memo(function(s){const{childItemId:n,index:t,isActive:a,isSelected:c,pane:r,paneKey:i}=s,f=H(),{name:h}=ce(),{defaultLayout:l="default",displayOptions:y,initialValueTemplates:R=W,menuItems:b,menuItemGroups:L,options:g,title:S}=r,{apiVersion:P,defaultOrdering:T=W,filter:p}=g,d=ht(g.params||Xe),I=r.source,m=u.useMemo(()=>tt(p,d),[p,d]),C=(y==null?void 0:y.showIcons)!==!1,[E,F]=q(m,"layout",l),O=u.useMemo(()=>(T==null?void 0:T.length)>0?{by:T}:K,[T]),[j,V]=q(m,"sortOrder",O),z=m&&j?ot(j,f.get(m)):j,Q=le(z),X=nt(p),{error:J,fullList:Z,handleListChange:ee,isLoading:te,items:ne,onRetry:se}=ft({filter:p,params:d,sortOrder:Q,apiVersion:P});return o(ue,{name:I||h,children:v(de,{currentMaxWidth:350,id:i,maxWidth:640,minWidth:320,selected:c,children:[me,o(Y,{index:t,initialValueTemplates:R,menuItems:b,menuItemGroups:L,setLayout:F,setSortOrder:V,title:S}),o(lt,{childItemId:n,error:J,filterIsSimpleTypeContraint:X,fullList:Z,isActive:a,isLoading:te,items:ne,layout:E,onListChange:ee,onRetry:se,showIcons:C})]})})});export{Lt as default};
