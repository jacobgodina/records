import{r as s,n as S,h as k,j as e,k as I,l as P}from"./index-23bfd1f9.js";const F=()=>{const[n,r]=s.useState(null),[h,o]=s.useState(""),[f,d]=s.useState(!1),[p,m]=s.useState(!1),[g,i]=s.useState("/img/download.jpeg"),{setIsPFetching:j}=S(),{token:y}=k(),u=s.useRef(null),x=s.useRef(null),c=s.useRef(null),w=async l=>{l.preventDefault(),d(!0),c.current.continuousStart();try{const t=new FormData;t.append("playlist_name",h),t.append("playlist_image",n);const a=await fetch(`${P}playlist/add`,{method:"POST",headers:{Authorization:`Bearer ${y}`,"Access-Control-Allow-Methods":"POST"},body:t});return j(!0),a}catch(t){console.error(t)}finally{u.current.value="",x.current.value="",i("/img/download.jpeg"),r(null),o(""),m(!0),c.current.complete(),setTimeout(()=>{d(!1),m(!1)},5e3)}},b=l=>{const t=l.target.files[0];if(r(t),t){const a=new FileReader;a.onload=C=>{i(C.target.result)},a.readAsDataURL(t)}},v=()=>{document.getElementById("file-input").click()},N=()=>{r(null),i("/img/download.jpeg")};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"p-6 m-auto",children:e.jsxs("div",{className:"flex items-center justify-center mt-24 h-full",children:[e.jsxs("div",{className:"w-full lg:w-[500px] space-x-2 space-y-2 bg-white/5 rounded-md p-4 flex flex-col justify-center items-center mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Create Playlist"}),e.jsxs("form",{onSubmit:w,className:"p-4 flex flex-col items-center justify-center",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-center",children:[e.jsx("div",{className:"flex flex-col items-center justify-center min-w-[150px] min-h-[150px] w-[180px]",children:e.jsxs("div",{className:"relative flex flex-col items-center justify-center",children:[e.jsx("span",{className:"text-sm mb-4",children:"Playlist Image :"}),e.jsx("img",{src:g,className:"rounded-lg object-cover w-36 h-36 cursor-pointer",onClick:v}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("input",{type:"file",id:"file-input",className:"hidden",ref:u,required:!0,accept:".jpeg, .jpg, .png, .svg",onChange:b}),n&&e.jsx("button",{onClick:N,className:"bg-red-500 p-2 rounded-md cursor-pointer text-white mt-2",children:"Remove File"}),!n&&e.jsx("div",{className:"text-red-600 text-sm font-semibold mt-2 text-center",children:"Please select an image for your playlist."})]})]})}),e.jsx("div",{className:"p-4 flex flex-col space-y-2",children:e.jsx("input",{type:"text",id:"playlist_name",onChange:l=>o(l.target.value),ref:x,required:!0,autoFocus:!0,autoComplete:"off",placeholder:"Playlist Name",className:"rounded-md p-2 bg-zinc-900 focus:outline-none"})})]}),e.jsx("div",{className:"flex lg:ml-auto",children:e.jsx("button",{"aria-label":"submit",title:"Create",type:"submit",disabled:f,className:"bg-green-500 hover:bg-green-500/90 font-semibold text-black rounded-md px-5 py-2",children:"Submit"})})]})]}),e.jsx("div",{children:e.jsx(I,{color:"#00a827",shadow:!0,ref:c})}),e.jsxs("div",{id:"toast-success",className:`${p?"flex":"hidden"} absolute top-5 right-0 items-center w-full h-16 max-w-xs p-4 mb-4 rounded-lg shadow text-white bg-green-500
        `,role:"alert",children:[e.jsxs("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white bg-transparent rounded-lg",children:[e.jsx("svg",{className:"w-5 h-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"})}),e.jsx("span",{className:"sr-only",children:"Check icon"})]}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Playlist Created Successfully"}),e.jsxs("button",{type:"button",className:"ml-auto -mx-1.5 -my-1.5 bg-white/20 text-white hover:text-black rounded-lg focus:ring-2 focus:ring-gray-300 p-1 hover:bg-white/50 inline-flex items-center justify-center h-7 w-7","data-dismiss-target":"#toast-success","aria-label":"Close",children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})]})]})]})})})};export{F as default};