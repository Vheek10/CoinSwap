// components/ui/button.tsx
import { cn } from '@/lib/utils'

export function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition", className)}
      {...props}
    >
      {children}
    </button>
  )
}
