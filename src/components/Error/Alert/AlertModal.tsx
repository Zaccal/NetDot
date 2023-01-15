import Alert from 'react-bootstrap/Alert';

interface AlertModalProps {
  text: string,
  className?: string,
  visible: boolean,
  setVisible: (state: boolean, text: string) => void
}

const AlertModal = ({text, visible, setVisible, className}: AlertModalProps) => {  
  return (
    <Alert variant="danger" className={className} dismissible onClose={() => setVisible(false, '')} style={{display: visible ? 'block' : 'none'}}>
      <p className='m-0'>
        {text}
      </p>
    </Alert>
  )
}

export default AlertModal