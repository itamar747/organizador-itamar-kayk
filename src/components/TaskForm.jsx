import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação simples exigida pelo professor
    if (titulo.trim() === '') {
      setErro('O título da tarefa não pode ficar vazio!');
      return;
    }

    setErro('');
    onAddTask({ id: Date.now(), titulo, descricao });
    setTitulo('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h3>Adicionar Nova Tarefa</h3>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      
      <div style={{ marginBottom: '10px' }}>
        <label>Título: </label><br />
        <input 
          type="text" 
          value={titulo} 
          onChange={(e) => setTitulo(e.target.value)} 
          placeholder="Ex: Estudar React"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Descrição: </label><br />
        <input 
          type="text" 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
          placeholder="Ex: Fazer o trabalho da faculdade"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <button type="submit" style={{ padding: '10px 15px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Cadastrar Tarefa
      </button>
    </form>
  );
}

export default TaskForm;