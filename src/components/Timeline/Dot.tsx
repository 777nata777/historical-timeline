import React, {useState} from "react";
import styles from "./Dot.module.scss";

interface DotProps {
    index: number;
    activeIndex: number;
    rotationAngle: number;
    onClick: () => void;
    label?: string;
}

const Dot: React.FC<DotProps> = ({ index, activeIndex, rotationAngle, onClick, label }) => {
    const [isHovered, setIsHovered] = useState(false);
    const baseAngle  = 60 * index + 300;
    const rotationCompensation = -rotationAngle; // Компенсация поворота окружности

    return (
        <div
            className={`${styles.dot} ${index === activeIndex || isHovered ? styles.active : ""}`}
            style={{
                transform: `rotate(${baseAngle}deg) translate(265px) rotate(${-baseAngle}deg) `,
            }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <span
                className={styles.dotNumber}
                style={{ transform: `rotate(${rotationCompensation}deg)` }}
            >
                {index + 1}
            </span>

            {label &&
                <span
                    className={styles.dotLabel}
                    style={{
                        transform: `rotate(${rotationCompensation}deg) translateX(100%)`,
                    }}
                >
                    {label}
                </span>}

        </div>
    );
};



export default Dot;
