import{r as d,W as y,s as n,j as x,g as E,I as C,H as $,Z as S,B as A,a as z,b as T,c as j,d as F,e as L,F as R,f as I,R as P,h as M,i as B,k as N}from"./vendor.8550df60.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}};O();const D="@guilherssousa:";function U(o,t){const s=D+o,[i,a]=d.exports.useState(()=>{const l=localStorage.getItem(s);return l!=null?JSON.parse(l):typeof t=="function"?t():t});return d.exports.useEffect(()=>{localStorage.setItem(s,JSON.stringify(i))},[s,i]),[i,a]}const H=y`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow: overlay;
}

  ::-webkit-scrollbar {
    background-color: transparent;
    padding: 1em;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffffff40;
    border-radius: 10px;
  }
`,J={name:"dark",backgroundColor:"#1e293b",primary:"#f97316",secondary:"#fff",textColor:"#fff",backgroundGradient:"linear-gradient(83.2deg, rgba(33, 31, 88, 1) 10.8%, rgba(43, 54, 87, 1) 94.3%)",patternStrokeColor:"rgb(240 232 213 / 0.08)"},X={name:"light",backgroundColor:"#FEFEFE",primary:"#f97316",secondary:"#222",textColor:"#121212",patternStrokeColor:"rgb(15 23 42 / 0.04)"},G=n.div`
  background: ${o=>o.theme.backgroundColor};
  min-height: 100vh;
  color: ${o=>o.theme.textColor};
  position: relative;
`,q=n.div`
  background: ${o=>{const t=`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='${o.theme.patternStrokeColor}'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`;return o.theme.name=="dark"?`${t}, ${o.theme.backgroundGradient}`:`${t}`}};

  mask-image: radial-gradient(at top, rgba(255, 255, 255, 0.8), transparent);

  position: absolute;
  pointer-events: none;

  height: 100%;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`,W=n.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1.5em;
  padding-bottom: 8em;
  position: relative;
  z-index: 10;
`,e=x.exports.jsx,r=x.exports.jsxs,b=x.exports.Fragment,Y=({children:o})=>r(G,{children:[e(q,{}),e(W,{children:o})]}),c=E({small:"640px",medium:"768px",large:"1024px"}),_=n.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 640px;
  margin: 3em auto 0em auto;

  ${c.lessThan("small")`
    margin: 1em auto 0em auto;
  `};

  h2 {
    margin-top: 1em;
  }

  p {
    font-size: 1.2em;
    margin-top: 0.5em;
    text-align: center;
  }
`,V=n.div`
  position: relative;

  img {
    height: 10em;
    width: 10em;
    border: 0.3em solid #fff;
    border-radius: 5em;
    margin: 0 auto;

    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 20px 38px 0px rgba(0, 0, 0, 0.25);
      transform: scale(1.03);
      cursor: pointer;
    }
  }

  span {
    display: none;
    animation: showUp 0.3s ease-in-out;
  }

  &:hover span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: max-content;
    top: calc(50% + -5px);
    transform: translateY(-50%);
    left: 110%;
    padding: 0.5em 1em;
    background: ${({theme:o})=>o.backgroundColor};
    box-shadow: 0px 20px 38px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  @keyframes showUp {
    0% {
      top: 60%;
      opacity: 0;
    }
    100% {
      top: calc(50% + -5px);
      opacity: 1;
    }
  }
`,K=n.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  button {
    background-color: ${({theme:o})=>o.primary};
    border: 0;
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    outline: none;
    cursor: pointer;
    border-radius: 8px;

    & > svg {
      width: 20px;
      height: 20px;
      color: #fff;
    }
  }
`,Z=n.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 200;
`,Q=n.div`
  width: 60%;
  height: 100%;
  padding: 1.5em;
  background-color: ${o=>o.theme.backgroundColor};

  animation: slideIn 0.3s ease-in-out;

  &.close {
    animation: slideOut 0.4s ease-in-out;
  }

  @keyframes slideIn {
    from {
      background-color: transparent;
      transform: translateX(-100%);
    }
    to {
      background-color: ${o=>o.theme.name&&o.theme.backgroundColor};
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      background-color: ${o=>o.theme.name&&o.theme.backgroundColor};
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
      background-color: transparent;
    }
  }
`,v=n.button`
  display: none !important;
  appearance: none;
  border: 0;
  outline: 0;
  background: none;

  ${c.lessThan("small")`
    display: block !important;
  `};
`,h=n.a`
  color: ${o=>o.theme.textColor};
  display: block;
  font-size: 1.2em;
  text-decoration: none;
  padding: 0.5em;
  font-weight: bold;
