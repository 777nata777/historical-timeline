import React, { useState } from "react";
import styles from "./TimelineYears.module.scss";
import Button from "../UI/Button/Button";
import Dot from "./Dot";

interface TimelineYearsProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
}

const labels = ["Музыка", "Кино", "Литература", "Театр", "", "Наука"];

const TimelineYears: React.FC<TimelineYearsProps> = ({ activeIndex, setActiveIndex }) => {
    const [rotationAngle, setRotationAngle] = useState(0);

    // Функции вращения (изменяем угол поворота)
    const rotateClockwise = () => {
        const newIndex = (activeIndex + 1) % 6 ; // Поворачиваем против часово
        setActiveIndex(newIndex);
        setRotationAngle(prev => prev - 60);

    };

    const rotateCounterClockwise = () => {
        const newIndex = (activeIndex - 1 + 6) % 6;  // Поворачиваем по часовой
        setActiveIndex(newIndex);
        setRotationAngle(prev => prev + 60);

    };

    return (
        <div className={styles.timelineContainer}>
            {/* Контейнер круга */}
            <div className={styles.timelineYearsContainer}>
                <div className={styles.circle} style={{ transform: `rotate(${rotationAngle}deg)` }}>
                    {[...Array(6)].map((_, index) => {
                        return (
                            <Dot
                                key={index}
                                index={index}
                                activeIndex={activeIndex}
                                rotationAngle={rotationAngle}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setRotationAngle(-index * 60);
                                }}
                                label={labels[index]}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Отображение активной точки (01/06) */}
            <div className={styles.activeNumber}>
                {String(activeIndex + 1).padStart(2, "0")}/06
            </div>

            {/* Кнопки вращения */}
            <div className={styles.controls}>
                <Button onClick={rotateCounterClockwise}>←</Button>
                <Button onClick={rotateClockwise}>→</Button>
            </div>
        </div>
    );
};

export default TimelineYears;
