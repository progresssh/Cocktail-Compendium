import React from 'react'
import { twMerge } from 'tailwind-merge'

export type ButtonColor = 'primary' | 'light' | 'danger'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  children: React.ReactNode
  color?: ButtonColor
  variant?: 'normal' | 'rounded'
}

export default React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref,
) {
  const {
    onClick,
    children,
    color = 'primary',
    variant = 'normal',
    className,
    type,
    ...rest
  } = props

  return (
    <button
      ref={ref}
      onClick={onClick}
      type={type || 'button'}
      className={twMerge(
        'inline-flex items-center border text-sm font-medium  shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ',
        color === 'primary' &&
          'border-transparent bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 disabled:bg-gray-300',
        color === 'light' &&
          'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-primary-500',
        color === 'danger' &&
          'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
        variant === 'normal' && 'rounded-md px-4 py-2',
        variant === 'rounded' && 'rounded-full p-3',

        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
})
