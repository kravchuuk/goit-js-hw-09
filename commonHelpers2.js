import"./assets/modulepreload-polyfill-ec808ebb.js";const e=document.querySelector(".feedback-form"),o="feedback-form-state",m=()=>JSON.parse(localStorage.getItem(o))||{},r=()=>{const t={email:e.email.value.trim(),message:e.message.value.trim()};localStorage.setItem(o,JSON.stringify(t))},l=()=>{const{email:t="",message:a=""}=m();e.email.value=t,e.message.value=a};l();e.addEventListener("input",()=>{r()});e.addEventListener("submit",function(t){t.preventDefault();const{email:a,message:s}=m();a&&s&&(console.log({email:a,message:s}),localStorage.removeItem(o),e.reset())});
//# sourceMappingURL=commonHelpers2.js.map
