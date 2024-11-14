import{b as R,c as W}from"./chunk-PWBUOXLA.js";import{a as H,c as Q,h as U,l as z,m as q,n as G,p as J}from"./chunk-ONP6AOLD.js";import{a as X}from"./chunk-DZFP2UU4.js";import{a as K}from"./chunk-VNP4B37G.js";import{$ as A,Ca as I,Da as F,E as m,F as f,Fa as D,Ga as V,Ha as j,J as T,M as c,N as _,Na as N,T as C,V as l,W as w,X as a,Y as s,Z as d,_ as E,aa as h,ba as p,ca as g,ha as u,ja as v,ka as P,la as M,ma as x,oa as B,u as O,x as S,y as L,z as k}from"./chunk-T7GGXQV6.js";var b=class i{constructor(t){this.http=t}getCoupons(t=0,e=10,n="name",o=""){let r=new V().set("offset",t.toString()).set("limit",e.toString());return o&&(r=r.set(n,o)),this.http.get("/passes",{params:r})}static \u0275fac=function(e){return new(e||i)(S(j))};static \u0275prov=O({token:i,factory:i.\u0275fac,providedIn:"root"})};function $(i,t){if(i&1){let e=h();a(0,"li",10),p("click",function(){let o=m(e).$implicit,r=g(2);return f(r.goToDetail(o.id))}),u(1),s()}if(i&2){let e=t.$implicit;c(),v(" ",e.title==null?null:e.title.name," ")}}function ee(i,t){if(i&1){let e=h();E(0),a(1,"button",10),p("click",function(){let o=m(e).$implicit,r=g(2);return f(r.goToPage(o))}),u(2),s(),A()}if(i&2){let e=t.$implicit,n=g(2);c(),w("active",e===n.currentPage),c(),v(" ",e," ")}}function te(i,t){if(i&1){let e=h();a(0,"div")(1,"ul",13),C(2,$,2,1,"li",14),s(),a(3,"div",15)(4,"button",16),p("click",function(){m(e);let o=g();return f(o.goToPreviousPage())}),d(5,"i",17),s(),C(6,ee,3,3,"ng-container",18),a(7,"button",16),p("click",function(){m(e);let o=g();return f(o.goToNextPage())}),d(8,"i",19),s()()()}if(i&2){let e=g();c(2),l("ngForOf",e.coupons),c(2),l("disabled",e.currentPage===1),c(2),l("ngForOf",e.pagesToDisplay()),c(),l("disabled",e.currentPage===e.totalPages.length)}}function ne(i,t){i&1&&(a(0,"div")(1,"p"),u(2,"\uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."),s()())}var y=class i{constructor(t,e,n){this.router=t;this.userService=e;this.couponListService=n}isAuthenticated=!1;coupons=[];destroyRef=L(T);offset=0;limit=10;count=0;currentPage=1;totalPages=[];searchBy="name";searchQuery="";isLoading=!1;errorMessage="";ngOnInit(){this.userService.isAuthenticated.pipe(W(this.destroyRef)).subscribe(t=>{this.isAuthenticated=t}),this.loadCoupons()}loadCoupons(){this.isLoading=!0,this.couponListService.getCoupons(this.offset,this.limit,this.searchBy,this.searchQuery).subscribe(t=>{this.coupons=t.data,this.count=t.count,this.totalPages=Array(Math.ceil(this.count/this.limit)).fill(0).map((e,n)=>n+1),this.isLoading=!1},t=>{this.isLoading=!1,this.errorMessage="\uCFE0\uD3F0 \uBAA9\uB85D \uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328: "+t.message,console.error("\uCFE0\uD3F0 \uBAA9\uB85D \uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328:",t)})}searchCoupons(){this.currentPage=1,this.offset=0,this.loadCoupons()}goToDetail(t){this.router.navigate(["/coupons",t])}goToAddCoupon(){this.router.navigate(["/coupons/add"])}goToPage(t){this.currentPage=t,this.offset=(t-1)*this.limit,this.loadCoupons()}goToPreviousPage(){this.currentPage>1&&this.goToPage(this.currentPage-1)}goToNextPage(){this.currentPage<this.totalPages.length&&this.goToPage(this.currentPage+1)}pagesToDisplay(){let t=Math.floor((this.currentPage-1)/5)*5+1,e=Math.min(t+4,this.totalPages.length);return Array.from({length:e-t+1},(n,o)=>t+o)}closeErrorPopup(){this.errorMessage=""}static \u0275fac=function(e){return new(e||i)(_(N),_(R),_(b))};static \u0275cmp=k({type:i,selectors:[["app-coupon-list"]],standalone:!0,features:[B],decls:19,vars:6,consts:[[3,"isLoading"],[3,"close","errorMessage"],[1,"container"],[1,"add-coupon-btn",3,"click"],[1,"fas","fa-plus"],[1,"search-container"],[3,"ngModelChange","change","ngModel"],["value","name"],["value","memo"],["type","text","placeholder","\uAC80\uC0C9\uC5B4 \uC785\uB825",3,"ngModelChange","ngModel"],[3,"click"],[1,"fas","fa-search"],[4,"ngIf"],[1,"coupon-list"],[3,"click",4,"ngFor","ngForOf"],[1,"pagination"],[3,"click","disabled"],[1,"fas","fa-chevron-left"],[4,"ngFor","ngForOf"],[1,"fas","fa-chevron-right"]],template:function(e,n){e&1&&(d(0,"app-loading-indicator",0),a(1,"app-error-popup",1),p("close",function(){return n.closeErrorPopup()}),s(),a(2,"div",2)(3,"h1"),u(4,"\uCFE0\uD3F0 \uB9AC\uC2A4\uD2B8"),s(),a(5,"button",3),p("click",function(){return n.goToAddCoupon()}),d(6,"i",4),u(7," \uCD94\uAC00 "),s(),a(8,"div",5)(9,"select",6),x("ngModelChange",function(r){return M(n.searchBy,r)||(n.searchBy=r),r}),p("change",function(){return n.searchCoupons()}),a(10,"option",7),u(11,"\uC774\uB984"),s(),a(12,"option",8),u(13,"\uBA54\uBAA8"),s()(),a(14,"input",9),x("ngModelChange",function(r){return M(n.searchQuery,r)||(n.searchQuery=r),r}),s(),a(15,"button",10),p("click",function(){return n.searchCoupons()}),d(16,"i",11),s()(),C(17,te,9,4,"div",12)(18,ne,3,0,"div",12),s()),e&2&&(l("isLoading",n.isLoading),c(),l("errorMessage",n.errorMessage),c(8),P("ngModel",n.searchBy),c(5),P("ngModel",n.searchQuery),c(3),l("ngIf",n.coupons.length>0),c(),l("ngIf",n.coupons.length===0))},dependencies:[D,I,F,J,q,G,H,z,Q,U,K,X],styles:[".add-coupon-btn[_ngcontent-%COMP%]{padding:12px 20px;border-radius:8px;margin:30px 0 20px}.add-coupon-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:8px}.coupon-list[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0;border-radius:8px;overflow:hidden}.coupon-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:15px;font-size:18px;color:#333;border-bottom:1px solid #e0e0e0;transition:background-color .3s,transform .1s;display:flex;align-items:center;justify-content:center}.coupon-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.coupon-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#e9c8c814;transform:scale(1.02);cursor:pointer}p[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:20px 0;gap:8px}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 12px;font-size:16px;border:none;border-radius:4px;color:#fff;background-color:#ff9aa7;cursor:pointer;transition:background-color .3s,transform .2s}.pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#ff7b8d;font-weight:700}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active){background-color:#ff7b8d;transform:scale(1.05)}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#e0e0e0;color:#999;cursor:not-allowed;transform:none}.search-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:20px}.search-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:8px 12px;font-size:16px;border-radius:8px;border:1px solid #e0e0e0;transition:border-color .3s;outline:none}.search-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:150px;background-color:#fff;color:#333}.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{flex-grow:1;background-color:#fff;color:#333}.search-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#ff9aa7}.search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 12px;background-color:#ff9aa7;color:#fff;border:none;border-radius:8px;cursor:pointer;transition:background-color .3s,transform .2s}.search-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#ff7b8d;transform:scale(1.05)}"]})};export{y as default};