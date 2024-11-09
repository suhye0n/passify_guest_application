import{a as T,b as C,c as I,d as B,e as z,g as h,i as N,j as G,k as R,n as V}from"./chunk-R7JGWKRF.js";import{b as k,c as E}from"./chunk-JIF2VD3E.js";import{Aa as y,Ba as F,Da as w,Ia as S,J as _,Ka as A,La as D,M as e,T as c,V as u,W as g,X as r,Y as i,Z as f,ba as O,ca as x,ha as l,ia as M,ja as d,oa as P,y as m,z as v}from"./chunk-76TGF6CF.js";function q(a,o){if(a&1&&(r(0,"li")(1,"strong"),l(2),i(),l(3),i()),a&2){let n=o.$implicit;e(2),d("",n[0],":"),e(),d(" ",n[1]," ")}}function j(a,o){if(a&1&&(r(0,"div",11)(1,"ul"),c(2,q,4,2,"li",12),i()()),a&2){let n=x();e(2),u("ngForOf",n.errorEntries)}}var b=class a{authType="";title="";isSubmitting=!1;errors={detail:{}};authForm;destroyRef=m(_);userService=m(k);route=m(S);router=m(A);constructor(){this.authForm=this.createAuthForm()}ngOnInit(){this.initializeAuthType()}createAuthForm(){return new z({email:new h("",[C.required]),password:new h("",[C.required])})}initializeAuthType(){this.authType=this.route.snapshot.url.at(-1)?.path||"",this.title=this.authType==="login"?"\uB85C\uADF8\uC778":"\uD68C\uC6D0\uAC00\uC785"}onSubmit(){if(this.isSubmitting)return;this.isSubmitting=!0,this.errors={detail:{}};let o=this.authForm.value;(this.authType==="login"?this.userService.login({email:o.email,password:o.password}):this.userService.signup({email:o.email,password:o.password})).pipe(E(this.destroyRef)).subscribe({next:()=>this.router.navigate(["/"]),error:t=>{this.errors=t,this.isSubmitting=!1}})}get errorEntries(){return Object.entries(this.errors.detail)}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=v({type:a,selectors:[["app-auth-page"]],standalone:!0,features:[P],decls:16,vars:11,consts:[[1,"auth-container"],[1,"auth-box"],[1,"auth-header"],[1,"auth-form",3,"ngSubmit","formGroup"],[1,"input-group"],["id","email","type","email","formControlName","email","placeholder","\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"],["id","password","type","password","formControlName","password","placeholder","\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"],["class","error-message",4,"ngIf"],["type","submit",3,"disabled"],[1,"link"],[3,"routerLink"],[1,"error-message"],[4,"ngFor","ngForOf"]],template:function(n,t){if(n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),l(4),i()(),r(5,"form",3),O("ngSubmit",function(){return t.onSubmit()}),r(6,"div",4),f(7,"input",5),i(),r(8,"div",4),f(9,"input",6),i(),c(10,j,3,1,"div",7),r(11,"button",8),l(12),i()(),r(13,"div",9)(14,"a",10),l(15),i()()()()),n&2){let s,p;e(4),M(t.title),e(),u("formGroup",t.authForm),e(2),g("invalid",((s=t.authForm.get("email"))==null?null:s.invalid)&&((s=t.authForm.get("email"))==null?null:s.touched)),e(2),g("invalid",((p=t.authForm.get("password"))==null?null:p.invalid)&&((p=t.authForm.get("password"))==null?null:p.touched)),e(),u("ngIf",t.errors&&t.errors.detail),e(),u("disabled",t.isSubmitting||t.authForm.invalid),e(),d(" ",t.authType==="login"?"\uB85C\uADF8\uC778":"\uD68C\uC6D0\uAC00\uC785"," "),e(2),u("routerLink",t.authType==="login"?"/signup":"/login"),e(),d(" ",t.authType==="login"?"\uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694? \uD68C\uC6D0\uAC00\uC785":"\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694? \uB85C\uADF8\uC778"," ")}},dependencies:[V,N,T,I,B,G,R,D,w,y,F],styles:[".auth-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background:linear-gradient(135deg,#f4f7fa,#e0e7f1)}.auth-box[_ngcontent-%COMP%]{background-color:#fff;padding:2rem;border-radius:12px;box-shadow:0 15px 40px #0000001a;width:100%;max-width:400px;box-sizing:border-box;transition:transform .3s ease-in-out}.auth-box[_ngcontent-%COMP%]:hover{transform:translateY(-6px)}.auth-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:1.5rem}.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem;font-weight:700;color:#333;letter-spacing:1px}.auth-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.2rem}.input-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:.4rem;font-size:1.1rem;color:#444;font-weight:600}.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:1rem;margin-bottom:.8rem;border:2px solid #ddd;border-radius:10px;font-size:1rem;color:#333;background-color:#fafafa;width:100%;transition:border-color .3s ease,box-shadow .3s ease;outline:none;box-sizing:border-box}.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#ff9aa7;box-shadow:0 0 10px #007bff4d}.auth-form[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]{border-color:#ff4d4f;background-color:#fff0f0}.auth-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:1rem;background-color:#ff9aa7;color:#fff;border:none;border-radius:10px;font-size:1.1rem;cursor:pointer;transition:background-color .3s,transform .3s ease-in-out;margin-top:1rem;box-shadow:0 5px 12px #0000001a}.auth-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#ff7b8d;transform:translateY(-4px)}.auth-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#ccc;cursor:not-allowed}.error-message[_ngcontent-%COMP%]{color:#ff4d4f;font-size:.9rem;margin-top:1rem}.error-message[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px}.error-message[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem;font-weight:600}.error-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:700;color:#d9534f}.link[_ngcontent-%COMP%]{text-align:center;margin-top:2rem}.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#ff9aa7;text-decoration:none;font-size:1rem;transition:color .3s ease}.link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff7b8d;text-decoration:underline}"]})};export{b as default};