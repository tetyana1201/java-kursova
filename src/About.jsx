import React from 'react';
import logo from './images/logo.png'; 
import newLogo from './images/newLogo.png';
import { Link } from 'react-router-dom';
import containerImage from './images/Container.png';


const About = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F4F2F6' }}>
            <div style={{ width: 1440, height: 934, position: 'absolute', left: 0, top: 94 }}>
                <div style={{ width: 1440, height: 1900, background: '#F4F2F6' }} />
                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '600',
                    lineHeight: 24,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: -120,
                    left: 680,
                }}>
                    ПРО НАС
                </div>
                <div style={{
                    color: '#333333',
                    fontSize: 36,
                    fontFamily: 'Raleway',
                    fontWeight: '520',
                    lineHeight: 1.2,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 110,
                    left: 500,
                }}>
                    <div style={{ margin: 0 }}>Сайт для вивчення мови</div>
                    <div style={{ margin: 0, position: 'absolute', left: 25 }}>програмування JAVA</div>
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.2', 
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 245,
                    left: 500,
                    textAlign: 'center', 
                }}>
                    <div style={{ margin: 0 }}> 
                        Навчальний центр From Zero to Hero – це місце, де кожен має<br />
                        можливість змінити своє життя, розвиваючи нові навички та знання. <br />
                        Ми прагнемо зробити світ кращим, надаючи доступ до якісної освіти
                    </div>
                    <div style={{ margin: '0', lineHeight: '1.2' }}> 
                        абсолютно безкоштовно.
                    </div>
                </div>


                <img
                    src={containerImage}
                    alt="Container"
                    style={{
                        width: '70%', 
                        height: '60%', 
                        background: 'linear-gradient(0deg, #CCE9FF 0%, #CCE9FF 100%)',
                        borderRadius: 16,
                        position: 'absolute',
                        top: 390, 
                        left: 110,
                        zIndex: 1, 
                    }}
                />

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '600',
                    lineHeight: 24,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 845,
                    left: 140,
                }}>
                    ЯК МИ ПРАЦЮЄМО
                </div>

                <div style={{
                    color: '#333333',
                    fontSize: 34,
                    fontFamily: 'Raleway',
                    fontWeight: '600',
                    lineHeight: 1.2,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 1095,
                    left: 140,
                }}>
                    Я покажу вам, як працює <br /> наша команда
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: 1.8,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 1185,
                    left: 740,

                }}>
                    Створюй ефективні стратегії для вивчення Java, щоб <br /> забезпечити баланс між теорією та практикою.
                </div>

                <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
                    <div style={{
                        width: 400,
                        height: 408,
                        left: 110,
                        top: -520,
                        position: 'absolute',
                        background: '#7C4EE4',
                        borderRadius: 16
                    }} />
                </div>


                <div style={{
                    color: '#FFFFFF',
                    fontSize: 70,
                    fontFamily: 'Raleway',
                    fontWeight: '700',
                    lineHeight: 24,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 620,
                    left: 140,
                }}>
                    01
                </div>

                <div style={{
                    color: '#FFFFFF',
                    fontSize: 24,
                    fontFamily: 'Raleway',
                    fontWeight: '700',
                    lineHeight: 24,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 1250,
                    left: 140,
                }}>
                    Теоретична база
                </div>

                <div style={{
                    color: '#F7F6FE',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: 1.4,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 1590,
                    left: 120,
                }}>
                    У нашому центрі ти зможеш отримати глибокі<br />
                    знання з основ програмування на Java. Ми<br />
                    надаємо доступ до сучасних навчальних<br />
                    матеріалів, які допоможуть тобі зрозуміти<br />
                    ключові концепції та принципи роботи мови <br />
                    Java.
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 70,
                    fontFamily: 'Raleway',
                    fontWeight: '700',
                    lineHeight: 24,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 620,
                    left: 570,
                }}>
                    02
                </div>

                <div style={{
                    color: '#7C4EE4',
                    fontSize: 24,
                    fontFamily: 'Raleway',
                    fontWeight: '700',
                    lineHeight: 24,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 1250,
                    left: 570,
                }}>
                    Практичні завдання
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: 1.4,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 1590,
                    left: 550,
                }}>
                    Для перевірки та закріплення знань ми<br />
                    пропонуємо тести та інтерактивні завдання,<br />
                    які дозволять оцінити свої досягнення і <br />
                    покращити навички програмування. Це <br />
                    допоможе поступово підніматися на новий<br />
                    рівень майстерності.

                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 70,
                    fontFamily: 'Raleway',
                    fontWeight: '700',
                    lineHeight: 24,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 620,
                    left: 1010,
                }}>
                    03
                </div>

                <div style={{
                    color: '#7C4EE4',
                    fontSize: 24,
                    fontFamily: 'Raleway',
                    fontWeight: '700',
                    lineHeight: 24,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 1250,
                    left: 1010,
                }}>
                    Постійний розвиток
                </div>

                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: 1.4,
                    letterSpacing: 1.60,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 1590,
                    left: 990,
                }}>
                    Ми створюємо середовище для<br />
                    безперервного розвитку. Незалежно від рівня<br />
                    твоєї підготовки, ти зможеш постійно <br />
                    вдосконалювати свої навички, орієнтуючись <br />
                    на персональні цілі. Наша мета – допомогти <br />
                    тобі пройти шлях від новачка до експерта,<br />
                    підтримуючи на кожному етапі навчання.
                </div>


                <div style={{ width: 580, height: 393, position: 'absolute', left: 92, top: 217 }}>
                    <div style={{
                        width: 223,
                        height: 50,
                        paddingLeft: -5,
                        paddingRight: -5,
                        paddingTop: 2,
                        paddingBottom: 2,
                        background: '#7C4EE4',
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        display: 'inline-flex',
                        position: 'absolute',
                        left: 1020,
                        top: -295,
                    }}>
                        <Link to="/sign" style={{
                            textAlign: 'center',
                            color: 'white',
                            fontSize: 20,
                            fontFamily: 'Raleway',
                            fontWeight: '500',
                            lineHeight: 30,
                            wordWrap: 'break-word',
                            textDecoration: 'none'
                        }}>Зареєструватися</Link>
                    </div>
                </div>
                <Link to="/" style={{ position: 'absolute', left: 90, top: -70 }}>
                <img
                    src={logo}
                    alt="Лого"
                    style={{
                        width: '43.851px',
                        height: '43.804px',
                        flexShrink: 0,
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
                <div style={{
                    color: '#7C4EE4',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: 30,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 800,
                    top: -48,    
                    transform: 'translateY(-50%)', 
                    zIndex: 2,
                }}>
                    Про нас
                </div>

                {/* Додавання тексту "Наш курс" під "Про нас"  */}
                <Link to="/our" style={{
                    color: '#333333',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: 30,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 900, 
                    top: -48,  
                    transform: 'translateY(-50%)', 
                    zIndex: 2,
                    textDecoration: 'none'
                }}>
                    Наш курс
                </Link>

                {/* Додавання тексту "Увійти" під "Наш курс"  */}
                <Link to="/log" style={{
                    color: '#333333',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: 30,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 1013,
                    top: -48,  
                    transform: 'translateY(-50%)', 
                    zIndex: 2,
                    textDecoration: 'none'
                }}>
                    Увійти
                </Link>

                <Link to="/" style={{ position: 'absolute', left: 700, top: 2010, zIndex: 2 }}>
                <img
                    src={newLogo}
                    alt="Новий"
                    style={{
                        width: '43.851px',
                        height: '43.804px',
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
                    top: 2010,   
                    transform: 'translateX(-50%)', 
                    zIndex: 2,
                    textDecoration: 'none',
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </Link>


                <div style={{ width: 1440, height: 397, background: 'white', position: 'absolute', left: 0, top: 2000 }} />
                <div style={{
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: '24px',
                    position: 'absolute',
                    left: 565,
                    top: 2335,
                }}>Copyright Ideapeel Inc © 2025. All Right Reserved</div>
            </div>

            {/* Новий блок з текстом під новим логотипом */}
            <div style={{ width: '100%', height: '100%', position: 'relative', top: 890 }}>
                <Link to="/" style={{
                    position: 'absolute',
                    left: 450,
                    top: 1173,
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
                <Link to="/about" style={{
                    position: 'absolute',
                    left: 745,
                    top: 1173,
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: 24,
                    wordWrap: 'break-word',
                    textDecoration: 'none'
                }}>
                    Про нас
                </Link>
                <Link to="/reviews" style={{
                    position: 'absolute',
                    left: 969,
                    top: 1173,
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
                <div style={{ width: '80%', border: '1px #7C4EE4 solid', position: 'absolute', top: 1467, right: '10%', left: '8%' }}></div>
            </div>
        </div>
    );
};

export default About;
