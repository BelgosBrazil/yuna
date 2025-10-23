# 🎨 Paleta de Cores Oficial da Marca YUNA

Este documento define as cores oficiais da marca YUNA conforme as diretrizes de identidade visual.

## 📐 Cores Primárias

### 1. Amarelo/Dourado (Pantone 1345 C)
```
HEX: #FDD086
RGB: R.253 G.208 B.134
CMYK: C.0 M.13 Y.50 K.0
```
**Uso:** Gradientes, destaques, elementos secundários

---

### 2. Rosa/Coral (Pantone 1777 U)
```
HEX: #FF8091
RGB: R.255 G.128 B.145
CMYK: C.0 M.64 Y.30 K.0
```
**Uso:** Gradientes, CTAs, elementos de destaque

---

### 3. Azul Escuro (Pantone 295 C/U)
```
HEX: #002855
RGB: R.0 G.40 B.85
CMYK: C.100 M.63 Y.0 K.67
```
**Uso:** Textos principais, elementos de credibilidade, botões

---

### 4. Cinza Neutro Quente (Pantone 9100 C)
```
HEX: #EDEBE8
RGB: R.237 G.235 B.232
CMYK: C.6 M.5 Y.6 K.0
```
**Uso:** Fundos, áreas de respiro, balanceamento

---

## 🎨 Aplicação nas Landing Pages

### Landing Page para Médicos
```css
--primary-color: #002855      /* Azul Escuro (principal) */
--secondary-color: #FF8091    /* Rosa/Coral (secundária) */
--accent-color: #FDD086       /* Dourado (destaque) */
--bg-light: #EDEBE8           /* Cinza neutro */
```

**Gradiente Hero:**
```css
background: linear-gradient(135deg, #FDD086 0%, #FF8091 50%, #002855 100%);
```

---

### Landing Page para Pacientes
```css
--primary-color: #FF8091      /* Rosa/Coral (principal) */
--secondary-color: #FDD086    /* Dourado (secundária) */
--accent-color: #002855       /* Azul Escuro (destaque) */
--bg-light: #EDEBE8           /* Cinza neutro */
```

**Gradiente Hero:**
```css
background: linear-gradient(135deg, #FDD086 0%, #FF8091 100%);
```

---

## 🧬 Conceito: Padrão de Genoma

A identidade visual da YUNA é baseada no conceito de genoma humano (DNA), representando:
- **Individualidade** - Cada pessoa é única
- **Cuidado personalizado** - Atenção às necessidades individuais
- **Compromisso** - Tratamento com máximo cuidado e atenção

O padrão estilizado do genoma é usado de forma flexível através de:
- Cortes e recortes
- Desconstrução dos elementos
- Extensão das "genomas"
- Composições dinâmicas e diferentes

Isso garante um caráter único mantendo a consistência da marca.

---

## 📊 Hierarquia Visual

### Médicos (Tom Profissional)
1. **Azul Escuro** → Credibilidade e confiança
2. **Rosa/Coral** → Humanização do cuidado
3. **Dourado** → Excelência e qualidade

### Pacientes (Tom Acolhedor)
1. **Rosa/Coral** → Acolhimento e cuidado
2. **Dourado** → Esperança e recuperação
3. **Azul Escuro** → Segurança e estrutura

---

## ✅ Uso Correto

### Gradientes ✓
- Sempre usar as cores oficiais
- Manter as proporções indicadas
- Usar overlay escuro (rgba(0,0,0,0.3-0.4)) quando necessário

### Textos ✓
- Textos principais: `#002855` (Azul Escuro)
- Textos secundários: `#6b7280` (Cinza médio)
- Textos sobre fundos escuros: `#ffffff` (Branco)

### Fundos ✓
- Fundos claros: `#EDEBE8` (Cinza neutro)
- Fundos brancos: `#ffffff`
- Cards e elevações: Usar sombras suaves

---

## ❌ Uso Incorreto

### Evitar:
- ❌ Alterar as cores do gradiente
- ❌ Usar tons não aprovados
- ❌ Aplicar gradiente em áreas pequenas
- ❌ Comprometer a legibilidade dos textos
- ❌ Misturar com cores que não estejam na paleta

---

## 🔄 Variações Permitidas

### Sobreposições de Gradiente
Quando o gradiente principal for muito vibrante, use overlay:
```css
background: rgba(0, 0, 0, 0.3) /* 30% preto */
background: rgba(0, 0, 0, 0.4) /* 40% preto */
```

### Versões Planas
Em situações onde gradientes são impossíveis:
- Use `#002855` (Azul) como cor principal
- Use `#FF8091` (Rosa) como cor secundária
- Use `#FDD086` (Dourado) para destaques

---

## 📝 Notas Importantes

1. **Consistência é fundamental** - Seguir sempre estas diretrizes
2. **Flexibilidade com propósito** - Adaptar quando necessário, mas sempre consultando a equipe de marca
3. **Fortalecer a identidade** - Cada aplicação deve reforçar o reconhecimento da marca
4. **DNA da marca** - O padrão de genoma deve estar presente sempre que possível

---

## 🎯 Implementação Atual

✅ **Landing Page Médicos** - Cores aplicadas  
✅ **Landing Page Pacientes** - Cores aplicadas  
✅ **Gradientes atualizados** - Conforme diretrizes  
✅ **Botões e CTAs** - Usando cores oficiais  
✅ **Textos e tipografia** - Azul escuro principal  

---

**Última atualização:** 16 de Outubro, 2025  
**Versão:** 1.0  
**Status:** Implementado nas Landing Pages

