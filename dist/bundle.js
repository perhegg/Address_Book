!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=function(){var e=window.localStorage,t=JSON.parse(e.getItem("contacts")),n=document.querySelector(".contact-list");if(t){n.innerHTML="";var r=document.createElement("ul");r.class="flex",t.forEach(function(e){var t=document.createElement("li");t.id=e.id,t.classList+="list-reset",t.innerHTML='\n            \n          <div class="content text-center sm:text-left sm:flex-growbg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden sm:flex sm:items-center px-6 py-4">\n                <h3 class="" >'+e.name+'</h3>\n                <h4 class="">'+e.company+'</h4>\n                <P class="">'+e.phone+'</P>\n                <p class="">'+e.notes+'</p> \n                <p class="">'+e.email+'</p> | \n                <a href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+"</a>\n          </div>\n        \n    ",t.appendChild(r)}),n.appendChild(r)}else n.innerHTML='<p class= "text-center">You have no contacts in your address book</p>'};document.addEventListener("DOMContentLoaded",function(){r();var e=document.querySelector(".new-contact-form");e.addEventListener("submit",function(t){var n=window.localStorage;t.preventDefault();var o=e.elements,a=o.name,c=o.email,l=o.phone,i=o.company,s=o.notes,u=o.twitter,d={id:Date.now(),name:a.value,email:c.value,phone:l.value,company:i.value,notes:s.value,twitter:u.value},f=JSON.parse(n.getItem("contacts"))||[];f.push(d),n.setItem("contacts",JSON.stringify(f)),r(),e.reset()})})}]);