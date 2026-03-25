import{r as m,j as e}from"./vendor-D7Zzjp5l.js";function M(s){return s==="Easy"?"border border-emerald-400/20 bg-emerald-400/10 text-emerald-200":s==="Hard"?"border border-rose-400/20 bg-rose-400/10 text-rose-200":"border border-amber-400/20 bg-amber-400/10 text-amber-100"}function L(s){return s.id==="javascript"?"JavaScript":s.id==="css"?"CSS":"HTML"}function O(s,t){return s.id==="html"?t.id==="html-1"?`<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Minha pagina</title>
  </head>
  <body>
    <h1>Ola, mundo!</h1>
  </body>
</html>`:t.id==="html-2"?`<h1>Titulo principal</h1>
<h2>Subtitulo</h2>
<p>Um paragrafo curto.</p>`:t.starterCode||`<section>
  <!-- organize sua estrutura aqui -->
</section>`:s.id==="css"?t.starterCode||`body {
  color: #ffffff;
}`:t.starterCode||'console.log("Ola, mundo!");'}function R(s,t){if(/^\s*<!DOCTYPE/i.test(s))return e.jsxs("span",{children:[e.jsx("span",{className:"text-[#94a3b8]",children:"<!DOCTYPE"}),e.jsx("span",{className:"text-[#e2e8f0]",children:" html>"})]},t);const a=s.match(/^\s*/)?.[0]||"",n=s.trim(),l=n.startsWith("</"),i=n.match(/^<\/?([^\s/>]+)(.*?)(\/?)>$/);if(!i)return e.jsx("span",{className:"text-[#e2e8f0]",children:s},t);const[,o,d,c]=i,u=/([:@\w-]+)(=)("[^"]*"|'[^']*')?/g,g=[];let x;for(;(x=u.exec(d))!==null;)g.push({name:x[1],equal:x[2]||"",value:x[3]||""});return e.jsxs("span",{children:[e.jsx("span",{className:"text-[#e2e8f0]",children:a}),e.jsx("span",{className:"text-[#94a3b8]",children:l?"</":"<"}),e.jsx("span",{className:"text-[#60a5fa]",children:o}),g.map((h,b)=>e.jsxs("span",{children:[e.jsx("span",{className:"text-[#e2e8f0]",children:" "}),e.jsx("span",{className:"text-[#c084fc]",children:h.name}),e.jsx("span",{className:"text-[#94a3b8]",children:h.equal}),e.jsx("span",{className:"text-[#f9a8d4]",children:h.value})]},`${t}-${h.name}-${b}`)),c?e.jsx("span",{className:"text-[#94a3b8]",children:" /"}):null,e.jsx("span",{className:"text-[#94a3b8]",children:">"})]},t)}function U(s){return e.jsx("code",{className:"block",children:s.split(`
`).map((t,a)=>{const n=t.trim(),l=t.match(/^\s*/)?.[0]||"";if(!n)return e.jsx("div",{className:"whitespace-pre",children:t},`${a}-empty`);if(n.endsWith("{"))return e.jsxs("div",{className:"whitespace-pre",children:[e.jsx("span",{className:"text-[#e2e8f0]",children:l}),e.jsx("span",{className:"text-[#7dd3fc]",children:n.slice(0,-1).trim()}),e.jsxs("span",{className:"text-[#94a3b8]",children:[" ","{"]})]},`${a}-${t}`);if(n==="}")return e.jsxs("div",{className:"whitespace-pre",children:[e.jsx("span",{className:"text-[#e2e8f0]",children:l}),e.jsx("span",{className:"text-[#94a3b8]",children:"}"})]},`${a}-${t}`);const i=n.match(/^([-\w]+)(:\s*)(.+?)(;?)$/);return i?e.jsxs("div",{className:"whitespace-pre",children:[e.jsx("span",{className:"text-[#e2e8f0]",children:l}),e.jsx("span",{className:"text-[#c084fc]",children:i[1]}),e.jsx("span",{className:"text-[#94a3b8]",children:i[2]}),e.jsx("span",{className:"text-[#f8fafc]",children:i[3]}),e.jsx("span",{className:"text-[#94a3b8]",children:i[4]})]},`${a}-${t}`):e.jsx("div",{className:"whitespace-pre text-[#e2e8f0]",children:t},`${a}-${t}`)})})}function q(s){return e.jsx("code",{className:"block",children:s.split(`
`).map((t,a)=>{const n=t.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g);return e.jsx("div",{className:"whitespace-pre",children:n.map((l,i)=>l?/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')$/.test(l)?e.jsx("span",{className:"text-[#f9a8d4]",children:l},`${i}-${l}`):l.split(/\b(const|let|if|else|return|function|true|false|prompt|console|Number)\b/g).map((d,c)=>d?/^(const|let|if|else|return|function|true|false)$/.test(d)?e.jsx("span",{className:"text-[#c084fc]",children:d},`${i}-${c}-${d}`):/^(prompt|console|Number)$/.test(d)?e.jsx("span",{className:"text-[#7dd3fc]",children:d},`${i}-${c}-${d}`):e.jsx("span",{className:"text-[#e2e8f0]",children:d},`${i}-${c}-${d}`):null):null)},`${a}-${t}`)})})}function C(s,t,a=""){const n=s||a,l=s?"":"opacity-45";return t==="css"?e.jsx("div",{className:l,children:U(n)}):t==="javascript"?e.jsx("div",{className:l,children:q(n)}):e.jsx("div",{className:l,children:e.jsx("code",{className:"block",children:n.split(`
`).map((i,o)=>{const d=i.split(/(<\/?[^>]+>)/g);return e.jsx("div",{className:"whitespace-pre",children:d.map((c,u)=>/^\s*<!DOCTYPE/i.test(c)||/^(\s*)<\/?[^>]+>$/.test(c)?R(c,`${u}-${c}`):e.jsx("span",{className:"text-[#e2e8f0]",children:c},`${u}-${c}`))},`${o}-${i}`)})})})}function Y(s){return s?{label:"Concluida",classes:"border border-emerald-400/20 bg-emerald-400/10 text-emerald-200"}:{label:"Em progresso",classes:"border border-sky-400/20 bg-sky-400/10 text-sky-200"}}function B(s,t){return t.trim()?s==="html"?t:s==="css"?`<!DOCTYPE html>
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
      <p>Use esta area para testar cores, espacamento, tipografia e layout.</p>
      <button>Botao de exemplo</button>
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
    <p>Use <strong>console.log</strong> para ver as saidas abaixo.</p>
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
    <div class="empty">Escreva seu codigo para ver o preview ao vivo.</div>
  </body>
</html>`}function F(s,t){const a=s.items.findIndex(n=>n.id===t.id);return a===-1||a===s.items.length-1?"Ultima aula deste modulo":`Proxima aula: ${s.items[a+1].title}`}function V(s){return(s.instructions||[]).map((t,a)=>({title:`Atividade ${a+1}`,instruction:t,explanation:`Nesta etapa, voce vai praticar "${t.replace(/\.$/,"").toLowerCase()}". O objetivo e fixar a base de ${s.title.toLowerCase()} com um exemplo simples e direto.`}))}function H({track:s,activity:t,onBack:a,onCompleteActivity:n}){const[l,i]=m.useState("overview"),[o,d]=m.useState(""),[c,u]=m.useState(t.status==="done"),[g,x]=m.useState(""),h=Y(c),b=m.useRef(null),S=m.useMemo(()=>B(s.id,o),[o,s.id]),E=m.useMemo(()=>V(t),[t]),N=m.useMemo(()=>s.items.findIndex(r=>r.id===t.id)+1,[t.id,s.items]),w=m.useMemo(()=>s.items.filter(r=>r.status==="done").length,[s.items]),_=m.useMemo(()=>Math.round(w/s.items.length*100),[w,s.items.length]),T=[{id:"overview",label:"Visao geral"},{id:"notes",label:"Guia da aula"}],P=()=>{if(c){a?.();return}if(!o.trim()){x("Escreva sua resposta no editor antes de enviar.");return}if(n?.(t.id)){u(!0),x("Atividade concluida com sucesso. A proxima aula foi liberada.");return}x("Nao foi possivel concluir esta atividade agora.")},A=r=>{if(s.id!=="html"||r.key!==">"||r.ctrlKey||r.metaKey||r.altKey)return;const f=r.currentTarget,p=f.selectionStart,j=f.selectionEnd;if(p!==j)return;const v=o.slice(0,p).match(/<([A-Za-z][\w-]*)$/);if(!v)return;const y=v[1].toLowerCase();if(new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]).has(y))return;r.preventDefault();const D=`${o.slice(0,p)}></${y}>${o.slice(j)}`,$=p+1;d(D),requestAnimationFrame(()=>{b.current&&(b.current.selectionStart=$,b.current.selectionEnd=$)})};return e.jsxs("section",{className:"page-enter space-y-6",children:[e.jsxs("div",{className:"grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_360px]",children:[e.jsxs("div",{className:"surface-enter overflow-hidden rounded-[2rem] border border-white/10 bg-[#141414]/95 shadow-[0_24px_80px_rgba(0,0,0,0.5)]",children:[e.jsxs("div",{className:"border-b border-white/10 bg-[linear-gradient(135deg,rgba(80,80,80,0.18),rgba(20,20,20,0.92)_55%,rgba(0,0,0,0.98))] px-6 py-6 sm:px-8",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-sm text-[#d4d4d4]",children:[e.jsx("span",{className:"rounded-full border border-white/10 bg-white/5 px-3 py-1",children:s.label}),e.jsx("span",{className:`rounded-full px-3 py-1 ${M(t.difficulty)}`,children:t.difficulty}),e.jsx("span",{className:`rounded-full px-3 py-1 ${h.classes}`,children:h.label})]}),e.jsxs("div",{className:"mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",children:[e.jsxs("div",{className:"max-w-3xl",children:[e.jsxs("p",{className:"text-xs uppercase tracking-[0.28em] text-[#b5b5b5]",children:["Aula ",N," de ",s.items.length]}),e.jsx("h1",{className:"mt-3 text-3xl font-semibold text-white sm:text-4xl",children:t.title}),e.jsx("p",{className:"mt-4 text-base leading-8 text-[#cbd5e1]",children:t.summary})]}),e.jsx("button",{type:"button",onClick:a,className:"glass-button rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10",children:"Voltar para dashboard"})]}),e.jsxs("div",{className:"mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#000000]",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#94a3b8]",children:[e.jsx("span",{children:"Aula estilo player"}),e.jsx("span",{children:F(s,t)})]}),e.jsx("div",{className:"grid min-h-[18rem] place-items-center bg-[radial-gradient(circle_at_top,rgba(80,80,80,0.16),transparent_45%),linear-gradient(180deg,#141414_0%,#000000_100%)] p-8",children:e.jsxs("div",{className:"w-full max-w-3xl rounded-[1.75rem] border border-white/10 bg-[#141414]/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.6)]",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"grid h-16 w-16 place-items-center rounded-2xl bg-[#3c3c3c] text-2xl font-semibold text-white",children:N}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm uppercase tracking-[0.22em] text-[#b5b5b5]",children:"Resumo da atividade"}),e.jsx("h2",{className:"mt-2 text-2xl font-semibold text-white",children:t.title})]})]}),e.jsx("p",{className:"mt-5 max-w-2xl text-sm leading-7 text-[#cbd5e1]",children:t.summary})]})})]})]}),e.jsxs("div",{className:"px-6 py-6 sm:px-8",children:[e.jsx("div",{className:"flex flex-wrap gap-3",children:T.map(r=>e.jsx("button",{type:"button",onClick:()=>i(r.id),className:`rounded-full px-4 py-2 text-sm transition ${l===r.id?"bg-white text-[#0f172a]":"border border-white/10 bg-white/5 text-[#cbd5e1] hover:bg-white/10"}`,children:r.label},r.id))}),l==="overview"?e.jsxs("div",{className:"mt-6 space-y-8",children:[e.jsxs("section",{className:"rounded-[1.5rem] border border-white/10 bg-white/5 p-5",children:[e.jsx("h2",{className:"text-lg font-semibold text-white",children:"O que voce vai aprender"}),e.jsx("p",{className:"mt-3 text-sm leading-7 text-[#cbd5e1]",children:t.theory})]}),e.jsxs("section",{className:"rounded-[1.5rem] border border-white/10 bg-white/5 p-5",children:[e.jsx("h2",{className:"text-lg font-semibold text-white",children:"Atividade"}),e.jsx("div",{className:"mt-4 grid gap-3",children:t.instructions?.map((r,f)=>e.jsxs("div",{className:"flex gap-3 rounded-2xl border border-white/8 bg-[#1a1a1a]/70 px-4 py-4 text-sm text-[#dbe7ff]",children:[e.jsx("span",{className:"mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-semibold text-white",children:f+1}),e.jsx("span",{children:r})]},r))})]})]}):null,l==="notes"?e.jsxs("div",{className:"mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]",children:[e.jsxs("section",{className:"rounded-[1.5rem] border border-white/10 bg-white/5 p-5",children:[e.jsx("h2",{className:"text-lg font-semibold text-white",children:"Guia da aula"}),e.jsx("div",{className:"mt-4 space-y-4",children:E.map(r=>e.jsxs("div",{className:"rounded-2xl border border-white/10 bg-[#1a1a1a] px-4 py-4",children:[e.jsx("p",{className:"text-sm font-semibold text-white",children:r.title}),e.jsx("p",{className:"mt-2 text-sm text-[#dbe7ff]",children:r.instruction}),e.jsx("p",{className:"mt-2 text-sm leading-7 text-[#94a3b8]",children:r.explanation})]},r.title))}),g?e.jsx("div",{className:"mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100",children:g}):null]}),e.jsxs("section",{className:"rounded-[1.5rem] border border-white/10 bg-[#000000] p-5",children:[e.jsx("h2",{className:"text-lg font-semibold text-white",children:"Snippet de referencia"}),e.jsx("pre",{className:"mt-4 overflow-auto rounded-2xl border border-white/8 bg-[#141414] p-4 text-sm leading-7 text-[#e2e8f0]",children:C(O(s,t),s.id)})]})]}):null]})]}),e.jsxs("aside",{className:"surface-enter surface-enter-delay-1 space-y-4",children:[e.jsxs("div",{className:"rounded-[2rem] border border-white/10 bg-[#141414]/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.42)]",children:[e.jsx("p",{className:"text-xs uppercase tracking-[0.28em] text-[#b5b5b5]",children:"Modulo atual"}),e.jsx("h2",{className:"mt-3 text-2xl font-semibold text-white",children:s.label}),e.jsx("p",{className:"mt-2 text-sm text-[#94a3b8]",children:s.subtitle}),e.jsx("div",{className:"mt-5 h-2 overflow-hidden rounded-full bg-white/10",children:e.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-[#505050] to-[#ffffff]",style:{width:`${_}%`}})}),e.jsxs("p",{className:"mt-3 text-sm text-[#e5e7eb]",children:[w,"/",s.items.length," aulas concluidas"]})]}),e.jsxs("div",{className:"rounded-[2rem] border border-white/10 bg-[#141414]/95 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.42)]",children:[e.jsxs("div",{className:"flex items-center justify-between px-2 py-2",children:[e.jsx("h3",{className:"text-lg font-semibold text-white",children:"Playlist da trilha"}),e.jsx("span",{className:"text-xs uppercase tracking-[0.22em] text-[#64748b]",children:"Academy"})]}),e.jsx("div",{className:"mt-2 space-y-2",children:s.items.map((r,f)=>{const p=r.id===t.id,j=r.status==="done";return e.jsx("div",{className:`rounded-[1.25rem] border px-4 py-4 transition ${p?"border-white/20 bg-white/10":"border-white/8 bg-white/[0.03]"}`,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-semibold ${p?"bg-white text-black":j?"bg-emerald-400/20 text-emerald-200":"bg-white/8 text-[#cbd5e1]"}`,children:f+1}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-semibold text-white",children:r.title}),e.jsx("p",{className:"mt-1 text-xs text-[#94a3b8]",children:j?"Concluida":r.status==="locked"?"Bloqueada":"Disponivel"})]})]})},r.id)})})]})]})]}),e.jsxs("div",{className:"surface-enter surface-enter-delay-2 overflow-hidden rounded-[2rem] border border-white/10 bg-[#141414]/95 shadow-[0_24px_80px_rgba(0,0,0,0.42)]",children:[e.jsx("div",{className:"flex flex-col gap-4 border-b border-white/10 px-5 py-4 md:flex-row md:items-center md:justify-between",children:e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"rounded-full bg-white px-3 py-1 text-xs font-semibold text-black",children:s.label}),e.jsx("span",{className:"text-sm text-[#cbd5e1]",children:"Laboratorio com preview ao vivo"})]})}),e.jsxs("div",{className:"grid min-h-[36rem] gap-px bg-white/10 xl:grid-cols-2",children:[e.jsxs("div",{className:"flex min-h-[24rem] flex-col bg-[#000000]",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#94a3b8]",children:[e.jsx("span",{children:L(s)}),e.jsx("span",{children:"Editor"})]}),e.jsxs("div",{className:"code-shell relative min-h-0 flex-1 overflow-hidden bg-[#000000]",children:[e.jsx("div",{className:"pointer-events-none absolute inset-0 overflow-auto px-5 py-4 font-mono text-sm leading-7",children:C(o,s.id)}),e.jsx("textarea",{ref:b,value:o,onChange:r=>d(r.target.value),onKeyDown:A,spellCheck:!1,className:"relative z-10 h-full w-full resize-none border-0 bg-transparent px-5 py-4 font-mono text-sm leading-7 text-transparent caret-white outline-none"})]})]}),e.jsxs("div",{className:"flex min-h-[24rem] flex-col bg-[#e2e8f0]",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-300 px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-500",children:[e.jsx("span",{children:"Resultado"}),e.jsx("span",{children:"Preview ao vivo"})]}),e.jsx("iframe",{title:`Preview ${s.label}`,srcDoc:S,sandbox:"allow-scripts",className:"h-full min-h-[24rem] w-full border-0 bg-white"})]})]}),e.jsxs("div",{className:"flex flex-col gap-4 border-t border-white/10 bg-[#000000] px-5 py-4 md:flex-row md:items-center md:justify-between",children:[e.jsx("div",{className:"space-y-2",children:e.jsx("p",{className:"text-sm text-[#94a3b8]",children:"Escreva no editor e veja o resultado"})}),e.jsx("div",{className:"flex flex-wrap gap-3",children:e.jsx("button",{type:"button",onClick:P,className:"glass-button rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2563eb] px-5 py-3 text-sm font-semibold text-white hover:opacity-95",children:c?"Voltar ao dashboard":"Concluir aula"})})]})]})]})}export{H as default};
