import React, { useState, useEffect } from 'react';
import javaImage from './images/java11.png';
import logo from './images/logo.png';
import newLogo from './images/newLogo.png';
import { Link } from 'react-router-dom';
import outImage from './images/out.png';
import {auth, database} from './firebase'; // Імпорт бази даних
import { ref, onValue, set } from 'firebase/database';
import {signOut} from "firebase/auth";
import userImage from './images/user.png';

const InputAndOutputPract = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [result, setResult] = useState("");
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
    const [userId, setUserId] = useState(null);
    const [testResults, setTestResults] = useState([]);
    const [isAnswerChecked, setIsAnswerChecked] = useState(false);
    const [isFinished, setIsFinished] = useState(false);



    useEffect(() => {
        const questionsRef = ref(database, 'inputandoutput');
        onValue(questionsRef, (snapshot) => {
            const data = snapshot.val();
            const questionsList = [];
            for (let id in data) {
                questionsList.push({ id, ...data[id] });
            }
            setQuestions(questionsList);
        });
        const user = auth.currentUser;
        if (user) {
            setUserId(user.uid);
        }
    }, []);



    const questionData = questions[selectedQuestionIndex];

    const handleAnswerSelect = (option) => {
        setSelectedAnswers((prev) =>
            prev.includes(option) ? prev.filter((answer) => answer !== option) : [...prev, option]
        );
        setIsAnswerChecked(false);
    };

    const checkAnswer = () => {
        if (questionData && selectedAnswers.length > 0) {
            const isCorrect = selectedAnswers.every((answer) => questionData.correctAnswers.includes(answer.trim()))
                && selectedAnswers.length === questionData.correctAnswers.length;
            setResult(isCorrect ? "Правильна відповідь!" : "Неправильна відповідь!");
            saveTestResult(isCorrect);
            setIsAnswerChecked(true);
        } else {
            setResult("Будь ласка, виберіть відповідь перед перевіркою.");
        }
    };

    const nextQuestion = () => {
        if (!isAnswerChecked) {
            alert("Будь ласка, перевірте відповідь перед переходом до наступного питання.");
            return;
        }
        setSelectedAnswers([]);
        setResult("");
        setIsAnswerChecked(false);
        setSelectedQuestionIndex((prevIndex) => prevIndex + 1);
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

    const saveTestResult = (isCorrect) => {
        if (userId) {
            const currentResult = {
                question: questionData.question,
                selectedAnswers,
                isCorrect,
                timestamp: new Date().toISOString(),
            };
            setTestResults((prevResults) => [...prevResults, currentResult]);
        }
    };

    const finishTest = () => {
        if (!isAnswerChecked) {
            alert("Будь ласка, перевірте відповідь перед завершенням тесту.");
            return;
        }

        if (userId && testResults.length > 0) {
            const correct = testResults.filter(result => result.isCorrect).length;
            const total = testResults.length;
            const percentage = Math.round((correct / total) * 100);

            const resultsRef = ref(database, 'testResultsinputandoutput/' + userId);
            set(resultsRef, {
                percentage,
                results: testResults,
            });

            alert(`Правильних відповідей: ${correct} з ${total}\nПроцент правильних відповідей: ${percentage}%`);
            setIsFinished(true); // якщо ти хочеш сховати решту інтерфейсу після цього
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
                    {/* Основний контейнер для елементів з позиціями */}
                    <div style={{width: 573, height: 531, position: 'relative', left: -68}}>
                        <div style={{width: 411, height: 451, position: 'absolute', left: 37, top: 80}}>
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    background: '#7C4EE4',
                                    borderRadius: 18,
                                }}
                            />
                            <div style={{width: '100%', height: 56, position: 'absolute', background: '#7C4EE4'}}/>
                        </div>

                        {/* Коло елементів з різними відтінками */}
                        <div
                            style={{
                                width: 262,
                                height: 248,
                                position: 'absolute',
                                left: 0,
                                top: 97,
                                background: 'rgba(199, 168, 252, 0.36)',
                                borderRadius: '50%',
                            }}
                        />
                        <div
                            style={{
                                width: 204,
                                height: 196,
                                position: 'absolute',
                                left: 29,
                                top: 123,
                                background: '#C7A8FC',
                                borderRadius: '50%',
                            }}
                        />
                        <div
                            style={{
                                width: 152,
                                height: 144,
                                position: 'absolute',
                                left: 55,
                                top: 149,
                                background: 'white',
                                borderRadius: '50%',
                            }}
                        />

                        <div
                            style={{
                                width: 52,
                                height: 52,
                                position: 'absolute',
                                left: 283,
                                top: 144,
                                background: 'rgba(199, 168, 252, 0.36)',
                                borderRadius: '50%',
                            }}
                        />

                        <img
                            style={{width: 90, height: 90, position: 'absolute', left: 88, top: 176}}
                            src={javaImage}
                            alt="Java"
                        />
                    </div>

                    <div style={{ width: 316, height: 1, zIndex: 10 }}>
                        {questionData && (
                            <div style={{ width: '100%', padding: '16px', fontSize: 14, fontFamily: 'Poppins', border: '1px solid #79747E', borderRadius: 6, backgroundColor: 'white', marginBottom: 20, marginTop: -110 }}>
                                {questionData.question}
                            </div>
                        )}
                        {questionData && questionData.options.map((option, index) => (
                            <div key={index} onClick={() => handleAnswerSelect(option)} style={{ padding: '16px', fontSize: 14, fontFamily: 'Poppins', borderRadius: 6, backgroundColor: selectedAnswers.includes(option) ? '#EDE7F6' : 'white', marginBottom: 10, cursor: 'pointer' }}>
                                {option}
                            </div>
                        ))}
                        <button onClick={checkAnswer} style={{ width: 196, height: 64, background: '#7C4EE4', borderRadius: 50, color: 'white', fontSize: 25, fontFamily: 'Poppins', fontWeight: '500' }}>
                            Перевірити
                        </button>
                        {result && (
                            <div style={{ marginTop: 20, fontSize: 18, color: result.includes("Правильна") ? 'green' : 'red' }}>
                                {result}
                            </div>
                        )}
                        {selectedQuestionIndex < questions.length - 1 && (
                            <button onClick={nextQuestion} style={{ width: 196, height: 64, background: '#7C4EE4', borderRadius: 50, color: 'white', fontSize: 25, fontFamily: 'Poppins', fontWeight: '500', marginTop: 20 }}>
                                Наступне питання
                            </button>
                        )}
                        {selectedQuestionIndex === questions.length - 1 && (
                            <button onClick={finishTest} style={{ width: 196, height: 64, background: '#7C4EE4', borderRadius: 50, color: 'white', fontSize: 25, fontFamily: 'Poppins', fontWeight: '500', marginTop: 20 }}>
                                Завершити тестування
                            </button>
                        )}
                    </div>
                </div>

                <Link to="/">
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
                    textDecoration: 'none',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
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
}


export default InputAndOutputPract;
