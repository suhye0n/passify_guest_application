import{a as y,b as s,c as Z}from"./chunk-JIF2VD3E.js";import{$ as w,B as E,Da as N,E as d,F as u,Fa as B,Ga as $,Ha as J,J as D,Ja as L,Ka as q,M as f,Ma as Y,N as v,O as R,Q as U,T as k,V as g,X as a,Y as i,Z as h,_ as x,aa as S,ba as l,ca as C,h as H,ha as c,j as V,k as P,m as F,oa as _,pa as O,ta as j,y as p,z as m,za as z}from"./chunk-76TGF6CF.js";var G=[{path:"",loadComponent:()=>import("./chunk-LPP4GWVP.js")},{path:"login",loadComponent:()=>import("./chunk-7RP2VDQP.js"),canActivate:[()=>p(s).isAuthenticated.pipe(P(e=>!e))]},{path:"signup",loadComponent:()=>import("./chunk-7RP2VDQP.js"),canActivate:[()=>p(s).isAuthenticated.pipe(P(e=>!e))]},{path:"coupons/edit/:id",loadComponent:()=>import("./chunk-4IK5DIRP.js")},{path:"coupons/add",loadComponent:()=>import("./chunk-3NSX6XT2.js")},{path:"coupons/:id",loadComponent:()=>import("./chunk-BGCDJ7RN.js")},{path:"coupons",loadComponent:()=>import("./chunk-Z44VMWMI.js")}];var K=(e,n)=>{let t=e.clone({url:`https://port-0-pointify-server-manager-m3833mtrd38e546a.sel4.cloudtype.app${e.url}`});return n(t)};var Q=(e,n)=>{let t=p(y).getToken(),o=e.clone({setHeaders:t?{Authorization:`Bearer ${t}`}:{}});return n(o)};var W=(e,n)=>n(e).pipe(F(t=>V(()=>t?.error||"An unknown error occurred")));function te(e,n){return()=>e.getToken()?n.getCurrentUser():H}var X={providers:[Y(G),B($([K,Q,W])),{provide:j,useFactory:te,deps:[y,s],multi:!0}]};var b=class e{constructor(n,t,o){this.templateRef=n;this.viewContainer=t;this.userService=o}condition=!1;hasView=!1;destroyRef=p(D);set ifAuthenticated(n){this.condition=n,this.updateView()}ngOnInit(){this.userService.isAuthenticated.pipe(Z(this.destroyRef)).subscribe(n=>{this.updateView(n)})}updateView(n){let t=n&&this.condition||!n&&!this.condition;t&&!this.hasView?(this.viewContainer.createEmbeddedView(this.templateRef),this.hasView=!0):!t&&this.hasView&&(this.viewContainer.clear(),this.hasView=!1)}static \u0275fac=function(t){return new(t||e)(v(R),v(U),v(s))};static \u0275dir=E({type:e,selectors:[["","ifAuthenticated",""]],inputs:{ifAuthenticated:"ifAuthenticated"},standalone:!0})};var ne=e=>({open:e}),oe=e=>({active:e});function ie(e,n){if(e&1){let t=S();x(0),a(1,"li")(2,"a",5),l("click",function(){d(t);let r=C();return u(r.goToCoupon())}),c(3,"\uCFE0\uD3F0"),i()(),a(4,"li")(5,"a",5),l("click",function(){d(t);let r=C();return u(r.goToCard())}),c(6,"\uCE74\uB4DC"),i()(),w()}}function re(e,n){if(e&1){let t=S();x(0),a(1,"li")(2,"a",5),l("click",function(){d(t);let r=C();return u(r.goToLogin())}),c(3,"\uB85C\uADF8\uC778"),i()(),a(4,"li")(5,"a",5),l("click",function(){d(t);let r=C();return u(r.goToSignup())}),c(6,"\uD68C\uC6D0\uAC00\uC785"),i()(),w()}}function ae(e,n){if(e&1){let t=S();x(0),a(1,"li")(2,"a",5),l("click",function(){d(t);let r=C();return u(r.logout())}),c(3,"\uB85C\uADF8\uC544\uC6C3"),i()(),w()}}var A=class e{currentUser$=p(s).currentUser$;userService=p(s);router=p(q);isSidebarActive=!1;menuClass="close";logout(){this.userService.logout(),this.router.navigate(["/login"])}goToSignup(){this.router.navigate(["/signup"])}goToLogin(){this.router.navigate(["/login"])}goToCoupon(){this.router.navigate(["/coupons"])}goToCard(){this.router.navigate(["/cards"])}goToHome(){this.router.navigate(["/"])}toggleSidebar(){this.isSidebarActive=!this.isSidebarActive,this.menuClass=this.isSidebarActive?"open":""}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-header"]],standalone:!0,features:[_],decls:17,vars:9,consts:[[1,"header"],[1,"logo"],[1,"title",3,"click"],[1,"menu-toggle",3,"click","ngClass"],[1,"sidebar",3,"ngClass"],[3,"click"],[4,"ifAuthenticated"]],template:function(t,o){t&1&&(a(0,"header",0)(1,"div",1)(2,"a",2),l("click",function(){return o.goToHome()}),c(3,"Pointify"),i()(),a(4,"div",3),l("click",function(){return o.toggleSidebar()}),h(5,"div")(6,"div")(7,"div"),i()(),a(8,"div",4)(9,"ul")(10,"li")(11,"a",5),l("click",function(){return o.goToHome()}),c(12,"\uD648"),i()(),k(13,ie,7,0,"ng-container",6),i(),a(14,"ul"),k(15,re,7,0,"ng-container",6)(16,ae,4,0,"ng-container",6),i()()),t&2&&(f(4),g("ngClass",O(5,ne,o.menuClass==="open")),f(4),g("ngClass",O(7,oe,o.isSidebarActive)),f(5),g("ifAuthenticated",!0),f(2),g("ifAuthenticated",!1),f(),g("ifAuthenticated",!0))},dependencies:[b,N,z],styles:[".header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:20px 40px;background-color:#fff;box-shadow:0 4px 12px #0000001a;transition:all .3s ease}.header[_ngcontent-%COMP%]:hover{background-color:#f9f9f9;box-shadow:0 6px 18px #00000026}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.sidebar[_ngcontent-%COMP%]{position:fixed;top:0;left:-290px;height:100%;width:250px;background-color:#ff7b8d;color:#fff;transition:left .3s ease;display:flex;flex-direction:column;justify-content:space-around;padding:20px;z-index:999}.sidebar.active[_ngcontent-%COMP%]{left:0}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}.sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 0}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;font-size:18px}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.menu-toggle[_ngcontent-%COMP%]{cursor:pointer;display:flex;flex-direction:column;gap:6px}.menu-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:30px;height:4px;background-color:#ff7b8d;transition:all .3s ease}.menu-toggle.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){transform:rotate(45deg);position:relative;top:10px}.menu-toggle.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){opacity:0}.menu-toggle.open[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){transform:rotate(-45deg);position:relative;top:-10px}"]})};var M=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-footer"]],standalone:!0,features:[_],decls:4,vars:0,consts:[[1,"footer"],[1,"footer-content"]],template:function(t,o){t&1&&(a(0,"footer",0)(1,"div",1)(2,"p"),c(3,"\xA9 2024 Pointify. All rights reserved."),i()()())},styles:[".footer[_ngcontent-%COMP%]{background-color:#0000001a;color:#4a4a4a;padding:8px 4px;text-align:center;box-shadow:0 -4px 12px #0000001a;position:fixed;bottom:0;left:0;right:0;z-index:1000;font-size:9px}.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 20px}"]})};var T=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[_],decls:3,vars:0,template:function(t,o){t&1&&h(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[A,L,M],encapsulation:2})};J(T,X).catch(e=>console.error(e));