!function(e){var o={};function t(r){if(o[r])return o[r].exports;var i=o[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var i in e)t.d(r,i,function(o){return e[o]}.bind(null,i));return r},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o){function t(e,o,t){var r,i,n;e.precio&&o.precio&&t.precio&&(sitioSeleccionado=(i=o,n=t,menor=e,i.precio<menor.precio&&(menor=i),n.precio<menor.precio&&(menor=n),menor),r=sitioSeleccionado,res=document.getElementById("res"),res.innerHTML="<span>"+r.nombre+"</span> <br/><h4>"+r.precio+"</h4>",$("#btn").attr("disabled",!1))}$(document).ready((function(){$("#btn").attr("disabled",!1),$("#btn").click((function(){res=document.getElementById("res"),res.innerHTML="",$(this).attr("disabled",!0),sitio1={url:"http://localhost:3000/site1",precio:void 0,nombre:"sitio1"},sitio2={url:"http://localhost:3000/site2",precio:void 0,nombre:"sitio2"},sitio3={url:"http://localhost:3000/site3",precio:void 0,nombre:"sitio3"},$.getJSON(sitio1.url,(function(e){sitio1.precio=e[0].precio,t(sitio1,sitio2,sitio3)}),(function(e){alert("se produjo error")})),$.getJSON(sitio2.url,(function(e){sitio2.precio=e.p,t(sitio1,sitio2,sitio3)}),(function(e){alert("se produjo error")})),$.getJSON(sitio3.url,(function(e){sitio3.precio=e.producto.valor,t(sitio1,sitio2,sitio3)}),(function(e){alert("se produjo error")}))}))}))}]);