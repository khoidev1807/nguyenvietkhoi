import React from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface FullSizeBtnProps{
    className?:string
    children:React.ReactNode
    onClick?:()=>void
}

const FullSizeBtn:React.FC<FullSizeBtnProps> = ({children,className,onClick}) => {
  return (
    <Button variant={`outline`} onClick={onClick} className={cn("w-full bg-[#D1D5DB] hover:bg-[#D1D5DB]/80 dark:bg-white px-2 py-1 dark:hover:bg-stone-900",className)}>
          {children}
    </Button>
  )
}

export default FullSizeBtn