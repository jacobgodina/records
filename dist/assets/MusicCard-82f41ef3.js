import{p as b,m as v,r as y,j as e,q as d,s as h,v as n}from"./index-23bfd1f9.js";import{P as f}from"./play-2d2e6ca3.js";import"./createLucideIcon-abaf8de9.js";const N=c=>{const{musicName:i,musicImage:t,musicArtist:m}=c,{selectedAudio:s,playAudio:o,pauseAudio:u,isPause:a,currentIndex:x,setCurrentIndex:r,setData:g}=b(),{musicData:j}=v();y.useEffect(()=>{(s==null?void 0:s.musicName)===i&&r(x)},[s,i,x,r]);const p=()=>{(s==null?void 0:s.musicName)===i?a?o(s):u():(o({...c}),g("default"),r(j.findIndex(w=>w.musicName===i)))},l=(s==null?void 0:s.musicName)===i;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex hhh min-w-[270px] h-full sm:hidden flex-col justify-center items-center text-zinc-200 gap-2 font-semibold rounded-md bg-white/5 hover:bg-white/10 transition-all",children:e.jsx("table",{className:"w-full h-full",children:e.jsx("tbody",{children:e.jsxs("tr",{className:"flex items-center",children:[e.jsxs("td",{className:"flex flex-row items-center justify-center gap-2",children:[e.jsx("div",{className:"relative flex items-center justify-center",children:e.jsx("img",{src:t?`${d+"img/"+t}`:"/img/download.jpeg",alt:"cover",className:"rounded-lg object-cover w-[50px] h-[50px]"})}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx(h,{to:"/music/"+i,children:e.jsx("span",{className:"text-xs max-w-[150px] whitespace-nowrap overflow-hidden overflow-ellipsis",children:i})}),e.jsx("span",{className:"text-[10px] text-zinc-400 max-w-[150px] whitespace-nowrap overflow-hidden overflow-ellipsis",children:m})]})]}),e.jsxs("td",{className:"ml-auto w-6 flex items-center justify-center mr-2",children:[e.jsxs("div",{className:`playing-mobile ${l&&!a?"visible":"invisible"}`,children:[e.jsx("span",{className:"playing__bar playing__bar1"}),e.jsx("span",{className:"playing__bar playing__bar2"}),e.jsx("span",{className:"playing__bar playing__bar3"})]}),e.jsx("button",{onClick:p,className:`items-center justify-center mx-auto ${l&&a?"flex":l&&!a?"hidden":"flex"}
          `,children:e.jsx(f,{fill:"white",color:"white",size:15})})]})]})})})}),e.jsxs("div",{className:` cursor-pointer
          hidden sm:flex items-center justify-center p-4 group min-w-[135px] min-h-[135px] w-[135px] sm:w-[180px] flex-col text-base text-zinc-200 gap-3 font-semibold rounded-md bg-white/5 hover:bg-white/10 transition-all`,children:[e.jsxs("div",{className:"relative flex items-center justify-center",children:[e.jsx("img",{src:t?`${d+"img/"+t}`:"/img/download.jpeg",alt:"cover",className:"rounded-lg relative object-cover w-[105px] h-[105px] min-h-[105px] min-w-[105px] max-w-[105px] max-h-[105px] sm:min-w-[150px] sm:min-h-[150px]  sm:w-[150px] sm:h-[150px] sm:max-w-[150px] sm:max-h-[150px]"}),e.jsxs("div",{className:`playing-ui ${l&&!a?"visible":"invisible"}`,children:[e.jsx("span",{className:"playing__bar playing__bar1"}),e.jsx("span",{className:"playing__bar playing__bar2"}),e.jsx("span",{className:"playing__bar playing__bar3"})]}),e.jsx("button",{title:"Play","aria-label":"Play",onClick:p,className:`absolute flex items-center justify-center bottom-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 right-2 p-4 rounded-full bg-green-500/80 text-black button-transition hover:scale-110 hover:bg-green-500 hover:shadow-md 
          ${l&&a?"flex group-hover:flex":l?"group-hover:hidden pl-3.5":"flex group-hover:flex"}
          `,children:e.jsx(f,{fill:"black",className:"ml-1"})})]}),e.jsxs("div",{className:"flex flex-col items-start sm:p-0",children:[e.jsx(h,{to:"/music/"+i,children:e.jsx("p",{className:"font-semibold px-2 sm:px-0 hover:underline text-[10px] sm:text-sm whitespace-nowrap overflow-hidden overflow-ellipsis w-32",children:e.jsx("strong",{title:i,children:i})})}),e.jsx("p",{className:"font-normal px-2 sm:px-0 text-xs text-zinc-400 whitespace-nowrap overflow-hidden overflow-ellipsis w-32",children:m})]})]})]})};N.propTypes={musicName:n.PropTypes.string,musicArtist:n.PropTypes.string,musicImage:n.PropTypes.string};export{N as default};
