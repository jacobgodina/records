import{r,h as y,i as b,j as e,k as N,l as k}from"./index-23bfd1f9.js";const S=()=>{const[t,m]=r.useState("login"),{setUser:x}=y(),[f,p]=r.useState(""),[h,g]=r.useState(""),[c,o]=r.useState(!1),j=b(),i=r.useRef(),u=r.useRef(),n=r.useRef(),v=async s=>{s.preventDefault(),n.current.continuousStart();try{const a=new FormData;a.append("username",f),a.append("password",h);const l=await fetch(`${k}auth/${t}`,{method:"POST",headers:{"Access-Control-Allow-Methods":"POST"},body:a});if(l.ok){const d=await l.json(),{access_token:w}=d;return localStorage.setItem("access_token",w),x(!0),n.current.complete(),j("/"),{success:!0,data:d}}if(!l.ok&&t==="register")return o(!0),setTimeout(()=>{o(!1)},5e3),n.current.complete();if(!l.ok&&t==="login")return o(!0),setTimeout(()=>{o(!1)},5e3),n.current.complete()}catch(a){console.error(a)}finally{i.current.value="",u.current.value=""}};return e.jsxs(e.Fragment,{children:[e.jsx(N,{color:"#00a827",shadow:!0,ref:n}),e.jsx("div",{className:"flex flex-row sm:p-0 p-2 justify-center items-center h-screen w-screen mx-auto",children:e.jsxs("div",{className:"flex flex-row items-center w-[800px] h-[500px] bg-zinc-900 rounded-md ",children:[e.jsxs("div",{className:"w-[50%] hidden sm:flex flex-col items-center justify-evenly border-r h-full border-zinc-700",children:[e.jsxs("div",{className:"relative w-[250px] h-[250px] flex items-center justify-center",children:[e.jsx("img",{src:"/vite.svg",alt:"logo",width:180,height:180,className:"max-w-full max-h-full object-cover",style:{position:"relative",zIndex:"2"}}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-600 to-purple-600 p-32 rounded-full",style:{filter:"blur(40px)",zIndex:"1"}})]}),e.jsx("div",{className:"flex items-center justify-center flex-col gap-1",children:e.jsx("h1",{className:"text-4xl font-semibold bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent",children:"Music Player"})})]}),e.jsxs("div",{className:"flex flex-col w-[50%] h-full items-center justify-center mx-auto space-y-2",children:[e.jsxs("form",{onSubmit:v,className:"flex  flex-col items-center justify-center gap-4 p-4",children:[e.jsx("h1",{className:"text-4xl font-bold",children:t==="login"?"Login":"Register"}),e.jsx("input",{className:"p-2 w-64 rounded-md",placeholder:"Enter Username",type:"text",name:"Enter Username",id:"username",onChange:s=>p(s.target.value),ref:i,autoComplete:"off",required:!0}),e.jsx("input",{className:"p-2 w-64 rounded-md",placeholder:"Enter Password",type:"password",name:"password",id:"password",autoComplete:"on",onChange:s=>g(s.target.value),ref:u,required:!0}),c&&t==="register"?e.jsx("p",{className:"text-red-500 text-xs",children:"Username taken."}):c&&t==="login"&&e.jsx("p",{className:"text-red-500 text-xs",children:"Invalid Username or Password."}),e.jsx("button",{type:"submit",className:"bg-green-500 hover:bg-green-500/90 w-28 py-1.5 font-bold rounded-md text-black",children:t==="login"?"Login":"Register"})]}),e.jsx("div",{className:"flex items-end justify-end",children:e.jsxs("span",{className:"text-xs",children:[t==="login"?"Doesn't have account ? ":"Have Account ? ",e.jsx("button",{onClick:()=>m(s=>s==="login"?"register":"login"),className:"text-zinc-300 hover:text-zinc-200",children:t==="login"?"Register":"Login"})]})})]})]})})]})};export{S as default};