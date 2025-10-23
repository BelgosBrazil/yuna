# 🚀 Deploy na Vercel - Yuna Landing Pages

## ✅ Status do Projeto
O projeto está **PRONTO** para deploy na Vercel!

## 📋 Arquivos de Configuração Criados

- ✅ `vercel.json` - Configuração principal da Vercel
- ✅ `index.html` - Página de entrada que redireciona para medicos.html
- ✅ `.vercelignore` - Arquivos a serem ignorados no deploy
- ✅ Scripts atualizados no `package.json`

## 🚀 Como Fazer o Deploy

### Opção 1: Via Interface Web (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub, GitLab ou Bitbucket
3. Clique em "Add New Project"
4. Importe este repositório ou faça upload da pasta
5. A Vercel detectará automaticamente as configurações
6. Clique em "Deploy"

### Opção 2: Via CLI

```bash
# 1. Instalar Vercel CLI (se não tiver)
npm install -g vercel

# 2. Fazer login
vercel login

# 3. Deploy de preview
npm run deploy:preview

# 4. Deploy de produção
npm run deploy
```

## 🌐 URLs Configuradas

Após o deploy, as seguintes rotas estarão disponíveis:

- `/` → Redireciona para `/medicos.html`
- `/medicos` → Página para médicos
- `/pacientes` → Página para pacientes
- `/public/*` → Arquivos estáticos (imagens, etc.)

## ⚡ Otimizações Incluídas

### Performance
- Cache otimizado para arquivos estáticos (1 ano)
- Compressão automática
- CDN global da Vercel

### Segurança
- Headers de segurança configurados
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection habilitado

### SEO
- Redirecionamentos limpos
- URLs amigáveis
- Meta tags configuradas

## 🔧 Configurações Personalizadas

O arquivo `vercel.json` inclui:

- **Builds**: Configuração para arquivos estáticos
- **Routes**: Redirecionamentos e roteamento
- **Headers**: Segurança e cache
- **Redirects**: URLs amigáveis

## 📱 Domínio Personalizado

Após o deploy, você pode configurar um domínio personalizado:

1. No painel da Vercel, vá em "Settings" → "Domains"
2. Adicione seu domínio (ex: `yuna.com.br`)
3. Configure os DNS conforme instruções
4. SSL será configurado automaticamente

## 🔍 Monitoramento

A Vercel oferece:
- Analytics de performance
- Logs de deploy
- Monitoramento de uptime
- Métricas de Core Web Vitals

## 🆘 Solução de Problemas

### Build Falha
- Verifique se todos os arquivos estão presentes
- Confirme que não há erros de sintaxe no HTML/CSS/JS

### Imagens Não Carregam
- Verifique se estão na pasta `/public/`
- Confirme os caminhos nos arquivos HTML

### Redirecionamentos Não Funcionam
- Verifique o arquivo `vercel.json`
- Teste localmente primeiro

## 📞 Suporte

- [Documentação Vercel](https://vercel.com/docs)
- [Comunidade Vercel](https://github.com/vercel/vercel/discussions)
- [Status da Vercel](https://vercel-status.com/)

---

**🎉 Seu projeto está pronto para o mundo!**