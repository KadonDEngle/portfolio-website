(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const _ of t.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function r(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(a){if(a.ep)return;a.ep=!0;const t=r(a);fetch(a.href,t)}})();const O="https://api.web3forms.com/submit",h="cf497880-c07b-46a0-8853-688c01fe174e",L=3e3,M=document.querySelector(".hero__btn"),k=document.querySelector(".nav-bar"),v=document.querySelector(".nav-bar__menu"),T=document.querySelector(".adventure-map"),i=document.querySelector(".adventure-details"),w=document.querySelector(".form"),P=document.querySelector(".form__spinner"),z=document.querySelector(".form__success-msg"),m=document.querySelector(".form__error-msg"),d=document.querySelector("#name"),b=document.querySelector("#email"),p=document.querySelector("#message"),R=document.querySelector(".form__submit-btn"),U=document.querySelector(".hero"),y=document.querySelector(".about"),$=document.querySelector(".projects"),E=document.querySelector(".adventures"),q=document.querySelector(".contact"),x=async(e,o)=>{try{const r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},l=await fetch(e,r),a=await l.json();if(!l.ok)throw new Error(a.description||"Failed to send email");return a}catch(r){throw console.error("Error sending email:",r.message),new Error("Failed to send email")}},A=()=>{y.scrollIntoView({behavior:"smooth"})};M.addEventListener("click",A);const u={hero:U,about:y,projects:$,adventures:E,contact:q},B=e=>{e.preventDefault();const o=e.target.closest(".nav-bar__menu-link"),r=e.target.closest(".nav-bar__toggle-btn");o?F(o):r&&S()},I=()=>{const e=window.scrollY;for(const[o,r]of Object.entries(u)){const l=r.offsetTop;if(e>=l-10){const a=document.querySelector(`[data-target="${o}"]`);D(a)}}},F=e=>{const o=e.dataset.target;o&&u[o]&&(v.classList.contains("nav-bar__menu--expanded")&&S(),u[o].scrollIntoView({behavior:"smooth"}))},S=()=>{v.classList.toggle("nav-bar__menu--expanded")},D=e=>{document.querySelectorAll(".nav-bar__menu-link--active").forEach(o=>{o.classList.remove("nav-bar__menu-link--active")}),e.classList.toggle("nav-bar__menu-link--active")};k.addEventListener("click",B);window.addEventListener("scroll",I);const C=async e=>{e.preventDefault();const o=d.value,r=b.value,l=p.value,a={access_key:h,subject:"Website From Submission",name:o,email:r,message:l};c(!0);try{const t=await x(O,a);f(),W(),c(!1),console.log("Email sent successfully:",t)}catch(t){f(),J(),c(!1),console.error("Failed to send email:",t.message)}},f=()=>{d.value="",b.value="",p.value=""},W=()=>{w.classList.toggle("form--hidden"),z.classList.toggle("form__success-msg--visible")},J=()=>{m.classList.add("form__error-msg--visible"),setTimeout(()=>{m.classList.remove("form__error-msg--visible")},L)},c=e=>{[d,b,p,R].forEach(o=>{o.disabled=e}),P.classList.toggle("form__spinner--visible",e)};w.addEventListener("submit",C);const N=""+new URL("1-4syr8uih.webp",import.meta.url).href,K=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),Y=""+new URL("2-hpw1pqvL.webp",import.meta.url).href,V=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),H=""+new URL("3-e617S4jO.webp",import.meta.url).href,G=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),X=""+new URL("4-nzc_MofY.webp",import.meta.url).href,Q=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),Z=""+new URL("5-0WKCO4g0.webp",import.meta.url).href,ee=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),te=""+new URL("6-yuIchILE.webp",import.meta.url).href,oe=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"})),ae=""+new URL("7-YBEFlBop.webp",import.meta.url).href,re=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),le=""+new URL("8-6-7cTAA4.webp",import.meta.url).href,_e=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),ne=""+new URL("1--KjhxmvV.webp",import.meta.url).href,se=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"})),ie=""+new URL("2-DBJk4oNN.webp",import.meta.url).href,ce=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"})),ue=""+new URL("3-M-9IDU7P.webp",import.meta.url).href,de=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),be=""+new URL("4-VkJtwkrl.webp",import.meta.url).href,pe=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"})),me=""+new URL("5-cxd7YFKg.webp",import.meta.url).href,fe=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),ge=""+new URL("6-0ketPrQo.webp",import.meta.url).href,ve=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"})),we=""+new URL("7-RmusavMl.webp",import.meta.url).href,ye=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"})),Se=""+new URL("1-OKriyCMP.webp",import.meta.url).href,je=Object.freeze(Object.defineProperty({__proto__:null,default:Se},Symbol.toStringTag,{value:"Module"})),Oe=""+new URL("2-9iuB0vJj.webp",import.meta.url).href,he=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"})),Le=""+new URL("3-5raa19Ka.webp",import.meta.url).href,Me=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"})),ke=""+new URL("1-AJQBg9SJ.webp",import.meta.url).href,Te=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),Pe=""+new URL("2-CzWL1wOn.webp",import.meta.url).href,ze=Object.freeze(Object.defineProperty({__proto__:null,default:Pe},Symbol.toStringTag,{value:"Module"})),Re=""+new URL("3-60WAPY_-.webp",import.meta.url).href,Ue=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"})),$e=""+new URL("1-FLEOnkJE.webp",import.meta.url).href,Ee=Object.freeze(Object.defineProperty({__proto__:null,default:$e},Symbol.toStringTag,{value:"Module"})),qe=""+new URL("2-UjVFhijo.webp",import.meta.url).href,xe=Object.freeze(Object.defineProperty({__proto__:null,default:qe},Symbol.toStringTag,{value:"Module"})),Ae=""+new URL("3-YXLe5_SF.webp",import.meta.url).href,Be=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"})),Ie=""+new URL("4-acz9RQuo.webp",import.meta.url).href,Fe=Object.freeze(Object.defineProperty({__proto__:null,default:Ie},Symbol.toStringTag,{value:"Module"})),De=""+new URL("1-Zszz2rfb.webp",import.meta.url).href,Ce=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"})),We=""+new URL("2--O2usDst.webp",import.meta.url).href,Je=Object.freeze(Object.defineProperty({__proto__:null,default:We},Symbol.toStringTag,{value:"Module"})),Ne=""+new URL("1-Q7l4-nyZ.webp",import.meta.url).href,Ke=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"})),Ye=""+new URL("2-2mBLRqJ4.webp",import.meta.url).href,Ve=Object.freeze(Object.defineProperty({__proto__:null,default:Ye},Symbol.toStringTag,{value:"Module"})),He=""+new URL("1-F6W3gUfd.webp",import.meta.url).href,Ge=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"})),Xe=""+new URL("10-7NSuNOft.webp",import.meta.url).href,Qe=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"})),Ze=""+new URL("2-VAvfEEt3.webp",import.meta.url).href,et=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"})),tt=""+new URL("3-y_JQIL4j.webp",import.meta.url).href,ot=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),at=""+new URL("4-LcNoVWJA.webp",import.meta.url).href,rt=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),lt=""+new URL("5-tbDWfHD6.webp",import.meta.url).href,_t=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),nt=""+new URL("6-iCTGQAkp.webp",import.meta.url).href,st=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"})),it=""+new URL("7-uYZMqzGl.webp",import.meta.url).href,ct=Object.freeze(Object.defineProperty({__proto__:null,default:it},Symbol.toStringTag,{value:"Module"})),ut=""+new URL("8-pe83qBJX.webp",import.meta.url).href,dt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"})),bt=""+new URL("9-TRBlqxPS.webp",import.meta.url).href,pt=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"})),mt=""+new URL("1-udp5VEYJ.webp",import.meta.url).href,ft=Object.freeze(Object.defineProperty({__proto__:null,default:mt},Symbol.toStringTag,{value:"Module"})),gt=""+new URL("2-UJRiw5hy.webp",import.meta.url).href,vt=Object.freeze(Object.defineProperty({__proto__:null,default:gt},Symbol.toStringTag,{value:"Module"})),wt=""+new URL("3-eUbMBlMY.webp",import.meta.url).href,yt=Object.freeze(Object.defineProperty({__proto__:null,default:wt},Symbol.toStringTag,{value:"Module"})),St=""+new URL("4-KMDt5lCw.webp",import.meta.url).href,jt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"})),Ot=""+new URL("5-cYFfGHwC.webp",import.meta.url).href,ht=Object.freeze(Object.defineProperty({__proto__:null,default:Ot},Symbol.toStringTag,{value:"Module"})),Lt=""+new URL("6--DygY1e3.webp",import.meta.url).href,Mt=Object.freeze(Object.defineProperty({__proto__:null,default:Lt},Symbol.toStringTag,{value:"Module"})),kt=""+new URL("7-9mVj64Vk.webp",import.meta.url).href,Tt=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"})),Pt=""+new URL("8-bahG1Md7.webp",import.meta.url).href,zt=Object.freeze(Object.defineProperty({__proto__:null,default:Pt},Symbol.toStringTag,{value:"Module"})),Rt=""+new URL("9-yFWlgwdx.webp",import.meta.url).href,Ut=Object.freeze(Object.defineProperty({__proto__:null,default:Rt},Symbol.toStringTag,{value:"Module"})),$t=""+new URL("1-wfVjy6Rt.webp",import.meta.url).href,Et=Object.freeze(Object.defineProperty({__proto__:null,default:$t},Symbol.toStringTag,{value:"Module"})),qt=""+new URL("2-mjG2csXy.webp",import.meta.url).href,xt=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"})),At=""+new URL("1-pf9PV3HD.webp",import.meta.url).href,Bt=Object.freeze(Object.defineProperty({__proto__:null,default:At},Symbol.toStringTag,{value:"Module"})),It=""+new URL("2-9VWZTInC.webp",import.meta.url).href,Ft=Object.freeze(Object.defineProperty({__proto__:null,default:It},Symbol.toStringTag,{value:"Module"})),Dt=""+new URL("3-xsDDPiBt.webp",import.meta.url).href,Ct=Object.freeze(Object.defineProperty({__proto__:null,default:Dt},Symbol.toStringTag,{value:"Module"})),Wt=""+new URL("4-wESmAuT9.webp",import.meta.url).href,Jt=Object.freeze(Object.defineProperty({__proto__:null,default:Wt},Symbol.toStringTag,{value:"Module"})),Nt=""+new URL("5--heMbGXb.webp",import.meta.url).href,Kt=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"})),Yt=""+new URL("6-xmpD8uNB.webp",import.meta.url).href,Vt=Object.freeze(Object.defineProperty({__proto__:null,default:Yt},Symbol.toStringTag,{value:"Module"})),Ht=""+new URL("7-zKB-fkkm.webp",import.meta.url).href,Gt=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"})),Xt=""+new URL("8-E04jM6Xa.webp",import.meta.url).href,Qt=Object.freeze(Object.defineProperty({__proto__:null,default:Xt},Symbol.toStringTag,{value:"Module"})),Zt=""+new URL("9-6FOpQkL6.webp",import.meta.url).href,eo=Object.freeze(Object.defineProperty({__proto__:null,default:Zt},Symbol.toStringTag,{value:"Module"})),to=""+new URL("1-sZaEtJvS.webp",import.meta.url).href,oo=Object.freeze(Object.defineProperty({__proto__:null,default:to},Symbol.toStringTag,{value:"Module"})),ao=""+new URL("2-byY6LeiE.webp",import.meta.url).href,ro=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"})),lo=""+new URL("3-LWnqxgKL.webp",import.meta.url).href,_o=Object.freeze(Object.defineProperty({__proto__:null,default:lo},Symbol.toStringTag,{value:"Module"})),no=""+new URL("4-67YuKy63.webp",import.meta.url).href,so=Object.freeze(Object.defineProperty({__proto__:null,default:no},Symbol.toStringTag,{value:"Module"})),io=""+new URL("5-myF6kRdw.webp",import.meta.url).href,co=Object.freeze(Object.defineProperty({__proto__:null,default:io},Symbol.toStringTag,{value:"Module"})),uo=""+new URL("1-KKi-tL4g.webp",import.meta.url).href,bo=Object.freeze(Object.defineProperty({__proto__:null,default:uo},Symbol.toStringTag,{value:"Module"})),po=""+new URL("2-6GqP0Ib8.webp",import.meta.url).href,mo=Object.freeze(Object.defineProperty({__proto__:null,default:po},Symbol.toStringTag,{value:"Module"})),fo=""+new URL("3-BtSE1Pbj.webp",import.meta.url).href,go=Object.freeze(Object.defineProperty({__proto__:null,default:fo},Symbol.toStringTag,{value:"Module"})),vo=""+new URL("4-d9nJPGSS.webp",import.meta.url).href,wo=Object.freeze(Object.defineProperty({__proto__:null,default:vo},Symbol.toStringTag,{value:"Module"})),yo=""+new URL("5-JCRKQCwB.webp",import.meta.url).href,So=Object.freeze(Object.defineProperty({__proto__:null,default:yo},Symbol.toStringTag,{value:"Module"})),jo=""+new URL("6-5sevsAAp.webp",import.meta.url).href,Oo=Object.freeze(Object.defineProperty({__proto__:null,default:jo},Symbol.toStringTag,{value:"Module"})),ho=""+new URL("7-Ki6MR4Y6.webp",import.meta.url).href,Lo=Object.freeze(Object.defineProperty({__proto__:null,default:ho},Symbol.toStringTag,{value:"Module"})),Mo=""+new URL("8-jekqHstU.webp",import.meta.url).href,ko=Object.freeze(Object.defineProperty({__proto__:null,default:Mo},Symbol.toStringTag,{value:"Module"})),To=""+new URL("9-l308XXxz.webp",import.meta.url).href,Po=Object.freeze(Object.defineProperty({__proto__:null,default:To},Symbol.toStringTag,{value:"Module"})),zo=""+new URL("1-7ElYhH6J.webp",import.meta.url).href,Ro=Object.freeze(Object.defineProperty({__proto__:null,default:zo},Symbol.toStringTag,{value:"Module"})),Uo=""+new URL("10-okwvyORF.webp",import.meta.url).href,$o=Object.freeze(Object.defineProperty({__proto__:null,default:Uo},Symbol.toStringTag,{value:"Module"})),Eo=""+new URL("11-xNVgCD0H.webp",import.meta.url).href,qo=Object.freeze(Object.defineProperty({__proto__:null,default:Eo},Symbol.toStringTag,{value:"Module"})),xo=""+new URL("12-T-XU806W.webp",import.meta.url).href,Ao=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"})),Bo=""+new URL("13-9Exp4EFc.webp",import.meta.url).href,Io=Object.freeze(Object.defineProperty({__proto__:null,default:Bo},Symbol.toStringTag,{value:"Module"})),Fo=""+new URL("14-FGilSKKe.webp",import.meta.url).href,Do=Object.freeze(Object.defineProperty({__proto__:null,default:Fo},Symbol.toStringTag,{value:"Module"})),Co=""+new URL("2-roYF1hxd.webp",import.meta.url).href,Wo=Object.freeze(Object.defineProperty({__proto__:null,default:Co},Symbol.toStringTag,{value:"Module"})),Jo=""+new URL("3-CV9vAykr.webp",import.meta.url).href,No=Object.freeze(Object.defineProperty({__proto__:null,default:Jo},Symbol.toStringTag,{value:"Module"})),Ko=""+new URL("4-EBEkjs5T.webp",import.meta.url).href,Yo=Object.freeze(Object.defineProperty({__proto__:null,default:Ko},Symbol.toStringTag,{value:"Module"})),Vo=""+new URL("5-dNYjIWWx.webp",import.meta.url).href,Ho=Object.freeze(Object.defineProperty({__proto__:null,default:Vo},Symbol.toStringTag,{value:"Module"})),Go=""+new URL("6-opgaqdq5.webp",import.meta.url).href,Xo=Object.freeze(Object.defineProperty({__proto__:null,default:Go},Symbol.toStringTag,{value:"Module"})),Qo=""+new URL("7-8Z_v1z9v.webp",import.meta.url).href,Zo=Object.freeze(Object.defineProperty({__proto__:null,default:Qo},Symbol.toStringTag,{value:"Module"})),ea=""+new URL("8-DtPpKk9K.webp",import.meta.url).href,ta=Object.freeze(Object.defineProperty({__proto__:null,default:ea},Symbol.toStringTag,{value:"Module"})),oa=""+new URL("9-3dhCv0rU.webp",import.meta.url).href,aa=Object.freeze(Object.defineProperty({__proto__:null,default:oa},Symbol.toStringTag,{value:"Module"})),ra=""+new URL("1-JmnXgYWD.webp",import.meta.url).href,la=Object.freeze(Object.defineProperty({__proto__:null,default:ra},Symbol.toStringTag,{value:"Module"})),_a=""+new URL("2-lCL9ZfsN.webp",import.meta.url).href,na=Object.freeze(Object.defineProperty({__proto__:null,default:_a},Symbol.toStringTag,{value:"Module"})),sa=""+new URL("3-sEzW1ef9.webp",import.meta.url).href,ia=Object.freeze(Object.defineProperty({__proto__:null,default:sa},Symbol.toStringTag,{value:"Module"})),ca=""+new URL("4-JIAtcXmz.webp",import.meta.url).href,ua=Object.freeze(Object.defineProperty({__proto__:null,default:ca},Symbol.toStringTag,{value:"Module"})),da=[{title:"Multnomah Falls",location:{lat:45.576368,lng:-122.116015},visits:[{date:"Sept 11, 2022",note:"Portland trip isn't complete without Auntie Anne's and Top Golf.",images:Object.values(Object.assign({"/src/data/adventure_images/multnomah_falls/09-11-22/1.webp":K,"/src/data/adventure_images/multnomah_falls/09-11-22/2.webp":V,"/src/data/adventure_images/multnomah_falls/09-11-22/3.webp":G,"/src/data/adventure_images/multnomah_falls/09-11-22/4.webp":Q,"/src/data/adventure_images/multnomah_falls/09-11-22/5.webp":ee,"/src/data/adventure_images/multnomah_falls/09-11-22/6.webp":oe,"/src/data/adventure_images/multnomah_falls/09-11-22/7.webp":re,"/src/data/adventure_images/multnomah_falls/09-11-22/8.webp":_e})).map(e=>e.default)}]},{title:"Gold and Silver Falls",location:{lat:43.483649,lng:-123.931932},visits:[{date:"Sept 17, 2022",note:"Two incredibly unique waterfalls with enjoyable hikes.",images:Object.values(Object.assign({"/src/data/adventure_images/gold_and_silver_falls/09-17-22/1.webp":se,"/src/data/adventure_images/gold_and_silver_falls/09-17-22/2.webp":ce,"/src/data/adventure_images/gold_and_silver_falls/09-17-22/3.webp":de,"/src/data/adventure_images/gold_and_silver_falls/09-17-22/4.webp":pe,"/src/data/adventure_images/gold_and_silver_falls/09-17-22/5.webp":fe,"/src/data/adventure_images/gold_and_silver_falls/09-17-22/6.webp":ve,"/src/data/adventure_images/gold_and_silver_falls/09-17-22/7.webp":ye})).map(e=>e.default)}]},{title:"Proxy Falls",location:{lat:44.162877,lng:-121.928249},visits:[{date:"Sept 02, 2022",note:"Insanely beautiful waterfall up the McKenzie Highway. Unique approach over a lava rock trail. Timed it poorly and had to hike out in the dark.",images:Object.values(Object.assign({"/src/data/adventure_images/proxy_falls/09-02-22/1.webp":je,"/src/data/adventure_images/proxy_falls/09-02-22/2.webp":he,"/src/data/adventure_images/proxy_falls/09-02-22/3.webp":Me})).map(e=>e.default)}]},{title:"Salt Creek Falls",location:{lat:43.612255,lng:-122.128701},visits:[{date:"Aug 19, 2022",note:"I cannot believe I hadn't visited this waterfall sooner. Might be my favorite in Oregon.",images:Object.values(Object.assign({"/src/data/adventure_images/salt_creek_falls/08-19-22/1.webp":Te,"/src/data/adventure_images/salt_creek_falls/08-19-22/2.webp":ze,"/src/data/adventure_images/salt_creek_falls/08-19-22/3.webp":Ue})).map(e=>e.default)},{date:"Nov 10, 2024",note:"Even on a gloomy day, this waterfall is magnificent.",images:Object.values(Object.assign({"/src/data/adventure_images/salt_creek_falls/11-10-24/1.webp":Ee,"/src/data/adventure_images/salt_creek_falls/11-10-24/2.webp":xe,"/src/data/adventure_images/salt_creek_falls/11-10-24/3.webp":Be,"/src/data/adventure_images/salt_creek_falls/11-10-24/4.webp":Fe})).map(e=>e.default)}]},{title:"Lower Soda Falls",location:{lat:44.408066,lng:-122.47536},visits:[{date:"Jan 14, 2022",note:"Three step waterfall in Cascadia State Park. Much taller than we expected it to be. Beautiful campground, need to come back and stay at campsite A12.",images:Object.values(Object.assign({"/src/data/adventure_images/lower_soda_falls/01-14-22/1.webp":Ce,"/src/data/adventure_images/lower_soda_falls/01-14-22/2.webp":Je})).map(e=>e.default)}]},{title:"Smith Rock",location:{lat:44.368366,lng:-121.143275},visits:[{date:"Apr 12, 2022",note:"First time taking my soulmate to Smith Rock! <3",images:Object.values(Object.assign({"/src/data/adventure_images/smith_rock/04-12-22/1.webp":Ke,"/src/data/adventure_images/smith_rock/04-12-22/2.webp":Ve})).map(e=>e.default)},{date:"Jul 15, 2023",note:"Decided to pack rope for the entire hike in 90+ degree weather. Forgot ATC anyways...",images:Object.values(Object.assign({"/src/data/adventure_images/smith_rock/07-15-23/1.webp":Ge,"/src/data/adventure_images/smith_rock/07-15-23/10.webp":Qe,"/src/data/adventure_images/smith_rock/07-15-23/2.webp":et,"/src/data/adventure_images/smith_rock/07-15-23/3.webp":ot,"/src/data/adventure_images/smith_rock/07-15-23/4.webp":rt,"/src/data/adventure_images/smith_rock/07-15-23/5.webp":_t,"/src/data/adventure_images/smith_rock/07-15-23/6.webp":st,"/src/data/adventure_images/smith_rock/07-15-23/7.webp":ct,"/src/data/adventure_images/smith_rock/07-15-23/8.webp":dt,"/src/data/adventure_images/smith_rock/07-15-23/9.webp":pt})).map(e=>e.default)}]},{title:"Blue Pool",location:{lat:44.311949,lng:-122.02717},visits:[{date:"Jan 6, 2024",note:"First hike of the new year!",images:Object.values(Object.assign({"/src/data/adventure_images/blue_pool/01-06-24/1.webp":ft,"/src/data/adventure_images/blue_pool/01-06-24/2.webp":vt,"/src/data/adventure_images/blue_pool/01-06-24/3.webp":yt,"/src/data/adventure_images/blue_pool/01-06-24/4.webp":jt,"/src/data/adventure_images/blue_pool/01-06-24/5.webp":ht,"/src/data/adventure_images/blue_pool/01-06-24/6.webp":Mt,"/src/data/adventure_images/blue_pool/01-06-24/7.webp":Tt,"/src/data/adventure_images/blue_pool/01-06-24/8.webp":zt,"/src/data/adventure_images/blue_pool/01-06-24/9.webp":Ut})).map(e=>e.default)}]},{title:"Lake Apopka Loop Trail",location:{lat:28.641725,lng:-81.56046},visits:[{date:"Dec 26, 2023",note:"We were able to make it down to the lake just in time to catch the sunset before turning back.",images:Object.values(Object.assign({"/src/data/adventure_images/lake_apopka_loop_trail/12-26-23/1.webp":Et,"/src/data/adventure_images/lake_apopka_loop_trail/12-26-23/2.webp":xt})).map(e=>e.default)}]},{title:"Patjens Lake Trail",location:{lat:44.374111,lng:-121.88297},visits:[{date:"Oct 7, 2023",note:"The Mt. Washington wilderness is gorgeous, however, the bees made for a perilous 7 miles.",images:Object.values(Object.assign({"/src/data/adventure_images/patjens_lake_trail/10-07-23/1.webp":Bt,"/src/data/adventure_images/patjens_lake_trail/10-07-23/2.webp":Ft,"/src/data/adventure_images/patjens_lake_trail/10-07-23/3.webp":Ct,"/src/data/adventure_images/patjens_lake_trail/10-07-23/4.webp":Jt,"/src/data/adventure_images/patjens_lake_trail/10-07-23/5.webp":Kt,"/src/data/adventure_images/patjens_lake_trail/10-07-23/6.webp":Vt,"/src/data/adventure_images/patjens_lake_trail/10-07-23/7.webp":Gt,"/src/data/adventure_images/patjens_lake_trail/10-07-23/8.webp":Qt,"/src/data/adventure_images/patjens_lake_trail/10-07-23/9.webp":eo})).map(e=>e.default)}]},{title:"Oakland Nature Preserve",location:{lat:28.561243,lng:-81.64047},visits:[{date:"Aug 14, 2023",note:"Gator spotted.",images:Object.values(Object.assign({"/src/data/adventure_images/oakland_nature_preserve/08-14-23/1.webp":oo,"/src/data/adventure_images/oakland_nature_preserve/08-14-23/2.webp":ro,"/src/data/adventure_images/oakland_nature_preserve/08-14-23/3.webp":_o,"/src/data/adventure_images/oakland_nature_preserve/08-14-23/4.webp":so,"/src/data/adventure_images/oakland_nature_preserve/08-14-23/5.webp":co})).map(e=>e.default)}]},{title:"Clear Lake",location:{lat:44.363812,lng:-121.989123},visits:[{date:"June 11, 2023",note:"Snagged the last campsite at Coldwater Cove. We kayaked, hiked and enjoyed a couple days of relaxation. Also, peanut butter hot dog.",images:Object.values(Object.assign({"/src/data/adventure_images/clear_lake/06-11-23/1.webp":bo,"/src/data/adventure_images/clear_lake/06-11-23/2.webp":mo,"/src/data/adventure_images/clear_lake/06-11-23/3.webp":go,"/src/data/adventure_images/clear_lake/06-11-23/4.webp":wo,"/src/data/adventure_images/clear_lake/06-11-23/5.webp":So,"/src/data/adventure_images/clear_lake/06-11-23/6.webp":Oo,"/src/data/adventure_images/clear_lake/06-11-23/7.webp":Lo,"/src/data/adventure_images/clear_lake/06-11-23/8.webp":ko,"/src/data/adventure_images/clear_lake/06-11-23/9.webp":Po})).map(e=>e.default)}]},{title:"Silver Falls State Park",location:{lat:44.888106,lng:-122.65074},visits:[{date:"Apr 29, 2023",note:"Ten waterfalls on a single hike. Including four that you walk behind.",images:Object.values(Object.assign({"/src/data/adventure_images/silver_falls_state_park/04-29-23/1.webp":Ro,"/src/data/adventure_images/silver_falls_state_park/04-29-23/10.webp":$o,"/src/data/adventure_images/silver_falls_state_park/04-29-23/11.webp":qo,"/src/data/adventure_images/silver_falls_state_park/04-29-23/12.webp":Ao,"/src/data/adventure_images/silver_falls_state_park/04-29-23/13.webp":Io,"/src/data/adventure_images/silver_falls_state_park/04-29-23/14.webp":Do,"/src/data/adventure_images/silver_falls_state_park/04-29-23/2.webp":Wo,"/src/data/adventure_images/silver_falls_state_park/04-29-23/3.webp":No,"/src/data/adventure_images/silver_falls_state_park/04-29-23/4.webp":Yo,"/src/data/adventure_images/silver_falls_state_park/04-29-23/5.webp":Ho,"/src/data/adventure_images/silver_falls_state_park/04-29-23/6.webp":Xo,"/src/data/adventure_images/silver_falls_state_park/04-29-23/7.webp":Zo,"/src/data/adventure_images/silver_falls_state_park/04-29-23/8.webp":ta,"/src/data/adventure_images/silver_falls_state_park/04-29-23/9.webp":aa})).map(e=>e.default)}]},{title:"Natural Bridges",location:{lat:42.189806,lng:-124.365915},visits:[{date:"Mar 25, 2023",note:"The first stop on our trip to the Redwoods.",images:Object.values(Object.assign({"/src/data/adventure_images/natural_bridges/03-25-23/1.webp":la,"/src/data/adventure_images/natural_bridges/03-25-23/2.webp":na,"/src/data/adventure_images/natural_bridges/03-25-23/3.webp":ia,"/src/data/adventure_images/natural_bridges/03-25-23/4.webp":ua})).map(e=>e.default)}]}],ba=e=>{console.log(e);const o=`
        <i class='fa-solid fa-x adventure-details__close-btn'></i>
        <h3 class='adventure-details__title'>${e.title}</h3>
        <div class='adventure-details__dates'>
            ${e.visits.map((t,_)=>`
                <button class='adventure-details__date-btn' data-index=${_} ${_==0?"disabled":""}>${t.date}</button>
            `).join("")}
        </div>
        ${e.visits.map((t,_)=>`
            <div class='adventure-details__visit ${_==0?"adventure-details__visit--visible":""}' data-index=${_}>
                ${t.note?`<div class='adventure-details__note'>
                    <p class='adventure-details__note-text'>" ${t.note} "</p>
                </div>`:""}
                <img src=${t.images[0]} class='adventure-details__main-image'>
                <div class='adventure-details__images'>
                    ${t.images.map((n,s)=>`
                        <img src=${n} class='adventure-details__image ${s==0?"adventure-details__image--selected":""}'>
                    `).join("")}
                </div>
            </div>
        `).join("")}
    `;i.innerHTML=o,i.classList.add("adventure-details--visible"),document.body.style.overflow="hidden",document.querySelector(".adventure-details__close-btn").addEventListener("click",()=>{i.classList.remove("adventure-details--visible"),document.body.style.overflow="auto"});const l=document.querySelectorAll(".adventure-details__date-btn"),a=document.querySelectorAll(".adventure-details__visit");l.length>1&&l.forEach(t=>{const _=t.getAttribute("data-index");t.addEventListener("click",()=>{a.forEach(n=>{const s=n.getAttribute("data-index");n.classList.toggle("adventure-details__visit--visible",_==s)}),l.forEach(n=>n.disabled=!1),t.disabled=!0})}),a.forEach(t=>{const _=t.querySelector(".adventure-details__main-image"),n=t.querySelectorAll(".adventure-details__image");n.forEach(s=>{s.addEventListener("click",()=>{_.src=s.src,n.forEach(j=>j.classList.remove("adventure-details__image--selected")),s.classList.add("adventure-details__image--selected")})})})},pa=async()=>{const{Map:e}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:o}=await google.maps.importLibrary("marker"),r=[],l=[],a=new e(T,{zoom:3,center:{lat:39.8097343,lng:-98.5556199},mapId:"c95a1b32bd31296b",disableDefaultUI:!0,clickableIcons:!1});da.forEach(t=>{const _=ma(o,a,t),n=fa(t);r.push(n),l.push(_),_.addListener("click",()=>{g(r),n.open(a,_)})}),["click","drag","zoom_changed"].forEach(t=>{a.addListener(t,()=>g(r))}),ga(a,l)},ma=(e,o,r)=>{const l=document.createElement("div");return l.innerHTML='<i class="fa-solid fa-thumb-tack adventure-map__icon"></i>',new e({map:o,position:r.location,content:l,title:r.title})},fa=e=>{const o=document.createElement("div");o.className="adventure-map__info-window",o.innerHTML=`<h3 class='adventure-map__info-window__title'>${e.title}</h3>`;const r=document.createElement("button");return r.className="adventure-map__info-window__btn",r.textContent="View Details",r.addEventListener("click",()=>ba(e)),o.appendChild(r),new google.maps.InfoWindow({content:o,ariaLabel:e.title})},ga=(e,o)=>{const r=window.btoa(`
    <svg fill="#BB4430" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
        <circle cx="120" cy="120" opacity="0.9" r="70" />
        <circle cx="120" cy="120" opacity=".3" r="90" />
        <circle cx="120" cy="120" opacity=".2" r="110" />
        <circle cx="120" cy="120" opacity=".1" r="130" />
    </svg>`),l={render:({count:a,position:t})=>new google.maps.Marker({label:{text:String(a),color:"white",fontSize:"10px;"},position:t,icon:{url:`data:image/svg+xml;base64,${r}`,scaledSize:new google.maps.Size(45,45)},zIndex:Number(google.maps.Marker.MAX_ZINDEX)+a,title:`Cluster of ${a} adventures.`})};return new markerClusterer.MarkerClusterer({markers:o,map:e,renderer:l})},g=e=>{e.forEach(o=>o.close())};pa();
