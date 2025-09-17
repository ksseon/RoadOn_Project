// src/pages/Login.jsx
import React, { useState } from 'react';
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore'; // 경로 프로젝트에 맞게 조정

const Login = () => {
    const [mode, setMode] = useState('login'); // 'login' 또는 'register'
    const [identifier, setIdentifier] = useState(''); // 아이디 또는 이메일
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const validate = useAuthStore((s) => s.validateCredentials);
    const setCurrent = useAuthStore((s) => s.setCurrent);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError(null);

        if (!identifier.trim()) {
            setError('아이디(또는 이메일)를 입력하세요.');
            return;
        }
        if (!password) {
            setError('비밀번호를 입력하세요.');
            return;
        }

        setLoading(true);
        try {
            // validateCredentials는 store에서 동기적으로 검사하도록 구현되어 있음 (테스트 모드)
            const user = validate(identifier, password);
            if (!user) {
                setError('계정이 없거나 비밀번호가 일치하지 않습니다.');
                setLoading(false);
                return;
            }

            // 로그인 성공: 현재 사용자로 설정하고 마이페이지로 이동
            setCurrent(user);
            navigate('/mypage');
        } catch (err) {
            console.error(err);
            setError('로그인 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="loginStyle">
            <p></p>
            <div className="veen">
                {/* 로그인 버튼 */}
                <div className="login-btn splits">
                    <button
                        className={mode === 'login' ? 'active' : ''}
                        onClick={() => setMode('login')}
                        type="button"
                    >
                        로그인
                    </button>
                </div>

                {/* 회원가입 버튼 */}
                <div className="rgstr-btn splits">
                    <button
                        className={mode === 'register' ? 'active' : ''}
                        onClick={() => setMode('register')}
                        type="button"
                    >
                        회원가입
                    </button>
                </div>

                {/* 로그인 / 회원가입 폼 */}
                <div className={`wrapper ${mode === 'register' ? 'move' : ''}`}>
                    {/* 로그인 */}
                    <form id="login" onSubmit={handleLogin}>
                        <h3>회원 로그인</h3>

                        <div className="mail">
                            <input
                                type="text"
                                required
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                placeholder="hong@example.com"
                                aria-label="아이디 또는 이메일"
                            />
                            <label>아이디 또는 이메일</label>
                        </div>

                        <div className="passwd">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password123"
                                aria-label="비밀번호"
                            />
                            <label>비밀번호</label>
                        </div>

                        {/* 에러 메시지 */}
                        {error && (
                            <p className="error" style={{ color: '#d9534f' }}>
                                {error}
                            </p>
                        )}

                        <div className="submit">
                            <button type="submit" className="dark" disabled={loading}>
                                {loading ? '로딩...' : '로그인'}
                            </button>
                        </div>

                        <div className="lost">
                            <p>아이디 찾기</p>
                            <p>비밀번호 찾기</p>
                        </div>

                        <div className="apps">
                            <p>
                                <img src="images/login/google.png" alt="google login" />
                            </p>
                            <p>
                                <img src="images/login/kakao.png" alt="kakao login" />
                            </p>
                            <p>
                                <img src="images/login/apple.png" alt="apple login" />
                            </p>
                        </div>
                    </form>

                    {/* 회원가입 */}
                    <form id="register" onSubmit={(e) => e.preventDefault()}>
                        <h3>회원가입</h3>
                        <div className="submit">
                            <Link to="/join">
                                <button type="button" className="dark">
                                    통합회원가입 하기
                                </button>
                            </Link>
                        </div>
                        <div className="apps">
                            <p>
                                <img src="images/login/google.png" alt="google" />
                            </p>
                            <p>
                                <img src="images/login/kakao.png" alt="kakao" />
                            </p>
                            <p>
                                <img src="images/login/apple.png" alt="apple" />
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
