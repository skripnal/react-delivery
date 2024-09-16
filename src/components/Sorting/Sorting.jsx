import { useState } from 'react'

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

import styles from './Sorting.module.scss'
import SortingPopup from './SortingPopup'
import { useSelector } from 'react-redux'
import { sortList } from '../../enums/data'

const Sorting = () => {
    const sortBy = useSelector((state) => state.filterSlice.sortBy)
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            <div>
                sort by:{' '}
                <span onClick={() => setOpen(!open)}>
                    {sortBy}
                    {open && <SortingPopup />}
                </span>
            </div>
        </div>
    )
}

export default Sorting
