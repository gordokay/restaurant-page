(()=>{"use strict";function e(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1");n.textContent="toast restaurant";const o=document.createElement("img");o.src="toast.png",o.alt="A delicious slice of toast";const c=document.createElement("p");c.textContent="toast restaurant is your one-stop shop for all things toast",t.append(n,o,c),e.appendChild(t)}function t(t){switch(function(){const e=document.getElementById("content"),t=e.querySelector("div");for(;t.firstChild;)t.removeChild(t.firstChild);e.removeChild(t)}(),t){case"home":e();break;case"contact":!function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1");n.textContent="contact";const o=document.createElement("p");o.textContent="000-000-0000";const c=document.createElement("p");c.textContent="hi@toast.com";const d=document.createElement("p");d.textContent="100 toast st",t.append(n,o,c,d),e.appendChild(t)}();break;case"menu":!function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1");n.textContent="menu",t.appendChild(n),["sourdough","multigrain","whole wheat","pumpernickel"].forEach((e=>{const n=document.createElement("h2");n.textContent=`${e}`,t.appendChild(n)})),e.appendChild(t)}()}}!function(){const e=document.getElementById("content"),t=document.createElement("nav"),n=document.createElement("ul");["home","contact","menu"].forEach((e=>{const t=document.createElement("li"),o=document.createElement("a");o.textContent=`${e}`,o.href="#",t.appendChild(o),n.appendChild(t)})),t.appendChild(n),e.appendChild(t)}(),e(),document.querySelectorAll("li").forEach((e=>{e.addEventListener("click",t.bind(void 0,e.textContent))}))})();