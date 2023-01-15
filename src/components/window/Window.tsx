import { ReactNode } from 'react'
import classes from './Window.module.css'

const Window = ({children}: {children: ReactNode | undefined | null | boolean}) => {
  return (
    <div className={classes.window}>
        {children}
    </div>
  )
}

export default Window