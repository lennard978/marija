(this.webpackJsonplearn=this.webpackJsonplearn||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"title":"True Touch","category":"ljubimci","image":"./images/truetouch.jpg","price":0,"stars":5,"taxes":120,"stocks":10,"action":true},{"id":2,"title":"Smart Fitnes","category":"elektrika","image":"./images/smartfitnes.jpg","price":1690,"stars":4.5,"taxes":120,"stocks":10,"action":true},{"id":3,"title":"Shake N Take","category":"elektrika","image":"./images/shakentake.jpg","price":0,"stars":4.8,"taxes":120,"stocks":10,"action":true},{"id":4,"title":"Helanke za mrsavljenje","category":"lepota","image":"./images/hotshapers.jpg","price":990,"stars":3,"taxes":120,"stocks":10,"action":true},{"id":5,"title":"Scholl","category":"lepota","image":"./images/scholl.jpg","price":790,"stars":4.8,"taxes":120,"stocks":10,"action":true},{"id":6,"title":"Hip Trainer","category":"lepota","image":"./images/hiptrainer.jpg","price":990,"stars":3.8,"taxes":120,"stocks":10,"action":true},{"id":7,"title":"Cekta za kosu","category":"lepota","image":"./images/cetka.jpg","price":999,"stars":3.8,"taxes":120,"stocks":10,"action":true},{"id":8,"title":"HD Vision","category":"elektrika","image":"./images/hd.jpg","price":990,"stars":3.8,"taxes":120,"stocks":10,"action":true},{"id":9,"title":"Rukavice za bastu","category":"pomoc","image":"./images/rukavice.jpg","price":590,"stars":3.8,"taxes":120,"stocks":10,"action":true},{"id":10,"title":"Magic Mesh","category":"pomoc","image":"./images/magic.JPG","price":990,"stars":3.8,"taxes":120,"stocks":10},{"id":11,"title":"Protiv Mitisera","category":"elektrika","image":"./images/mitiseri.jpg","price":1690,"stars":3.8,"taxes":120,"stocks":10},{"id":12,"title":"Ulozak Scholl","category":"pomoc","image":"./images/schollgel.JPG","price":500,"stars":3.8,"taxes":120,"stocks":10},{"id":13,"title":"Masazer za lice","category":"elektrika","image":"./images/masazerzalice.JPG","price":790,"stars":3.8,"taxes":120,"stocks":10},{"id":14,"title":"Spiralni Figaro","category":"elektrika","image":"./images/figaro.jpg","price":990,"stars":3.8,"taxes":120,"stocks":10},{"id":15,"title":"Pet Zoom","category":"ljubimci","image":"./images/petzoom.JPG","price":990,"stars":3.8,"taxes":120,"stocks":10},{"id":16,"title":"Rucni masazer","category":"elektrika","image":"./images/rucnimasazer.jpg","price":1490,"stars":3.8,"taxes":120,"stocks":10},{"id":17,"title":"Valjak","category":"pomoc","image":"./images/valjak.jpg","price":1490,"stars":3.8,"taxes":120,"stocks":10},{"id":18,"title":"Podrska za ledja","category":"lepota","image":"./images/podrska.jpg","price":1190,"stars":3.8,"taxes":120,"stocks":10},{"id":19,"title":"Sega","category":"elektrika","image":"./images/sega.jpg","price":2190,"stars":3.8,"taxes":120,"stocks":10},{"id":20,"title":"Sweet Trimer","category":"elektrika","image":"./images/sweettrimer.jpg","price":990,"stars":3.8,"taxes":120,"stocks":10},{"id":21,"title":"Finishing Touch","category":"elektrika","image":"./images/finishingtouch.jpg","price":1490,"stars":3.8,"taxes":120,"stocks":10},{"id":22,"title":"Gluteus Elektro Stimulator","category":"elektrika","image":"./images/gluteus.jpg","price":1190,"stars":3.8,"taxes":120,"stocks":10},{"id":23,"title":"Auto drzac za mobilni","category":"pomoc","image":"./images/auto.jpg","price":990,"stars":3.8,"taxes":120,"stocks":10},{"id":24,"title":"Pasta za zube","category":"lepota","image":"./images/beljenje.jpg","price":650,"stars":3.8,"taxes":120,"stocks":10},{"id":25,"title":"Sweet Sweat","category":"lepota","image":"./images/sweetsweat.jpg","price":650,"stars":3.8,"taxes":120,"stocks":10},{"id":26,"title":"Forever","category":"lepota","image":"./images/forever.jpg","price":650,"stars":3.8,"taxes":120,"stocks":10},{"id":27,"title":"Wonder Patch","category":"lepota","image":"./images/wonder.jpg","price":700,"stars":3.8,"taxes":120,"stocks":10},{"id":28,"title":"Korseti","category":"lepota","image":"./images/korset.jpg","price":700,"stars":3.8,"taxes":120,"stocks":10}]')},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(1),c=a.n(s),r=a(4),o=a.n(r),n=(a(11),a(12),a(13),a(2)),l=a(5),d=Object(s.createContext)();function j(e){var t=e.children,a=Object(s.useState)(l),c=Object(n.a)(a,2),r=c[0],o=c[1],j=Object(s.useState)(r),m=Object(n.a)(j,2),g=m[0],u=m[1],p=Object(s.useState)(r),h=Object(n.a)(p,2),b=h[0],x=h[1];return r.sort((function(){return Math.random()-.5})),Object(i.jsx)(d.Provider,{value:{productValue:[r,o],sortProductValue:[g,u],actionValue:[b,x]},children:t})}a(14);function m(){var e=Object(s.useContext)(d),t=e.productValue,a=e.sortProductValue,c=Object(n.a)(t,1)[0],r=Object(n.a)(a,2),o=(r[0],r[1]);return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("form",{className:"my-2",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row justify-content-center",children:[Object(i.jsx)("div",{className:"col-3",children:Object(i.jsx)("p",{className:"my-0 font-weight-bolder",children:"Sortiraj:"})}),Object(i.jsx)("div",{className:"col-2",children:Object(i.jsxs)("select",{onClick:function(e){var t=e.target.value,a=c.filter((function(e){return e.category===t}));o(a),""===t&&o(c)},name:"Sve",id:"",children:[Object(i.jsx)("option",{value:"",children:"Sve"}),Object(i.jsx)("option",{value:"ljubimci",children:"Ljubimci"}),Object(i.jsx)("option",{value:"elektrika",children:"Elektrika"}),Object(i.jsx)("option",{value:"lepota",children:"Lepota"}),Object(i.jsx)("option",{value:"pomoc",children:"Pomoc"})]})})]})})})})}function g(){var e=Object(s.useContext)(d).sortProductValue,t=Object(n.a)(e,1)[0],a=function(e){e.preventDefault()};return Object(i.jsx)("div",{className:"product-page",children:Object(i.jsx)("div",{className:"container min-vh-100",children:Object(i.jsxs)("div",{className:"row justify-content-center",children:[Object(i.jsxs)("div",{className:"col-12 text-center my-3",children:[Object(i.jsx)("h2",{className:"p-3",children:"Trenutno na lageru"}),Object(i.jsx)(m,{})]}),t.map((function(e){return Object(i.jsx)("div",{className:"col-12 col-sm-12 col-md-6",children:Object(i.jsxs)("div",{className:"row border-primary border-top py-4 justify-content-center",children:[Object(i.jsx)("div",{className:"col-5 align-self-center",children:Object(i.jsx)("img",{src:e.image,className:"img-fluid",alt:"Product"})}),Object(i.jsxs)("div",{className:"col-7 align-self-center",children:[Object(i.jsx)("p",{className:"m-0 lead font-weight-normal",children:e.title}),Object(i.jsx)("a",{onClick:a,href:"/",className:"m-0 small text-primary",children:e.category}),Object(i.jsxs)("p",{className:"m-0 small",children:[Object(i.jsx)("span",{className:"price-text font-weight-bolder",children:e.price})," ","RSD"]}),Object(i.jsxs)("p",{className:"m-0 small",children:["Postarina: ",e.taxes," din"]}),Object(i.jsxs)("p",{className:"m-0 small",children:["Ocena:"," ",Object(i.jsx)("span",{className:"badge badge-primary",children:e.stars})]}),Object(i.jsx)("button",{className:"btn btn-primary mt-2 py-1 px-3",children:"Dodaj u korpu"})]})]})},e.id)}))]})})})}a(15);function u(){return Object(i.jsxs)("div",{className:"header-layout ",children:[Object(i.jsx)("div",{className:"layout"}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row d-flex vh-100 justify-content-center align-items-center",children:Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("h1",{className:"my-2 display-1 text-center font-weight-bolder",children:"Online Shop"})})})})]})}a(16);function p(){var e=Object(s.useContext)(d).actionValue,t=Object(n.a)(e,2),a=t[0],c=t[1];Object(s.useEffect)((function(){r()}),[]);var r=function(e){var t=a.filter((function(e){return!0===e.action}));c(t)};return Object(i.jsx)("div",{className:"best",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"row justify-content-center no-gutters",children:[Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("h1",{className:"mb-5 text-center",children:"Najprodavaniji proizvodi"})}),a.map((function(e){return Object(i.jsx)("div",{className:"col-6 col-sm-6 col-md-4 col-lg-3",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{className:"card-img",src:e.image,alt:"Img"}),Object(i.jsx)("div",{className:"card-body text-center font-italic font-weight-bolder",children:e.title}),Object(i.jsxs)("div",{className:"card-footer text-right pr-4",children:["Cena:"," ",Object(i.jsx)("span",{className:"font-weight-bolder text-primary",children:e.price})," ","din"]})]})},e.id)}))]})})})}var h=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{}),Object(i.jsx)(p,{}),Object(i.jsx)(g,{})]})},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function x(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),i(e),s(e),c(e),r(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(j,{children:Object(i.jsx)(h,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/marija",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/marija","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var i=a.headers.get("content-type");404===a.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):x(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):x(t,e)}))}}(),k()}],[[17,1,2]]]);
//# sourceMappingURL=main.5cd761ab.chunk.js.map