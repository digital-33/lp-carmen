# Carmem Presentes e Cestas — Landing Page Oficial

Repositório da Landing Page estática institucional e de conversão da **Carmem Presentes e Cestas**.

## 🚀 Como subir na Vercel

Este projeto é 100% estático (HTML5, CSS3 e Vanilla JS), pronto para produção imediata.

1. **Importar o repositório** no painel da Vercel.
2. **Configurações de Build & Development**:
   - **Framework Preset**: `Other`
   - **Root Directory**: `./` (raiz do repositório)
   - **Build Command**: *Deixar vazio* (desativado)
   - **Output Directory**: *Deixar vazio* (desativado)
3. **Deploy**:
   - Clique em **Deploy**.
4. **Domínio personalizado**:
   - Nas configurações do projeto na Vercel (*Settings > Domains*), adicione o domínio oficial: `carmempresentesecestas.com.br` (e `www.carmempresentesecestas.com.br`).

## 📁 Estrutura de Arquivos

- `index.html`: Página principal com SEO técnico, Open Graph, meta tags e Schema.org configurados.
- `styles.css`: Estilização responsiva (mobile-first, design system com variáveis CSS).
- `app.js`: Script de interatividade (menu, FAQ accordion, tracking consentido de GTM / Pixel Meta).
- `vercel.json`: Regras de cabeçalhos de segurança e cache otimizado na Vercel.
- `robots.txt`: Instruções para robôs de busca apontando para o sitemap.
- `sitemap.xml`: Mapa do site com URL canônica configurada.
- `site.webmanifest` & `favicon.ico`: Ícones e manifesto PWA.
- `assets/`: Imagens otimizadas em WebP/JPEG, logo oficial, ícones e fontes locais (Cardo e Inter).

