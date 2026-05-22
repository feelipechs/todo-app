interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'danger'
}

export default function Button({ onClick, children, variant = 'primary' }: ButtonProps) {
  const base = 'px-4 py-2 rounded cursor-pointer font-medium transition-colors'
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  }

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  )
}
