import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button'
import classes from './AlertSure.module.css'

interface AlertSureProps {
    ifIsYes: () => void,
    ifIsNo: () => void,
    visibleAlert: boolean
}

const AlertSure = ({ifIsYes, ifIsNo, visibleAlert}: AlertSureProps) => {

    const eventModal = (typeEvent: 'yes' | 'no') => {
        if (typeEvent === 'yes') { ifIsYes() }
        else { ifIsNo() }
    }

    if (visibleAlert) {
        return (
            <div
              className='modal show animate-show'
              style={{ display: 'block'}}
            >
              <Modal.Dialog>
                <Modal.Header>
                  <p className={classes.alert_text}>Are you sure ?</p>
                </Modal.Header>
        
                <Modal.Body>
                    <p style={{textAlign: 'center'}}>
                        If you to choice apply your <b>all posts</b> will be deleted 
                    </p>
                </Modal.Body>

                <Modal.Footer>
                  <div style={{margin: '0 auto'}}>
                    <Button onClick={() => eventModal('yes')} variant="success">yes</Button>
                    <Button style={{marginLeft: 12}} onClick={() => eventModal('no')} variant="danger">no</Button>
                  </div>
                </Modal.Footer>
              </Modal.Dialog>
            </div>
        )
    }

    return <></>
}

export default AlertSure