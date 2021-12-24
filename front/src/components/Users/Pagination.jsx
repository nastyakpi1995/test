import React, { useState} from "react";
import s from './Users.module.css'

const Users = ({users, setStartArray}) => {
    const [currentPage, setCurrentPage] = useState(1)


    const editCurrentPage = (idx) => {
        setCurrentPage(idx)
        setStartArray(idx + 3)
    }


    const paginationPage = Math.round(users.length / 3)
    return (
            <div className={s.pagination}>
                {Array(paginationPage).fill('e').map((p, index) => (
                    <button
                        onClick={() => editCurrentPage(index)}
                        className={index === currentPage && s.paginationItem}>
                        {index + 1}
                    </button>
                ))}
            </div>

    )
}

export default Users
