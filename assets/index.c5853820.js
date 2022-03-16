import{W as k,g as y,s as n,j as b,r as m,I as A,H as C,B as z,a as S,b as $,c as R,d as T,e as j,F,f as I,R as L,h as P,i as O,k as B}from"./vendor.dff6fbf8.js";const N=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}};N();const D=k`
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
`,U={backgroundColor:"#1e293b",primary:"#f97316"},d=y({small:"640px",medium:"768px",large:"1024px"}),M=n.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 200;
`,X=n.div`
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
      background-color: ${o=>o.theme.backgroundColor};
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      background-color: ${o=>o.theme.backgroundColor};
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
      background-color: transparent;
    }
  }
`,v=n.button`
  display: none;
  appearance: none;
  border: 0;
  outline: 0;
  background: none;

  ${d.lessThan("small")`
    display: block;
  `};
`,h=n.a`
  color: white;
  display: block;
  font-size: 1.2em;
  text-decoration: none;
  padding: 0.5em;
  font-weight: bold;
`,e=b.exports.jsx,r=b.exports.jsxs,x=b.exports.Fragment,q=()=>{const[o,i]=m.exports.useState(!1),l=m.exports.useRef(null);async function a(){if(o){l.current&&l.current.classList.add("close"),await setTimeout(()=>i(!1),300);return}i(!0)}return r(x,{children:[o&&e(M,{children:r(X,{ref:l,children:[e(v,{onClick:a,"aria-label":"Fechar Navega\xE7\xE3o",children:e(A,{color:"#fff",size:45})}),e(h,{href:"#about-me",onClick:a,children:"Sobre mim"}),e(h,{href:"#experience",onClick:a,children:"Experi\xEAncia"}),e(h,{href:"#education",onClick:a,children:"Forma\xE7\xE3o Acad\xEAmica"}),e(h,{href:"#projects",onClick:a,children:"Projetos"})]})}),e(v,{onClick:a,"aria-label":"Abrir Navega\xE7\xE3o",children:e(C,{color:"#fff",size:45})})]})},G=n.div`
  background: ${o=>o.theme.backgroundColor};
  min-height: 100vh;
  color: #fff;
  position: relative;
`,H=n.div`
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(240 232 213 / 0.08)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"),
    linear-gradient(
      83.2deg,
      rgba(33, 31, 88, 1) 10.8%,
      rgba(43, 54, 87, 1) 94.3%
    );
  mask-image: radial-gradient(
    circle at top,
    rgba(255, 255, 255, 0.6),
    transparent
  );

  position: absolute;
  pointer-events: none;

  height: 100%;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`,J=n.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1.5em;
  padding-bottom: 8em;
  position: relative;
  z-index: 10;
`,_=({children:o})=>r(G,{children:[e(H,{}),e(J,{children:o})]}),W=n.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 640px;
  margin: 3em auto 0em auto;

  ${d.lessThan("small")`
    margin: 1em auto 0em auto;
  `};

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
    font-size: 1.2em;
    margin-top: 0.5em;
    text-align: center;
  }
