import { MouseEvent } from 'react'
import { Button } from "react-bootstrap"

interface PaginationButtonProps {
  nav: 'next' | 'prev',
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
  disabled: boolean
}

const PaginationButton = ({nav, onClick, disabled}: PaginationButtonProps) => {
  return (
    <Button disabled={disabled} onClick={onClick} variant="outline-info">
      {
        nav === 'next' ? 'next' : 'prev'
      }
    </Button>
  )
}

export default PaginationButton