import logo from './images/logo.png';
import newLogo from './images/newLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { auth } from './firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import loginImage from './images/login.png';

const Log = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(''); 
    const navigate = useNavigate(); 

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password); 
            console.log('Користувача успішно увійшов');
            setSuccessMessage('Успішний вхід!'); 
            setError(null); 

            navigate('/our/learn');

            setTimeout(() => {
                setSuccessMessage('');
            }, 5000); // 5000 мілісекунд = 5 секунд
        } catch (err) {
            setError(err.message); 
            console.error('Помилка входу:', err);
        }
    };
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', top: -105, background: '#F4F2F6' }}>
            <div style={{ width: 1440, height: 934, position: 'absolute', left: 0, top: 94 }}>

                {/* Фон */}
                <div style={{ width: 1440, height: 796, background: '#F4F2F6' }} />

                {/* Логотип та текст "from Zero" та "to Hero" на фоні F4F2F6 */}
                <div style={{ background: '#F4F2F6', position: 'relative', zIndex: 2 }}>
                    <Link to="/" >
                    <img
                        src={logo}
                        alt="Лого"
                        style={{
                            width: '43.851px',
                            height: '43.804px',
                            position: 'absolute',
                            left: 90,
                            top: -760,
                            zIndex: 3,
                            textDecoration: 'none',
                        }}
                    />
                    </Link>

                    <Link to="/" style={{
                        textAlign: 'center',
                        color: '#333333',
                        fontSize: 20,
                        fontFamily: 'Raleway',
                        fontWeight: '800',
                        position: 'absolute',
                        left: 160,
                        top: -737,
                        transform: 'translateY(-50%)',
                        zIndex: 3,
                        textDecoration: 'none',
                    }}>
                        <div>from Zero</div>
                        <div>to Hero</div>
                    </Link>


                    <div style={{
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 16,
                        display: 'inline-flex',
                        position: 'absolute', // Додаємо абсолютне позиціювання
                        left: 100,
                        top: -600, 
                    }}>
                        <div style={{
                            color: '#313131',
                            fontSize: 40,
                            fontFamily: 'Poppins',
                            fontWeight: '600',
                            wordWrap: 'break-word',
                        }}>
                            Вхід
                        </div>
                        <div style={{
                            opacity: 0.75,
                            color: '#313131',
                            fontSize: 16,
                            fontFamily: 'Poppins',
                            fontWeight: '400',
                            wordWrap: 'break-word'
                        }}>
                            Увійдіть, щоб отримати доступ до свого облікового запису
                        </div>

                        <img
                            style={{ width: 600, height: 800, position: 'absolute', left: 650, top: -200 }}
                            src={loginImage}
                            alt="login"
                        />

                        <div style={{
                            width: '100%',
                            height: '100%',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',

                            gap: 24,
                            display: 'inline-flex',
                            position: 'relative',
                            top: 40,
                            left: 1
                        }}>
                            <div style={{
                                width: 512,
                                height: 56,
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                display: 'flex'
                            }}>
                                <div style={{
                                    alignSelf: 'stretch',
                                    height: 56,
                                    background: 'white',
                                    borderRadius: 4,
                                    border: '1px #79747E solid',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: 10,
                                    display: 'flex'
                                }}>
                                    <div style={{
                                        alignSelf: 'stretch',
                                        paddingTop: 8,
                                        paddingBottom: 8,
                                        paddingLeft: 16,
                                        borderTopLeftRadius: 4,
                                        borderTopRightRadius: 4,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        display: 'inline-flex'
                                    }}>
                                        <input
                                            type="email"
                                            placeholder="Електронна пошта"
                                            value={email} // Додано прив'язку до стану
                                            onChange={(e) => setEmail(e.target.value)} // Обробка зміни
                                            style={{
                                                flex: '1 1 0',
                                                height: 40,
                                                border: 'none',
                                                outline: 'none',
                                                fontSize: 14,
                                                fontFamily: 'Poppins',
                                                color: '#1C1B1F',
                                                padding: '0 4px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{
                                width: 512,
                                height: 56,
                                borderTopLeftRadius: 4,
                                borderTopRightRadius: 4,
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                display: 'flex'
                            }}>
                                <div style={{
                                    alignSelf: 'stretch',
                                    height: 56,
                                    background: 'white',
                                    borderRadius: 4,
                                    border: '1px #79747E solid',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    gap: 10,
                                    display: 'flex'
                                }}>
                                    <div style={{
                                        alignSelf: 'stretch',
                                        paddingTop: 4,
                                        paddingBottom: 4,
                                        paddingLeft: 16,
                                        borderTopLeftRadius: 4,
                                        borderTopRightRadius: 4,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        display: 'inline-flex'
                                    }}>
                                        <input
                                            type="password"
                                            placeholder="Пароль"
                                            value={password} // Додано прив'язку до стану
                                            onChange={(e) => setPassword(e.target.value)} // Обробка зміни
                                            style={{
                                                flex: '1 1 0',
                                                height: 40,
                                                border: 'none',
                                                outline: 'none',
                                                fontSize: 14,
                                                fontFamily: 'Poppins',
                                                color: '#313131',
                                                padding: '0 4px',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div style={{
                                width: 510,
                                minHeight: 50,
                                borderRadius: 4,
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 4,
                                display: 'flex',
                                background: '#515DEF',
                                border: '1px #79747E solid',
                                cursor: 'pointer',
                                marginTop: 16,
                            }} onClick={handleLogin}> 
                                <div style={{ color: '#F3F3F3', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600' }}>Увійти</div>
                            </div>

                            {/* Відображення повідомлення про успіх або помилку */}
                            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
                            {error && <div style={{ color: 'red' }}>{error}</div>}


                            {/* Додано обгортку для тексту "Немає облікового запису?" */}
                            <div style={{
                                width: 512, 
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 4,
                                marginTop: 16, 
                            }}>
                                <span style={{ color: '#313131', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500' }}>Немає облікового запису? </span>
                                <Link to="/sign" style={{ textDecoration: 'none' }}><span style={{ color: '#7C4EE4', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600' }}>Зареєструватися</span>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Новий логотип та текст під ним */}
                <Link to="/" >
                <img
                    src={newLogo}
                    alt="Новий логотип"
                    style={{
                        width: '43.851px',
                        height: '43.804px',
                        position: 'absolute',
                        left: 700,
                        top: 900,
                        zIndex: 2,
                        textDecoration: 'none',
                    }}
                />
                </Link>

                <Link to="/" style={{
                    textAlign: 'center',
                    color: '#333333',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '800',
                    position: 'absolute',
                    left: 812,
                    top: 900,
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    textDecoration: 'none',
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </Link>

                {/* Додатковий контент */}
                <div style={{ width: 1440, height: 397, background: 'white', position: 'absolute', left: 0, top: 890 }} />
                <div style={{
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: '24px',
                    position: 'absolute',
                    left: 565,
                    top: 1209,
                }}>Copyright Ideapeel Inc © 2025. All Right Reserved</div>
            </div>

            {/* Блок з текстом під новим логотипом */}
            <div style={{ width: '100%', height: '100%', position: 'relative', top: 890 }}>
                <Link to="/" style={{
                    position: 'absolute',
                    left: 450,
                    top: 45,
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: 24,
                    textDecoration: 'none'
                }}>
                    Головна сторінка
                </Link>
                <Link to="/about" style={{
                    position: 'absolute',
                    left: 745,
                    top: 45,
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: 24,
                    textDecoration: 'none'
                }}>
                    Про нас
                </Link>
                <Link to="/reviews" style={{
                    position: 'absolute',
                    left: 969,
                    top: 45,
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: 24,
                    textDecoration: 'none',
                }}>
                    Залишити відгук
                </Link>
                <div style={{ width: '80%', border: '1px #7C4EE4 solid', position: 'absolute', top: 330, right: '10%', left: '8%' }}></div>
            </div>
        </div>
    );
};

export default Log;
