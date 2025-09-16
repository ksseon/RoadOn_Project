// src/components/pagination/Pagination.jsx
import './style.scss';
import {
    MdOutlineFirstPage,
    MdOutlineLastPage,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
} from 'react-icons/md';

// 사용법:
// <Pagination page={page} total={total} pageSize={5} onPageChange={setPage} />
// <Pagination page={page} total={total} pageSize={5} visibleCount={3} onPageChange={setPage} />

const DOTS = '…';
const range = (s, e) => Array.from({ length: e - s + 1 }, (_, i) => s + i);

const makeRange = ({ totalPages, page, siblingCount = 1, boundaryCount = 1 }) => {
    if (totalPages <= 1) return [1];

    const startPages = range(1, Math.min(boundaryCount, totalPages));
    const endPages = range(Math.max(totalPages - boundaryCount + 1, boundaryCount + 1), totalPages);

    const leftSibling = Math.max(page - siblingCount, boundaryCount + 2);
    const rightSibling = Math.min(page + siblingCount, totalPages - boundaryCount - 1);

    const showLeftDots = leftSibling > boundaryCount + 2;
    const showRightDots = rightSibling < totalPages - boundaryCount - 1;

    if (!showLeftDots && showRightDots) {
        const leftCount = boundaryCount + 1 + 2 * siblingCount;
        return [...range(1, leftCount + 1), DOTS, ...endPages];
    }
    if (showLeftDots && !showRightDots) {
        const rightCount = boundaryCount + 1 + 2 * siblingCount;
        return [...startPages, DOTS, ...range(totalPages - rightCount, totalPages)];
    }
    if (showLeftDots && showRightDots) {
        return [...startPages, DOTS, ...range(leftSibling, rightSibling), DOTS, ...endPages];
    }
    return range(1, totalPages);
};

const Pagination = ({
    page,
    total,
    pageSize = 5,
    onPageChange,
    /** 한 번에 보이는 숫자(화살표 제외). siblingCount를 넘기면 이 값은 무시됩니다. */
    visibleCount = 5,
    /** 맨앞/맨뒤 고정 노출할 숫자 개수 */
    boundaryCount = 1,
    /** 현재 페이지 양옆 숫자 개수(우선순위 높음) */
    siblingCount,
    className = '',
}) => {
    const totalPages = Math.max(1, Math.ceil((total || 0) / pageSize));

    // visibleCount → siblingCount 환산 (siblingCount 명시 시 우선)
    const effSibling =
        typeof siblingCount === 'number'
            ? Math.max(0, Math.floor(siblingCount))
            : Math.max(
                  0,
                  Math.floor((Math.max(1, visibleCount) - 1 - 2 * Math.max(0, boundaryCount)) / 2)
              );

    const items = makeRange({
        totalPages,
        page,
        siblingCount: effSibling,
        boundaryCount: Math.max(0, boundaryCount),
    });

    const go = (p) => {
        const clamped = Math.max(1, Math.min(totalPages, p));
        if (clamped !== page) onPageChange?.(clamped);
    };

    const Btn = ({ type, disabled, onClick, label, children }) => (
        <button
            type="button"
            className={`pagination-btn ${type} ${disabled ? 'is-disabled' : ''}`}
            onClick={onClick}
            aria-label={label}
            disabled={disabled}
        >
            {children}
        </button>
    );

    return (
        <nav className={`pagination ${className}`} role="navigation" aria-label="pagination">
            <ul className="pagination-list">
                <li>
                    <Btn type="first" disabled={page === 1} onClick={() => go(1)} label="첫 페이지">
                        <MdOutlineFirstPage />
                    </Btn>
                </li>
                <li>
                    <Btn
                        type="prev"
                        disabled={page === 1}
                        onClick={() => go(page - 1)}
                        label="이전 페이지"
                    >
                        <MdKeyboardArrowLeft />
                    </Btn>
                </li>

                {items.map((it, idx) =>
                    it === DOTS ? (
                        <li key={`dots-${idx}`} className="pagination-ellipsis" aria-hidden="true">
                            {DOTS}
                        </li>
                    ) : (
                        <li key={it}>
                            <button
                                type="button"
                                className={`pagination-page ${page === it ? 'is-active' : ''}`}
                                onClick={() => go(it)}
                                aria-current={page === it ? 'page' : undefined}
                            >
                                {it}
                            </button>
                        </li>
                    )
                )}

                <li>
                    <Btn
                        type="next"
                        disabled={page === totalPages}
                        onClick={() => go(page + 1)}
                        label="다음 페이지"
                    >
                        <MdKeyboardArrowRight />
                    </Btn>
                </li>
                <li>
                    <Btn
                        type="last"
                        disabled={page === totalPages}
                        onClick={() => go(totalPages)}
                        label="마지막 페이지"
                    >
                        <MdOutlineLastPage />
                    </Btn>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
