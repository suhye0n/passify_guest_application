import{a as z}from"./chunk-Y2LNA2BJ.js";import{Ba as F,Ca as O,Da as j,E as y,Ea as T,F as E,G as I,H as D,Ia as P,Ka as k,M as a,N as u,T as b,V as m,X as r,Y as i,Z as B,aa as _,ba as S,ca as s,d as Q,da as w,ea as M,fa as R,ha as n,ja as d,oa as V,qa as C,ra as f,u as g,ua as A,x as h,z as x}from"./chunk-76TGF6CF.js";var H=Q(z());var l=class o{constructor(t){this.http=t}getCouponById(t){return this.http.get(`/coupons/${t}`)}static \u0275fac=function(e){return new(e||o)(h(T))};static \u0275prov=g({token:o,factory:o.\u0275fac,providedIn:"root"})};var q=["barcode"];function G(o,t){if(o&1){let e=_();r(0,"div")(1,"p",3),S("click",function(){y(e);let c=s();return E(c.goToEditPage())}),n(2,"\uC218\uC815"),i(),r(3,"p")(4,"strong"),n(5,"\uC774\uB984:"),i(),n(6),i(),r(7,"p")(8,"strong"),n(9,"\uBC14\uCF54\uB4DC:"),i()(),I(),B(10,"svg",null,0),D(),r(12,"p")(13,"strong"),n(14,"\uBA54\uBAA8:"),i(),n(15),i(),r(16,"p")(17,"strong"),n(18,"\uC0DD\uC131\uC77C:"),i(),n(19),C(20,"date"),i(),r(21,"p")(22,"strong"),n(23,"\uC218\uC815\uC77C:"),i(),n(24),C(25,"date"),i()()}if(o&2){let e=s();a(6),d(" ",e.coupon.name,""),a(9),d(" ",e.coupon.memo,""),a(4),d(" ",f(20,4,e.coupon.createdAt,"yyyy-MM-dd"),""),a(5),d(" ",f(25,7,e.coupon.updatedAt,"yyyy-MM-dd"),"")}}function J(o,t){o&1&&(r(0,"div")(1,"p"),n(2,"\uCFE0\uD3F0 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),i()())}var v=class o{constructor(t,e,p,c){this.route=t;this.couponDetailService=e;this.router=p;this.cdr=c}coupon;barcodeElement;isViewInitialized=!1;ngOnInit(){let t=+this.route.snapshot.paramMap.get("id");this.loadCoupon(t)}ngAfterViewInit(){this.isViewInitialized=!0,this.cdr.detectChanges()}loadCoupon(t){this.couponDetailService.getCouponById(t).subscribe(e=>{this.coupon=e.data,this.isViewInitialized&&this.coupon?.barcode&&(this.cdr.detectChanges(),this.generateBarcode(String(this.coupon.barcode)))})}generateBarcode(t){this.barcodeElement?.nativeElement&&(0,H.default)(this.barcodeElement.nativeElement,t,{format:"CODE128",width:2,height:50,displayValue:!0})}goToEditPage(){this.router.navigate([`/coupons/edit/${this.coupon.id}`])}static \u0275fac=function(e){return new(e||o)(u(P),u(l),u(k),u(A))};static \u0275cmp=x({type:o,selectors:[["app-coupon-detail"]],viewQuery:function(e,p){if(e&1&&w(q,5),e&2){let c;M(c=R())&&(p.barcodeElement=c.first)}},standalone:!0,features:[V],decls:5,vars:2,consts:[["barcode",""],[1,"container"],[4,"ngIf"],[3,"click"]],template:function(e,p){e&1&&(r(0,"div",1)(1,"h1"),n(2,"\uCFE0\uD3F0 \uC0C1\uC138 \uC815\uBCF4"),i(),b(3,G,26,10,"div",2)(4,J,3,0,"div",2),i()),e&2&&(a(3),m("ngIf",p.coupon),a(),m("ngIf",!p.coupon))},dependencies:[j,F,O],styles:[".barcode[_ngcontent-%COMP%]{margin:10px 0}p[_ngcontent-%COMP%]:not(:first-child){border-top:1px solid #ddd;padding-top:10px}.no-coupon[_ngcontent-%COMP%]{text-align:center;color:#888;font-style:italic;margin-top:20px}"]})};export{v as default};
