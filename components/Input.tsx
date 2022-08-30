import { ComponentPropsWithRef, forwardRef } from 'react'

export interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string
}

export type InputRef = HTMLInputElement

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const { name, label, type = 'text', ...rest } = props

  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-1">
        <input
          ref={ref}
          name={name}
          type={type}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          {...rest}
        />
      </div>
    </div>
  )
})

Input.displayName = 'Input'

export default Input
