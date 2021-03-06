import React, { useState } from "react";

const Paginator = ({
    totalCount,
    pageSize,
    currentPage,
    onPageChanged,
    portionSize = 10,
}) => {
    const pagesCount = Math.ceil(totalCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className="pagination">
            {portionNumber > 1 && (
                <button onClick={() => setPortionNumber(portionNumber - 1)}>
                    PREV
                </button>
            )}

            {pages
                .filter(
                    (page) =>
                        page >= leftPortionPageNumber &&
                        page <= rightPortionPageNumber
                )
                .map((page) => {
                    return (
                        <button
                            className={
                                page === currentPage
                                    ? "pagination__item active"
                                    : "pagination__item"
                            }
                            key={page}
                            onClick={() => {
                                onPageChanged(page);
                            }}
                        >
                            {page}
                        </button>
                    );
                })}

            {portionCount > portionNumber && (
                <button onClick={() => setPortionNumber(portionNumber + 1)}>
                    NEXT
                </button>
            )}
        </div>
    );
};

export default Paginator;
