import{W as f,s as t,j as h,r as m,B as x,a as b,b as v,c as E,d as y,e as w,F as k,f as S,R as A,g as z,h as F,i as j}from"./vendor.eb83b4c9.js";const P=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}};P();const R=f`
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
`,C={backgroundColor:"#1e293b",primary:"#f97316"},B=t.div`
  background: ${o=>o.theme.backgroundColor};
  min-height: 100vh;
  color: #fff;
`,I=t.div`
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(240 232 213 / 0.08)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
  mask-image: linear-gradient(to top, transparent, white);

  position: absolute;
  pointer-events: none;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`,D=t.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1em;
  padding-bottom: 8em;
  position: relative;
  z-index: 10;
`,e=h.exports.jsx,r=h.exports.jsxs,g=h.exports.Fragment,O=({children:o})=>r(B,{children:[e(I,{}),e(D,{children:o})]}),U=t.section`
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
`,L=()=>r(U,{children:[e("img",{src:"/assets/profile_pic.jpg",alt:"Sou eu!"}),e("h2",{children:"Oi! Meu nome \xE9 Guilherme da Silva Sousa."}),e("p",{children:"Desenvolvedor Fullstack no Mais Esports, atualmente cursando faculdade de Engenharia de Software na Universidade Est\xE1cio de S\xE1."})]}),N=t.nav`
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
`,p=t.a`
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
`,T=t.div`
  position: fixed;
  z-index: 100;
  bottom: 2em;
  display: flex;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${o=>o.theme.primary};
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
`,$=()=>{const[o,a]=m.exports.useState(!0),s=m.exports.useRef(null),l=m.exports.useRef(null);function n(d){const[c]=d;a(c.isIntersecting)}function i(){window.scrollTo({top:0,behavior:"smooth"}),l.current&&l.current.classList.add("disabling")}return m.exports.useEffect(()=>{let d={root:null,rootMargin:"0px",threshold:1};const c=new IntersectionObserver(n,d);return s.current&&c.observe(s.current),()=>{s.current&&c.unobserve(s.current)}},[]),r(g,{children:[r(N,{ref:s,children:[e(p,{href:"#about-me",children:"Sobre mim"}),e(p,{href:"#experience",children:"Experi\xEAncia"}),e(p,{href:"#education",children:"Forma\xE7\xE3o Acad\xEAmica"}),e(p,{href:"#projects",children:"Projetos"})]}),!o&&r(T,{ref:l,onClick:i,children:["Retornar ao topo ",e(x,{size:28})]})]})},u=t.section`
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
`,M=()=>r(u,{id:"about-me",children:[e("h1",{children:"Sobre mim"}),e("p",{children:"Desenvolvedor Fullstack, me considero um entusiasta de solu\xE7\xF5es e como elas podem ser usadas para impactar o nosso cotidiano. Gosto de desenvolver usando React e seus frameworks, al\xE9m de escrever alguns back-ends e solu\xE7\xF5es mais alternativas de vez em quando."}),r("p",{children:["Falo ",e("strong",{children:"Ingl\xEAs intermedi\xE1rio (suficiente a n\xEDvel T\xE9cnico)"}),", al\xE9m de ",e("strong",{children:"Portugu\xEAs nativo."})]}),r("p",{children:["Gosto de ",e("strong",{children:"design gr\xE1fico"}),","," ",e("strong",{children:"edi\xE7\xE3o de v\xEDdeo"}),", ",e("strong",{children:"automa\xE7\xF5es"}),","," ",e("strong",{children:"caf\xE9"})," e ",e("strong",{children:"gatos"}),". Adepto da religi\xE3o dos monitores ultrawide e hater de sites que n\xE3o s\xE3o otimizados pra eles."]}),e("p",{children:"Eu tenho muitas redes sociais, mas uso essas como as principais:"}),r("ul",{children:[r("li",{children:[e(b,{})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/guilherssousa/",children:"GitHub"})]}),r("li",{children:[e("i",{children:e(v,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/guilhermedasilvasousa/",children:"Linkedin"})]}),r("li",{children:[e("i",{children:e(E,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://open.spotify.com/user/f0mg1ppcpollg45sozzd9gu14?si=01b62e080ff14e4a",children:"Spotify"})]}),r("li",{children:[e("i",{children:e(y,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://be.net/madebygui",children:"Behance"})]})]})]}),G=t.div`
  margin-top: 1em !important;

  span {
    display: block;
  }
`,q=t.div`
  display: flex;

  & + & {
    margin-top: 1em;
  }

  align-items: flex-start;

  img {
    width: 60px;
    border-radius: 30px;
  }
`,J=t.div`
  margin-left: 1em;
  margin-top: 0em;
`,_=t.div`
  font-weight: bold;
  font-size: 1.2em;
