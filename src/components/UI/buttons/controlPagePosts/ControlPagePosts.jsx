import React, {useState} from "react";
import classes from "./ControlPagePosts.module.css";

export const ControlPagePosts = ({page, totalPages, nextPageFn, backPageFn}) => {
    const [backBtnStatus, setBackBtnStatus] = useState(true)
    const [nextBtnStatus, setNextBtnStatus] = useState(totalPages === 0 ? false : true)

    const checkNowPageNext = event => {
        event.preventDefault()
        const statusNowPage = nextPageFn()
        setBackBtnStatus(false)

        if (statusNowPage === false) {
            setNextBtnStatus(true)
        }

        return false
    }

    const checkNowPageBack = event => {
        event.preventDefault()
        const statusNowPage = backPageFn()

        if (statusNowPage === false) {
            setBackBtnStatus(true)
        }

        return false
    }

    return (
        <div className={classes.controlContainer}>
            <button onClick={e => checkNowPageBack(e)} className={classes.btn} disabled={backBtnStatus}>back</button>
            <p style={{textAlign: 'center'}}>{page}/{totalPages == 0 ? 1 : totalPages}</p>
            <button onClick={e => checkNowPageNext(e)} className={classes.btn} disabled={nextBtnStatus}>next</button>
        </div>
    )
}