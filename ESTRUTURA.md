# 📂 Estrutura dos Arquivos - Landing Pages Yuna

As landing pages estão **completamente separadas**, cada uma com seus próprios arquivos CSS e JavaScript independentes.

## 📁 Arquivos por Landing Page

### 👨‍⚕️ Landing Page para Médicos
```
medicos.html    → Página HTML
medicos.css     → Estilos exclusivos (paleta azul profissional)
medicos.js      → JavaScript específico
```

**Características:**
- ✅ Cor principal: Azul (#2563eb)
- ✅ Tom profissional e técnico
- ✅ Foco em benefícios clínicos
- ✅ Animações sutis

**Acesse:** http://localhost:8080/medicos.html

---

### ❤️ Landing Page para Pacientes e Familiares
```
pacientes.html  → Página HTML
pacientes.css   → Estilos exclusivos (paleta rosa/roxo acolhedora)
pacientes.js    → JavaScript específico
```

**Características:**
- ✅ Cor principal: Rosa (#ec4899)
- ✅ Tom acolhedor e humanizado
- ✅ Foco em conforto e recuperação
- ✅ FAQ interativo
- ✅ Depoimentos

**Acesse:** http://localhost:8080/pacientes.html

---

## 🎨 Diferenças de Design

### Paleta de Cores

**Médicos:**
- Primary: `#2563eb` (Azul)
- Secondary: `#10b981` (Verde)
- Gradiente Hero: Azul → Roxo

**Pacientes:**
- Primary: `#ec4899` (Rosa)
- Secondary: `#8b5cf6` (Roxo)
- Gradiente Hero: Rosa → Vermelho suave

### Elementos Únicos

**Médicos:**
- Cards de benefícios técnicos
- Estatísticas clínicas
- Linguagem profissional

**Pacientes:**
- Cards de diferenciais emocionais
- FAQ com accordion
- Depoimentos reais
- Informações de contato destacadas

---

## 🔧 Vantagens da Separação

✅ **Independência Total**
- Cada página pode ser modificada sem afetar a outra
- Estilos específicos para cada público

✅ **Performance**
- CSS/JS otimizado para cada página
- Sem código desnecessário carregado

✅ **Manutenção Facilitada**
- Alterações isoladas
- Menos conflitos
- Código mais limpo

✅ **Personalização Fácil**
- Temas diferentes por página
- Funcionalidades específicas

---

## 📝 Como Editar

### Alterar Cores da Página de Médicos
```css
/* Edite: medicos.css - linha 9-14 */
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
}
```

### Alterar Cores da Página de Pacientes
```css
/* Edite: pacientes.css - linha 9-14 */
:root {
    --primary-color: #ec4899;
    --secondary-color: #8b5cf6;
}
```

### Adicionar Funcionalidades

**Para Médicos:**
- Edite `medicos.js`

**Para Pacientes:**
- Edite `pacientes.js`

---

## 📦 Arquivos Antigos (não utilizados)

Os arquivos antigos não são mais usados e podem ser removidos:
```
styles.css  → (não usado, pode ser removido)
script.js   → (não usado, pode ser removido)
```

---

## 🚀 Deploy

Ao fazer deploy, envie todos os arquivos:

**Essenciais:**
```
✅ medicos.html + medicos.css + medicos.js
✅ pacientes.html + pacientes.css + pacientes.js
```

**Opcionais (podem ser removidos):**
```
❌ styles.css
❌ script.js
```

---

## ✨ Resumo

| Página | HTML | CSS | JS | Cor Principal |
|--------|------|-----|----|--------------| 
| Médicos | `medicos.html` | `medicos.css` | `medicos.js` | Azul #2563eb |
| Pacientes | `pacientes.html` | `pacientes.css` | `pacientes.js` | Rosa #ec4899 |

**Cada landing page é 100% independente e pode ser personalizada separadamente!** 🎉

