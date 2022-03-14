import{W as v,s as t,j as g,r as m,B as w,a as E,b as y,c as k,d as A,e as S,F as z,f as R,R as F,g as P,h as j,i as C}from"./vendor.7dde436c.js";const B=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}};B();const D=v`
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
`,L={backgroundColor:"#1e293b",primary:"#f97316"},I=t.div`
  background: ${r=>r.theme.backgroundColor};
  min-height: 100vh;
  color: #fff;
  position: relative;
`,U=t.div`
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(240 232 213 / 0.08)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"),
    linear-gradient(
      83.2deg,
      rgba(33, 31, 88, 1) 10.8%,
      rgba(43, 54, 87, 1) 94.3%
    );
  mask-image: linear-gradient(to top, transparent, white);

  position: absolute;
  pointer-events: none;

  height: 100%;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`,O=t.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1em;
  padding-bottom: 8em;
  position: relative;
  z-index: 10;
`,e=g.exports.jsx,o=g.exports.jsxs,b=g.exports.Fragment,N=({children:r})=>o(I,{children:[e(U,{}),e(O,{children:r})]}),T=t.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 640px;
  margin: 3em auto 0em auto;

  img {
    height: 10em;
    width: fit-content;
    border: 0.3em solid #fff;
    border-radius: 5em;
    margin: 0 auto;
  }

  h2 {
    margin-top: 1em;
  }

  p {
    margin-top: 0.5em;
    text-align: center;
  }
`,$=()=>o(T,{children:[e("img",{src:"/assets/profile_pic.webp",alt:"Sou eu!"}),e("h2",{children:"Oi! Meu nome \xE9 Guilherme da Silva Sousa."}),e("p",{children:"Desenvolvedor Fullstack no Mais Esports, atualmente cursando faculdade de Engenharia de Software na Universidade Est\xE1cio de S\xE1."})]}),M=t.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin: 1.5em 0;

  a {
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
    color: #fff;
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
`,u=t.a`
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
`,G=t.div`
  position: fixed;
  z-index: 100;
  bottom: 2em;
  display: flex;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${r=>r.theme.primary};
  padding: 1em 1.5em;
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
`,q=()=>{const[r,i]=m.exports.useState(!0),s=m.exports.useRef(null),l=m.exports.useRef(null);function n(d){const[p]=d;i(p.isIntersecting)}function a(){window.scrollTo({top:0,behavior:"smooth"}),l.current&&l.current.classList.add("disabling")}return m.exports.useEffect(()=>{let d={root:null,rootMargin:"0px",threshold:1};const p=new IntersectionObserver(n,d);return s.current&&p.observe(s.current),()=>{s.current&&p.unobserve(s.current)}},[]),o(b,{children:[o(M,{ref:s,children:[e(u,{href:"#about-me",children:"Sobre mim"}),e(u,{href:"#experience",children:"Experi\xEAncia"}),e(u,{href:"#education",children:"Forma\xE7\xE3o Acad\xEAmica"}),e(u,{href:"#projects",children:"Projetos"})]}),!r&&o(G,{ref:l,onClick:a,children:["Retornar ao topo ",e(w,{size:28})]})]})},h=t.section`
  margin-top: 1em;
  font-size: 1.2em;

  h1 {
    font-size: 2em;
  }

  p {
    margin-top: 0.5em;

    white-space: pre-line;

    & + p {
      margin-top: 0.8em;
    }
  }

  a {
    color: ${r=>r.theme.primary};
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
`,J=()=>o(h,{id:"about-me",children:[e("h1",{children:"Sobre mim"}),e("p",{children:"Desenvolvedor Fullstack, me considero um entusiasta de solu\xE7\xF5es e como elas podem ser usadas para impactar o nosso cotidiano. Gosto de desenvolver usando React e seus frameworks, al\xE9m de escrever alguns back-ends e solu\xE7\xF5es mais alternativas de vez em quando."}),o("p",{children:["Falo ",e("strong",{children:"Ingl\xEAs intermedi\xE1rio (suficiente a n\xEDvel T\xE9cnico)"}),", al\xE9m de ",e("strong",{children:"Portugu\xEAs nativo."})]}),o("p",{children:["Gosto de ",e("strong",{children:"design gr\xE1fico"}),","," ",e("strong",{children:"edi\xE7\xE3o de v\xEDdeo"}),", ",e("strong",{children:"automa\xE7\xF5es"}),","," ",e("strong",{children:"caf\xE9"})," e ",e("strong",{children:"gatos"}),". Adepto da religi\xE3o dos monitores ultrawide e hater de sites que n\xE3o s\xE3o otimizados pra eles."]}),e("p",{children:"Eu tenho muitas redes sociais, mas uso essas como as principais:"}),o("ul",{children:[o("li",{children:[e(E,{})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/guilherssousa/",children:"GitHub"})]}),o("li",{children:[e("i",{children:e(y,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/guilhermedasilvasousa/",children:"Linkedin"})]}),o("li",{children:[e("i",{children:e(k,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://open.spotify.com/user/f0mg1ppcpollg45sozzd9gu14?si=01b62e080ff14e4a",children:"Spotify"})]}),o("li",{children:[e("i",{children:e(A,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://be.net/madebygui",children:"Behance"})]})]})]}),_=t.div`
  margin-top: 1em !important;

  span {
    display: block;
  }
`,W=t.div`
  display: flex;

  & + & {
    margin-top: 1em;
  }

  align-items: flex-start;

  img {
    width: 60px;
    border-radius: 30px;
  }
`,X=t.div`
  margin-left: 1em;
  margin-top: 0em;
`,Y=t.div`
  font-weight: bold;
  font-size: 1.2em;
`;var H=[{company:"Mais Esports",imageUrl:"/assets/maisesports.webp",position:"Desenvolvedor Fullstack Part-time",period:"Janeiro de 2021 - Atualmente",description:`Respons\xE1vel por parte do desenvolvimento da cobertura de eventos de forma interativa no site principal, realizando integra\xE7\xF5es com diferentes APIs e oferecendo uma experi\xEAncia que seja agrad\xE1vel desde ao usu\xE1rio comum interessado em checar datas de partidas at\xE9 o usu\xE1rio hardcore interessado em odds de Apostas. 

Uso frequente de tecnologias como React, Next JS, Express, GraphQL, Strapi al\xE9m de algumas pr\xE1ticas como otimiza\xE7\xE3o de p\xE1ginas e SEO.`},{company:"Inhouse.gg",imageUrl:"/assets/inhouse.webp",position:"Desenvolvedor Fullstack Part-time",period:"Janeiro de 2022 - Atualmente",description:`Respons\xE1vel pelo desenvolvimento de ferramentas para integra\xE7\xE3o e automatiza\xE7\xE3o de tarefas relevantes, como gerenciamento de contas, manuten\xE7\xE3o de servi\xE7os Web e onboarding de jogadores.

Uso de tecnologias como Express, Prisma, Next.JS e algumas APIs de terceiros.`}];const V=()=>o(h,{id:"experience",children:[e("h1",{children:"Experi\xEAncia"}),e(_,{children:H.map((r,i)=>o(W,{children:[e("img",{height:60,width:60,src:r.imageUrl,alt:r.company}),o(X,{children:[e(Y,{children:r.company}),e("div",{children:r.position}),o("div",{children:["Per\xEDodo: ",r.period]}),e("p",{children:r.description})]})]},`experience-${i}`))})]}),K=t.div`
  margin-top: 1em !important;

  span {
    display: block;
  }
`;var Q=[{institution:"Universidade Est\xE1cio de S\xE1 Rio de Janeiro (EAD)",period:"Fevereiro de 2022 - Atualmente",status:"Cursando",area:"Bacharelado em Engenharia de Software"},{institution:"Col\xE9gio Flama",period:"Fevereiro de 2019 - Dezembro de 2021",status:"Conclu\xEDdo",area:"Ensino M\xE9dio, T\xE9cnico em Inform\xE1tica"}];const Z=()=>o(h,{id:"education",children:[e("h1",{children:"Forma\xE7\xE3o Acad\xEAmica"}),Q.map((r,i)=>o(K,{children:[e("strong",{children:r.area}),e("span",{children:r.institution}),o("span",{children:["Estado: ",r.status]}),o("span",{children:["Per\xEDodo: ",r.period]})]},`academic-${i}`))]}),ee=t.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5em;
  margin-top: 1em;
`,re=t.a`
  color: #fff !important;
  font-weight: 500 !important;
  transition: filter 0.2s ease-out;

  &:hover {
    filter: brightness(0.9);
  }
`,oe=t.img`
  width: 360px;
  height: 225px;
  aspect-ratio: 16/9;
  border-radius: 0.5em;
  border: 1px solid #eeee;
  background-color: white;
`,te=t.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2em;
  margin-top: 0.25em;

  svg {
    margin-left: 0.25em;
  }
`,ne=t.div`
  color: #fff;
  font-size: 0.9em;
`;var ie=[{name:"Dramaland",imageUrl:"/assets/dramaland.webp",description:`Um portal de not\xEDcias, resenhas e opini\xE3o do mundo da dramaturgia coreana. 

 Construido com Next.JS, TypeScript, Tailwind, OneSignal e Blogger API.`,url:"https://github.com/guilherssousa/dramaland",year:"2022"},{name:"Correio An\xF4nimo",imageUrl:"/assets/correio.webp",description:`Envie mensagens de forma an\xF4nima para suas pessoas queridas usando seus nomes de usu\xE1rio do Twitter. 

 Constru\xEDdo usando React, Firebase e Styled Components.`,url:"https://correioanonimo.com.br",year:"2021"}];const ae=()=>o(h,{id:"projects",children:[e("h1",{children:"Projetos"}),e(ee,{children:ie.map((r,i)=>o(re,{href:"https://correioanonimo.com.br",target:"_blank",rel:"noreferrer",children:[e(oe,{src:r.imageUrl,alt:r.name}),o(te,{children:[r.name," ",e(S,{})]}),e(ne,{children:r.year}),e("p",{children:r.description})]},`project-${i}`))})]}),se=()=>o(N,{children:[e($,{}),e(q,{}),e(J,{}),e(V,{}),e(Z,{}),e(ae,{})]}),f=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a","Enter"];var c=0;function x(r){const{key:i}=r;if(c==f.length-1){window.alert("Voc\xEA achou o easter egg!"),c=0;return}i==f[c]?c++:c=0}function de(){return m.exports.useEffect(()=>(window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)),[]),o(b,{children:[e(D,{}),e(z,{theme:L,children:e(R,{basename:"/",children:e(F,{children:e(P,{path:"/",element:e(se,{})})})})})]})}j.render(e(C.StrictMode,{children:e(de,{})}),document.getElementById("root"));
