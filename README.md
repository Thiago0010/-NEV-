# [NEV]² — Website institucional

Site institucional com hero 3D controlado por scroll (a marca [NEV]² se
separa em duas metades conforme o usuário rola a página), construído com
React, TypeScript, Vite, Three.js e GSAP/ScrollTrigger.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos finais ficam em `dist/`.

## Páginas

- `/` — Home institucional (hero 3D com a logo real + seções da marca)
- `/servicos` — Serviços detalhados com faixas de preço e CTA de orçamento
- `/projetos` — Listagem completa de projetos
- `/projetos/:slug` — Página individual de cada projeto (desafio, solução, resultados)
- `/sobre` — Página institucional completa (valores, forma de trabalhar)
- `/equipe` — Time por trás dos projetos
- `/faq` — Perguntas frequentes (com dados estruturados FAQPage para SEO)
- `/contato` — Formulário de captação + WhatsApp, telefone, e-mail e endereço

Além disso, um **botão flutuante de WhatsApp** (`src/components/WhatsAppWidget.tsx`)
aparece em todas as páginas: ele abre um mini formulário (nome + o que a
pessoa precisa) e monta uma mensagem pronta para o WhatsApp — pensado para
não perder a intenção de compra de quem só quer falar rápido.

## Carrossel de projetos e mini formulário qualificador

- A seção de projetos na home (`src/components/ProjectsTeaser.tsx`) agora é
  um **carrossel horizontal** com scroll-snap (estilo Apple: cartões
  arredondados, sombra suave, setas de navegação, sem barra de rolagem
  visível).
- Logo após o Manifesto aparece um **mini formulário qualificador**
  (`src/components/LeadQualifier.tsx`): ele entra em cena com uma animação
  suave quando a pessoa rola até ali (via `IntersectionObserver`), faz 3
  perguntas rápidas (tem site? o que precisa? quando quer começar?) e, no
  final, mostra uma mensagem de "você é quem a gente ajuda" com um botão
  que abre o WhatsApp já com as respostas preenchidas na mensagem. Troque o
  número em `WHATSAPP_NUMBER` no topo do arquivo.

## Transição entre páginas

Troca de rota usa uma "cortina" (`src/components/RouteTransitionOverlay.tsx`)
que cobre a tela com a cor da marca e revela a próxima página. Importante:
esse overlay é um elemento **irmão** do conteúdo, nunca um ancestral —
porque um `transform` em qualquer ancestral do hero 3D quebra o pin do
GSAP ScrollTrigger (o mesmo bug que corrigimos antes). Se for customizar a
transição, mantenha essa regra.

## Hero 3D com a logo real

`src/three/HeroScene.ts` carrega o arquivo `public/brand/logo.svg` (a logo
que você enviou) com o `SVGLoader` do Three.js e extrude os dois traçados
originais da arte — a moldura hexagonal e o glifo "N". Além da separação
controlada pelo scroll, a cena agora tem: animação de entrada (a marca
"monta" com um leve estouro ao carregar), respiração contínua quando parada,
partículas de fundo, brilho aditivo atrás da marca e leve inclinação de
câmera acompanhando o cursor. Se você atualizar a logo, basta substituir
`public/brand/logo.svg` mantendo dois traçados/cores.

## Tema visual

O site segue uma linha clara/branca no estilo Apple, com o verde da marca e
o `#CCF9CE` (quase-branco esverdeado) usados como **acento**, não como cor
dominante. Algumas faixas ficam propositalmente escuras para dar ritmo
editorial (hero 3D, tira de números, seção de softwares/sobre, CTA final e
rodapé) — o restante do site é claro. Os tokens de cor estão centralizados
em `src/styles/global.css` (`:root`).

> Se algum texto aparecer com pouco contraste em alguma seção nova que você
> adicionar, o motivo quase sempre é o mesmo que corrigimos aqui: uma seção
> com fundo escuro usando as classes `.eyebrow` / `.section-title` /
> `.section-lede` sem sobrescrever a cor (o padrão global delas é para fundo
> claro). Nesse caso, adicione um `color` explícito para aquele contexto —
> veja `.software .eyebrow` em `software.css` como exemplo.

## Estrutura

