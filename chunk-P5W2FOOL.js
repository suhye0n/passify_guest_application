import{a as T,c as j,d as q,f as H,h as L,i as P,l as Q,m as G}from"./chunk-R7JGWKRF.js";import{a as J}from"./chunk-Y2LNA2BJ.js";import{Da as N,E as m,Ea as O,F as u,G as w,H as M,Ka as R,M as l,N as b,V as A,X as r,Y as a,Z as E,aa as V,ba as y,d as x,da as F,ea as I,fa as B,ga as D,ha as p,ka as c,la as C,ma as g,oa as W,u as _,x as S,z as h}from"./chunk-76TGF6CF.js";var k=x(J());var f=class d{constructor(o){this.http=o}addCoupon(o){return this.http.post("/coupons",o)}static \u0275fac=function(n){return new(n||d)(S(O))};static \u0275prov=_({token:d,factory:d.\u0275fac,providedIn:"root"})};var U=["barcode"],v=class d{constructor(o,n){this.couponAddService=o;this.router=n}coupon={userId:0,name:"",barcode:"",memo:""};barcodeElement;ngOnInit(){this.coupon.userId=Number(localStorage.getItem("userId"))}onSubmit(){this.couponAddService.addCoupon(this.coupon).subscribe(o=>{this.router.navigate(["/coupons"])},o=>{console.error("\uCFE0\uD3F0 \uCD94\uAC00 \uC2E4\uD328:",o)})}generateBarcode(o){this.barcodeElement?.nativeElement&&o&&(0,k.default)(this.barcodeElement.nativeElement,o,{format:"CODE128",width:2,height:50,displayValue:!0})}static \u0275fac=function(n){return new(n||d)(b(f),b(R))};static \u0275cmp=h({type:d,selectors:[["app-coupon-add"]],viewQuery:function(n,e){if(n&1&&F(U,5),n&2){let i;I(i=B())&&(e.barcodeElement=i.first)}},standalone:!0,features:[W],decls:21,vars:4,consts:[["couponForm","ngForm"],["barcode",""],[1,"container"],[3,"ngSubmit"],["for","name"],["id","name","type","text","name","name","required","",3,"ngModelChange","ngModel"],["for","barcode"],["id","barcode","type","text","name","barcode","required","",3,"ngModelChange","ngModel"],["for","memo"],["id","memo","name","memo",3,"ngModelChange","ngModel"],["type","submit",3,"disabled"]],template:function(n,e){if(n&1){let i=V();r(0,"div",2)(1,"h1"),p(2,"\uCFE0\uD3F0 \uCD94\uAC00"),a(),r(3,"form",3,0),y("ngSubmit",function(){return m(i),u(e.onSubmit())}),r(5,"div")(6,"label",4),p(7,"\uC774\uB984"),a(),r(8,"input",5),g("ngModelChange",function(t){return m(i),C(e.coupon.name,t)||(e.coupon.name=t),u(t)}),a()(),r(9,"div")(10,"label",6),p(11,"\uBC14\uCF54\uB4DC"),a(),r(12,"input",7),g("ngModelChange",function(t){return m(i),C(e.coupon.barcode,t)||(e.coupon.barcode=t),u(t)}),y("ngModelChange",function(){return m(i),u(e.generateBarcode(e.coupon.barcode))}),a(),w(),E(13,"svg",null,1),a(),M(),r(15,"div")(16,"label",8),p(17,"\uBA54\uBAA8"),a(),r(18,"textarea",9),g("ngModelChange",function(t){return m(i),C(e.coupon.memo,t)||(e.coupon.memo=t),u(t)}),a()(),r(19,"button",10),p(20,"\uCFE0\uD3F0 \uCD94\uAC00"),a()()()}if(n&2){let i=D(4);l(8),c("ngModel",e.coupon.name),l(4),c("ngModel",e.coupon.barcode),l(6),c("ngModel",e.coupon.memo),l(),A("disabled",i.invalid)}},dependencies:[N,G,P,T,j,q,Q,L,H],styles:["button[_ngcontent-%COMP%]{border-radius:10px}"]})};export{v as default};
