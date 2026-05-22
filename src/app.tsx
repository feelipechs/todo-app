import { useState } from 'react'
import { useTasks } from './hooks/use-tasks'
import Input from './components/ui/input'
import Button from './components/ui/button'
import TaskList from './components/task-list'

export default function App() {
  const { tasks, addTask, toggleTaskStatus, removeTask } = useTasks()
  const [text, setText] = useState('')

  const handleAdd = () => {
    if (!text.trim()) return
    addTask(text)
    setText('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Gerenciador de Tarefas
      </h1>
      <div className="flex gap-2 mb-6">
        <div className="flex-1">
          <Input
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite uma tarefa..."
          />
        </div>
        <Button onClick={handleAdd}>Adicionar</Button>
      </div>
      <TaskList
        tasks={tasks}
        onToggle={toggleTaskStatus}
        onRemove={removeTask}
      />
    </div>
  )
}
