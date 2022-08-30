import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import toast, { ToastOptions } from 'react-hot-toast'

type ShowToastOpts = Omit<ToastProps, 'onClose' | 'visible'>

export interface ToastProps {
  type: 'success' | 'error'
  onClose: () => void
  visible: boolean
  title?: string
  message?: string
}

// You this function to show a toast, react-hot-toast is already set up.
export const showToast = (
  toastProps: ShowToastOpts,
  toastOptions?: ToastOptions,
) => {
  return toast.custom(
    (t) => (
      <Toast
        onClose={() => toast.dismiss(t.id)}
        visible={t.visible}
        {...toastProps}
      />
    ),
    toastOptions,
  )
}

const Toast = ({ type, title, message, onClose, visible }: ToastProps) => {
  return (
    <div
      className={`pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${
        visible ? 'animate-enter' : 'animate-leave'
      }`}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {type === 'success' && (
              <CheckCircleIcon
                className="h-6 w-6 text-green-400"
                aria-hidden="true"
              />
            )}
            {type === 'error' && (
              <XCircleIcon
                className="h-6 w-6 text-red-400"
                aria-hidden="true"
              />
            )}
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toast
