// src/components/login/join/JoinConsent.jsx
import { useEffect, useMemo, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './style.scss';

const JoinConsent = ({ terms = undefined, onRequiredChange = () => {} }) => {
    const DEFAULT_TERMS = [
        {
            id: 'term-1',
            title: '[필수] 서비스 이용약관 동의',
            required: true,
            content: `본 약관은 회사가 제공하는 서비스의 이용 조건과 절차를 규정합니다.
회원은 서비스를 사용하는 동안 관련 법령과 본 약관을 준수해야 합니다.
회사는 서비스 운영과 관련된 정책을 별도로 정할 수 있으며 회원은 이를 따라야 합니다.
계정 관리 및 보안 유지 책임은 회원 본인에게 있습니다.
서비스 제공을 위해 회사는 공지사항이나 이메일 등으로 안내할 수 있습니다.`,
        },
        {
            id: 'term-2',
            title: '[필수] 개인정보 수집 및 이용 동의',
            required: true,
            content: `회사는 회원 가입과 서비스 제공을 위해 최소한의 개인정보를 수집합니다.
수집되는 정보에는 이름, 연락처, 이메일, 접속 기록 등이 포함될 수 있습니다.
개인정보는 회원 식별, 서비스 이용, 고객 응대 등의 목적으로 활용됩니다.
관련 법령이 정한 기간 동안만 보관되며 이후 안전하게 파기됩니다.
회원은 언제든지 개인정보 수집 및 이용에 대한 동의를 철회할 수 있습니다.`,
        },
        {
            id: 'term-3',
            title: '[필수] 만 14세 이상 여부 확인',
            required: true,
            content: `본 서비스는 만 14세 이상부터 가입할 수 있습니다.
14세 미만 아동은 법정대리인의 동의 없이 서비스를 이용할 수 없습니다.
회원은 본인의 연령이 사실과 다르지 않음을 확인해야 합니다.
필요 시 회사는 본인 확인 절차를 요청할 수 있습니다.
허위 정보 제공이 확인되면 서비스 이용이 제한될 수 있습니다.`,
        },
        {
            id: 'term-4',
            title: '[선택] 홍보성 정보 수신 동의',
            required: false,
            content: `회사는 신규 서비스, 이벤트, 프로모션 등의 정보를 제공할 수 있습니다.
동의한 회원은 이메일, 문자, 앱 알림 등을 통해 소식을 받을 수 있습니다.
동의를 하지 않아도 기본 서비스 이용에는 아무런 제한이 없습니다.
회원은 원할 때 언제든지 수신 동의를 철회할 수 있습니다.
발송되는 광고성 정보는 관련 법령을 준수하여 안전하게 관리됩니다.`,
        },
    ];

    const items = terms || DEFAULT_TERMS;

    const [expanded, setExpanded] = useState(() =>
        items.reduce((acc, t) => ({ ...acc, [t.id]: false }), {})
    );

    const [checked, setChecked] = useState(() =>
        items.reduce((acc, t) => ({ ...acc, [t.id]: false }), {})
    );

    const masterRef = useRef(null);

    const allChecked = useMemo(() => items.every((t) => !!checked[t.id]), [items, checked]);
    const someChecked = useMemo(
        () => items.some((t) => !!checked[t.id]) && !allChecked,
        [items, checked, allChecked]
    );
    const requiredChecked = useMemo(
        () => items.filter((t) => t.required).every((t) => !!checked[t.id]),
        [items, checked]
    );

    // 부모에게 필수약관 동의 여부 알림
    useEffect(() => {
        onRequiredChange(Boolean(requiredChecked));
    }, [requiredChecked, onRequiredChange]);

    // indeterminate DOM 속성 업데이트
    useEffect(() => {
        if (!masterRef.current) return;
        masterRef.current.indeterminate = someChecked;
    }, [someChecked]);

    // 아코디언: 클릭한 항목만 열기, 다시 누르면 닫힘
    const toggleExpand = (id) =>
        setExpanded((prev) => {
            const isOpen = !!prev[id];
            const next = Object.keys(prev).reduce((acc, k) => ({ ...acc, [k]: false }), {});
            next[id] = !isOpen;
            return next;
        });

    const handleCheck = (id) => setChecked((s) => ({ ...s, [id]: !s[id] }));

    const handleToggleAll = () => {
        const next = {};
        const nextValue = !allChecked;
        items.forEach((t) => {
            next[t.id] = nextValue;
        });
        setChecked(next);
    };

    return (
        <div className="consent">
            <div className="consent-master">
                <label className="master-label" aria-label="모두 동의">
                    <input
                        ref={masterRef}
                        type="checkbox"
                        checked={allChecked}
                        aria-checked={allChecked ? 'true' : someChecked ? 'mixed' : 'false'}
                        onChange={handleToggleAll}
                    />
                    <span className="master-text">아래 약관에 모두 동의합니다</span>
                </label>
            </div>

            <ul className="consent-list" role="list">
                {items.map((t) => (
                    <li
                        key={t.id}
                        className={`consent-item ${expanded[t.id] ? 'open' : ''}`}
                        role="listitem"
                    >
                        <div className="consent-row">
                            <label className="consent-checkbox" aria-label={t.title}>
                                <input
                                    type="checkbox"
                                    checked={!!checked[t.id]}
                                    onChange={() => handleCheck(t.id)}
                                    aria-required={t.required}
                                />
                                <span className={`tag ${t.required ? 'req' : 'opt'}`}>
                                    {t.required ? '필수' : '선택'}
                                </span>
                                <span className="consent-title">
                                    {t.title.replace(/^\[.*?\]\s*/, '')}
                                </span>
                            </label>

                            <button
                                type="button"
                                className="toggle-btn button"
                                aria-expanded={!!expanded[t.id]}
                                aria-controls={`${t.id}-content`}
                                onClick={() => toggleExpand(t.id)}
                            >
                                <span className="arrow">
                                    <IoIosArrowDown />
                                </span>
                            </button>
                        </div>

                        <div
                            id={`${t.id}-content`}
                            className={`consent-content ${expanded[t.id] ? 'open' : ''}`}
                            role="region"
                            aria-hidden={!expanded[t.id]}
                        >
                            <p className="consent-paragraph">{t.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JoinConsent;