`;var W=[{company:"Mais Esports",imageUrl:"/assets/maisesports.png",position:"Desenvolvedor Fullstack Part-time",period:"Janeiro de 2021 - Atualmente",description:`Respons\xE1vel por parte do desenvolvimento da cobertura de eventos de forma interativa no site principal, realizando integra\xE7\xF5es com diferentes APIs e oferecendo uma experi\xEAncia que seja agrad\xE1vel desde ao usu\xE1rio comum interessado em checar datas de partidas at\xE9 o usu\xE1rio hardcore interessado em odds de Apostas. 

Uso frequente de tecnologias como React, Next JS, Express, GraphQL, Strapi al\xE9m de algumas pr\xE1ticas como otimiza\xE7\xE3o de p\xE1ginas e SEO.`},{company:"Inhouse.gg",imageUrl:"/assets/inhouse.png",position:"Desenvolvedor Fullstack Part-time",period:"Janeiro de 2022 - Atualmente",description:`Respons\xE1vel pelo desenvolvimento de ferramentas para integra\xE7\xE3o e automatiza\xE7\xE3o de tarefas relevantes, como gerenciamento de contas, manuten\xE7\xE3o de servi\xE7os Web e onboarding de jogadores.

Uso de tecnologias como Express, Prisma, Next.JS e algumas APIs de terceiros.`}];const X=()=>r(u,{id:"experience",children:[e("h1",{children:"Experi\xEAncia"}),e(G,{children:W.map((o,a)=>r(q,{children:[e("img",{src:o.imageUrl,alt:o.company}),r(J,{children:[e(_,{children:o.company}),e("div",{children:o.position}),r("div",{children:["Per\xEDodo: ",o.period]}),e("p",{children:o.description})]})]},`experience-${a}`))})]}),Y=t.div`
  margin-top: 1em !important;

  span {
    display: block;
  }
`;var H=[{institution:"Universidade Est\xE1cio de S\xE1 Rio de Janeiro (EAD)",period:"Fevereiro de 2022 - Atualmente",status:"Cursando",area:"Bacharelado em Engenharia de Software"},{institution:"Col\xE9gio Flama",period:"Fevereiro de 2019 - Dezembro de 2021",status:"Conclu\xEDdo",area:"Ensino M\xE9dio, T\xE9cnico em Inform\xE1tica"}];const V=()=>r(u,{id:"education",children:[e("h1",{children:"Forma\xE7\xE3o Acad\xEAmica"}),H.map((o,a)=>r(Y,{children:[e("strong",{children:o.area}),e("span",{children:o.institution}),r("span",{children:["Estado: ",o.status]}),r("span",{children:["Per\xEDodo: ",o.period]})]},`academic-${a}`))]}),K=t.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5em;
  margin-top: 1em;
`,Q=t.a`
  color: #fff !important;
  font-weight: 500 !important;
  transition: filter 0.2s ease-out;

  &:hover {
    filter: brightness(0.9);
  }
`,Z=t.img`
  width: 360px;
  height: 200px;
  aspect-ratio: 16/9;
  border-radius: 0.5em;
  border: 1px solid #eeee;
  background-color: white;
`,ee=t.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2em;
  margin-top: 0.25em;

  svg {
    margin-left: 0.25em;
  }
`,oe=t.div`
  color: #fff;
  font-size: 0.9em;
`;var re=[{name:"Dramaland",imageUrl:"/assets/dramaland.png",description:`Um portal de not\xEDcias, resenhas e opini\xE3o do mundo da dramaturgia coreana. 

 Construido com Next.JS, TypeScript, Tailwind, OneSignal e Blogger API.`,url:"https://github.com/guilherssousa/dramaland",year:"2022"},{name:"Correio An\xF4nimo",imageUrl:"/assets/correio.png",description:`Envie mensagens de forma an\xF4nima para suas pessoas queridas usando seus nomes de usu\xE1rio do Twitter. 

 Constru\xEDdo usando React, Firebase e Styled Components.`,url:"https://correioanonimo.com.br",year:"2021"}];const te=()=>r(u,{id:"projects",children:[e("h1",{children:"Projetos"}),e(K,{children:re.map((o,a)=>r(Q,{href:"https://correioanonimo.com.br",target:"_blank",rel:"noreferrer",children:[e(Z,{src:o.imageUrl,alt:o.name}),r(ee,{children:[o.name," ",e(w,{})]}),e(oe,{children:o.year}),e("p",{children:o.description})]},`project-${a}`))})]}),ne=()=>r(O,{children:[e(L,{}),e($,{}),e(M,{}),e(X,{}),e(V,{}),e(te,{})]});function ie(){return r(g,{children:[e(R,{}),e(k,{theme:C,children:e(S,{basename:"/",children:e(A,{children:e(z,{path:"/",element:e(ne,{})})})})})]})}F.render(e(j.StrictMode,{children:e(ie,{})}),document.getElementById("root"));
