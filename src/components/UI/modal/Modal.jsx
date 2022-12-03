import React, {useState} from 'react';
import classes from './Modal.module.css'

const Modal = props => {
    const CLOSE_BTN_ICON = 'https://cdn-icons-png.flaticon.com/512/2961/2961937.png'

    const rootClasses = [classes.ModalBackground]
    const [rootClassesContent, setRootClassesContent] = useState([classes.ModalContend])

    if (props.visible) {
        rootClasses.push(classes.active)
        setTimeout(() => {
            setRootClassesContent([...rootClassesContent, classes.active])
        }, 20)
    }


    return (
        <div className={rootClasses.join(' ')} onClick={() => props.showModalFn(false)}>
            <div className={rootClassesContent.join(' ')} onClick={event => event.stopPropagation()}>
                <div className={classes.ModalHeader}>
                    <button className={classes.closeModalBtn} onClick={() => {
                        props.showModalFn(false)
                    }}><img src={CLOSE_BTN_ICON} alt="Close here"/></button>
                </div>
                <div style={{padding: '8px 10px 8px 10px'}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Modal;