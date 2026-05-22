import { describe, it, expect } from 'vitest'
import { addTask, toggleTaskStatus, removeTask } from '../src/hooks/use-tasks'
import { Task } from '../src/types/task'

describe('addTask', () => {
  it('should add a task with valid text', () => {
    const result = addTask([], 'Comprar pão')
    expect(result).toHaveLength(1)
    expect(result[0].text).toBe('Comprar pão')
    expect(result[0].completed).toBe(false)
  })

  it('should throw an error when text is empty or whitespace', () => {
    expect(() => addTask([], '')).toThrow()
    expect(() => addTask([], '   ')).toThrow()
  })
})

describe('toggleTaskStatus', () => {
  it('should toggle task from pending to completed', () => {
    const tasks: Task[] = [{ id: '1', text: 'Tarefa', completed: false }]
    const result = toggleTaskStatus(tasks, '1')
    expect(result[0].completed).toBe(true)
  })

  it('should toggle task from completed to pending', () => {
    const tasks: Task[] = [{ id: '1', text: 'Tarefa', completed: true }]
    const result = toggleTaskStatus(tasks, '1')
    expect(result[0].completed).toBe(false)
  })
})

describe('removeTask', () => {
  it('should remove the correct task by id', () => {
    const tasks: Task[] = [
      { id: '1', text: 'Tarefa A', completed: false },
      { id: '2', text: 'Tarefa B', completed: false },
    ]
    const result = removeTask(tasks, '1')
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('2')
  })
})
