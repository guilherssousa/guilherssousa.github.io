import{W as x,s as n,j as h,r as m,B as b,a as g,b as v,c as E,d as y,F as w,e as k,R as S,f as A,g as z,h as F}from"./vendor.3b88ccff.js";const j=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}};j();const P=x`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
`,R={backgroundColor:"#1e293b",primary:"#f97316"},C=n.div`
  background-color: ${r=>r.theme.backgroundColor};
  min-height: 100vh;
  color: #fff;
`,I=n.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1em;
  padding-bottom: 8em;
`,e=h.exports.jsx,o=h.exports.jsxs,f=h.exports.Fragment,D=({children:r})=>e(C,{children:e(I,{children:r})}),O=n.section`
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
`,U=()=>o(O,{children:[e("img",{src:"/assets/profile_pic.jpg",alt:"Sou eu!"}),e("h2",{children:"Oi! Meu nome \xE9 Guilherme da Silva Sousa."}),e("p",{children:"Desenvolvedor Fullstack no Mais Esports, atualmente cursando faculdade de Engenharia de Software na Universidade Est\xE1cio de S\xE1."})]}),B=n.nav`
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
`,u=n.a`
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
`,L=n.div`
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
`,N=()=>{const[r,a]=m.exports.useState(!0),s=m.exports.useRef(null),l=m.exports.useRef(null);function t(d){const[c]=d;a(c.isIntersecting)}function i(){window.scrollTo({top:0,behavior:"smooth"}),l.current&&l.current.classList.add("disabling")}return m.exports.useEffect(()=>{let d={root:null,rootMargin:"0px",threshold:1};const c=new IntersectionObserver(t,d);return s.current&&c.observe(s.current),()=>{s.current&&c.unobserve(s.current)}},[]),o(f,{children:[o(B,{ref:s,children:[e(u,{href:"#about-me",children:"Sobre mim"}),e(u,{href:"#experience",children:"Experi\xEAncia"}),e(u,{href:"#education",children:"Forma\xE7\xE3o Acad\xEAmica"}),e(u,{href:"#projects",children:"Projetos"})]}),!r&&o(L,{ref:l,onClick:i,children:["Retornar ao topo ",e(b,{size:28})]})]})},p=n.section`
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
`,T=()=>o(p,{id:"about-me",children:[e("h1",{children:"Sobre mim"}),e("p",{children:"Desenvolvedor Fullstack, me considero um entusiasta de solu\xE7\xF5es e como elas podem ser usadas para impactar o nosso cotidiano. Gosto de desenvolver usando React e seus frameworks, al\xE9m de escrever alguns back-ends e solu\xE7\xF5es mais alternativas de vez em quando."}),o("p",{children:["Falo ",e("strong",{children:"Ingl\xEAs intermedi\xE1rio (suficiente a n\xEDvel T\xE9cnico)"}),", al\xE9m de ",e("strong",{children:"Portugu\xEAs nativo."})]}),o("p",{children:["Gosto de ",e("strong",{children:"design gr\xE1fico"}),","," ",e("strong",{children:"edi\xE7\xE3o de v\xEDdeo"}),", ",e("strong",{children:"automa\xE7\xF5es"}),","," ",e("strong",{children:"caf\xE9"})," e ",e("strong",{children:"gatos"}),". Adepto da religi\xE3o dos monitores ultrawide e hater de sites que n\xE3o s\xE3o otimizados pra eles."]}),e("p",{children:"Eu tenho muitas redes sociais, mas uso essas como as principais:"}),o("ul",{children:[o("li",{children:[e(g,{})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/guilherssousa/",children:"GitHub"})]}),o("li",{children:[e("i",{children:e(v,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/guilhermedasilvasousa/",children:"Linkedin"})]}),o("li",{children:[e("i",{children:e(E,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://open.spotify.com/user/f0mg1ppcpollg45sozzd9gu14?si=01b62e080ff14e4a",children:"Spotify"})]}),o("li",{children:[e("i",{children:e(g,{})})," ",e("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/guilherssousa",children:"GitHub"})]})]})]}),$=n.div`
  margin-top: 1em !important;

  span {
    display: block;
  }
`,G=n.div`
  display: flex;

  & + & {
    margin-top: 1em;
  }

  align-items: flex-start;

  img {
    width: 60px;
    border-radius: 30px;
  }
`,M=n.div`
  margin-left: 1em;
  margin-top: 0em;
`,q=n.div`
  font-weight: bold;
  font-size: 1.2em;
