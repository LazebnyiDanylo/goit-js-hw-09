import"./assets/styles-DPufXLF3.js";const e={email:"",message:""},t=document.querySelector(".feedback-form"),l="feedback-form-state",a=localStorage.getItem(l),m=t.elements.email,r=t.elements.message;a!==null&&(m.value=JSON.parse(a).email,r.value=JSON.parse(a).message,e.email=JSON.parse(a).email,e.message=JSON.parse(a).message);t.addEventListener("input",o);t.addEventListener("submit",i);function o(s){e.email=s.currentTarget.elements.email.value.trim(),e.message=s.currentTarget.elements.message.value.trim(),localStorage.setItem(l,JSON.stringify(e))}function i(s){if(s.preventDefault(),e.email===""||e.message==="")return alert("Fill please all fields");console.log(e),localStorage.removeItem(l),e.email="",e.message="",t.reset()}
//# sourceMappingURL=2-form.js.map
