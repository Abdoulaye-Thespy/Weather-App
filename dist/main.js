!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"data",(function(){return i}));const o=e=>{document.getElementById("town").innerHTML=""+e.townName,document.getElementById("country").innerHTML=""+e.townCountry,document.getElementById("temp").innerHTML=e.townTemp+" °C",document.getElementById("desc").innerHTML=""+e.townDesc},r=document.getElementById("switch");let c="C";r.addEventListener("click",()=>{const e=document.getElementById("switch");if(document.getElementById("temp").innerHTML=i.townTemp+" °F","F"===c)e.innerHTML="SWITCH TO °F",document.getElementById("temp").innerHTML=i.townTemp+" °C",c="C";else if("C"===c){e.innerHTML="SWITCH TO °C";let t=null;console.log(i.townTemp),t=9*i.townTemp/5+32,t=t.toFixed(2),document.getElementById("temp").innerHTML=t+" °F",c="F"}});const u=document.getElementById("sbtn");let i={};async function l(e){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=e099642ba8b7f8b636938fb26d4c6038&units=metric `,{mode:"cors"}),n=await t.json();return console.log(n),console.log("seperate"),n}const d=e=>{i.townName=e.name,i.townTemp=e.main.temp,i.townCountry=e.sys.country,i.townDesc=e.weather[0].description};u.addEventListener("click",(async function(e){e.preventDefault();const t=document.getElementById("inp").value,n=await l(t);return d(n),console.log(i),o(i),i})),async function(){const e=await l("Yaounde");d(e),o(i)}()}]);