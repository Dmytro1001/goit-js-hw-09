!function(){var t,e=document.querySelector("body"),r=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");r.addEventListener("click",(function(){r.setAttribute("disabled","disabled"),d.removeAttribute("disabled"),t=setInterval((function(){var t;t="#".concat(Math.floor(16777215*Math.random()).toString(16)),e.style.backgroundColor=t}),1e3)})),d.addEventListener("click",(function(){d.setAttribute("disabled","disabled"),r.removeAttribute("disabled"),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.a93bc905.js.map