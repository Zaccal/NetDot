import React, {useState} from 'react';
import Modal from "../modal/Modal";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({showModal, setShowModal, showModalFn}) => {
    return (
        <Modal visible={showModal} setVisible={setShowModal} showModalFn={showModalFn}>
            <h4 className={classes.title}>Warning !</h4>
            <p className={classes.subtitle}>In inputs value must be something</p>
        </Modal>
    );
};

export default ErrorModal;