```
src/
  three/HeroScene.ts       -> carrega a logo real via SVGLoader e anima a separação
  components/Hero3D.tsx    -> integra a cena 3D ao ScrollTrigger (pin + scrub)
  components/Layout.tsx    -> nav + footer + cursor compartilhados entre páginas
  components/Ribbon.tsx    -> fitas com "[NEV]²" usadas como divisores editoriais
  components/StatusBar.tsx -> faixa de status estilo "empresa de tech" na home
  pages/Home.tsx           -> monta as seções institucionais
  pages/ProjectsPage.tsx   -> grid com todos os projetos
  pages/ProjectDetail.tsx  -> página individual (dados vêm de src/data/projects.ts)
  pages/TeamPage.tsx       -> página de equipe (dados em src/data/team.ts)
  pages/ContactPage.tsx    -> formulário de contato + canais diretos
  data/projects.ts         -> fonte única dos dados de projetos
  data/team.ts              -> fonte única dos dados da equipe
  hooks/useScrollReveal.ts -> reveal-on-scroll reutilizável (GSAP)
  hooks/useSeo.ts          -> título/meta description por página (SPA)
  styles/global.css        -> tokens de cor/tipografia extraídos da identidade
```

## ⚠️ Dados que você precisa substituir antes de publicar

- **WhatsApp** (`src/components/WhatsAppWidget.tsx` e
  `src/components/LeadQualifier.tsx`, ambos com uma constante
  `WHATSAPP_NUMBER`): estão com um número de exemplo — troque pelo número
  real, formato `55DDDNUMERO` (só dígitos), **nos dois arquivos**.
- **Preços em Serviços** (`src/pages/ServicesPage.tsx`): os valores "a partir
  de R$..." são exemplos ilustrativos — ajuste para os valores reais ou
  troque por "sob consulta" se preferir não publicar tabela de preços.
- **Depoimentos** (`src/components/Testimonials.tsx`): as citações são
  fictícias, só pra mostrar o layout — troque por depoimentos reais de
  clientes antes de publicar (não publique depoimentos inventados).
- **Equipe** (`src/data/team.ts`): os nomes e cargos são placeholders.
- **Contato** (`src/pages/ContactPage.tsx`): telefone e endereço estão com
  valores de exemplo.
- **Formulário de contato**: valida no navegador e mostra sucesso, mas
  **não envia para lugar nenhum** ainda — não há backend. Veja o comentário
  em `handleSubmit` dentro de `ContactPage.tsx` e plugue sua integração real
  (endpoint próprio, Formspree, Resend, HubSpot etc.).
- **Projetos** (`src/data/projects.ts`): textos de exemplo — troque pelos
  projetos reais. Se adicionar/remover projetos, atualize também
  `public/sitemap.xml`.
- **URL final**: `index.html`, `public/robots.txt` e `public/sitemap.xml`
  assumem `https://nev2dev.com` — troque se o domínio final for outro.

## Sobre SEO e "aparecer no topo do Google"

Nenhum site consegue *garantir* a primeira posição no Google só com código
— isso depende de conteúdo, backlinks, tempo e concorrência. O que este
projeto já traz, como base técnica sólida:

- título e meta description únicos por página (`useSeo`);
- dados estruturados (JSON-LD) de Organização no `index.html`;
- `robots.txt` e `sitemap.xml`;
- HTML semântico (um único `<h1>` por página, hierarquia de headings).

**Limitação importante**: este é um SPA (React puro, renderizado no
navegador, sem servidor). O Google hoje consegue indexar conteúdo
client-side, mas isso é mais lento e menos confiável do que conteúdo
renderizado no servidor. Para o melhor desempenho possível em buscadores,
o próximo passo natural seria migrar para um framework com SSR/prerender
(Next.js, Astro, ou `vite-plugin-ssr`) — a estrutura de componentes e
dados já está pronta para isso.

## Observações importantes

- **Fonte**: Raleway, carregada via Google Fonts no `index.html`. Troque por
  arquivos `.woff2` locais se preferir não depender de CDN externo.
- **Acessibilidade / performance**: a animação de scroll é desativada
  automaticamente quando o sistema do usuário tem `prefers-reduced-motion`
  ativado; o cursor customizado também é desligado em telas touch.
- **Conteúdo**: os textos de projetos, números e produtos de software são
  placeholders editoriais escritos para refletir o posicionamento da
  [NEV]² — troque pelos dados reais antes de publicar.

## Próximos passos sugeridos

1. Substituir os textos de exemplo (projetos, produtos, números) pelos
   dados reais da empresa.
2. Adicionar imagens/vídeos reais de projetos na seção `Projects` (hoje os
   previews são gradientes de marca).
3. Rodar `npm run build` e revisar o relatório de bundle para os chunks de
   `three` e `gsap`.
