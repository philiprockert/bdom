(()=>{"use strict";var e={962:(e,r,o)=>{o.r(r),o.d(r,{DB_HOST:()=>n,DB_NAME:()=>i,DB_PASSWORD:()=>s,DB_PORT:()=>c,DB_USER:()=>a,PORT:()=>t});var t=process.env.PORT||3001,n=process.env.DB_HOST||"localhost",a=process.env.DB_USER||"root",s=process.env.DB_PASSWORD||"Dimeb@gphilip1971",i=process.env.DB_NAME||"omnicom",c=process.env.DB_PORT||3306},607:function(e,r,o){var t=this&&this.__awaiter||function(e,r,o,t){return new(o||(o=Promise))((function(n,a){function s(e){try{c(t.next(e))}catch(e){a(e)}}function i(e){try{c(t.throw(e))}catch(e){a(e)}}function c(e){var r;e.done?n(e.value):(r=e.value,r instanceof o?r:new o((function(e){e(r)}))).then(s,i)}c((t=t.apply(e,r||[])).next())}))},n=this&&this.__generator||function(e,r){var o,t,n,a,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(c){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(s=0)),s;)try{if(o=1,t&&(n=2&i[0]?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,t=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((n=(n=s.trys).length>0&&n[n.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){s.label=i[1];break}if(6===i[0]&&s.label<n[1]){s.label=n[1],n=i;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(i);break}n[2]&&s.ops.pop(),s.trys.pop();continue}i=r.call(e,s)}catch(e){i=[6,e],t=0}finally{o=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(r,"__esModule",{value:!0});var a=o(860),s=o(962),i=o(744),c=a(),u=(a.Router(),o(582));c.use(u());var l=i.createConnection({host:s.DB_HOST,port:s.DB_PORT,user:s.DB_USER,password:s.DB_PASSWORD,database:s.DB_NAME});l.connect((function(e){e?console.error("Error al conectar a la base de datos:",e):console.log("Conexión a la base de datos MySQL establecida")}));var p=s.PORT;l.query("SELECT * FROM usuario",(function(e,r){e?console.error("error al obtener los datos:",e):(console.log(r),c.get("/",(function(e,o){o.json(r)})))})),c.get("/crear",(function(e,r){return t(void 0,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,l.query('INSERT INTO usuario(nombre, email, contraseña) VALUES("Jhon", "yesbpo@gmail.com", "23345")')];case 1:return e.sent(),[2]}}))}))})),c.listen(p)},582:e=>{e.exports=require("cors")},860:e=>{e.exports=require("express")},744:e=>{e.exports=require("mysql")}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(607)})();