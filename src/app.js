import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex ] = useState(0);

    const handleNext = () => {
        if (activeIndex < steps.length - 1) {
            setActiveIndex(activeIndex + 1); // Переход к следующему шагу
        } else {
            setActiveIndex(0); // Если последний шаг, начинаем сначала
        }
    };

    // Обработчик для перехода к предыдущему шагу
    const handlePrevious = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1); // Переход к предыдущему шагу
        }
    };

    // Обработчик для перехода к первому шагу
    const handleRestart = () => {
        setActiveIndex(0); // Сбрасываем индекс на ноль
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Инструкция по готовке пельменей</h1>
                <div className={styles.steps}>
                    <div className={styles['steps-content']}>
                        {/* Отображаем контент текущего активного шага */}
                        <p>{steps[activeIndex].content}</p>
                    </div>
                    <ul className={styles['steps-list']}>
                        {steps.map((step, index) => (
                            <li
                                key={index}
                                className={`${styles['steps-item']} ${index < activeIndex ? styles.done : ''} ${index === activeIndex ? styles.active : ''}`}
                            >
                                <button className={styles['steps-item-button']} onClick={() => setActiveIndex(index)}>
                                    {index + 1}
                                </button>
                                {step.title}
                            </li>
                        ))}
                    </ul>
                    {/* Кнопки навигации */}
                    <div className={styles['buttons-container']}>
                        <button className={styles.button} onClick={handlePrevious} disabled={activeIndex === 0}>
                            Назад
                        </button>
                        <button className={styles.button} onClick={handleNext}>
                            {activeIndex === steps.length - 1 ? 'Начать сначала' : 'Далее'}
                        </button>
                        <button className={styles.button} onClick={handleRestart}>
                            Начать сначала
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
