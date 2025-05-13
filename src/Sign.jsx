import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import logo from './images/logo.png';
import newLogo from './images/newLogo.png';
import { Link } from 'react-router-dom';
import signImage from "./images/sign.png";
import { auth } from './firebase'; 

const Sign = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Користувача успішно зареєстровано');
            setSuccessMessage('Користувача успішно зареєстровано');
            setError(null); // Скинути помилку, якщо вона була
        } catch (err) {
            setError(err.message);
            console.error('Помилка реєстрації:', err);
        }
    };

    // Ефект для очищення повідомлення про успіх через 10 секунд
    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('');
            }, 5000); // 10 секунд

            return () => clearTimeout(timer); // Очищення таймера при демонтажі або оновленні
        }
    }, [successMessage]);
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
                            left: 1160,
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
                        left: 1230,
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
                        position: 'absolute', 
                        left: 800, 
                        top: -600, 
                    }}>
                        <div style={{
                            color: '#313131',
                            fontSize: 40,
                            fontFamily: 'Poppins',
                            fontWeight: '600',
                            wordWrap: 'break-word',
                        }}>
                            Зареєструватися
                        </div>
                        <div style={{
                            opacity: 0.75,
                            color: '#313131',
                            fontSize: 16,
                            fontFamily: 'Poppins',
                            fontWeight: '400',
                            wordWrap: 'break-word'
                        }}>
                            Зареєструйтесь, щоб ви могли отримати доступ до свого особистого облікового запису.
                        </div>

                        <img
                            style={{ width: 440, height: 600, position: 'absolute', left: -640, top: -100 }}
                            src={signImage}
                            alt="sign"
                        />

                        <div style={{
                            width: '100%',
                            height: '100%',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            gap: 24,
                            display: 'inline-flex'
                        }}>
                            {/* Рядок для імені та прізвища */}
                            <div style={{
                                display: 'flex',
                                gap: 16,
                                width: 510,
                            }}>
                                {/* Поле для імені */}
                                <div style={{
                                    width: '50%',
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
                                                type="text"
                                                placeholder="Ім’я"
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

                                {/* Поле для прізвища */}
                                <div style={{
                                    width: '50%',
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
                                                type="text"
                                                placeholder="Прізвище"
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
                            </div>



                            {/* Рядок для електронної пошти та мобільного телефону */}
                            <div style={{
                                display: 'flex',
                                gap: 16,
                                width: 510,
                            }}>
                                {/* Поле для електронної пошти */}
                                <div style={{
                                    width: '50%',
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
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
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

                                {/* Поле для мобільного телефону */}
                                <div style={{
                                    width: '50%',
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
                                                type="tel"
                                                placeholder="Мобільний телефон"
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
                            </div>

                            {/* Рядок для пароля */}
                            <div style={{
                                width: 510,
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
                                            type="password"
                                            placeholder="Пароль"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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

                            {/* Рядок для підтвердження пароля */}
                            <div style={{
                                width: 510,
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
                                            type="password"
                                            placeholder="Підтвердження пароля"
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
                        </div>

                        <div onClick={handleRegister} style={{
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
                            marginTop: 310,
                        }}>
                            <div style={{ color: '#F3F3F3', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600' }}>
                                Створити акаунт
                            </div>
                        </div>
                        {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

                        {/* Додано обгортку для тексту "Вже маєте обліковий запис?" */}
                            <div style={{
                                width: 512, 
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 4,
                                marginTop: 16,
                            }}>
                                <span style={{ color: '#313131', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500' }}>Вже маєте обліковий запис? </span>
                                <Link to="/log" style={{ textDecoration: 'none' }}>
    <span style={{ color: '#7C4EE4', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600' }}>
        Увійти
    </span>
                                </Link>

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

export default Sign;