`;var J=[{company:"Mais Esports",imageUrl:"/assets/maisesports.png",position:"Desenvolvedor Fullstack Part-time",period:"Janeiro de 2021 - Atualmente",description:`Respons\xE1vel por parte do desenvolvimento da cobertura de eventos de forma interativa no site principal, realizando integra\xE7\xF5es com diferentes APIs e oferecendo uma experi\xEAncia que seja agrad\xE1vel desde ao usu\xE1rio comum interessado em checar datas de partidas at\xE9 o usu\xE1rio hardcore interessado em odds de Apostas. 

Uso frequente de tecnologias como React, Next JS, Express, GraphQL, Strapi al\xE9m de algumas pr\xE1ticas como otimiza\xE7\xE3o de p\xE1ginas e SEO.`},{company:"Inhouse.gg",imageUrl:"/assets/inhouse.png",position:"Desenvolvedor Fullstack Part-time",period:"Janeiro de 2022 - Atualmente",description:`Respons\xE1vel pelo desenvolvimento de ferramentas para integra\xE7\xE3o e automatiza\xE7\xE3o de tarefas relevantes, como gerenciamento de contas, manuten\xE7\xE3o de servi\xE7os Web e onboarding de jogadores.

Uso de tecnologias como Express, Prisma, Next.JS e algumas APIs de terceiros.`}];const _=()=>o(p,{id:"experience",children:[e("h1",{children:"Experi\xEAncia"}),e($,{children:J.map((r,a)=>o(G,{children:[e("img",{src:r.imageUrl,alt:r.company}),o(M,{children:[e(q,{children:r.company}),e("div",{children:r.position}),o("div",{children:["Per\xEDodo: ",r.period]}),e("p",{children:r.description})]})]},`experience-${a}`))})]}),W=n.div`
  margin-top: 1em !important;

  span {
    display: block;
  }
`;var X=[{institution:"Universidade Est\xE1cio de S\xE1 Rio de Janeiro (EAD)",period:"Fevereiro de 2022 - Atualmente",status:"Cursando",area:"Bacharelado em Engenharia de Software"},{institution:"Col\xE9gio Flama",period:"Fevereiro de 2019 - Dezembro de 2021",status:"Conclu\xEDdo",area:"Ensino M\xE9dio T\xE9cnico em Inform\xE1tica"}];const Y=()=>o(p,{id:"education",children:[e("h1",{children:"Forma\xE7\xE3o Acad\xEAmica"}),X.map((r,a)=>o(W,{children:[e("strong",{children:r.area}),e("span",{children:r.institution}),o("span",{children:["Estado: ",r.status]}),o("span",{children:["Per\xEDodo: ",r.period]})]},`academic-${a}`))]}),H=n.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5em;
  margin-top: 1em;
`,V=n.a`
  color: #fff !important;
  font-weight: 500 !important;
  transition: filter 0.2s ease-out;

  &:hover {
    filter: brightness(0.9);
  }
`,K=n.img`
  width: 360px;
  height: 200px;
  aspect-ratio: 16/9;
  border-radius: 0.5em;
  border: 1px solid #eeee;
  background-color: white;
`,Q=n.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.2em;
  margin-top: 0.25em;

  svg {
    margin-left: 0.25em;
  }
`,Z=n.div`
  color: #fff;
  font-size: 0.9em;
`;var ee=[{name:"Dramaland",imageUrl:"/assets/dramaland.png",description:`Um portal de not\xEDcias, resenhas e opini\xE3o do mundo da dramaturgia coreana. 

 Construido com Next.JS, TypeScript, Tailwind, OneSignal e Blogger API.`,url:"https://github.com/guilherssousa/dramaland",year:"2022"},{name:"Correio An\xF4nimo",imageUrl:"/assets/correio.png",description:`Envie mensagens de forma an\xF4nima para suas pessoas queridas usando seus nomes de usu\xE1rio do Twitter. 

 Constru\xEDdo usando React, Firebase e Styled Components.`,url:"https://correioanonimo.com.br",year:"2021"}];const re=()=>o(p,{id:"projects",children:[e("h1",{children:"Projetos"}),e(H,{children:ee.map((r,a)=>o(V,{href:"https://correioanonimo.com.br",target:"_blank",rel:"noreferrer",children:[e(K,{src:r.imageUrl,alt:r.name}),o(Q,{children:[r.name," ",e(y,{})]}),e(Z,{children:r.year}),e("p",{children:r.description})]},`project-${a}`))})]}),oe=()=>o(D,{children:[e(U,{}),e(N,{}),e(T,{}),e(_,{}),e(Y,{}),e(re,{})]});function te(){return o(f,{children:[e(P,{}),e(w,{theme:R,children:e(k,{children:e(S,{children:e(A,{path:"/",element:e(oe,{})})})})})]})}z.render(e(F.StrictMode,{children:e(te,{})}),document.getElementById("root"));
