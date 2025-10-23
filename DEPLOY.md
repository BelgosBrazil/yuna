# 🚀 Guia de Deploy - Landing Pages Yuna

Este documento fornece instruções detalhadas para fazer o deploy das Landing Pages da Yuna em diferentes plataformas.

## 📋 Pré-requisitos

Antes de fazer o deploy, certifique-se de que:

- [ ] Todos os textos foram revisados
- [ ] Imagens reais foram adicionadas (substituir placeholders)
- [ ] Vídeo institucional foi configurado
- [ ] Logos dos convênios foram adicionadas
- [ ] Informações de contato estão corretas
- [ ] Formulários foram integrados com backend/serviço de email
- [ ] Google Analytics foi configurado (opcional)

## 🌐 Opções de Hospedagem

### 1. Netlify (Recomendado) ⭐

**Vantagens:** Grátis, fácil, HTTPS automático, CDN global

**Passos:**

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Add new site" → "Deploy manually"
3. Arraste a pasta do projeto para a área de upload
4. Aguarde o deploy finalizar
5. Configure domínio customizado (opcional)

**Via CLI:**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod
```

### 2. Vercel

**Vantagens:** Grátis, rápido, excelente para projetos estáticos

**Passos:**

1. Acesse [vercel.com](https://vercel.com)
2. Importe o projeto do GitHub ou faça upload
3. Configure e deploy

**Via CLI:**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### 3. GitHub Pages

**Vantagens:** Grátis, integrado com GitHub

**Passos:**

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings → Pages
4. Selecione a branch main como source
5. Salve e aguarde

**URL:** `https://seu-usuario.github.io/nome-do-repo`

### 4. Firebase Hosting

**Vantagens:** Grátis, Google Cloud, SSL automático

**Passos:**

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Deploy
firebase deploy
```

### 5. AWS S3 + CloudFront

**Vantagens:** Escalável, profissional, CDN global

**Passos:**

1. Crie um bucket S3
2. Configure para hospedagem estática
3. Faça upload dos arquivos
4. Configure CloudFront (opcional, para CDN)
5. Configure domínio customizado

### 6. Servidor Tradicional (cPanel/FTP)

**Passos:**

1. Conecte via FTP (FileZilla, Cyberduck, etc.)
2. Faça upload de todos os arquivos para `public_html/` ou pasta desejada
3. Acesse via navegador

## 🔧 Configurações Importantes

### DNS e Domínio

1. Registre um domínio (ex: `yuna.com.br`)
2. Configure os registros DNS:
   - **A Record:** Aponte para o IP do servidor
   - **CNAME:** Aponte www para o domínio principal

### SSL/HTTPS

- **Netlify/Vercel:** Automático ✅
- **GitHub Pages:** Automático ✅
- **Servidor próprio:** Use Let's Encrypt (grátis)

### Analytics

Adicione o código do Google Analytics antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel (opcional)

```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 📧 Integração de Formulários

### Opção 1: FormSpree (Grátis)

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

### Opção 2: EmailJS

```javascript
emailjs.send("service_id", "template_id", {
  name: formData.name,
  email: formData.email,
  message: formData.message
});
```

### Opção 3: Netlify Forms

Adicione `netlify` ao form:

```html
<form name="contact" method="POST" data-netlify="true">
  <!-- campos do formulário -->
</form>
```

## 🎯 Otimizações Pós-Deploy

### 1. Otimizar Imagens

```bash
# Usar ImageOptim, TinyPNG ou converter para WebP
npm install -g @squoosh/cli
squoosh-cli --webp auto *.jpg
```

### 2. Minificar Arquivos

```bash
# Minificar CSS
npm install -g clean-css-cli
cleancss -o styles.min.css styles.css

# Minificar JS
npm install -g terser
terser script.js -o script.min.js
```

### 3. Configurar Cache

Arquivo `.htaccess` (Apache):

```apache
# Cache por 1 ano
<FilesMatch "\.(jpg|jpeg|png|gif|svg|css|js)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

### 4. Comprimir Arquivos

```apache
# Habilitar Gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

## 📊 Monitoramento

### Google Search Console

1. Verifique a propriedade do site
2. Envie o sitemap (se houver)
3. Monitore performance de busca

### PageSpeed Insights

1. Acesse [pagespeed.web.dev](https://pagespeed.web.dev/)
2. Teste a URL do site
3. Implemente sugestões de melhoria

## 🔒 Segurança

### Headers de Segurança

Adicione no servidor ou Netlify (`netlify.toml`):

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 📱 Testes Pós-Deploy

- [ ] Testar em diferentes navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Verificar todos os links
- [ ] Testar formulários
- [ ] Verificar carregamento de imagens
- [ ] Testar velocidade (PageSpeed, GTmetrix)
- [ ] Verificar SEO (meta tags, títulos)

## 🆘 Solução de Problemas

### Site não carrega

- Verifique se o DNS está configurado corretamente
- Aguarde propagação do DNS (até 48h)
- Limpe o cache do navegador

### Formulário não funciona

- Verifique a integração com o serviço de email
- Teste com email real
- Verifique console do navegador por erros

### Imagens não aparecem

- Verifique os caminhos das imagens
- Certifique-se que foram enviadas para o servidor
- Verifique permissões de arquivo

## 📞 Suporte

Para problemas específicos de cada plataforma:

- **Netlify:** [docs.netlify.com](https://docs.netlify.com)
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **GitHub Pages:** [docs.github.com/pages](https://docs.github.com/pages)

---

**Boa sorte com o deploy! 🚀**

