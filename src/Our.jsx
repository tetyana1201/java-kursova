import React from 'react';
import logo from './images/logo.png';
import newLogo from './images/newLogo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import tema1 from './images/t1.png';
import tema2 from './images/t2.png';
import tema3 from './images/t3.png';
import tema4 from './images/t4.png';
import t5 from './images/t5.png';
import t6 from './images/t6.png';
import t7 from './images/t7.png';
import t8 from './images/t8.png';
import t9 from './images/t9.png';
import LearnPage from './learn';

const Our = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: '#F4F2F6' }}>
            <div style={{ width: 1440, height: 934, position: 'absolute', left: 0, top: 94 }}>
                <div style={{ width: 1440, height: 2527, background: '#F4F2F6' }} />

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
                    НАШ КУРС
                </div>
                <div style={{
                    color: '#333333',
                    fontSize: 36,
                    fontFamily: 'Raleway',
                    fontWeight: '520',
                    lineHeight: 1,
                    letterSpacing: 0.8,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 120,
                    left: 300,
                }}>
                    <div style={{ margin: 0 }}> Ти можеш самостійно обирати теми для вивчення, </div>
                    <div style={{ margin: 0, }}>починаючи з основ Java і закінчуючи коментарями.</div>
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.6', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 245,
                    left: 280,
                    letterSpacing: '2.7px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Наш курс розроблений, щоб надати тобі найкращий контент для вивчення Java і програмування<br />
                        загалом. Ми прагнемо забезпечити тебе якісними ресурсами, щоб ти міг легко опановувати нові  <br />
                        знання і постійно вдосконалювати свої навички на шляху до успіху.
                    </div>
                </div>
                <img
                    src={tema1}
                    alt="Нова т1"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 100,  // Відстань від лівого краю
                        top: 410,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />


                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 144, // Вирівнюємо по лівому краю логотипу
                    top: 710,    // Відстань від верхнього краю
                }}>
                    10 Березня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 209, // Вирівнюємо по лівому краю логотипу
                        top: 849,  // Відстань від верхнього краю
                    }}
                >
                    Вступ до Java
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 922,
                    left: 100,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Java це об'єктно-орієнтована мова програмування.<br />
                        Створена у 1995 році компанією Sun Microsystems. <br />
                        Має простий синтаксис, багатий набір бібліотек.
                    </div>
                </div>

                    <Link to="/our/learn" style={{
                        color: '#7C4EE4',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 100, // Вирівнюємо по лівому краю логотипу
                        top: 1009,
                        textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                    </Link>

            <hr
                style={{
                    width: '210px', // Можна змінити на бажану ширину
                    border: '1px solid #7C4EE4', // Колір та стиль лінії
                    marginTop: '5px', // Відстань між текстом та лінією
                    position: 'absolute',
                    left: 100, // Вирівнювання по лівому краю
                    top: 1024, // Встановіть на основі позиції тексту
                }}
            />

                <img
                    src={tema2}
                    alt="Нова т2"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 518,  // Відстань від лівого краю
                        top: 410,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />



                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 562, // Вирівнюємо по лівому краю логотипу
                    top: 710,    // Відстань від верхнього краю
                }}>
                    11 Березня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 600, // Вирівнюємо по лівому краю логотипу
                        top: 849,  // Відстань від верхнього краю
                    }}
                >
                    Програма Hello World
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 922,
                    left: 518,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        «Hello World» - приклад для новачків, який<br />
                        знайомить із базовими концепціями, такими як<br />
                        клас, метод та оператор друку.
                    </div>
                </div>


                <Link to="/helloworld" style={{
                        color: '#7C4EE4',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 518, // Вирівнюємо по лівому краю логотипу
                        top: 1009,
                    textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                </Link>

                <hr
                    style={{
                        width: '210px', // Можна змінити на бажану ширину
                        border: '1px solid #7C4EE4', // Колір та стиль лінії
                        marginTop: '5px', // Відстань між текстом та лінією
                        position: 'absolute',
                        left: 518, // Вирівнювання по лівому краю
                        top: 1024, // Встановіть на основі позиції тексту
                    }}
                />



                <img
                    src={tema3}
                    alt="Нова т3"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 936,  // Відстань від лівого краю
                        top: 410,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />



                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 980, // Вирівнюємо по лівому краю логотипу
                    top: 710,    // Відстань від верхнього краю
                }}>
                    12 Березня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 1079, // Вирівнюємо по лівому краю логотипу
                        top: 849,  // Відстань від верхнього краю
                    }}
                >
                    Змінні
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 922,
                    left: 936,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Іноді потрібно зберігати та змінювати дані під<br />
                        час виконання програми — саме для цього в Java<br />
                        використовуються змінні.
                    </div>
                </div>


                <Link to="/variables" style={{
                        color: '#7C4EE4',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 936, // Вирівнюємо по лівому краю логотипу
                        top: 1009,
                        textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                </Link>

                <hr
                    style={{
                        width: '210px',
                        border: '1px solid #7C4EE4', // Колір та стиль лінії
                        marginTop: '5px', // Відстань між текстом та лінією
                        position: 'absolute',
                        left: 936, // Вирівнювання по лівому краю
                        top: 1024,
                    }}
                />

                <img
                    src={tema4}
                    alt="Нова т4"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 100,  // Відстань від лівого краю
                        top: 1098,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />


                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 144, // Вирівнюємо по лівому краю логотипу
                    top: 1398,    // Відстань від верхнього краю
                }}>
                    13 Березня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 247, // Вирівнюємо по лівому краю логотипу
                        top: 1537,  // Відстань від верхнього краю
                    }}
                >
                    Літерали
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 1610,
                    left: 100,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        У мові програмування Java літерал – це точне<br />
                        постійне значення, яке можна присвоїти змінним.<br />
                        Основним прикладом літерала є ціле число.
                    </div>
                </div>


                <Link to="/literals" style={{
                        color: '#7C4EE4',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 100, // Вирівнюємо по лівому краю логотипу
                        top: 1697,
                    textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                </Link>

                <hr
                    style={{
                        width: '210px', // Можна змінити на бажану ширину
                        border: '1px solid #7C4EE4', // Колір та стиль лінії
                        marginTop: '5px', // Відстань між текстом та лінією
                        position: 'absolute',
                        left: 100, // Вирівнювання по лівому краю
                        top: 1712, // Встановіть на основі позиції тексту
                    }}
                />

                <img
                    src={t5}
                    alt="Нова т2"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 518,  // Відстань від лівого краю
                        top: 1098,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />



                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 562, // Вирівнюємо по лівому краю логотипу
                    top: 1398,    // Відстань від верхнього краю
                }}>
                    14 Березня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 575, // Вирівнюємо по лівому краю логотипу
                        top: 1537,  // Відстань від верхнього краю
                    }}
                >
                    Примітивні типи даних
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 1610,
                    left: 518,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Java має вісім примітивних типів даних, які<br />
                        забезпечують зберігання інформації, включаючи<br />
                        цілі, дійсні числа, символи та булеві значення.
                    </div>
                </div>


                <Link to="/primitive" style={{
                        color: '#7C4EE4',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 518, // Вирівнюємо по лівому краю логотипу
                        top: 1697,
                        textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                </Link>

                <hr
                    style={{
                        width: '210px',
                        border: '1px solid #7C4EE4', // Колір та стиль лінії
                        marginTop: '5px', // Відстань між текстом та лінією
                        position: 'absolute',
                        left: 518, // Вирівнювання по лівому краю
                        top: 1712,
                    }}
                />



                <img
                    src={t6}
                    alt="Нова т3"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 936,  // Відстань від лівого краю
                        top: 1098,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />



                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 980, // Вирівнюємо по лівому краю логотипу
                    top: 1398,    // Відстань від верхнього краю
                }}>
                    15 Березня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 1053, // Вирівнюємо по лівому краю логотипу
                        top: 1537,  // Відстань від верхнього краю
                    }}
                >
                    Оператори
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 1610,
                    left: 936,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Оператори дозволяють виконувати обчислення,<br />
                        здійснювати порівняння, керувати потоком<br />
                        виконання та працювати з бітом.
                    </div>
                </div>


                <Link to="/operators" style={{
                        color: '#7C4EE4',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 936, // Вирівнюємо по лівому краю логотипу
                        top: 1697,
                    textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                </Link>

                <hr
                    style={{
                        width: '210px',
                        border: '1px solid #7C4EE4', // Колір та стиль лінії
                        marginTop: '5px', // Відстань між текстом та лінією
                        position: 'absolute',
                        left: 936, // Вирівнювання по лівому краю
                        top: 1712,
                    }}
                />





                <img
                    src={t7}
                    alt="Нова т4"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 100,  // Відстань від лівого краю
                        top: 1786,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />


                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 144, // Вирівнюємо по лівому краю логотипу
                    top: 2086,    // Відстань від верхнього краю
                }}>
                    18 Березня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 157, // Вирівнюємо по лівому краю логотипу
                        top: 2225,
                    }}
                >
                    Введення та виведення
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 2298,
                    left: 100,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Java забезпечує зручні засоби для введення та<br />
                        виведення даних, що дозволяє ефективно<br />
                        взаємодіяти з користувачем.
                    </div>
                </div>


                <Link to="/inputandoutput" style={{
                        color: '#7C4EE4',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 100, // Вирівнюємо по лівому краю логотипу
                        top: 2385,
                        textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                </Link>

                <hr
                    style={{
                        width: '210px',
                        border: '1px solid #7C4EE4', // Колір та стиль лінії
                        marginTop: '5px', // Відстань між текстом та лінією
                        position: 'absolute',
                        left: 100, // Вирівнювання по лівому краю
                        top: 2400,
                    }}
                />

                <img
                    src={t8}
                    alt="Нова т2"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 518,  // Відстань від лівого краю
                        top: 1786,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />



                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 562, // Вирівнюємо по лівому краю логотипу
                    top: 2086,    // Відстань від верхнього краю
                }}>
                    23 Березня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 555, // Вирівнюємо по лівому краю логотипу
                        top: 2225,  // Відстань від верхнього краю
                    }}
                >
                    Вирази, Інструкції та Блоки
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 2298,
                    left: 518,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Вираз - комбінація змінних, операторів, яка повертає<br />
                        результат. Інструкція - окрема одиниця виконання.<br />
                        Блок - група інструкцій, що береться у фігурні дужки.
                    </div>
                </div>


                <Link to="/exstatemetnsblock" style={{
                        color: '#7C4EE4',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 518, // Вирівнюємо по лівому краю логотипу
                        top: 2385,
                        textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                </Link>

                <hr
                    style={{
                        width: '210px',
                        border: '1px solid #7C4EE4', // Колір та стиль лінії
                        marginTop: '5px', // Відстань між текстом та лінією
                        position: 'absolute',
                        left: 518, // Вирівнювання по лівому краю
                        top: 2400,
                    }}
                />



                <img
                    src={t9}
                    alt="Нова т3"
                    style={{
                        width: '400px',
                        height: '360px',
                        position: 'absolute',
                        left: 936,  // Відстань від лівого краю
                        top: 1786,   // Відстань від верхнього краю
                        zIndex: 2,
                    }}
                />



                <div style={{
                    color: '#999999',
                    fontSize: 12,
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    lineHeight: 18,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 980, // Вирівнюємо по лівому краю логотипу
                    top: 2086,    // Відстань від верхнього краю
                }}>
                    29 Березня 2025
                </div>


                <div
                    style={{
                        color: '#333333',
                        fontSize: 24,
                        fontFamily: 'Raleway, sans-serif',
                        fontWeight: 700,
                        lineHeight: '32px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 1063, // Вирівнюємо по лівому краю логотипу
                        top: 2225,  // Відстань від верхнього краю
                    }}
                >
                    Коментарі
                </div>


                <div style={{
                    color: '#666666',
                    fontSize: 16,
                    fontFamily: 'Roboto',
                    fontWeight: '400',
                    lineHeight: '1.4', // Встановлюємо висоту рядка для кращого контролю
                    wordWrap: 'break-word',
                    position: 'absolute',
                    top: 2298,
                    left: 936,
                    letterSpacing: '0.6px',
                }}>
                    <div style={{ margin: 0 }}> {/* Зменшили margin для верхнього тексту */}
                        Коментарі – це спеціальні рядки в коді, які призначені<br />
                        для пояснення та документування коду. Не впливають<br />
                        на виконання програми, але роблять код зрозумілішим.
                    </div>
                </div>


                <Link to="/comments" style={{
                        color: '#7C4EE4',
                        fontSize: 18,
                        fontFamily: 'Raleway, sans-serif', // Виправлено шрифт
                        fontWeight: 700,
                        lineHeight: '27px', // Встановлено правильний формат
                        wordWrap: 'break-word',
                        position: 'absolute',
                        left: 936, // Вирівнюємо по лівому краю логотипу
                        top: 2385,
                        textDecoration: 'none'// Відстань від верхнього краю
                    }}
                >
                    Перейти до вивчення...
                </Link>

                <hr
                    style={{
                        width: '210px',
                        border: '1px solid #7C4EE4', // Колір та стиль лінії
                        marginTop: '5px', // Відстань між текстом та лінією
                        position: 'absolute',
                        left: 936, // Вирівнювання по лівому краю
                        top: 2400,
                    }}
                />










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
                        top: -295, // Відстань від верху
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
                        textDecoration: 'none',
                        flexShrink: 0,
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
                    left: 160,  // Вирівнюємо по лівому краю логотипу
                    top: -47,   // Відстань від верхнього краю
                    transform: 'translateY(-50%)', // Центруємо текст по вертикалі
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
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 800, // Вирівнюємо по лівому краю логотипу
                    top: -48,    // Відстань від верхнього краю
                    transform: 'translateY(-50%)', // Центруємо текст по вертикалі
                    zIndex: 2,
                    textDecoration: 'none'
                }}>
                    Про нас
                </Link>

                {/* Додавання тексту "Наш курс" під "Про нас" з відстанню  */}
                <div style={{
                    color: '#333333',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: 30,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 900, // Вирівнюємо по лівому краю "Про нас"
                    top: -48,  // Відстань від "Про нас" (48 - 33)
                    transform: 'translateY(-50%)', // Центруємо текст по вертикалі
                    zIndex: 2,
                }}>
                    Наш курс
                </div>

                {/* Додавання тексту "Увійти" під "Наш курс" з відстанню  */}
                <Link to="/log" style={{
                    color: '#333333',
                    fontSize: 20,
                    fontFamily: 'Raleway',
                    fontWeight: '500',
                    lineHeight: 30,
                    wordWrap: 'break-word',
                    position: 'absolute',
                    left: 1013, // Вирівнюємо по лівому краю "Наш курс"
                    top: -48,  // Відстань від "Наш курс" (48 - 33)
                    transform: 'translateY(-50%)', // Центруємо текст по вертикалі
                    zIndex: 2,
                    textDecoration: 'none'
                }}>
                    Увійти
                </Link>

                <Link to="/" style={{ position: 'absolute', left: 700, top: 2626, zIndex: 2 }}>
                <img
                    src={newLogo}
                    alt="Новий логотип"
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
                    left: 812,  // Вирівнюємо по лівому краю нового логотипу
                    top: 2626,   // Відстань від верхнього краю
                    transform: 'translateX(-50%)', // Центруємо текст по горизонталі
                    zIndex: 2,
                    textDecoration: 'none',
                }}>
                    <div>from Zero</div>
                    <div>to Hero</div>
                </Link>

                <div style={{ width: 1440, height: 497, background: 'white', position: 'absolute', left: 0, top: 2527 }} />
                <div style={{
                    color: '#150E06',
                    fontSize: 16,
                    fontFamily: 'Raleway',
                    fontWeight: '400',
                    lineHeight: '24px',
                    position: 'absolute',
                    left: 565,
                    top: 2945,
                }}>Copyright Ideapeel Inc © 2025. All Right Reserved</div>
            </div>

            {/* Новий блок з текстом під новим логотипом */}
            <div style={{ width: '100%', height: '100%', position: 'relative', top: 890 }}>
                <Link to="/" style={{
                    position: 'absolute',
                    left: 450,
                    top: 1776,
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
                    top: 1776,
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
                    top: 1776,
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
                {/* Додано рамка під текстом */}
                <div style={{ width: '80%', border: '1px #7C4EE4 solid', position: 'absolute', top: 2060, right: '10%', left: '8%' }}></div>
            </div>
        </div>
    );
};

export default Our;
