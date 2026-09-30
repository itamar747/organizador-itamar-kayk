import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  // Função para adicionar tarefa (Inclusão)
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Função para remover tarefa (Exclusão)
  const handleDeleteTask = (id) => {
    const tasksAtualizadas = tasks.filter((task) => task.id !== id);
    setTasks(tasksAtualizadas);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>OrganizaTudo - Gestão de Tarefas da Dupla</h2>
      <p style={{ color: '#666' }}>Trabalho prático de Sistemas de Informação (Kayk e Itamar)</p>
      
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;