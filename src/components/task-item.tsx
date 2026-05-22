import { Task } from '../types/task'
import Button from './ui/button'

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export default function TaskItem({ task, onToggle, onRemove }: TaskItemProps) {
  return (
    <li className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 cursor-pointer"
      />
      <span
        className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-100'}`}
      >
        {task.text}
      </span>
      <Button variant="danger" onClick={() => onRemove(task.id)}>
        Remover
      </Button>
    </li>
  )
}
