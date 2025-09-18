# Demonstração de Métodos HTTP com React

Esta aplicação demonstra o uso de todos os métodos HTTP (GET, POST, PUT, PATCH, DELETE) utilizando tanto **Fetch API** quanto **Axios** com uma API mock configurada.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para construção da interface
- **Fetch API** - API nativa do JavaScript para requisições HTTP
- **Axios** - Biblioteca popular para requisições HTTP
- **API Mock** - Endpoint configurado para testes de requisições HTTP

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Navegador web moderno

## 🛠️ Instalação e Execução

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar API:**
   - A aplicação já está configurada com um endpoint funcional
   - Você pode testar diretamente os métodos HTTP

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

1. **Teste GET:** Clique em "Buscar Usuários" para ver dados mockados
2. **Teste POST:** Preencha nome e email, clique em "Criar Usuário"
3. **Teste PUT/PATCH:** Informe ID e novos dados, escolha atualização completa ou parcial
4. **Teste DELETE:** Informe ID do usuário e clique em "Deletar"

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

## 🧪 Testando a API

A aplicação permite:
- ✅ Testar todos os métodos HTTP (GET, POST, PUT, PATCH, DELETE)
- ✅ Visualizar respostas em tempo real
- ✅ Comparar implementações Fetch vs Axios
- ✅ Simular diferentes cenários de uso
- ✅ Observar estados de loading

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