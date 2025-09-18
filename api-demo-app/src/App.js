import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_BASE_URL = 'https://projeto-dev-web.free.beeceptor.com';

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editUser, setEditUser] = useState({ id: '', name: '', email: '' });
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [lastCreatedId, setLastCreatedId] = useState(null);

  const showResponse = (data, method, createdId = null) => {
    let responseText = `${method}: ${JSON.stringify(data, null, 2)}`;
    if (createdId) {
      responseText = `🆔 ID GERADO: ${createdId}\n\n${responseText}`;
      setLastCreatedId(createdId);
    }
    setResponse(responseText);
  };

  const fetchGetUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      const data = await response.json();
      setUsers(data);
      showResponse(data, 'GET (Fetch)');
    } catch (error) {
      showResponse({ error: error.message }, 'GET (Fetch) - Erro');
    } finally {
      setLoading(false);
    }
  };

  const fetchCreateUser = async () => {
    if (!newUser.name || !newUser.email) {
      alert('Preencha nome e email!');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newUser,
          id: Date.now(), // Gera ID único baseado no timestamp
          created_at: new Date().toISOString()
        })
      });
      const data = await response.json();
      const createdId = data.id || Date.now();
      showResponse(data, 'POST (Fetch)', createdId);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      showResponse({ error: error.message }, 'POST (Fetch) - Erro');
    } finally {
      setLoading(false);
    }
  };

  const fetchUpdateUser = async () => {
    if (!editUser.id || !editUser.name || !editUser.email) {
      alert('Preencha ID, nome e email para atualizar!');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users/${editUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: editUser.name, email: editUser.email })
      });
      const data = await response.json();
      showResponse(data, 'PUT (Fetch)');
    } catch (error) {
      showResponse({ error: error.message }, 'PUT (Fetch) - Erro');
    } finally {
      setLoading(false);
    }
  };

  const fetchPatchUser = async () => {
    if (!editUser.id) {
      alert('Informe o ID do usuário!');
      return;
    }

    const updateData = {};
    if (editUser.name) updateData.name = editUser.name;
    if (editUser.email) updateData.email = editUser.email;

    if (Object.keys(updateData).length === 0) {
      alert('Preencha pelo menos um campo para atualizar!');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users/${editUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData)
      });
      const data = await response.json();
      showResponse(data, 'PATCH (Fetch)');
    } catch (error) {
      showResponse({ error: error.message }, 'PATCH (Fetch) - Erro');
    } finally {
      setLoading(false);
    }
  };

  const fetchDeleteUser = async (userId) => {
    if (!userId) {
      alert('Informe o ID do usuário para deletar!');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
        method: 'DELETE'
      });
      const data = await response.text();
      showResponse(data || 'Usuário deletado com sucesso', 'DELETE (Fetch)');
    } catch (error) {
      showResponse({ error: error.message }, 'DELETE (Fetch) - Erro');
    } finally {
      setLoading(false);
    }
  };

  const axiosGetUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      setUsers(response.data);
      showResponse(response.data, 'GET (Axios)');
    } catch (error) {
      showResponse({ error: error.message }, 'GET (Axios) - Erro');
    } finally {
      setLoading(false);
    }
  };

  const axiosCreateUser = async () => {
    if (!newUser.name || !newUser.email) {
      alert('Preencha nome e email!');
      return;
    }

    setLoading(true);
    try {
      const userData = {
        ...newUser,
        id: Date.now(), // Gera ID único baseado no timestamp
        created_at: new Date().toISOString()
      };
      const response = await axios.post(`${API_BASE_URL}/users`, userData);
      const createdId = response.data.id || userData.id;
      showResponse(response.data, 'POST (Axios)', createdId);
      setNewUser({ name: '', email: '' }); // Limpar formulário
    } catch (error) {
      showResponse({ error: error.message }, 'POST (Axios) - Erro');
    } finally {
      setLoading(false);
    }
  };

  const axiosUpdateUser = async () => {
    if (!editUser.id || !editUser.name || !editUser.email) {
      alert('Preencha ID, nome e email para atualizar!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.put(`${API_BASE_URL}/users/${editUser.id}`, {
        name: editUser.name,
        email: editUser.email
      });
      showResponse(response.data, 'PUT (Axios)');
    } catch (error) {
      showResponse({ error: error.message }, 'PUT (Axios) - Erro');
    } finally {
      setLoading(false);
    }
  };

  const axiosPatchUser = async () => {
    if (!editUser.id) {
      alert('Informe o ID do usuário!');
      return;
    }

    // Criar objeto apenas com campos preenchidos
    const updateData = {};
    if (editUser.name) updateData.name = editUser.name;
    if (editUser.email) updateData.email = editUser.email;

    if (Object.keys(updateData).length === 0) {
      alert('Preencha pelo menos um campo para atualizar!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.patch(`${API_BASE_URL}/users/${editUser.id}`, updateData);
      showResponse(response.data, 'PATCH (Axios)');
    } catch (error) {
      showResponse({ error: error.message }, 'PATCH (Axios) - Erro');
    } finally {
      setLoading(false);
    }
  };

  const axiosDeleteUser = async (userId) => {
    if (!userId) {
      alert('Informe o ID do usuário para deletar!');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.delete(`${API_BASE_URL}/users/${userId}`);
      showResponse(response.data || 'Usuário deletado com sucesso', 'DELETE (Axios)');
    } catch (error) {
      showResponse({ error: error.message }, 'DELETE (Axios) - Erro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Demonstração de Métodos HTTP</h1>
      


      {loading && <div className="loading">Carregando...</div>}

      {/* Seção FETCH */}
      <div className="section">
        <h2>🔄 Métodos com FETCH</h2>
        
        <div className="method-group">
          <h3>GET - Buscar Usuários</h3>
          <button onClick={fetchGetUsers} disabled={loading}>
            Buscar Usuários (Fetch)
          </button>
        </div>

        <div className="method-group">
          <h3>POST - Criar Usuário</h3>
          <input
            type="text"
            placeholder="Nome"
            value={newUser.name}
            onChange={(e) => setNewUser({...newUser, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
          />
          <button onClick={fetchCreateUser} disabled={loading}>
            Criar Usuário (Fetch)
          </button>
        </div>

        <div className="method-group">
          <h3>PUT/PATCH - Atualizar Usuário</h3>
          <input
            type="text"
            placeholder="ID do usuário"
            value={editUser.id}
            onChange={(e) => setEditUser({...editUser, id: e.target.value})}
          />
          <input
            type="text"
            placeholder="Novo nome"
            value={editUser.name}
            onChange={(e) => setEditUser({...editUser, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Novo email"
            value={editUser.email}
            onChange={(e) => setEditUser({...editUser, email: e.target.value})}
          />
          <button onClick={fetchUpdateUser} disabled={loading}>
            Atualizar Completo - PUT (Fetch)
          </button>
          <button onClick={fetchPatchUser} disabled={loading}>
            Atualizar Parcial - PATCH (Fetch)
          </button>
        </div>

        <div className="method-group">
          <h3>DELETE - Deletar Usuário</h3>
          <input
            type="text"
            placeholder="ID do usuário para deletar"
            id="deleteId"
          />
          <button 
            onClick={() => {
              const id = document.getElementById('deleteId').value;
              fetchDeleteUser(id);
            }} 
            disabled={loading}
          >
            Deletar Usuário (Fetch)
          </button>
        </div>
      </div>

      {/* Seção AXIOS */}
      <div className="section">
        <h2>⚡ Métodos com AXIOS</h2>
        
        <div className="method-group">
          <h3>GET - Buscar Usuários</h3>
          <button onClick={axiosGetUsers} disabled={loading}>
            Buscar Usuários (Axios)
          </button>
        </div>

        <div className="method-group">
          <h3>POST - Criar Usuário</h3>
          <button onClick={axiosCreateUser} disabled={loading}>
            Criar Usuário (Axios)
          </button>
          <small>* Usa os mesmos dados do formulário acima</small>
        </div>

        <div className="method-group">
          <h3>PUT/PATCH - Atualizar Usuário</h3>
          <button onClick={axiosUpdateUser} disabled={loading}>
            Atualizar Completo - PUT (Axios)
          </button>
          <button onClick={axiosPatchUser} disabled={loading}>
            Atualizar Parcial - PATCH (Axios)
          </button>
          <small>* Usa os mesmos dados do formulário acima</small>
        </div>

        <div className="method-group">
          <h3>DELETE - Deletar Usuário</h3>
          <button 
            onClick={() => {
              const id = document.getElementById('deleteId').value;
              axiosDeleteUser(id);
            }} 
            disabled={loading}
          >
            Deletar Usuário (Axios)
          </button>
          <small>* Usa o mesmo ID do campo acima</small>
        </div>
      </div>

      {/* Área de resposta */}
      {response && (
        <div className="response-section">
          <h3>📤 Última Resposta:</h3>
          {lastCreatedId && (
            <div className="created-id-highlight">
              <strong>🎉 Usuário criado com ID: {lastCreatedId}</strong>
            </div>
          )}
          <pre className="response">{response}</pre>
          <button onClick={() => {
            setResponse('');
            setLastCreatedId(null);
          }}>Limpar Resposta</button>
        </div>
      )}

      {/* Lista de usuários */}
      {users.length > 0 && (
        <div className="users-section">
          <h3>👥 Usuários Carregados:</h3>
          <div className="users-list">
            {users.map((user, index) => (
              <div key={index} className="user-card">
                <strong>ID:</strong> {user.id || index + 1}<br/>
                <strong>Nome:</strong> {user.name}<br/>
                <strong>Email:</strong> {user.email}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
