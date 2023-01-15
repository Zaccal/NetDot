import { ReactNode } from 'react'

interface TextProps {
    visible: boolean,
    children: ReactNode,
    className?: string,
}

const Text = ({visible, children, className}: TextProps) => {
  return (
    <p className={`${className} text-danger`} style={{fontSize: 14, display: visible ? 'inline' : 'none'}}>
        {children}
    </p>
  )
}

export default Text