import { Task } from '../types/task'
import TaskItem from './task-item'

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export default function TaskList({ tasks, onToggle, onRemove }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-gray-400 text-center py-8">
        Nenhuma tarefa cadastrada. Adicione uma acima!
      </p>
    )
  }

  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  )
}
