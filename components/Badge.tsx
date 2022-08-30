import { MouseEvent, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

export type BadgeType = 'success' | 'warning' | 'danger' | 'info'

interface BadgeProps {
  color?: string
  type?: BadgeType
  onRemove?: () => void
  onClick?: () => void
  className?: string
  children?: React.ReactNode
}

const Badge = ({
  color,
  type = 'info',
  children,
  onRemove,
  onClick,
  className,
}: BadgeProps) => {
  const handleRemove = useCallback(
    (e: MouseEvent) => {
      if (onRemove) {
        e.stopPropagation()
        onRemove()
      }
    },
    [onRemove],
  )

  return (
    <span
      onClick={onClick}
      className={twMerge(
        'inline-flex whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium text-white',
        type === 'success' && 'bg-green-100 text-green-800',
        type === 'warning' && 'bg-yellow-100 text-yellow-800',
        type === 'danger' && 'bg-red-100 text-red-800',
        type === 'info' && 'bg-blue-100 text-blue-800',
        onClick && 'cursor-pointer hover:bg-gray-100',
        className,
      )}
      style={{
        backgroundColor: color,
      }}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={handleRemove}
          className={twMerge(
            'ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full  focus:text-white focus:outline-none',
            type === 'success' &&
              'hover:bg-green-200 hover:text-green-500 focus:bg-green-500',
            type === 'warning' &&
              'hover:bg-yellow-200 hover:text-yellow-500 focus:bg-yellow-500',
            type === 'danger' &&
              'hover:bg-red-200 hover:text-red-500 focus:bg-red-500',
            type === 'info' &&
              'hover:bg-blue-200 hover:text-blue-500 focus:bg-blue-400',
          )}
        >
          <svg
            className="h-2 w-2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 8 8"
          >
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M1 1l6 6m0-6L1 7"
            />
          </svg>
        </button>
      )}
    </span>
  )
}

export default Badge
