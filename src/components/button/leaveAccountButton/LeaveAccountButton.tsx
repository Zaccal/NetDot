import { MouseEventHandler } from 'react'
import { Button } from "react-bootstrap"

interface LeaveAccountButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const LeaveAccountButton = ({onClick}: LeaveAccountButtonProps) => {
  return (
    <Button onClick={onClick} variant="danger">Leave account</Button>
  )
}

export default LeaveAccountButton