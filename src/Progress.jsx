import React, { useState, useEffect } from 'react';
import { auth, database } from './firebase'; // Імпорт бази даних
import {get, onValue, ref, set, update} from 'firebase/database'; // Імпорт функцій для запису в базу даних
import javaImage from './images/java11.png';
import logo from './images/logo.png'; // Оновлений імпорт зображення
import newLogo from './images/newLogo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import outImage from './images/out.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import jsPDF from "jspdf";

const Progress = () => {
    const [userId, setUserId] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [percentage, setPercentage] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const sections = [
        'testResults',
        'testResultscomments',
        'testResultsexstatemetnsblock',
        'testResultshelloworld',
        'testResultsinputandoutput',
        'testResultsliterals',
        'testResultsoperators',
        'testResultsprimitive',
        'testResultsvariables',
    ];

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            setUserId(user.uid);
            setUserEmail(user.email);
        }
    }, []);

    useEffect(() => {
        if (userId) {
            const userRef = ref(database, `users/${userId}`);
            onValue(userRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setFirstName(data.firstName || '');
                    setLastName(data.lastName || '');
                }
            }, { onlyOnce: true });
        }
    }, [userId]);


    useEffect(() => {
        if (userId) {
            let totalCorrect = 0;
            let totalQuestions = 0;
            let loadedCount = 0;

            sections.forEach(section => {
                const refPath = `${section}/${userId}`;
                const resultsRef = ref(database, refPath);
                onValue(resultsRef, (snapshot) => {
                    const data = snapshot.val();
                    if (data && data.results) {
                        totalCorrect += data.results.filter(result => result.isCorrect).length;
                        totalQuestions += data.results.length;
                    }
                    loadedCount++;
                    if (loadedCount === sections.length) {
                        const calc = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
                        setPercentage(calc);
                    }
                }, { onlyOnce: true });
            });
        }
    }, [userId]);

    const gradient = `conic-gradient(
        #C5B6F2 0%,
        #A084EA ${percentage * 0.5}%,
        #7C4EE4 ${percentage}%,
        #E0E0E0 ${percentage}% 100%
    )`;

    const handleDownloadCertificate = () => {
        const doc = new jsPDF
        doc.internal.pageSize.width = 210; // ширина сторінки
        doc.internal.pageSize.height = 165; // висота сторінки

        doc.setFillColor(244, 242, 246); // Фон
        doc.rect(0, 0, 210, 165, 'F'); // Прямокутник, що покриває всю сторінку

        doc.addImage(logo, 'PNG', 15, 10, 15, 15); // Логотип зліва вгорі
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text('from Zero', 35, 17);
        doc.text('to Hero', 40, 25);

        doc.setFontSize(35);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(255, 255, 255);
        doc.text('CERTIFICATE', 63, 50);

        doc.setFontSize(33);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(125, 78, 228);
        doc.text('CERTIFICATE', 65, 50);

        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text('OF COMPLETION', 90, 60);
        doc.line(85, 63, 123, 63);

        doc.setFontSize(28);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text('Java for Beginners', 61, 80);

        doc.setFontSize(7);
        doc.setTextColor(0, 0, 0);
        doc.text('THIS CERTIFICATE IS PROUDLY PRESENTED TO', 76, 90);

        doc.setFontSize(28);
        doc.text(`${firstName} ${lastName}`, 68, 105);

        doc.setFontSize(7);
        doc.text(
            'This certificate certifies the successful completion of the "Java for Beginners" and the mastery of core Java concepts: ' +
            'variables, literals, primitive data types, operators, input and output, expressions, statements and blocks, comments.',
            110,
            115,
            { maxWidth: 120, align: 'center' }
        );

        doc.setFontSize(10);
        doc.text('Date: ' + new Date().toLocaleDateString(), 40, 145);
        doc.text('Instructors: TH Training', 130, 145);

        doc.save('certificate.pdf');
    };
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({
        photoURL: null
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const userRef = ref(database, `users/${currentUser.uid}`);
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    setUserData(snapshot.val());
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Ви вийшли з акаунту."); // Відображає повідомлення про вихід
        } catch (error) {
            console.error("Помилка при виході:", error);
            alert("Сталася помилка, спробуйте ще раз."); // Обробка помилки
        }
    };
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: '#F4F2F6'}}>
            <div style={{width: 1440, height: 934, position: 'absolute', left: 0, top: 94}}>
                <div style={{width: 1440, height: 1000, background: '#F4F2F6'}}/>
                <div style={{width: 580, height: 393, position: 'absolute', left: 92, top: 217}}>
                </div>

                <div
                    style={{
                        width: 500,
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: 16,
                        display: 'inline-flex',
                        position: 'absolute',
                        left: 600,
                        top: -78,
                    }}
                >




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
                            top: 1100,
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
                    top: 1100,
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    textDecoration: 'none',
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </Link>


                <main style={{ maxWidth: '500px', top: '-900px', left: '450px', position: 'relative', padding: '40px', background: '#fff', borderRadius: '10px', zIndex: 9, textAlign: 'left' }}>
                    <h2 style={{ textAlign: 'center' }}>Ваш прогрес</h2>
                    {user ? (
                        <>
                            <img src={setUserData.photoURL || userData.photoURL || 'https://via.placeholder.com/150'} alt="" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', display: 'block', margin: '0 auto 20px' }} />
                            <div
                                style={{
                                    width: 200,
                                    height: 200,
                                    borderRadius: '50%',
                                    background: gradient,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxSizing: 'border-box',
                                    position: 'relative',
                                    marginBottom: 30,
                                    left: 147,
                                    top: 15,
                                }}
                            >
                                <div
                                    style={{
                                        width: 160,
                                        height: 160,
                                        borderRadius: '50%',
                                        backgroundColor: '#F4F2F6',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'absolute',
                                    }}
                                >
                    <span style={{ fontSize: '24px', color: '#7C4EE4' }}>
                        {percentage}%
                    </span>
                                </div>
                            </div>
                            <span style={{
                                display: 'block',
                                textAlign: 'center',
                                marginTop: '50px',       // відступ згори
                                marginBottom: '60px',
                                fontSize: '18px',
                                color: '#333',
                            }}>
                                Ваш шлях уже розпочато — продовжуйте в тому ж дусі!
                            </span>

                            {percentage === 100 && (
                                <button
                                    onClick={handleDownloadCertificate}
                                    style={{
                                        padding: '10px 20px',
                                        fontSize: '16px',
                                        backgroundColor: '#7C4EE4',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        marginLeft: '140px',
                                    }}
                                >
                                    Завантажити сертифікат
                                </button>
                            )}

                            {percentage !== 100 && (
                                <Link to="/our" style={{
                                    padding: '10px 20px',
                                    fontSize: '16px',
                                    backgroundColor: '#7C4EE4',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    marginTop: '20px',
                                    marginLeft: '187px',
                                }}>
                                    Продовжити
                                </Link>
                            )}

                            <Link
                                to="/user"
                                style={{
                                    display: 'block',
                                    margin: '60px auto 0', // трохи нижче попередньої кнопки
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    color: '#333333', // фіолетовий, як у теми
                                    fontSize: '15px',
                                    fontWeight: '500',
                                }}
                            >
                                Редагувати профіль
                            </Link>

                        </>
                    ) : <p>Будь ласка, увійдіть у систему</p>}
                </main>

                <div style={{width: 1440, height: 397, background: 'white', position: 'absolute', left: 0, top: 1100}}/>
                <div style={{
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: '24px',
                    position: 'absolute',
                    left: 565,
                    top: 1419,
                }}>Copyright Ideapeel Inc © 2025. All Right Reserved
                </div>
            </div>
            {/* Новий блок з текстом під новим логотипом */}
            <div style={{width: '100%', height: '100%', position: 'relative', top: 1100}}>
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
                <Link to="/reviews" style={{
                    position: 'absolute',
                    left: 969,
                    top: 45,
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: 24,
                    wordWrap: 'break-word',
                    textDecoration: 'none',
                }}>
                    Залишити відгук
                </Link>
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
                <div style={{
                    width: '80%',
                    border: '1px #7C4EE4 solid',
                    position: 'absolute',
                    top: 330,
                    right: '10%',
                    left: '8%'
                }}></div>
            </div>
        </div>
    );
};

export default Progress;
