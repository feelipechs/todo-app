import { useState } from 'react'
import { Task } from '../types/task'

export function addTask(tasks: Task[], text: string): Task[] {
  if (!text.trim()) throw new Error('Task text cannot be empty')
  const newTask: Task = {
    id: crypto.randomUUID(),
    text: text.trim(),
    completed: false,
  }
  return [...tasks, newTask]
}

export function toggleTaskStatus(tasks: Task[], id: string): Task[] {
  return tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  )
}

export function removeTask(tasks: Task[], id: string): Task[] {
  return tasks.filter(task => task.id !== id)
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddTask = (text: string) => setTasks(prev => addTask(prev, text))
  const handleToggle  = (id: string)   => setTasks(prev => toggleTaskStatus(prev, id))
  const handleRemove  = (id: string)   => setTasks(prev => removeTask(prev, id))

  return {
    tasks,
    addTask: handleAddTask,
    toggleTaskStatus: handleToggle,
    removeTask: handleRemove,
  }
}
