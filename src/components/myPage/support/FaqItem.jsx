import { useState, useCallback } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const FaqItem = ({
    id,
    question = '제목제목',
    answer = '내용',
    isOpen, // (선택) 컨트롤드 모드
    defaultOpen = false,
    onToggle, // (선택) 클릭 시 onToggle(id)
}) => {
    // 언컨트롤드 내부 상태
    const [uOpen, setUOpen] = useState(!!defaultOpen);
    const open = typeof isOpen === 'boolean' ? isOpen : uOpen;

    const toggle = useCallback(() => {
        onToggle?.(id);
        if (typeof isOpen !== 'boolean') setUOpen((v) => !v);
    }, [onToggle, id, isOpen]);

    return (
        <div className={`faq-main-item ${open ? 'on' : ''}`}>
            <div
                className="faq-main-item-question"
                role="button"
                tabIndex={0}
                onClick={toggle}
                onKeyDown={(e) =>
                    (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggle())
                }
                aria-expanded={open}
                aria-controls={id ? `${id}-answer` : undefined}
            >
                <div className="faq-main-item-question-txt">
                    <h2>Q.</h2>
                    <p>{question}</p>
                </div>

                {/* 회전은 CSS에서: .faq-main-item.on .faq-main-item-question-icon { transform: rotate(180deg); } */}
                <div className="faq-main-item-question-icon">
                    <IoIosArrowDown />
                </div>
            </div>

            <div id={id ? `${id}-answer` : undefined} className="faq-main-item-answer">
                <h2>A.</h2>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;
