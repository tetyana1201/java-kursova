import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase'; // Імпорт бази даних
import { ref, set } from 'firebase/database'; // Імпорт функцій для запису в базу даних
import javaImage from './images/java11.png';
import logo from './images/logo.png'; // Оновлений імпорт зображення
import newLogo from './images/newLogo.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import outImage from './images/out.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
import userImage from './images/user.png';

const VariablesPlusTheory = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [fontSize, setFontSize] = useState('16px');
    const [fontColor, setFontColor] = useState('#000000');
    const [savedTheory, setSavedTheory] = useState(null); // для збереженої теорії
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe(); // Очистка підписки на unmount
    }, []);

    useEffect(() => {
        const fetchSavedTheory = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, '/thvariables'));
                const theories = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                if (theories.length > 0) {
                    setSavedTheory(theories[0]); // беремо першу теорію
                }
            } catch (error) {
                console.error('Помилка при завантаженні теорії:', error);
            }
        };

        fetchSavedTheory();
    }, []); // тільки один раз при монтуванні компонента

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.innerHTML);

    const handleBold = () => document.execCommand('bold');
    const handleItalic = () => document.execCommand('italic');
    const handleUnderline = () => document.execCommand('underline');
    const handleAlignLeft = () => document.execCommand('justifyLeft');
    const handleAlignCenter = () => document.execCommand('justifyCenter');
    const handleAlignRight = () => document.execCommand('justifyRight');
    const handleFontSizeChange = (e) => document.execCommand('fontSize', false, e.target.value);
    const handleFontColorChange = (e) => document.execCommand('foreColor', false, e.target.value);
    const handleNumberedList = () => document.execCommand('insertOrderedList');
    const handleBulletedList = (marker) => {
        document.execCommand('insertUnorderedList');
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const parentElement = range.commonAncestorContainer.parentElement;
            if (parentElement && parentElement.tagName === 'LI') {
                parentElement.style.listStyleType = 'none';
                parentElement.textContent = marker + ' ' + parentElement.textContent;
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, '/thvariables'), {
                title,
                content,
                createdAt: new Date(),
            });
            setSavedTheory({ id: docRef.id, title, content }); // зберігаємо теорію після додавання
            setTitle('');
            setContent('');
            document.getElementById('contentArea').innerHTML = '';
            alert('Теорію успішно додано!');
        } catch (error) {
            console.error('Помилка при додаванні теорії:', error);
            alert('Сталася помилка при додаванні теорії');
        }
    };

    const handleEdit = async () => {
        try {
            const theoryRef = doc(db, '/thvariables', savedTheory.id);
            await updateDoc(theoryRef, {
                title: savedTheory.title,
                content: savedTheory.content,
            });
            alert('Теорія успішно оновлена!');
        } catch (error) {
            console.error('Помилка при оновленні теорії:', error);
            alert('Сталася помилка при оновленні теорії');
        }
    };

    const handleSavedTitleChange = (e) => {
        setSavedTheory(prev => ({ ...prev, title: e.target.value }));
    };

    const handleSavedContentChange = (e) => {
        setSavedTheory(prev => ({ ...prev, content: e.target.innerHTML }));
    };


    // UID, якому дозволено доступ
    const allowedUID = '9BmZeeNofHXK8yNKduUgPPeKJoZ2';

    // Перевірка доступу
    if (!user || user.uid !== allowedUID) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Ви не маєте прав доступу до цієї сторінки.</h2>
            </div>
        );
    }

    const insertYouTubeVideo = () => {
        const url = prompt("Вставте посилання на YouTube відео:");
        if (url) {
            const videoId = url.split('v=')[1]?.split('&')[0];
            if (videoId) {
                const iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
                document.execCommand('insertHTML', false, iframe);
            } else {
                alert("Посилання не підходить");
            }
        }
    };

    const handleInsertLink = () => {
        const url = prompt("Введіть URL для посилання:");
        if (url) {
            document.execCommand('createLink', false, url);
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
            <div style={{width: 1440, height: 3034, position: 'absolute', left: 0, top: 94}}>
                <div style={{width: 1440, height: 3100, background: '#F4F2F6'}}/>
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

                    <div>
                        <form onSubmit={handleSubmit} style={{ marginLeft: '-7cm', marginTop: '130px',   }}>
                            <input
                                type="text"
                                placeholder="Заголовок"
                                value={title}
                                onChange={handleTitleChange}
                                required
                                style={{ display: 'block', marginBottom: '10px' }}
                            />
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                maxWidth: '800px',
                            }}>
                                <button type="button" onClick={handleBold}><b>Жирний</b></button>
                                <button type="button" onClick={handleItalic}><i>Курсив</i></button>
                                <button type="button" onClick={handleUnderline}><u>Підкреслення</u></button>
                                <button type="button" onClick={handleAlignLeft}>Ліворуч</button>
                                <button type="button" onClick={handleAlignCenter}>По центру</button>
                                <button type="button" onClick={handleAlignRight}>Праворуч</button>
                                <input type="color" value={fontColor} onChange={handleFontColorChange} title="Колір шрифту" />
                                <select onChange={handleFontSizeChange} value={fontSize}>
                                    <option value="16px">16px</option>
                                    <option value="18px">18px</option>
                                    <option value="20px">20px</option>
                                    <option value="24px">24px</option>
                                </select>
                                <button type="button" onClick={handleNumberedList}>Нумерація</button>
                                <button type="button" onClick={() => handleBulletedList('-')}>- Маркер</button>
                                <button type="button" onClick={() => handleBulletedList('•')}>• Маркер</button>
                                <button type="button" onClick={() => insertYouTubeVideo()}>Додати відео з YouTube</button>
                                <button type="button" onClick={handleInsertLink}>Гіперпосилання</button>


                            </div>
                            <div
                                id="contentArea"
                                contentEditable
                                placeholder="Введіть теорію..."
                                value={content}
                                onInput={handleContentChange}
                                style={{
                                    border: '1px solid #ccc',
                                    padding: '10px',
                                    height: '180px',
                                    marginTop: '10px',
                                    whiteSpace: 'pre-wrap',
                                    backgroundColor: 'white',
                                    wordWrap: 'break-word',
                                    fontSize: fontSize,
                                    color: fontColor,
                                    resize: 'both',
                                    overflow: 'auto',
                                    width: '744px',
                                }}
                                required
                            />
                            <button type="submit" style={{ marginTop: '10px' }}>Додати теорію</button>
                        </form>

                        {savedTheory && (
                            <div style={{ marginLeft: '-7cm', marginRight: '5cm', marginTop: '20px' }}>
                                <h3 style={{ fontSize: '30px', textAlign: 'center', width: '100%' }}>Редагувати збережену теорію:</h3>
                                <div>
                                    <input
                                        type="text"
                                        value={savedTheory.title}
                                        onChange={handleSavedTitleChange}
                                        style={{ fontSize: '55px', textAlign: 'center', width: '760px', }}
                                    />
                                </div>
                                <div>
                                    <button type="button" onClick={handleBold}><b>Жирний</b></button>
                                    <button type="button" onClick={handleItalic}><i>Курсив</i></button>
                                    <button type="button" onClick={handleUnderline}><u>Підкреслення</u></button>
                                    <button type="button" onClick={handleAlignLeft}>Ліворуч</button>
                                    <button type="button" onClick={handleAlignCenter}>По центру</button>
                                    <button type="button" onClick={handleAlignRight}>Праворуч</button>
                                    <input type="color" value={fontColor} onChange={handleFontColorChange} title="Колір шрифту" />
                                    <select onChange={handleFontSizeChange} value={fontSize}>
                                        <option value="16px">16px</option>
                                        <option value="18px">18px</option>
                                        <option value="20px">20px</option>
                                        <option value="24px">24px</option>
                                    </select>
                                    <button type="button" onClick={handleNumberedList}>Нумерація</button>
                                    <button type="button" onClick={() => handleBulletedList('-')}>- Маркер</button>
                                    <button type="button" onClick={() => handleBulletedList('•')}>• Маркер</button>
                                    <button type="button" onClick={() => insertYouTubeVideo()}>Додати відео з YouTube</button>
                                    <button type="button" onClick={handleInsertLink}>Гіперпосилання</button>

                                </div>
                                <div>
                                </div>
                                <div
                                    contentEditable
                                    dangerouslySetInnerHTML={{ __html: savedTheory.content }}
                                    onInput={handleSavedContentChange}
                                    style={{
                                        border: '1px solid #ccc',
                                        padding: '10px',
                                        minHeight: '100px',
                                        marginTop: '10px',
                                        whiteSpace: 'pre-wrap',
                                        backgroundColor: 'white',
                                        wordWrap: 'break-word',
                                    }}
                                />
                                <button onClick={handleEdit}>Оновити теорію</button>
                            </div>
                        )}
                    </div>


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

                <Link to="/user">
                    <img
                        src={userImage}
                        alt="user"
                        style={{
                            width: '43.851px',
                            height: '43.804px',
                            position: 'absolute',
                            left: 980,
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
                            top: 3200,
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
                    top: 3200,
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    textDecoration: 'none',
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </Link>

                <div style={{width: 1440, height: 397, background: 'white', position: 'absolute', left: 0, top: 3200}}/>
                <div style={{
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: '24px',
                    position: 'absolute',
                    left: 565,
                    top: 3519,
                }}>Copyright Ideapeel Inc © 2025. All Right Reserved
                </div>
            </div>
            {/* Новий блок з текстом під новим логотипом */}
            <div style={{width: '100%', height: '100%', position: 'relative', top: 3200}}>
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

export default VariablesPlusTheory;