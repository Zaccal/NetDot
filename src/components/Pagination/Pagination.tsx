import { MouseEvent, useState } from 'react'
import { TypeSetState } from "../../types/types"
import { getPages } from "../../utils/utilsFn"
import PaginationButton from "../button/Pagination-button/PaginationButton"
import classes from './Pagination.module.css'

interface PaginationProps {
    totalCountItems: number,
    nowPage: number,
    setNowPage: TypeSetState<number>
}

const Pagination = ({totalCountItems, nowPage, setNowPage}: PaginationProps) => {
  const countPaginationItems: number = getPages(totalCountItems, 10)
  const [disableNextBtn, setDisableNextBtn] = useState(false)
  const [disablePrevBtn, setDisablePrevBtn] = useState(true)

  function eventPageFn(event: MouseEvent<HTMLButtonElement>, nav: 'next' | 'prev') {
    event.preventDefault()

    if (nowPage < countPaginationItems && nav === 'next') {
      setNowPage(nowPage += 1)
    }

    if (nowPage > 1 && nav === 'prev') {
      setNowPage(nowPage -= 1)
    }

    if (nowPage > 1) {
      setDisablePrevBtn(false)
    }

    if (nowPage === countPaginationItems) {
      setDisableNextBtn(true)
    }

    if (nowPage === 1) {
      setDisablePrevBtn(true)
    }

    if (nowPage < countPaginationItems) {
      setDisableNextBtn(false)
    }
  }
 
  return (
    <div className={classes.pagination}>
      <PaginationButton disabled={disablePrevBtn} nav="prev" onClick={event => eventPageFn(event, 'prev')}/>
      <p className="text-center m-0">{nowPage}/{countPaginationItems}</p>
      <PaginationButton disabled={disableNextBtn} nav="next" onClick={event => eventPageFn(event, 'next')}/>
    </div>
  )
}

export default Pagination
