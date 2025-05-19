import React, { useState, useEffect } from 'react';
import { auth, database } from './firebase'; // Імпорт бази даних
import {get, ref, set, update} from 'firebase/database'; // Імпорт функцій для запису в базу даних
import javaImage from './images/java11.png';
import logo from './images/logo.png'; // Оновлений імпорт зображення
import newLogo from './images/newLogo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import outImage from './images/out.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const User = () => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({
        firstName: "Не вказано",
        lastName: "Не вказано",
        phone: "Не вказано",
        birthDate: "Не вказано",
        gender: "Не вказано",
        photoURL: null
    });

    const [editableData, setEditableData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        birthDate: "",
        gender: "",
        photoURL: null,
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const userRef = ref(database, `users/${currentUser.uid}`);
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    setUserData(snapshot.val());
                    setEditableData({
                        firstName: snapshot.val().firstName || "",
                        lastName: snapshot.val().lastName || "",
                        phone: snapshot.val().phone || "",
                        birthDate: snapshot.val().birthDate || "",
                        gender: snapshot.val().gender || "",
                        photoURL: snapshot.val().photoURL || null,
                    });
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        if (user) {
            const userRef = ref(database, `users/${user.uid}`);

            // Оновлення даних користувача в базі
            await update(userRef, {
                firstName: editableData.firstName,
                lastName: editableData.lastName,
                phone: editableData.phone,
                birthDate: editableData.birthDate,
                gender: editableData.gender,
                photoURL: editableData.photoURL,
                updatedBy: user.uid,  // Зберігаємо ID користувача, який зробив зміни
                updatedAt: new Date().toISOString(), // Дата та час зміни
            });

            setUserData((prevState) => ({
                ...prevState,
                firstName: editableData.firstName,
                lastName: editableData.lastName,
                phone: editableData.phone,
                birthDate: editableData.birthDate,
                gender: editableData.gender,
                photoURL: editableData.photoURL,
            }));

            alert("Дані успішно оновлені!");
        }
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditableData((prevState) => ({
                    ...prevState,
                    photoURL: reader.result, // base64 рядок
                }));
            };
            reader.readAsDataURL(file); // Читання файлу як data URL (base64)
        }
    };



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
                <h2 style={{ textAlign: 'center' }}>Редагувати профіль</h2>
                {user ? (
                    <>
                        <img src={editableData.photoURL || userData.photoURL || 'https://via.placeholder.com/150'} alt="" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', display: 'block', margin: '0 auto 20px' }} />
                        <label><strong>Ім'я:</strong><input type="text" name="firstName" value={editableData.firstName} onChange={handleChange} style={{ width: '100%', margin: '5px 0 15px' }} /></label>
                        <label><strong>Прізвище:</strong><input type="text" name="lastName" value={editableData.lastName} onChange={handleChange} style={{ width: '100%', margin: '5px 0 15px' }} /></label>
                        <p><strong>Email:</strong> {user.email}</p>
                        <label><strong>Телефон:</strong><input type="tel" name="phone" value={editableData.phone} onChange={handleChange} style={{ width: '100%', margin: '5px 0 15px' }} /></label>
                        <label><strong>Дата народження:</strong><input type="date" name="birthDate" value={editableData.birthDate} onChange={handleChange} style={{ width: '100%', margin: '5px 0 15px' }} /></label>
                        <label><strong>Стать:</strong>
                            <select name="gender" value={editableData.gender} onChange={handleChange} style={{ width: '100%', margin: '5px 0 15px' }}>
                                <option value="">Оберіть</option>
                                <option value="Чоловіча">Чоловіча</option>
                                <option value="Жіноча">Жіноча</option>
                                <option value="Інше">Інше</option>
                            </select>
                        </label>
                        <label><strong>Фото:</strong><input type="file" name="photo" accept="image/*" onChange={handlePhotoChange} style={{ width: '100%', margin: '5px 0 15px' }} /></label>
                        <button onClick={handleSave} style={{ width: '100%', padding: '10px', backgroundColor: '#515DEF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            Зберегти зміни
                        </button>
                        <Link
                            to="/progress"
                            style={{
                                display: 'block',
                                margin: '45px auto 0', // трохи нижче попередньої кнопки
                                textAlign: 'center',
                                textDecoration: 'none',
                                color: '#333333', // фіолетовий, як у теми
                                fontSize: '15px',
                                fontWeight: '500',
                            }}
                        >
                            Ваш прогрес
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

export default User;
