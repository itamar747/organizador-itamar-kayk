import React from 'react';

function TaskList({ tasks, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666' }}>Nenhuma tarefa cadastrada no momento.</p>;
  }

  return (
    <div>
      <h3>Tarefas Cadastradas</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '12px', marginBottom: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong style={{ fontSize: '16px' }}>{task.titulo}</strong>
              <p style={{ margin: '5px 0 0 0', color: '#555' }}>{task.descricao || 'Sem descrição'}</p>
            </div>
            <button 
              onClick={() => onDeleteTask(task.id)} 
              style={{ background: '#dc3545', color: '#white', border: 'none', padding: '6px 10px', cursor: 'pointer', borderRadius: '4px', color: '#fff' }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;