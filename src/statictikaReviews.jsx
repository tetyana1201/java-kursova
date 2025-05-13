import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase'; // Імпорт бази даних
import { ref, set } from 'firebase/database'; // Імпорт функцій для запису в базу даних
import javaImage from './images/java11.png';
import logo from './images/logo.png'; // Оновлений імпорт зображення
import newLogo from './images/newLogo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import outImage from './images/out.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, onSnapshot } from 'firebase/firestore';
import { FaStar } from 'react-icons/fa';

const Plus1 = () => {
    const [reviewStats, setReviewStats] = useState({
        total: 0,
        average: 0,
        counts: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    });
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'reviews'), (snapshot) => {
            const reviews = snapshot.docs.map(doc => doc.data());
            setReviews(reviews);
            const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
            let total = 0;
            let sum = 0;

            reviews.forEach(r => {
                if (r.rating >= 1 && r.rating <= 5) {
                    counts[r.rating]++;
                    sum += r.rating;
                    total++;
                }
            });

            const average = total ? (sum / total).toFixed(1) : 0;
            setReviewStats({ total, average, counts });
        });

        return () => unsubscribe();
    }, []);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe(); // Очистка підписки на unmount
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

                <Link to="addreviews" style={{
                    position: 'absolute',
                    top: 264, // Розмістіть кнопку нижче білого квадратика, змінюючи top
                    left: 730,
                    transform: 'translateX(-50%)', // Центрування кнопки
                    padding: '10px 20px',
                    borderRadius: 80,
                    backgroundColor: '#7C4EE4',
                    color: 'white',
                    border: 'none',
                    fontSize: 16,
                    cursor: 'pointer',
                    zIndex: 10,
                    textDecoration: 'none',
                }}>
                    Залишити відгук
                </Link>

                <div style={{
                    position: 'absolute',
                    marginTop: -867,
                    marginLeft: 743, // Можна змінити топ, якщо потрібно перемістити квадрат
                    width: '814px', // Розмір квадрата
                    height: '185px',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    transform: 'translate(-50%, -50%)', // Центрування квадрата
                    zIndex: 9, // Задаємо великий z-index, щоб квадрат був вище інших елементів
                }}></div>

                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginTop: -940,
                    position: 'relative',
                    zIndex: 10,
                    marginLeft: 20,
                }}>
                    <div style={{ position: 'relative', width: 700, height: 200, zIndex: 10 }}>
                        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                            <div style={{
                                left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start',
                                alignItems: 'flex-start', gap: 16, display: 'inline-flex'
                            }}>
                                <div style={{
                                    color: '#000000', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'
                                }}>
                                    Відгуки користувачів
                                </div>
                                <div style={{
                                    width: 60, height: 34, textAlign: 'center', justifyContent: 'center', display: 'flex',
                                    flexDirection: 'column', color: 'black', fontSize: 40, fontFamily: 'Poppins', fontWeight: '700',
                                    lineHeight: 20, wordWrap: 'break-word'
                                }}>
                                    {reviewStats.average}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            style={{
                                                color: i < reviewStats.average ? '#E7B66B' : '#E7E7E7', // Заповнені та незаповнені зірки
                                                fontSize: '20px',
                                                marginRight: '4px'
                                            }}
                                        />
                                    ))}
                                </div>
                                <div style={{
                                    color: '#858585', fontSize: 12, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'
                                }}>
                                    ({reviewStats.total} Відгуків)
                                </div>
                            </div>
                            <div style={{ left: 267, top: 36, position: 'absolute' }}>
                                {[5, 4, 3, 2, 1].map((star, index) => (
                                    <div key={star} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                                        <div style={{ width: 50, fontSize: 10 }}>{star} зірок</div>
                                        <div style={{
                                            width: 351, height: 6, background: '#F2F6FB', borderRadius: 8, marginLeft: 10, position: 'relative'
                                        }}>
                                            <div style={{
                                                width: `${(reviewStats.counts[star] / reviewStats.total) * 100 || 0}%`, height: '100%',
                                                background: '#E7B66B', borderRadius: 8
                                            }}></div>
                                        </div>
                                        <div style={{
                                            width: 30, fontSize: 10, textAlign: 'right', marginLeft: 10
                                        }}>
                                            {reviewStats.counts[star]}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 50,
                    position: 'relative',
                    zIndex: 10,
                }}>
                    <div style={{
                        position: 'relative',
                        width: '80%', // Встановлюємо ширину контейнера відгуків
                        maxWidth: '780px', // Максимальна ширина контейнера
                        height: '520px', // або будь-яка інша фіксована висота
                        overflowY: 'auto',
                        backgroundColor: 'white',
                        borderRadius: '8px', // Округлення кутів
                        padding: '20px',
                        left: '30px', // Зміщує контейнер вліво
                        top: '30px',
                    }}>
                        {reviews.map((review, index) => (
                            <div key={index} style={{ marginBottom: '20px' }}>
                                <div style={{ fontSize: '14px', color: '#858585', fontFamily: 'Inter', fontWeight: '600', lineHeight: '20px' }}>
                                    {new Date(review.createdAt.seconds * 1000).toLocaleDateString()}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                style={{
                                                    color: i < review.rating ? '#E7B66B' : '#E7E7E7',
                                                    fontSize: '20px',
                                                    marginRight: '4px'
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                    <div style={{
                                        width: 30, height: 30, borderRadius: '50%', backgroundColor: '#E7B66B', color: 'white',
                                        fontSize: '16px', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        marginRight: '10px',
                                    }}>
                                        {review.user.charAt(0).toUpperCase()}
                                    </div>
                                    <div style={{
                                        color: '#000000', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '20px'
                                    }}>
                                        {review.user}
                                    </div>
                                </div>
                                <div style={{
                                    color: '#0D0C22', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '400', lineHeight: '18px',
                                    marginTop: '10px'
                                }}>
                                    {review.text}
                                </div>

                                {/* Горизонтальна лінія між відгуками */}
                                {index < reviews.length - 1 && (
                                    <hr style={{
                                        marginTop: '20px',
                                        border: 'none',
                                        borderTop: '1px solid #E0E0E0'
                                    }} />
                                )}
                            </div>
                        ))}

                    </div>
                </div>


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

export default Plus1;
