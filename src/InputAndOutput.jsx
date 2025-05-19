import logo from './images/logo.png'; // Оновлений імпорт зображення
import newLogo from './images/newLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {auth, database} from './firebase'; // Імпортуємо auth
import { onAuthStateChanged } from 'firebase/auth';
import outImage from './images/out.png';
import theImage from './images/the.png';
import praImage from './images/pra.png';
import plusImage from './images/plus.png';
import { signOut } from "firebase/auth";
import {onValue, ref} from "firebase/database";
import check from "./images/check.png";
import prog from "./images/prog.png";
import userImage from "./images/user.png";

const InputAndOutput = () => {
    const [testResult, setTestResult] = useState(null);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            const userId = user.uid;
            const testResultsRef = ref(database, 'testResultsinputandoutput/' + userId);

            onValue(testResultsRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const { percentage } = data;
                    setTestResult(data);
                    setPercentage(percentage);
                }
            });
        }
    }, []);

    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Використовуємо useNavigate для перенаправлення

    const handleLogout = async () => {
        try {
            await signOut(auth); // Вихід з акаунту
            console.log("Користувача виведено з системи");
        } catch (error) {
            console.error("Помилка при виході:", error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user); // Користувач увійшов
            } else {
                setUser(null); // Користувач вийшов
                navigate('/log'); // Перенаправлення на сторінку входу
            }
        });

        return () => unsubscribe();
    }, [navigate]);
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F4F2F6' }}>
            <div style={{ width: 1440, height: 934, position: 'absolute', left: 0, top: 94 }}>
                <div style={{ width: 1440, height: 796, background: '#F4F2F6' }} />
                <div style={{ width: 580, height: 393, position: 'absolute', left: 92, top: 217 }}>
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '700',
                    lineHeight: 24,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: -100,
                    left: 650,
                }}>
                    ВВЕДЕННЯ ТА ВИВЕДЕННЯ
                </div>
                <div style={{
                    color: '#333333',
                    fontSize: 48,
                    fontFamily: 'Raleway',
                    fontWeight: '700',
                    lineHeight: 1.2,
                    letterSpacing: 0.8,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 120,
                    left: 620,
                    textAlign: 'center', // Додано для центрування тексту
                }}>
                    <div style={{ margin: 0, }}> Вивчай із</div>
                    <div style={{ margin: 0, }}>задоволенням</div>
                </div>


                <Link to="/" onClick={handleLogout}>
                    <img
                        src={outImage}
                        alt="out"
                        style={{
                            width: '43.851px',
                            height: '43.804px',
                            position: 'absolute',
                            left: 1326,
                            top: -70,
                            textDecoration: 'none'
                        }}
                    />
                </Link>

                <Link to="/user" style={{ textDecoration: 'none' }}>
                    <img
                        src={userImage}
                        alt="user"
                        style={{
                            width: '43.851px',
                            height: '43.804px',
                            position: 'absolute',
                            left: '980px',
                            top: '-70px'
                        }}
                    />
                </Link>

                <img
                    src={theImage}
                    alt="the"
                    style={{
                        width: '180px',
                        height: '180px',
                        position: 'absolute',
                        left: 270,
                        top: 320,
                    }}
                />


                <Link to="/inputandoutputtheory" style={{
                    color: '#7C4EE4',
                    fontSize: 20,
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 700,
                    lineHeight: '27px', // Встановлено правильний формат
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 325, // Вирівнюємо по лівому краю логотипу
                    top: 485,
                    textDecoration: 'none'
                }}>
                    Теорія
                </Link>

                <div style={{
                    color: '#7A7A7A',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 256, // Вирівнюємо по лівому краю логотипу
                    top: 535,
                    letterSpacing: '0.6px',
                    textAlign: 'center',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Тут ти зможеш опанувати  <br />
                        фундаментальні знання з Java
                    </div>
                </div>

                <img
                    src={praImage}
                    alt="out"
                    style={{
                        width: '150px',
                        height: '150px',
                        position: 'absolute',
                        left: 700,
                        top: 340,
                    }}
                />


                <div style={{
                    color: '#7A7A7A',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 637, // Вирівнюємо по лівому краю логотипу
                    top: 540,
                    letterSpacing: '0.6px',
                    textAlign: 'center',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Тут ти зможеш застосувати свої   <br />
                        теоретичні знання на практиці через<br />
                        виконання різноманітних завдань.
                    </div>
                </div>

                <Link to="/inputandoutputpract" style={{
                    color: '#7C4EE4',
                    fontSize: 20,
                    fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                    fontWeight: 700,
                    lineHeight: '1.4', // Встановлено правильний формат
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 720, // Вирівнюємо по лівому краю логотипу
                    top: 490,
                    textDecoration: 'none'
                }}>
                    Практика
                </Link>

                {percentage >= 80 && (
                    <img src={check} alt="Галочка"
                         style={{
                             width: 40,
                             height: 40,
                             position: 'absolute',
                             left: 820,
                             top: 478,
                         }}
                    />
                )}

                {user?.uid === '9BmZeeNofHXK8yNKduUgPPeKJoZ2' ? (
                    <>
                <div style={{
                    color: '#7A7A7A',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 1041, // Вирівнюємо по лівому краю логотипу
                    top: 540,
                    letterSpacing: '0.6px',
                    textAlign: 'center',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Дана функція доступна тільки адміну
                    </div>
                </div>

                <img
                    src={plusImage}
                    alt="out"
                    style={{
                        width: '150px',
                        height: '150px',
                        position: 'absolute',
                        left: 1110,
                        top: 340,
                    }}
                />

                <Link to="/inputandoutputplus" style={{
                    color: '#7C4EE4',
                    fontSize: 20,
                    fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                    fontWeight: 700,
                    lineHeight: '27px', // Встановлено правильний формат
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 1085, // Вирівнюємо по лівому краю логотипу
                    top: 490,
                    textDecoration: 'none'
                }}>
                    Додати тест
                </Link>

                <Link to="/inputandoutputplustheory" style={{
                    color: '#7C4EE4',
                    fontSize: 20,
                    fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                    fontWeight: 700,
                    lineHeight: '27px', // Встановлено правильний формат
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 1210, // Вирівнюємо по лівому краю логотипу
                    top: 490,
                    textDecoration: 'none'
                }}>
                    / теорію
                </Link>
                    </>
                ) : (
                    <>
                    <img
                    src={prog}
                    alt="prog"
                    style={{
                    width: '100px',
                    height: '100px',
                    position: 'absolute',
                    left: 1110,
                    top: 360,
                }}
                    />
                    <Link to="/progress" style={{
                    color: '#7C4EE4',
                    fontSize: 20,
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 700,
                    lineHeight: '27px',
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 1085,
                    top: 490,
                    textDecoration: 'none'
                }}>
                    Ваші результати
                    </Link>
                    <div style={{
                    color: '#7A7A7A',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: '1.4',
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 1041,
                    top: 540,
                    letterSpacing: '0.6px',
                    textAlign: 'center',
                }}>
                    <div style={{ margin: 0 }}>
                    Тут ви можете побачити свій прогрес
                    </div>
                    </div>
                    </>
                    )}

                <Link to="/" >
                    <img
                        src={logo}
                        alt="Лого"
                        style={{
                            width: '43.851px',
                            height: '43.804px',
                            position: 'absolute',
                            left: 90,
                            top: -70,
                            textDecoration: 'none',
                        }}
                    />
                </Link>

                {/* Додавання тексту "from Zero" та "to Hero" біля логотипу */}
                <Link to="/" style={{
                    textAlign: 'center',
                    color: '#333333',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '800',
                    position: 'absolute',
                    left: 160,
                    top: -47,
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    textDecoration: 'none',
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </Link>

                {/* Додавання тексту "Про нас" біля логотипу */}
                <Link to="/about" style={{
                    color: '#7C4EE4',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: 30,
                    position: 'absolute',
                    left: 1060,
                    top: -48,
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    textDecoration: 'none',
                }}>
                    Про нас
                </Link>

                {/* Додавання тексту "Наш курс" під "Про нас" з відстанню  */}
                <Link to="/our" style={{
                    color: '#333333',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: 30,
                    position: 'absolute',
                    left: 1172,
                    top: -48,
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    textDecoration: 'none',
                }}>
                    Наш курс
                </Link>


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

                {/* Додавання тексту "from Zero" та "to Hero" під новим логотипом */}
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
            {/* Новий блок з текстом під новим логотипом */}
            <div style={{ width: '100%', height: '100%', position: 'relative', top: 890 }}>
                <Link to="/about" style={{
                    position: 'absolute',
                    left: 745,
                    top: 45,
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: 24,
                    wordWrap: 'break-word',
                    textDecoration: 'none',
                }}>
                    Про нас
                </Link>
                <div style={{
                    position: 'absolute',
                    left: 969,
                    top: 45,
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: 24,
                    wordWrap: 'break-word'
                }}>
                    Залишити відгук
                </div>
                <Link to="/" style={{
                    position: 'absolute',
                    left: 450,
                    top: 45,
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: 24,
                    wordWrap: 'break-word',
                    textDecoration: 'none'
                }}>
                    Головна сторінка
                </Link>
                {/* Додано рамка під текстом */}
                <div style={{ width: '80%', border: '1px #7C4EE4 solid', position: 'absolute', top: 330, right: '10%', left: '8%' }}></div>
            </div>
        </div>
    );
};



export default InputAndOutput;