`,ee=()=>{const[o,t]=d.exports.useState(!1),s=d.exports.useRef(null);async function i(){if(o){s.current&&s.current.classList.add("close"),await setTimeout(()=>t(!1),300);return}t(!0)}return r(b,{children:[o&&e(Z,{children:r(Q,{ref:s,children:[e(v,{onClick:i,"aria-label":"Fechar Navega\xE7\xE3o",children:e(C,{color:"#fff",size:45})}),e(h,{href:"#about-me",onClick:i,children:"Sobre mim"}),e(h,{href:"#experience",onClick:i,children:"Experi\xEAncia"}),e(h,{href:"#education",onClick:i,children:"Forma\xE7\xE3o Acad\xEAmica"}),e(h,{href:"#projects",onClick:i,children:"Projetos"})]})}),e(v,{onClick:i,"aria-label":"Abrir Navega\xE7\xE3o",children:e($,{color:"#fff",size:45})})]})},oe=({themeSwitcher:o})=>{const t=S();function s(){const i=t.name==="light"?"dark":"light";o(i)}return r(_,{children:[r(K,{children:[e("button",{"aria-label":"Mudar cor do site",onClick:s,children:t.name=="dark"?e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),e(ee,{})]}),r(V,{children:[e("img",{src:"/assets/profile_pic.jpg",alt:"Sou eu!"}),e("span",{children:"Talvez esse site tenha um segredo, nunca se sabe..."})]}),e("h2",{children:"Oi! Meu nome \xE9 Guilherme da Silva Sousa."}),e("p",{children:"Desenvolvedor Fullstack no Mais Esports, atualmente cursando faculdade de Engenharia de Software na Universidade Est\xE1cio de S\xE1."})]})},re=n.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${c.lessThan("small")`
    display: none;
  `};

  margin: 1.5em 0;

  a {
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
    color: ${o=>o.theme.primary};
    text-decoration: none;
    position: relative;

    &:after {
      content: "";
      height: 3px;
      width: 0%;

      position: absolute;
      bottom: -0.3em;
      left: calc(-5%);

      background-color: #fff;

      background-size: 0%;
      background-position: right;
      border-radius: 0.2em;

      transition: 0.2s all ease-out;
    }

    &:hover {
      &:after {
        width: 110%;
      }
    }
  }
`,g=n.a`
  &:after {
    content: "";
    height: 3px;
    width: 0%;

    position: absolute;
    bottom: -0.3em;
    left: calc(-5%);

    background-color: #fff;

    background-size: 0%;
    background-position: right;
    border-radius: 0.2em;

    transition: 0.2s all ease-out;
  }

  &:hover {
    &:after {
      width: 110%;
    }
  }
`,te=n.div`
  ${c.lessThan("small")`
    display: none;
  `};

  position: fixed;
  z-index: 100;
  bottom: 2em;
  display: flex;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${o=>o.theme.primary};
  padding: 0.5em 1em;
  border-radius: 2em;
  font-weight: 700;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);

  transition: 0.2s all ease-out;
  cursor: pointer;

  animation: showIn 0.5s ease-out;

  &:hover {
    filter: brightness(0.9);
  }

  &.disabling {
    animation: showOut 0.4s ease-out;
  }

  @keyframes showIn {
    from {
      transform: translateY(100%) translateX(-50%);
    }
    to {
      transform: translateY(0%) translateX(-50%);
    }
  }

  @keyframes showOut {
    from {
      transform: translateY(0%) translateX(-50%);
    }
    to {
      transform: translateY(100%) translateX(-50%);
      display: none;
    }
  }
`,ne=()=>{const[o,t]=d.exports.useState(!0),s=d.exports.useRef(null),i=d.exports.useRef(null);function a(m){const[p]=m;t(p.isIntersecting)}function l(){window.scrollTo({top:0,behavior:"smooth"}),i.current&&i.current.classList.add("disabling")}return d.exports.useEffect(()=>{let m={root:null,rootMargin:"0px",threshold:1};const p=new IntersectionObserver(a,m);return s.current&&p.observe(s.current),()=>{s.current&&p.unobserve(s.current)}},[]),r(b,{children:[r(re,{ref:s,children:[e(g,{href:"#about-me",children:"Sobre mim"}),e(g,{href:"#experience",children:"Experi\xEAncia"}),e(g,{href:"#education",children:"Forma\xE7\xE3o Acad\xEAmica"}),e(g,{href:"#projects",children:"Projetos"})]}),!o&&r(te,{ref:i,onClick:l,children:["Retornar ao topo ",e(A,{size:28})]})]})},f=n.section`
  margin-top: 1em;
  font-size: 1.2em;

  h1 {
    font-size: 2em;
    ${c.lessThan("small")`
      font-size: 1.8em;
    `};
    color: ${o=>o.theme.textColor};
  }

  p {
    color: ${o=>o.theme.secondary};
    margin-top: 0.5em;

    white-space: pre-line;

    & + p {
      margin-top: 0.8em;
    }

    strong {
      color: ${o=>o.theme.primary};
    }
  }

  a {
    color: ${o=>o.theme.primary};
    font-weight: bold;
    text-decoration: none;
  }

  i {
    margin-right: 0.25em;
  }

  ul {
    margin-top: 0.5em;
    list-style: none;
  }

  li + li {
    margin-top: 0.5em;
  }
`,ie=()=>r(f,{id:"about-me",children:[e("h1",{children:"Sobre mim"}),e("p",{children:"Desenvolvedor Fullstack, me considero um entusiasta de solu\xE7\xF5es e como elas podem ser usadas para impactar o nosso cotidiano. Gosto de desenvolver usando React e seus frameworks, al\xE9m de escrever alguns back-ends e solu\xE7\xF5es mais alternativas de vez em quando."}),r("p",{children:["Estou aberto a propostas para presta\xE7\xE3o de servi\xE7os de constru\xE7\xE3o de sites de pequeno a m\xE9dio porte, caso esteja interessado, me envie um email em ",e("strong",{children:"guilherssousa@gmail.com"})," ou me chame no LinkedIn. (Link abaixo)"]}),r("p",{children:["Falo ",e("strong",{children:"Ingl\xEAs intermedi\xE1rio (suficiente a n\xEDvel T\xE9cnico)"}),", al\xE9m de ",e("strong",{children:"Portugu\xEAs nativo."})]}),r("p",{children:["Gosto de ",e("strong",{children:"design gr\xE1fico"}),","," ",e("strong",{children:"edi\xE7\xE3o de v\xEDdeo"}),", ",e("strong",{children:"automa\xE7\xF5es"}),","," ",e("strong",{children:"caf\xE9"})," e ",e("strong",{children:"gatos"}),". Adepto da religi\xE3o dos monitores ultrawide e hater de sites que n\xE3o s\xE3o otimizados pra eles."]}),e("p",{children:"Eu tenho muitas redes sociais, mas uso essas como as principais:"}),r("ul",{children:[r("li",{children:[e(z,{})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/guilherssousa/",children:"GitHub"})]}),r("li",{children:[e("i",{children:e(T,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/guilhermedasilvasousa/",children:"Linkedin"})]}),r("li",{children:[e("i",{children:e(j,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://open.spotify.com/user/f0mg1ppcpollg45sozzd9gu14?si=01b62e080ff14e4a",children:"Spotify"})]}),r("li",{children:[e("i",{children:e(F,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://be.net/madebygui",children:"Behance"})]})]})]}),ae=n.div`
  margin-top: 1em !important;

  span {
    display: block;
  }
`,se=n.div`
  display: flex;

  & + & {
    margin-top: 1em;
  }

  align-items: flex-start;

  img {
    width: 60px;
    border-radius: 30px;
    ${c.lessThan("small")`
      display: none;
    `};
  }
`,le=n.div`
  ${c.greaterThan("small")`
    margin-left: 1em;
  `};
  margin-top: 0em;
`,de=n.div`
  font-weight: bold;
  font-size: 1.2em;
`;var ce=[{company:"Mais Esports",imageUrl:"/assets/maisesports.webp",position:"Desenvolvedor Fullstack Part-time",period:"Janeiro de 2021 - Atualmente",description:`Respons\xE1vel por parte do desenvolvimento da cobertura de eventos de forma interativa no site principal, realizando integra\xE7\xF5es com diferentes APIs e oferecendo uma experi\xEAncia que seja agrad\xE1vel desde ao usu\xE1rio comum interessado em checar datas de partidas at\xE9 o usu\xE1rio hardcore interessado em odds de Apostas. 

Uso frequente de tecnologias como React, Next JS, Express, GraphQL, Strapi al\xE9m de algumas pr\xE1ticas como otimiza\xE7\xE3o de p\xE1ginas e SEO.`},{company:"Inhouse.gg",imageUrl:"/assets/inhouse.webp",position:"Desenvolvedor Fullstack Part-time",period:"Janeiro de 2022 - Atualmente",description:`Respons\xE1vel pelo desenvolvimento de ferramentas para integra\xE7\xE3o e automatiza\xE7\xE3o de tarefas relevantes, como gerenciamento de contas, manuten\xE7\xE3o de servi\xE7os Web e onboarding de jogadores.

Uso de tecnologias como Express, Prisma, Next.JS e algumas APIs de terceiros.`}];const me=()=>r(f,{id:"experience",children:[e("h1",{children:"Experi\xEAncia"}),e(ae,{children:ce.map((o,t)=>r(se,{children:[e("img",{height:60,width:60,src:o.imageUrl,alt:o.company}),r(le,{children:[e(de,{children:o.company}),e("div",{children:o.position}),r("div",{children:["Per\xEDodo: ",o.period]}),e("p",{children:o.description})]})]},`experience-${t}`))})]}),ue=n.div`
  margin-top: 1em !important;

  span {
    display: block;
  }
`;var pe=[{institution:"Universidade Est\xE1cio de S\xE1 Rio de Janeiro (EAD)",period:"Fevereiro de 2022 - Atualmente",status:"Cursando",area:"Bacharelado em Engenharia de Software"},{institution:"Col\xE9gio Flama",period:"Fevereiro de 2019 - Dezembro de 2021",status:"Conclu\xEDdo",area:"Ensino M\xE9dio, T\xE9cnico em Inform\xE1tica"}];const he=()=>r(f,{id:"education",children:[e("h1",{children:"Forma\xE7\xE3o Acad\xEAmica"}),pe.map((o,t)=>r(ue,{children:[e("strong",{children:o.area}),e("span",{children:o.institution}),r("span",{children:["Estado: ",o.status]}),r("span",{children:["Per\xEDodo: ",o.period]})]},`academic-${t}`))]}),ge=n.div`
  width: 100%;
  margin-top: 1em;

  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5em;

  color: ${o=>o.theme.textColor} !important;

  ${c.lessThan("medium")`
    grid-template-columns: 1fr;
  `}; */
`,fe=n.a`
  font-weight: 500 !important;
  transition: filter 0.2s ease-out;
  color: ${o=>o.theme.textColor} !important;
  display: block;
  margin: 0 0.5em;

  &:hover {
    filter: brightness(0.9);
  }

  & + & {
    margin-top: 2em;
  }
`;n.img`
  width: 360px;
  aspect-ratio: 16/9;
  border-radius: 0.5em;
  border: 1px solid rgba(255, 255, 255, 0.3);
  object-fit: cover;
`;const xe=n.div``,be=n.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2em;

  svg {
    margin-left: 0.25em;
  }
`,ve=n.div`
  color: ${o=>o.theme.textColor} !important;
  font-size: 0.9em;
`;var we=[{name:"Hookpedia",description:`Um reposit\xF3rio de Hooks do React, feito pela comunidade para a comunidade. 

 Construido com Next.JS e Chakra UI.`,url:"https://hookpedia.now.sh/",year:"2022"},{name:"Dramaland",description:`Um portal de not\xEDcias, resenhas e opini\xE3o do mundo da dramaturgia coreana. 

 Construido com Next.JS, TypeScript, Tailwind, OneSignal e Blogger API.`,url:"https://github.com/guilherssousa/dramaland",year:"2022"},{name:"Correio An\xF4nimo",description:`Envie mensagens de forma an\xF4nima para suas pessoas queridas usando seus nomes de usu\xE1rio do Twitter. 

 Constru\xEDdo usando React, Firebase e Styled Components.`,url:"https://correioanonimo.com.br",year:"2021"},{name:"P44blo.",description:`Ruan 'p44blo' \xE9 um editor de v\xEDdeos de Blumenau/SC. 

 Constru\xEDdo com HTML, CSS e Javascript Vanilla.`,url:"http://www.p44blo.com",year:"2020"}];const ke=()=>r(f,{id:"projects",children:[e("h1",{children:"Projetos"}),e(ge,{children:we.map((o,t)=>e(fe,{href:o.url,target:"_blank",rel:"noreferrer",children:r(xe,{children:[r(be,{children:[o.name," ",e(L,{})]}),e(ve,{children:o.year}),e("p",{children:o.description})]})},`project-${t}`))})]}),ye=({themeSwitcher:o})=>r(Y,{children:[e(oe,{themeSwitcher:o}),e(ne,{}),e(ie,{}),e(me,{}),e(he,{}),e(ke,{})]}),w=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a","Enter"];var u=0;function k(o){const{key:t}=o;if(u==w.length-1){window.alert("Voc\xEA achou o easter egg!"),u=0;return}t==w[u]?u++:u=0}function Ee(){const[o,t]=U("theme","dark");return d.exports.useEffect(()=>(window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)),[]),e(b,{children:r(R,{theme:o=="light"?X:J,children:[e(H,{}),e(I,{basename:"/",children:e(P,{children:e(M,{path:"/",element:e(ye,{themeSwitcher:t})})})})]})})}B.render(e(N.StrictMode,{children:e(Ee,{})}),document.getElementById("root"));
