import{b as T,c as j}from"./chunk-JIF2VD3E.js";import{Aa as I,Ba as P,Da as L,E as x,Ea as D,F as h,J as y,Ka as F,M as r,N as s,T as l,V as p,X as c,Y as n,Z as O,aa as M,ba as d,ca as m,ha as a,ja as S,oa as k,u as C,x as v,y as _,z as b}from"./chunk-76TGF6CF.js";var u=class t{constructor(e){this.http=e}getCoupons(){return this.http.get("/coupons")}static \u0275fac=function(o){return new(o||t)(v(D))};static \u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})};function R(t,e){if(t&1){let o=M();c(0,"li",6),d("click",function(){let g=x(o).$implicit,w=m(2);return h(w.goToDetail(g.id))}),a(1),n()}if(t&2){let o=e.$implicit;r(),S(" ",o.name," ")}}function z(t,e){if(t&1&&(c(0,"div")(1,"ul",4),l(2,R,2,1,"li",5),n()()),t&2){let o=m();r(2),p("ngForOf",o.coupons)}}function U(t,e){t&1&&(c(0,"div")(1,"p"),a(2,"\uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."),n()())}var f=class t{constructor(e,o,i){this.router=e;this.userService=o;this.couponListService=i}isAuthenticated=!1;coupons=[];destroyRef=_(y);ngOnInit(){this.userService.isAuthenticated.pipe(j(this.destroyRef)).subscribe(e=>{this.isAuthenticated=e}),this.couponListService.getCoupons().subscribe(e=>{this.coupons=e.data})}goToSignup(){this.router.navigate(["/signup"])}goToDetail(e){this.router.navigate(["/coupons",e])}goToAddCoupon(){this.router.navigate(["/coupons/add"])}static \u0275fac=function(o){return new(o||t)(s(F),s(T),s(u))};static \u0275cmp=b({type:t,selectors:[["app-coupon-list"]],standalone:!0,features:[k],decls:6,vars:2,consts:[[1,"coupon-list-container"],[1,"add-coupon-btn",3,"click"],[1,"fas","fa-plus"],[4,"ngIf"],[1,"coupon-list"],[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(o,i){o&1&&(c(0,"div",0)(1,"button",1),d("click",function(){return i.goToAddCoupon()}),O(2,"i",2),a(3," \uCFE0\uD3F0 \uCD94\uAC00 "),n(),l(4,z,3,1,"div",3)(5,U,3,0,"div",3),n()),o&2&&(r(4),p("ngIf",i.coupons.length>0),r(),p("ngIf",i.coupons.length===0))},dependencies:[L,I,P],styles:[".coupon-list-container[_ngcontent-%COMP%]{width:90%;max-width:1000px;margin:0 auto;box-sizing:border-box}.add-coupon-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;font-size:16px;color:#fff;background-color:#ff9aa7;border:none;border-radius:8px;margin:30px 0 20px;cursor:pointer;transition:background-color .3s,transform .2s}.add-coupon-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:8px}.add-coupon-btn[_ngcontent-%COMP%]:hover{background-color:#ff7b8d;transform:scale(1.05)}.coupon-list[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;box-shadow:0 4px 8px #0000001a}.coupon-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:15px;font-size:18px;color:#333;background-color:#fff;border-bottom:1px solid #e0e0e0;transition:background-color .3s,transform .1s;display:flex;align-items:center;justify-content:center}.coupon-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.coupon-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f8f9fa;transform:scale(1.02);cursor:pointer}.coupon-list-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:16px;color:#666;margin-top:20px}"]})};export{f as default};