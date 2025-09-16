import { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    const [mode, setMode] = useState('login'); // 'login' 또는 'register'

    return (
        <div id="loginStyle">
            <p></p>
            <div className="veen">
                {/* 로그인 버튼 */}
                <div className="login-btn splits">
                    <button
                        className={mode === 'login' ? 'active' : ''}
                        onClick={() => setMode('login')}
                    >
                        로그인
                    </button>
                </div>

                {/* 회원가입 버튼 */}
                <div className="rgstr-btn splits">
                    <button
                        className={mode === 'register' ? 'active' : ''}
                        onClick={() => setMode('register')}
                    >
                        회원가입
                    </button>
                </div>

                {/* 로그인 / 회원가입 폼 */}
                <div className={`wrapper ${mode === 'register' ? 'move' : ''}`}>
                    {/* 로그인 */}
                    <form id="login">
                        <h3>회원 로그인</h3>
                        <div className="mail">
                            <input type="email" required />
                            <label>아이디 또는 이메일</label>
                        </div>
                        <div className="passwd">
                            <input type="password" required />
                            <label>비밀번호</label>
                        </div>
                        <div className="submit">
                            <button type="submit" className="dark">
                                로그인
                            </button>
                        </div>
                        <div className="lost">
                            <p>아이디 찾기</p>
                            <p>비밀번호 찾기</p>
                        </div>
                        <div className="apps">
                            <p>
                                <img src="images/login/google.png" alt="" />
                            </p>
                            <p>
                                <img src="images/login/kakao.png" alt="" />
                            </p>
                            <p>
                                <img src="images/login/apple.png" alt="" />
                            </p>
                        </div>
                    </form>

                    {/* 회원가입 */}
                    <form id="register">
                        <h3>회원가입</h3>
                        <div className="submit">
                            <Link>
                                <button className="dark">통합회원가입 하기</button>
                            </Link>
                        </div>
                        <div className="apps">
                            <p>
                                <img src="images/login/google.png" alt="" />
                            </p>
                            <p>
                                <img src="images/login/kakao.png" alt="" />
                            </p>
                            <p>
                                <img src="images/login/apple.png" alt="" />
                            </p>
                        </div>
                    </form>
                    {/* <form id="register">
            <div className="mail">
              <input type="mail" name="" />
              <label>Mail</label>
            </div>
            <div className="name">
              <input type="text" name="" />
              <label>Full Name</label>
            </div>
            <div className="uid">
              <input type="text" name="" />
              <label>User Name</label>
            </div>
            <div className="passwd">
              <input type="password" name="" />
              <label>Password</label>
            </div>
            <div className="phone">
              <input type="password" name="" />
              <label>Phone</label>
            </div>
            <div className="submit">
              <button className="dark">Register</button>
            </div>
          </form> */}
                </div>
            </div>
        </div>
    );
};

export default Login;