`,Y=()=>r(W,{children:[e("img",{src:"/assets/profile_pic.webp",alt:"Sou eu!"}),e("h2",{children:"Oi! Meu nome \xE9 Guilherme da Silva Sousa."}),e("p",{children:"Desenvolvedor Fullstack no Mais Esports, atualmente cursando faculdade de Engenharia de Software na Universidade Est\xE1cio de S\xE1."})]}),V=n.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${d.lessThan("small")`
    display: none;
  `};

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
`,K=n.div`
  ${d.lessThan("small")`
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
`,Q=()=>{const[o,i]=m.exports.useState(!0),l=m.exports.useRef(null),a=m.exports.useRef(null);function t(c){const[p]=c;i(p.isIntersecting)}function s(){window.scrollTo({top:0,behavior:"smooth"}),a.current&&a.current.classList.add("disabling")}return m.exports.useEffect(()=>{let c={root:null,rootMargin:"0px",threshold:1};const p=new IntersectionObserver(t,c);return l.current&&p.observe(l.current),()=>{l.current&&p.unobserve(l.current)}},[]),r(x,{children:[r(V,{ref:l,children:[e(g,{href:"#about-me",children:"Sobre mim"}),e(g,{href:"#experience",children:"Experi\xEAncia"}),e(g,{href:"#education",children:"Forma\xE7\xE3o Acad\xEAmica"}),e(g,{href:"#projects",children:"Projetos"})]}),!o&&r(K,{ref:a,onClick:s,children:["Retornar ao topo ",e(z,{size:28})]})]})},f=n.section`
  margin-top: 1em;
  font-size: 1.2em;

  h1 {
    font-size: 2em;
    ${d.lessThan("small")`
      font-size: 1.8em;
    `};
  }

  p {
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
`,Z=()=>r(f,{id:"about-me",children:[e("h1",{children:"Sobre mim"}),e("p",{children:"Desenvolvedor Fullstack, me considero um entusiasta de solu\xE7\xF5es e como elas podem ser usadas para impactar o nosso cotidiano. Gosto de desenvolver usando React e seus frameworks, al\xE9m de escrever alguns back-ends e solu\xE7\xF5es mais alternativas de vez em quando."}),r("p",{children:["Estou aberto a propostas para presta\xE7\xE3o de servi\xE7os de constru\xE7\xE3o de sites de pequeno a m\xE9dio porte, caso esteja interessado, me envie um email em ",e("strong",{children:"guilherssousa@gmail.com"})," ou me chame no LinkedIn. (Link abaixo)"]}),r("p",{children:["Falo ",e("strong",{children:"Ingl\xEAs intermedi\xE1rio (suficiente a n\xEDvel T\xE9cnico)"}),", al\xE9m de ",e("strong",{children:"Portugu\xEAs nativo."})]}),r("p",{children:["Gosto de ",e("strong",{children:"design gr\xE1fico"}),","," ",e("strong",{children:"edi\xE7\xE3o de v\xEDdeo"}),", ",e("strong",{children:"automa\xE7\xF5es"}),","," ",e("strong",{children:"caf\xE9"})," e ",e("strong",{children:"gatos"}),". Adepto da religi\xE3o dos monitores ultrawide e hater de sites que n\xE3o s\xE3o otimizados pra eles."]}),e("p",{children:"Eu tenho muitas redes sociais, mas uso essas como as principais:"}),r("ul",{children:[r("li",{children:[e(S,{})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/guilherssousa/",children:"GitHub"})]}),r("li",{children:[e("i",{children:e($,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/guilhermedasilvasousa/",children:"Linkedin"})]}),r("li",{children:[e("i",{children:e(R,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://open.spotify.com/user/f0mg1ppcpollg45sozzd9gu14?si=01b62e080ff14e4a",children:"Spotify"})]}),r("li",{children:[e("i",{children:e(T,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://be.net/madebygui",children:"Behance"})]})]})]}),ee=n.div`
  margin-top: 1em !important;

  span {
    display: block;
  }
`,oe=n.div`
  display: flex;

  & + & {
    margin-top: 1em;
  }

  align-items: flex-start;

  img {
    width: 60px;
    border-radius: 30px;
    ${d.lessThan("small")`
      display: none;
    `};
  }
`,re=n.div`
  ${d.greaterThan("small")`
    margin-left: 1em;
  `};
  margin-top: 0em;
`,ne=n.div`
  font-weight: bold;
  font-size: 1.2em;
`;var te=[{company:"Mais Esports",imageUrl:"/assets/maisesports.webp",position:"Desenvolvedor Fullstack Part-time",period:"Janeiro de 2021 - Atualmente",description:`Respons\xE1vel por parte do desenvolvimento da cobertura de eventos de forma interativa no site principal, realizando integra\xE7\xF5es com diferentes APIs e oferecendo uma experi\xEAncia que seja agrad\xE1vel desde ao usu\xE1rio comum interessado em checar datas de partidas at\xE9 o usu\xE1rio hardcore interessado em odds de Apostas. 

Uso frequente de tecnologias como React, Next JS, Express, GraphQL, Strapi al\xE9m de algumas pr\xE1ticas como otimiza\xE7\xE3o de p\xE1ginas e SEO.`},{company:"Inhouse.gg",imageUrl:"/assets/inhouse.webp",position:"Desenvolvedor Fullstack Part-time",period:"Janeiro de 2022 - Atualmente",description:`Respons\xE1vel pelo desenvolvimento de ferramentas para integra\xE7\xE3o e automatiza\xE7\xE3o de tarefas relevantes, como gerenciamento de contas, manuten\xE7\xE3o de servi\xE7os Web e onboarding de jogadores.

Uso de tecnologias como Express, Prisma, Next.JS e algumas APIs de terceiros.`}];const ie=()=>r(f,{id:"experience",children:[e("h1",{children:"Experi\xEAncia"}),e(ee,{children:te.map((o,i)=>r(oe,{children:[e("img",{height:60,width:60,src:o.imageUrl,alt:o.company}),r(re,{children:[e(ne,{children:o.company}),e("div",{children:o.position}),r("div",{children:["Per\xEDodo: ",o.period]}),e("p",{children:o.description})]})]},`experience-${i}`))})]}),ae=n.div`
  margin-top: 1em !important;

  span {
    display: block;
  }
`;var se=[{institution:"Universidade Est\xE1cio de S\xE1 Rio de Janeiro (EAD)",period:"Fevereiro de 2022 - Atualmente",status:"Cursando",area:"Bacharelado em Engenharia de Software"},{institution:"Col\xE9gio Flama",period:"Fevereiro de 2019 - Dezembro de 2021",status:"Conclu\xEDdo",area:"Ensino M\xE9dio, T\xE9cnico em Inform\xE1tica"}];const le=()=>r(f,{id:"education",children:[e("h1",{children:"Forma\xE7\xE3o Acad\xEAmica"}),se.map((o,i)=>r(ae,{children:[e("strong",{children:o.area}),e("span",{children:o.institution}),r("span",{children:["Estado: ",o.status]}),r("span",{children:["Per\xEDodo: ",o.period]})]},`academic-${i}`))]}),de=n.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5em;
  margin-top: 1em;

  ${d.lessThan("medium")`
    grid-template-columns: 1fr;
  `};
`,ce=n.a`
  color: #fff !important;
  font-weight: 500 !important;
  transition: filter 0.2s ease-out;

  &:hover {
    filter: brightness(0.9);
  }
`,me=n.img`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  border-radius: 0.5em;
  border: 1px solid #eeee;
  background-color: white;
  object-fit: cover;
`,ue=n.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2em;
  margin-top: 0.25em;

  svg {
    margin-left: 0.25em;
  }
`,pe=n.div`
  color: #fff;
  font-size: 0.9em;
`;var he=[{name:"Dramaland",imageUrl:"/assets/dramaland.webp",description:`Um portal de not\xEDcias, resenhas e opini\xE3o do mundo da dramaturgia coreana. 

 Construido com Next.JS, TypeScript, Tailwind, OneSignal e Blogger API.`,url:"https://github.com/guilherssousa/dramaland",year:"2022"},{name:"Correio An\xF4nimo",imageUrl:"/assets/correio.webp",description:`Envie mensagens de forma an\xF4nima para suas pessoas queridas usando seus nomes de usu\xE1rio do Twitter. 

 Constru\xEDdo usando React, Firebase e Styled Components.`,url:"https://correioanonimo.com.br",year:"2021"}];const ge=()=>r(f,{id:"projects",children:[e("h1",{children:"Projetos"}),e(de,{children:he.map((o,i)=>r(ce,{href:"https://correioanonimo.com.br",target:"_blank",rel:"noreferrer",children:[e(me,{src:o.imageUrl,alt:o.name}),r(ue,{children:[o.name," ",e(j,{})]}),e(pe,{children:o.year}),e("p",{children:o.description})]},`project-${i}`))})]}),fe=()=>r(_,{children:[e(q,{}),e(Y,{}),e(Q,{}),e(Z,{}),e(ie,{}),e(le,{}),e(ge,{})]}),w=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a","Enter"];var u=0;function E(o){const{key:i}=o;if(u==w.length-1){window.alert("Voc\xEA achou o easter egg!"),u=0;return}i==w[u]?u++:u=0}function be(){return m.exports.useEffect(()=>(window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)),[]),e(x,{children:r(F,{theme:U,children:[e(D,{}),e(I,{basename:"/",children:e(L,{children:e(P,{path:"/",element:e(fe,{})})})})]})})}O.render(e(B.StrictMode,{children:e(be,{})}),document.getElementById("root"));
