# 🎨 Guia de Customização - Landing Pages Yuna

Este guia ajudará você a personalizar as landing pages da Yuna de forma fácil e rápida.

## 🎨 Alterando Cores

### Método 1: Variáveis CSS (Recomendado)

Abra o arquivo `styles.css` e localize as variáveis CSS no início do arquivo (linhas 9-24):

```css
:root {
    /* Cores Principais */
    --primary-color: #2563eb;      /* Azul principal */
    --primary-dark: #1e40af;       /* Azul escuro */
    --primary-light: #3b82f6;      /* Azul claro */
    --secondary-color: #10b981;    /* Verde secundário */
    --accent-color: #f59e0b;       /* Laranja de destaque */
    
    /* Cores Neutras */
    --text-dark: #1f2937;          /* Texto escuro */
    --text-light: #6b7280;         /* Texto claro */
    --bg-light: #f9fafb;           /* Fundo claro */
    --bg-white: #ffffff;           /* Fundo branco */
    --border-color: #e5e7eb;       /* Cor das bordas */
}
```

**Como usar:**
1. Substitua os códigos hexadecimais pelas cores desejadas
2. Salve o arquivo
3. Todas as cores do site serão atualizadas automaticamente

### Paletas de Cores Sugeridas

**Azul Profissional (Atual):**
- Primary: `#2563eb`
- Secondary: `#10b981`

**Verde Saúde:**
- Primary: `#059669`
- Secondary: `#0891b2`

**Roxo Moderno:**
- Primary: `#7c3aed`
- Secondary: `#ec4899`

**Laranja Energia:**
- Primary: `#f97316`
- Secondary: `#0ea5e9`

## 📝 Alterando Textos

### Landing Page para Médicos (`medicos.html`)

**Hero Section (Banner Principal):**
```html
<!-- Linha 32-33 -->
<h1 class="hero-title">Internamento especializado em reabilitação neurológica pós-hospitalar</h1>
<p class="hero-subtitle">Cuidado transdisciplinar e personalizado...</p>
```

**Seção Sobre:**
```html
<!-- Linha 50-52 -->
<p class="highlight">A Yuna é uma <strong>Unidade de Transição de Cuidados</strong>...</p>
```

**Informações de Contato (Footer):**
```html
<!-- Linha 177-178 -->
<p>Email: contato@yuna.com.br</p>
<p>Telefone: (00) 0000-0000</p>
```

### Landing Page para Pacientes (`pacientes.html`)

**Hero Section:**
```html
<!-- Linha 32-33 -->
<h1 class="hero-title">Sua jornada de recuperação começa aqui</h1>
<p class="hero-subtitle">Cuidado especializado, ambiente acolhedor...</p>
```

## 🖼️ Adicionando Imagens

### Background do Hero

**Opção 1: Imagem Única**

No arquivo `styles.css`, linha 229-235:

```css
.hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Substitua por: */
    background-image: url('caminho/para/sua-imagem.jpg');
    background-size: cover;
    background-position: center;
}
```

**Opção 2: Imagem com Overlay**

```css
.hero-section {
    background-image: url('caminho/para/sua-imagem.jpg');
    background-size: cover;
    background-position: center;
}

.hero-overlay {
    background: rgba(0, 0, 0, 0.5); /* Ajuste a opacidade */
}
```

### Logo da Empresa

Substitua o texto "YUNA" no header:

```html
<!-- Linha 23 em ambos os HTMLs -->
<div class="logo">
    <!-- De: -->
    <h2>YUNA</h2>
    
    <!-- Para: -->
    <img src="caminho/para/logo.png" alt="Yuna" style="height: 40px;">
</div>
```

### Logos de Convênios

No arquivo HTML, substitua os placeholders (linhas 154-161):

```html
<div class="convenios-grid">
    <img src="imagens/convenio1.png" alt="Convênio 1">
    <img src="imagens/convenio2.png" alt="Convênio 2">
    <img src="imagens/convenio3.png" alt="Convênio 3">
    <!-- ... -->
</div>
```

Adicione este CSS para estilizar:

```css
.convenios-grid img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%);
    transition: filter 0.3s;
}

.convenios-grid img:hover {
    filter: grayscale(0%);
}
```

