import{r as m,j as e}from"./vendor-D7Zzjp5l.js";function O(s){return s==="Easy"?"border border-emerald-400/20 bg-emerald-400/10 text-emerald-200":s==="Hard"?"border border-rose-400/20 bg-rose-400/10 text-rose-200":"border border-amber-400/20 bg-amber-400/10 text-amber-100"}function L(s){return s.id==="javascript"?"JavaScript":s.id==="css"?"CSS":"HTML"}function R(s,t){return s.id==="html"?t.id==="html-1"?`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha página</title>
  </head>
  <body>
    <h1>Olá, mundo!</h1>
  </body>
</html>`:t.id==="html-2"?`<h1>Título principal</h1>
<h2>Subtítulo</h2>
<p>Um parágrafo curto.</p>`:t.starterCode||`<section>
  <!-- organize sua estrutura aqui -->
</section>`:s.id==="css"?t.starterCode||`body {
  color: #ffffff;
}`:t.starterCode||'console.log("Olá, mundo!");'}function q(s,t){if(/^\s*<!DOCTYPE/i.test(s))return e.jsxs("span",{children:[e.jsx("span",{className:"text-[#94a3b8]",children:"<!DOCTYPE"}),e.jsx("span",{className:"text-[#e2e8f0]",children:" html>"})]},t);const n=s.match(/^\s*/)?.[0]||"",r=s.trim(),l=r.startsWith("</"),i=r.match(/^<\/?([^\s/>]+)(.*?)(\/?)>$/);if(!i)return e.jsx("span",{className:"text-[#e2e8f0]",children:s},t);const[,c,d,o]=i,u=/([:@\w-]+)(=)("[^"]*"|'[^']*')?/g,g=[];let x;for(;(x=u.exec(d))!==null;)g.push({name:x[1],equal:x[2]||"",value:x[3]||""});return e.jsxs("span",{children:[e.jsx("span",{className:"text-[#e2e8f0]",children:n}),e.jsx("span",{className:"text-[#94a3b8]",children:l?"</":"<"}),e.jsx("span",{className:"text-[#60a5fa]",children:c}),g.map((p,b)=>e.jsxs("span",{children:[e.jsx("span",{className:"text-[#e2e8f0]",children:" "}),e.jsx("span",{className:"text-[#c084fc]",children:p.name}),e.jsx("span",{className:"text-[#94a3b8]",children:p.equal}),e.jsx("span",{className:"text-[#f9a8d4]",children:p.value})]},`${t}-${p.name}-${b}`)),o?e.jsx("span",{className:"text-[#94a3b8]",children:" /"}):null,e.jsx("span",{className:"text-[#94a3b8]",children:">"})]},t)}function B(s){return e.jsx("code",{className:"block",children:s.split(`
`).map((t,n)=>{const r=t.trim(),l=t.match(/^\s*/)?.[0]||"";if(!r)return e.jsx("div",{className:"whitespace-pre",children:t},`${n}-empty`);if(r.endsWith("{"))return e.jsxs("div",{className:"whitespace-pre",children:[e.jsx("span",{className:"text-[#e2e8f0]",children:l}),e.jsx("span",{className:"text-[#7dd3fc]",children:r.slice(0,-1).trim()}),e.jsxs("span",{className:"text-[#94a3b8]",children:[" ","{"]})]},`${n}-${t}`);if(r==="}")return e.jsxs("div",{className:"whitespace-pre",children:[e.jsx("span",{className:"text-[#e2e8f0]",children:l}),e.jsx("span",{className:"text-[#94a3b8]",children:"}"})]},`${n}-${t}`);const i=r.match(/^([-\w]+)(:\s*)(.+?)(;?)$/);return i?e.jsxs("div",{className:"whitespace-pre",children:[e.jsx("span",{className:"text-[#e2e8f0]",children:l}),e.jsx("span",{className:"text-[#c084fc]",children:i[1]}),e.jsx("span",{className:"text-[#94a3b8]",children:i[2]}),e.jsx("span",{className:"text-[#f8fafc]",children:i[3]}),e.jsx("span",{className:"text-[#94a3b8]",children:i[4]})]},`${n}-${t}`):e.jsx("div",{className:"whitespace-pre text-[#e2e8f0]",children:t},`${n}-${t}`)})})}function F(s){return e.jsx("code",{className:"block",children:s.split(`
`).map((t,n)=>{const r=t.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g);return e.jsx("div",{className:"whitespace-pre",children:r.map((l,i)=>l?/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')$/.test(l)?e.jsx("span",{className:"text-[#f9a8d4]",children:l},`${i}-${l}`):l.split(/\b(const|let|if|else|return|function|true|false|prompt|console|Number)\b/g).map((d,o)=>d?/^(const|let|if|else|return|function|true|false)$/.test(d)?e.jsx("span",{className:"text-[#c084fc]",children:d},`${i}-${o}-${d}`):/^(prompt|console|Number)$/.test(d)?e.jsx("span",{className:"text-[#7dd3fc]",children:d},`${i}-${o}-${d}`):e.jsx("span",{className:"text-[#e2e8f0]",children:d},`${i}-${o}-${d}`):null):null)},`${n}-${t}`)})})}function S(s,t,n=""){const r=s||n,l=s?"":"opacity-45";return t==="css"?e.jsx("div",{className:l,children:B(r)}):t==="javascript"?e.jsx("div",{className:l,children:F(r)}):e.jsx("div",{className:l,children:e.jsx("code",{className:"block",children:r.split(`
`).map((i,c)=>{const d=i.split(/(<\/?[^>]+>)/g);return e.jsx("div",{className:"whitespace-pre",children:d.map((o,u)=>/^\s*<!DOCTYPE/i.test(o)||/^(\s*)<\/?[^>]+>$/.test(o)?q(o,`${u}-${o}`):e.jsx("span",{className:"text-[#e2e8f0]",children:o},`${u}-${o}`))},`${c}-${i}`)})})})}function U(s){return s?{label:"Concluída",classes:"border border-emerald-400/20 bg-emerald-400/10 text-emerald-200"}:{label:"Em progresso",classes:"border border-sky-400/20 bg-sky-400/10 text-sky-200"}}function V(s,t){return t.trim()?s==="html"?t:s==="css"?`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Preview CSS</title>
    <style>
      body {
        margin: 0;
        padding: 32px;
        background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
        color: #e5e7eb;
        font-family: Arial, sans-serif;
      }
      .card {
        max-width: 560px;
        margin: 0 auto;
        padding: 24px;
        border-radius: 20px;
        background: rgba(15, 23, 42, 0.85);
        border: 1px solid rgba(148, 163, 184, 0.25);
        box-shadow: 0 20px 60px rgba(15, 23, 42, 0.35);
      }
      .card h1 {
        margin-top: 0;
      }
      ${t}
    </style>
  </head>
  <body>
    <div class="card">
      <p>Preview CSS</p>
      <h1>Seu estilo aparece aqui</h1>
      <p>Use esta área para testar cores, espaçamento, tipografia e layout.</p>
      <button>Botão de exemplo</button>
    </div>
  </body>
</html>`:`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Preview JavaScript</title>
    <style>
      body {
        margin: 0;
        padding: 24px;
        background: #ffffff;
        color: #0f172a;
        font-family: Arial, sans-serif;
      }
      .console {
        margin-top: 20px;
        padding: 16px;
        border-radius: 14px;
        background: #0f172a;
        color: #e2e8f0;
        white-space: pre-wrap;
      }
    </style>
  </head>
  <body>
    <h1>Preview JavaScript</h1>
    <p>Use <strong>console.log</strong> para ver as saídas abaixo.</p>
    <div id="console" class="console">Console pronto.</div>
    <script>
      const consoleElement = document.getElementById("console");
      const originalLog = console.log;
      console.log = (...args) => {
        consoleElement.textContent += "\\n" + args.join(" ");
        originalLog(...args);
      };
      try {
        ${t}
      } catch (error) {
        consoleElement.textContent += "\\nErro: " + error.message;
      }
    <\/script>
  </body>
</html>`:`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Preview</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #f8fafc;
        color: #334155;
        font-family: Arial, sans-serif;
      }
      .empty {
        max-width: 28rem;
        padding: 2rem;
        border-radius: 1rem;
        border: 1px dashed #94a3b8;
        background: white;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="empty">Escreva seu código para ver o preview ao vivo.</div>
  </body>
</html>`}function Y(s,t){const n=s.items.findIndex(r=>r.id===t.id);return n===-1||n===s.items.length-1?"Última atividade deste módulo":`Próxima atividade: ${s.items[n+1].title}`}function z(s){return String(s||"").split(/(?<=[.!?])\s+/).map(t=>t.trim()).filter(Boolean)}function K(s){const t=z(s.theory),n=t[0]||s.summary,r=t[1]||"Você vai entender como esse conceito aparece em situações reais.",l=s.instructions?.length?`Ao final, você entrega: ${s.instructions.slice(0,2).join(" ")}`:"Ao final, você entrega uma solução funcional para a atividade.";return{concept:n,importance:r,outcome:l}}function G(s){const t=(s.instructions||[]).length-1;return(s.instructions||[]).map((n,r)=>({title:`Atividade ${r+1}`,instruction:n,explanation:r===0?"Comece por esta etapa para montar uma base sólida da solução.":r===t?"Finalize esta etapa e valide no preview para garantir que o resultado está correto.":"Com a base pronta, avance neste passo para consolidar o aprendizado da aula."}))}function k({track:s,activity:t,onBack:n,onCompleteActivity:r}){const[l,i]=m.useState("overview"),[c,d]=m.useState(""),[o,u]=m.useState(t.status==="done"),[g,x]=m.useState(""),p=U(o),b=m.useRef(null),E=m.useMemo(()=>V(s.id,c),[c,s.id]),_=m.useMemo(()=>G(t),[t]),N=m.useMemo(()=>K(t),[t]),v=m.useMemo(()=>s.items.findIndex(a=>a.id===t.id)+1,[t.id,s.items]),w=m.useMemo(()=>s.items.filter(a=>a.status==="done").length,[s.items]),T=m.useMemo(()=>Math.round(w/s.items.length*100),[w,s.items.length]),P=[{id:"overview",label:"Visão geral"},{id:"notes",label:"Guia da aula"}],A=()=>{if(o){n?.();return}if(!c.trim()){x("Escreva sua resposta no editor antes de enviar.");return}if(r?.(t.id)){u(!0),x("Atividade concluída com sucesso. A próxima atividade foi liberada.");return}x("Não foi possível concluir esta atividade agora.")},D=a=>{if(s.id!=="html"||a.key!==">"||a.ctrlKey||a.metaKey||a.altKey)return;const f=a.currentTarget,h=f.selectionStart,j=f.selectionEnd;if(h!==j)return;const y=c.slice(0,h).match(/<([A-Za-z][\w-]*)$/);if(!y)return;const $=y[1].toLowerCase();if(new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]).has($))return;a.preventDefault();const M=`${c.slice(0,h)}></${$}>${c.slice(j)}`,C=h+1;d(M),requestAnimationFrame(()=>{b.current&&(b.current.selectionStart=C,b.current.selectionEnd=C)})};return e.jsxs("section",{className:"page-enter space-y-6",children:[e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_360px]",children:[e.jsxs("div",{className:"surface-enter overflow-hidden rounded-[2rem] border border-white/10 bg-[#141414]/95 shadow-[0_24px_80px_rgba(0,0,0,0.5)]",children:[e.jsxs("div",{className:"border-b border-white/10 bg-[linear-gradient(135deg,rgba(80,80,80,0.18),rgba(20,20,20,0.92)_55%,rgba(0,0,0,0.98))] px-6 py-6 sm:px-8",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-sm text-[#d4d4d4]",children:[e.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-3 py-1",children:s.label}),e.jsx("span",{className:`rounded-full px-3 py-1 ${O(t.difficulty)}`,children:t.difficulty}),e.jsx("span",{className:`rounded-full px-3 py-1 ${p.classes}`,children:p.label})]}),e.jsxs("div",{className:"mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",children:[e.jsxs("div",{className:"max-w-3xl",children:[e.jsxs("p",{className:"text-xs uppercase tracking-[0.28em] text-[#b5b5b5]",children:["Aula ",v," de ",s.items.length]}),e.jsx("h1",{className:"mt-3 text-3xl font-semibold text-white sm:text-4xl",children:t.title}),e.jsx("p",{className:"mt-4 text-base leading-8 text-[#cbd5e1]",children:t.summary})]}),e.jsx("button",{type:"button",onClick:n,className:"glass-button rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10",children:"Voltar para dashboard"})]}),e.jsxs("div",{className:"mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#000000]",children:[e.jsx("div",{className:"flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#94a3b8]",children:e.jsx("span",{children:Y(s,t)})}),e.jsx("div",{className:"grid min-h-[18rem] place-items-center bg-[radial-gradient(circle_at_top,rgba(80,80,80,0.16),transparent_45%),linear-gradient(180deg,#141414_0%,#000000_100%)] p-8",children:e.jsxs("div",{className:"w-full max-w-3xl rounded-[1.75rem] border border-white/10 bg-[#141414]/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.6)]",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"grid h-16 w-16 place-items-center rounded-2xl bg-[#3c3c3c] text-2xl font-semibold text-white",children:v}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm uppercase tracking-[0.22em] text-[#b5b5b5]",children:"Objetivo da atividade"}),e.jsx("h2",{className:"mt-2 text-2xl font-semibold text-white",children:t.title})]})]}),e.jsx("p",{className:"mt-5 max-w-2xl text-sm leading-7 text-[#cbd5e1]",children:N.importance})]})})]})]}),e.jsxs("div",{className:"px-6 py-6 sm:px-8",children:[e.jsx("div",{className:"flex flex-wrap gap-3",children:P.map(a=>e.jsx("button",{type:"button",onClick:()=>i(a.id),className:`rounded-full px-4 py-2 text-sm transition ${l===a.id?"bg-white text-[#0f172a]":"border border-white/10 bg-white/5 text-[#cbd5e1] hover:bg-white/10"}`,children:a.label},a.id))}),l==="overview"?e.jsxs("div",{className:"mt-6 space-y-8",children:[e.jsxs("section",{className:"rounded-[1.5rem] border border-white/10 bg-white/5 p-5",children:[e.jsx("h2",{className:"text-lg font-semibold text-white",children:"O que você vai aprender"}),e.jsxs("div",{className:"mt-4 grid gap-3",children:[e.jsxs("div",{className:"rounded-2xl border border-white/10 bg-[#1a1a1a]/70 px-4 py-4",children:[e.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-[#94a3b8]",children:"Conceito-chave"}),e.jsx("p",{className:"mt-2 text-sm leading-7 text-[#dbe7ff]",children:N.concept})]}),e.jsxs("div",{className:"rounded-2xl border border-white/10 bg-[#1a1a1a]/70 px-4 py-4",children:[e.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-[#94a3b8]",children:"Por que isso importa"}),e.jsx("p",{className:"mt-2 text-sm leading-7 text-[#dbe7ff]",children:N.importance})]}),e.jsxs("div",{className:"rounded-2xl border border-white/10 bg-[#1a1a1a]/70 px-4 py-4",children:[e.jsx("p",{className:"text-xs uppercase tracking-[0.16em] text-[#94a3b8]",children:"Resultado esperado"}),e.jsx("p",{className:"mt-2 text-sm leading-7 text-[#dbe7ff]",children:N.outcome})]})]})]}),e.jsxs("section",{className:"rounded-[1.5rem] border border-white/10 bg-white/5 p-5",children:[e.jsx("h2",{className:"text-lg font-semibold text-white",children:"Atividade"}),e.jsx("div",{className:"mt-4 grid gap-3",children:t.instructions?.map((a,f)=>e.jsxs("div",{className:"flex gap-3 rounded-2xl border border-white/8 bg-[#1a1a1a]/70 px-4 py-4 text-sm text-[#dbe7ff]",children:[e.jsx("span",{className:"mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-semibold text-white",children:f+1}),e.jsx("span",{children:a})]},a))})]})]}):null,l==="notes"?e.jsxs("div",{className:"mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]",children:[e.jsxs("section",{className:"rounded-[1.5rem] border border-white/10 bg-white/5 p-5",children:[e.jsx("h2",{className:"text-lg font-semibold text-white",children:"Guia da aula"}),e.jsx("div",{className:"mt-4 space-y-4",children:_.map(a=>e.jsxs("div",{className:"rounded-2xl border border-white/10 bg-[#1a1a1a] px-4 py-4",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:a.title}),e.jsx("p",{className:"mt-2 text-sm text-[#dbe7ff]",children:a.instruction}),e.jsx("p",{className:"mt-2 text-sm leading-7 text-[#94a3b8]",children:a.explanation})]},a.title))}),g?e.jsx("div",{className:"mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100",children:g}):null]}),e.jsxs("section",{className:"rounded-[1.5rem] border border-white/10 bg-[#000000] p-5",children:[e.jsx("h2",{className:"text-lg font-semibold text-white",children:"Snippet de referência"}),e.jsx("pre",{className:"mt-4 overflow-auto rounded-2xl border border-white/8 bg-[#141414] p-4 text-sm leading-7 text-[#e2e8f0]",children:S(R(s,t),s.id)})]})]}):null]})]}),e.jsxs("aside",{className:"surface-enter surface-enter-delay-1 space-y-4",children:[e.jsxs("div",{className:"rounded-[2rem] border border-white/10 bg-[#141414]/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.42)]",children:[e.jsx("p",{className:"text-xs uppercase tracking-[0.28em] text-[#b5b5b5]",children:"Modulo atual"}),e.jsx("h2",{className:"mt-3 text-2xl font-semibold text-white",children:s.label}),e.jsx("p",{className:"mt-2 text-sm text-[#94a3b8]",children:s.subtitle}),e.jsx("div",{className:"mt-5 h-2 overflow-hidden rounded-full bg-white/10",children:e.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[#505050] to-[#ffffff]",style:{width:`${T}%`}})}),e.jsxs("p",{className:"mt-3 text-sm text-[#e5e7eb]",children:[w,"/",s.items.length," atividades concluídas"]})]}),e.jsxs("div",{className:"rounded-[2rem] border border-white/10 bg-[#141414]/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.42)]",children:[e.jsxs("div",{className:"flex items-center justify-between px-2 py-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-white",children:"Atividades da trilha"}),e.jsx("span",{className:"text-xs uppercase tracking-[0.22em] text-[#64748b]",children:"Academy"})]}),e.jsx("div",{className:"mt-2 space-y-2",children:s.items.map((a,f)=>{const h=a.id===t.id,j=a.status==="done";return e.jsx("div",{className:`rounded-[1.25rem] border px-4 py-4 transition ${h?"border-white/20 bg-white/10":"border-white/8 bg-white/[0.03]"}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-semibold ${h?"bg-white text-black":j?"bg-emerald-400/20 text-emerald-200":"bg-white/8 text-[#cbd5e1]"}`,children:f+1}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-semibold text-white",children:a.title}),e.jsx("p",{className:"mt-1 text-xs text-[#94a3b8]",children:j?"Concluída":a.status==="locked"?"Bloqueada":"Disponível"})]})]})},a.id)})})]})]})]}),e.jsxs("div",{className:"surface-enter surface-enter-delay-2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#141414]/95 shadow-[0_24px_80px_rgba(0,0,0,0.42)]",children:[e.jsx("div",{className:"flex flex-col gap-4 border-b border-white/10 px-5 py-4 md:flex-row md:items-center md:justify-between",children:e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"rounded-full bg-white px-3 py-1 text-xs font-semibold text-black",children:s.label}),e.jsx("span",{className:"text-sm text-[#cbd5e1]",children:"Laboratório com preview ao vivo"})]})}),e.jsxs("div",{className:"grid min-h-[36rem] gap-px bg-white/10 xl:grid-cols-2",children:[e.jsxs("div",{className:"flex min-h-[24rem] flex-col bg-[#000000]",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#94a3b8]",children:[e.jsx("span",{children:L(s)}),e.jsx("span",{children:"Editor"})]}),e.jsxs("div",{className:"code-shell relative min-h-0 flex-1 overflow-hidden bg-[#000000]",children:[e.jsx("div",{className:"pointer-events-none absolute inset-0 overflow-auto px-5 py-4 font-mono text-sm leading-7",children:S(c,s.id)}),e.jsx("textarea",{ref:b,value:c,onChange:a=>d(a.target.value),onKeyDown:D,spellCheck:!1,className:"relative z-10 h-full w-full resize-none border-0 bg-transparent px-5 py-4 font-mono text-sm leading-7 text-transparent caret-white outline-none"})]})]}),e.jsxs("div",{className:"flex min-h-[24rem] flex-col bg-[#e2e8f0]",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-300 px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-500",children:[e.jsx("span",{children:"Resultado"}),e.jsx("span",{children:"Preview ao vivo"})]}),e.jsx("iframe",{title:`Preview ${s.label}`,srcDoc:E,sandbox:"allow-scripts",className:"h-full min-h-[24rem] w-full border-0 bg-white"})]})]}),e.jsxs("div",{className:"flex flex-col gap-4 border-t border-white/10 bg-[#000000] px-5 py-4 md:flex-row md:items-center md:justify-between",children:[e.jsx("div",{className:"space-y-2",children:e.jsx("p",{className:"text-sm text-[#94a3b8]",children:"Escreva no editor e veja o resultado"})}),e.jsx("div",{className:"flex flex-wrap gap-3",children:e.jsx("button",{type:"button",onClick:A,className:"glass-button rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2563eb] px-5 py-3 text-sm font-semibold text-white hover:opacity-95",children:o?"Voltar ao dashboard":"Concluir aula"})})]})]})]})}export{k as default};
