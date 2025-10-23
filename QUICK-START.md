# ⚡ Quick Start - Landing Pages Yuna

Guia rápido para começar a usar as Landing Pages da Yuna em 5 minutos!

## 🚀 Início Rápido

### 1. Visualizar Localmente

**Opção A: Abrir diretamente no navegador**
```
Clique duas vezes em: medicos.html ou pacientes.html
```

**Opção B: Com Live Server (Recomendado)**
```bash
# Instalar dependências
npm install

# Iniciar servidor - Landing Page Médicos
npm run dev

# OU Landing Page Pacientes
npm run dev:pacientes
```

Acesse: `http://localhost:3000`

### 2. Arquivos Principais

```
📁 Yuna LP 01/
│
├── 👨‍⚕️ medicos.html + medicos.css + medicos.js    # LP Médicos
├── ❤️ pacientes.html + pacientes.css + pacientes.js # LP Pacientes
│
├── 📖 README.md            # Documentação completa
├── 📂 ESTRUTURA.md         # Estrutura dos arquivos
├── 🎨 CUSTOMIZAÇÃO.md      # Guia de personalização
├── 🚀 DEPLOY.md            # Guia de deploy
└── ⚡ QUICK-START.md       # Este arquivo
```

## ✏️ Personalizações Rápidas

### Trocar Cores (2 minutos)

Abra `styles.css`, linha 10-14:

```css
:root {
    --primary-color: #2563eb;    /* Cor principal */
    --secondary-color: #10b981;   /* Cor secundária */
}
```

### Alterar Contatos (1 minuto)

Busque por "contato@yuna.com.br" e "(00) 0000-0000" nos HTMLs e substitua.

### Adicionar Logo (3 minutos)

Em `medicos.html` e `pacientes.html`, linha 23:

```html
<div class="logo">
    <img src="caminho/logo.png" alt="Yuna" style="height: 40px;">
</div>
```

## 📋 Checklist Antes do Deploy

- [ ] ✏️ Revisar todos os textos
- [ ] 📧 Atualizar emails e telefones
- [ ] 🖼️ Adicionar imagens reais
- [ ] 🎥 Configurar vídeo institucional
- [ ] 🏥 Adicionar logos dos convênios
- [ ] 📊 Configurar Google Analytics (opcional)
- [ ] 📝 Integrar formulário de contato
- [ ] ✅ Testar em mobile e desktop

## 🌐 Deploy Rápido

### Netlify (Mais Rápido - 2 minutos)

1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto
3. Pronto! ✅

### Vercel

```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

```bash
git init
git add .
git commit -m "Landing Pages Yuna"
git remote add origin SEU_REPO
git push -u origin main
```

Configure GitHub Pages em: Settings → Pages

## 🆘 Ajuda Rápida

### Site não abre?
- Limpe o cache: `Ctrl + F5` (Windows) ou `Cmd + Shift + R` (Mac)

### Imagens não aparecem?
- Verifique os caminhos das imagens
- Use caminhos relativos: `./imagens/foto.jpg`

### Cores não mudaram?
- Salve o arquivo `styles.css`
- Recarregue a página com `Ctrl + F5`

### Menu mobile não funciona?
- Certifique-se que o `script.js` está sendo carregado
- Verifique o console do navegador (F12)

## 📞 Recursos

- **Documentação Completa:** `README.md`
- **Personalização:** `CUSTOMIZAÇÃO.md`
- **Deploy Detalhado:** `DEPLOY.md`

## 🎯 Próximos Passos

1. ✅ Personalizar cores e textos
2. ✅ Adicionar imagens e vídeos
3. ✅ Testar responsividade
4. ✅ Fazer deploy
5. ✅ Compartilhar! 🎉

---

**Precisa de ajuda? Consulte o README.md para documentação completa!**

**Boa sorte! 🚀**

