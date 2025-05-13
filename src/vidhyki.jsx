import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase'; // Імпорт бази даних
import { ref, set } from 'firebase/database'; // Імпорт функцій для запису в базу даних
import javaImage from './images/java11.png';
import logo from './images/logo.png'; // Оновлений імпорт зображення
import newLogo from './images/newLogo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import outImage from './images/out.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { FaStar } from 'react-icons/fa';

const AddReviews = () => {
    const [user, setUser] = useState(null);
    const [newReview, setNewReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleAddReview = async () => {
        if (!newReview.trim() || rating === 0) return;
        await addDoc(collection(db, 'reviews'), {
            text: newReview,
            rating,
            likes: 0,
            replies: [],
            createdAt: new Date(),
            user: auth.currentUser?.email || 'Анонім'
        });
        setNewReview('');
        setRating(0);
    };

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

                <div
                    style={{
                        width: 800,
                        height: 600,
                        background: 'white',
                        position: 'absolute',
                        top: 180, // Можна змінити на потрібне положення
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 5,
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                        borderRadius: 16,
                        padding: 30,
                        textAlign: 'center',
                    }}
                >
                    <h2 style={{
                        fontFamily: 'Poppins',
                        fontWeight: '700',
                        color: '#333',
                        fontSize: 24,
                        marginBottom: 40
                    }}>Залиште відгук для Java for Beginners</h2>
                    <p style={{
                        fontFamily: 'Poppins',
                        color: '#666',
                        fontSize: 16,
                        marginBottom: 30,
                    }}>
                        Як би ви оцінили Java for Beginners?
                    </p>
                    {/* Оцінка */}
                    <div style={{ marginBottom: 30 }}>
                        {[1, 2, 3, 4, 5].map(star => (
                            <FaStar
                                key={star}
                                onClick={() => setRating(star)}
                                color={star <= rating ? 'gold' : 'gray'}
                                style={{
                                    fontSize: 32, // Збільшено розмір зірочок
                                    margin: '5px', // Відстань між зірочками
                                }}
                            />
                        ))}
                    </div>

                    {/* Відгук */}
                    <textarea
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        placeholder="Залиште свій відгук..."
                        style={{
                            width: '100%',
                            height: 150,
                            marginTop: 20,
                            padding: '10px 1px',
                            borderRadius: 8,
                            border: '1px solid #ccc',
                            fontSize: 16,
                            fontFamily: 'Poppins',
                            backgroundColor: '#f5f5f5',
                        }}
                    />
                    <button
                        onClick={handleAddReview}
                        style={{
                            marginTop: 20,
                            padding: '10px 20px',
                            borderRadius: 8,
                            backgroundColor: '#7C4EE4',
                            color: 'white',
                            border: 'none',
                            fontSize: 16,
                            cursor: 'pointer',
                        }}
                    >
                        Додати
                    </button>
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

export default AddReviews;