## 🎥 Adicionando Vídeo Institucional

### YouTube

Substitua o placeholder (linha 68 em ambos os HTMLs):

```html
<div class="video-placeholder">
    <!-- Substitua por: -->
    <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/SEU_VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    </iframe>
</div>
```

### Vimeo

```html
<iframe 
    src="https://player.vimeo.com/video/SEU_VIDEO_ID" 
    width="100%" 
    height="100%" 
    frameborder="0" 
    allow="autoplay; fullscreen; picture-in-picture" 
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
</iframe>
```

## 📧 Configurando Formulário de Contato

### Adicionar Formulário

Substitua os botões CTA por um formulário (seção de contato):

```html
<form id="contactForm" class="contact-form">
    <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="phone">Telefone:</label>
        <input type="tel" id="phone" name="phone" required>
    </div>
    
    <div class="form-group">
        <label for="message">Mensagem:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
    </div>
    
    <button type="submit" class="btn btn-primary btn-large">Enviar Mensagem</button>
</form>
```

### Estilos do Formulário

Adicione ao `styles.css`:

```css
.contact-form {
    max-width: 600px;
    margin: 2rem auto;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: white;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: white;
    background: rgba(255, 255, 255, 0.2);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: rgba(255, 255, 255, 0.6);
}
```

## 🔗 Links de Redes Sociais

### Adicionar no Footer

```html
<div class="footer-section">
    <h4>Redes Sociais</h4>
    <div class="social-links">
        <a href="https://facebook.com/yuna" target="_blank" aria-label="Facebook">
            <svg><!-- ícone Facebook --></svg>
        </a>
        <a href="https://instagram.com/yuna" target="_blank" aria-label="Instagram">
            <svg><!-- ícone Instagram --></svg>
        </a>
        <a href="https://linkedin.com/company/yuna" target="_blank" aria-label="LinkedIn">
            <svg><!-- ícone LinkedIn --></svg>
        </a>
    </div>
</div>
```

### Estilos das Redes Sociais

```css
.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-links a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: all 0.3s;
}

.social-links a:hover {
    background: var(--primary-color);
    transform: translateY(-3px);
}

.social-links svg {
    width: 20px;
    height: 20px;
    fill: white;
}
```

## 📱 WhatsApp Flutuante

Adicione um botão de WhatsApp flutuante:

### HTML (adicione antes do `</body>`)

```html
<a 
    href="https://wa.me/5511999999999?text=Olá, gostaria de mais informações sobre a Yuna" 
    class="whatsapp-float" 
    target="_blank"
    aria-label="WhatsApp"
>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
</a>
```

### CSS

```css
.whatsapp-float {
    position: fixed;
    bottom: 80px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 999;
    transition: all 0.3s;
}

.whatsapp-float:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
}

.whatsapp-float svg {
    width: 35px;
    height: 35px;
}
```

## 🔤 Alterando Fontes

### Google Fonts

No `<head>` dos arquivos HTML:

```html
<!-- Fonte atual: Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Outras opções: -->

<!-- Roboto -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

<!-- Montserrat -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

No `styles.css`, altere a variável:

```css
:root {
    --font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

## 📊 Adicionando Google Analytics

No `<head>` antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Substitua `G-XXXXXXXXXX` pelo seu ID do Google Analytics.

## 🎯 Dicas Finais

1. **Teste sempre em diferentes navegadores** após fazer alterações
2. **Mantenha backup** antes de mudanças grandes
3. **Use ferramentas de validação**:
   - HTML: https://validator.w3.org/
   - CSS: https://jigsaw.w3.org/css-validator/
4. **Otimize imagens** antes de adicionar (use TinyPNG ou similar)
5. **Mantenha acessibilidade** com alt texts e ARIA labels

## 🆘 Problemas Comuns

**Problema:** Cores não mudaram
- **Solução:** Limpe o cache do navegador (Ctrl+F5)

**Problema:** Imagens não aparecem
- **Solução:** Verifique o caminho relativo das imagens

**Problema:** Fontes não carregam
- **Solução:** Verifique a conexão com Google Fonts

---

**Dúvidas? Consulte a documentação ou entre em contato!** 💡

