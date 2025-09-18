# Demonstração de Métodos HTTP com React

Esta aplicação demonstra o uso de todos os métodos HTTP (GET, POST, PUT, PATCH, DELETE) utilizando tanto **Fetch API** quanto **Axios** com **Beeceptor** como API mock.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para construção da interface
- **Fetch API** - API nativa do JavaScript para requisições HTTP
- **Axios** - Biblioteca popular para requisições HTTP
- **Beeceptor** - Serviço para criar APIs mock rapidamente

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Navegador web moderno

## 🛠️ Instalação e Execução

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar Beeceptor:**
   - Acesse [beeceptor.com](https://beeceptor.com)
   - Crie um endpoint personalizado (ex: `meu-teste.free.beeceptor.com`)
   - No arquivo `src/App.js`, substitua `your-endpoint` pela sua URL:
     ```javascript
     const API_BASE_URL = 'https://seu-endpoint.free.beeceptor.com';
     ```

3. **Executar a aplicação:**
   ```bash
   npm start
   ```

4. **Abrir no navegador:**
   - A aplicação estará disponível em `http://localhost:3000`

## 🔧 Funcionalidades

### Métodos HTTP Implementados:

#### 🟢 GET - Buscar Dados
- **Fetch:** `fetch(url)`
- **Axios:** `axios.get(url)`
- Busca lista de usuários da API

#### 🔵 POST - Criar Dados
- **Fetch:** `fetch(url, { method: 'POST', body: JSON.stringify(data) })`
- **Axios:** `axios.post(url, data)`
- Cria novo usuário com nome e email

#### 🟡 PUT - Atualizar Completo
- **Fetch:** `fetch(url, { method: 'PUT', body: JSON.stringify(data) })`
- **Axios:** `axios.put(url, data)`
- Substitui completamente os dados do usuário

#### 🟠 PATCH - Atualizar Parcial
- **Fetch:** `fetch(url, { method: 'PATCH', body: JSON.stringify(data) })`
- **Axios:** `axios.patch(url, data)`
- Atualiza apenas campos específicos do usuário

#### 🔴 DELETE - Remover Dados
- **Fetch:** `fetch(url, { method: 'DELETE' })`
- **Axios:** `axios.delete(url)`
- Remove usuário pelo ID

## 📱 Como Usar

1. **Configure seu endpoint Beeceptor** seguindo as instruções na aplicação
2. **Teste GET:** Clique em "Buscar Usuários" para ver dados mockados
3. **Teste POST:** Preencha nome e email, clique em "Criar Usuário"
4. **Teste PUT/PATCH:** Informe ID e novos dados, escolha atualização completa ou parcial
5. **Teste DELETE:** Informe ID do usuário e clique em "Deletar"

## 🎯 Diferenças entre Fetch e Axios

### Fetch API (Nativo)
- ✅ Nativo do JavaScript (sem dependências)
- ✅ Suporte moderno em todos os navegadores
- ❌ Mais verboso para configurações
- ❌ Não rejeita automaticamente códigos de erro HTTP
- ❌ Requer conversão manual para JSON

### Axios (Biblioteca)
- ✅ Sintaxe mais limpa e intuitiva
- ✅ Interceptadores de requisição/resposta
- ✅ Transformação automática de dados
- ✅ Melhor tratamento de erros
- ❌ Dependência externa (aumenta bundle)

## 🔍 Estrutura do Projeto

```
src/
├── App.js          # Componente principal com toda a lógica
├── App.css         # Estilos da aplicação
├── index.js        # Ponto de entrada da aplicação
public/
├── index.html      # Template HTML
package.json        # Dependências e scripts
README.md          # Este arquivo
```

## 🧪 Testando com Beeceptor

O Beeceptor permite:
- ✅ Criar endpoints HTTP instantaneamente
- ✅ Visualizar todas as requisições em tempo real
- ✅ Configurar respostas personalizadas
- ✅ Simular diferentes códigos de status
- ✅ Adicionar delays para testar loading states

## 📚 Conceitos Demonstrados

- **Estados React** com `useState`
- **Funções assíncronas** com `async/await`
- **Tratamento de erros** com `try/catch`
- **Formulários controlados** em React
- **Requisições HTTP** com diferentes métodos
- **Interface responsiva** com CSS Grid/Flexbox

## 🎨 Recursos Visuais

- Interface moderna e responsiva
- Indicadores de loading
- Códigos de cores para diferentes métodos HTTP
- Área de resposta com syntax highlighting
- Cards para exibição de usuários
- Animações e transições suaves

## 🚀 Próximos Passos

Para expandir esta aplicação, você pode:
- Adicionar autenticação
- Implementar paginação
- Adicionar validação de formulários
- Criar testes unitários
- Implementar cache de requisições
- Adicionar interceptadores Axios

---

**Desenvolvido para fins educacionais** 📚

*Demonstra conceitos fundamentais de desenvolvimento web com React e APIs REST*