import { useEffect, useRef, useState } from 'react'

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

import styles from './Sorting.module.scss'
import SortingPopup from './SortingPopup'
import { useSelector } from 'react-redux'

const Sorting = () => {
    const sortBy = useSelector((state) => state.filterSlice.sortBy)
    const [open, setOpen] = useState(false)
    const sortRef = useRef()

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.composedPath().includes(sortRef.current)) {
                setOpen(false)
                console.log('click outside')
            }
        }

        document.body.addEventListener('click', handleOutsideClick)

        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    }, [])

    return (
        <div className={styles.container} ref={sortRef}>
            {open ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            <div>
                sort by:{' '}
                <span
                    onClick={() => {
                        console.log('click on span')
                        setOpen(!open)
                    }}
                >
                    {sortBy}
                    {open && <SortingPopup setOpen={setOpen} />}
                </span>
            </div>
        </div>
    )
}

export default Sorting
