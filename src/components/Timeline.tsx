import React, { useState } from "react";
import TimelineTitle from "./Timeline/TimelineTitle";
import TimelineYears from "./Timeline/TimelineYears";
import TimelineSlider from "./Timeline/TimelineSlider";
import styles from "./Timeline.module.scss";

const Timeline: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories = ["Музыка", "Кино", "Литература", "Театр", "", "Наука"];
    const activeCategory = categories[activeIndex];

    const events = [
        { year: 2010, description: "Новый альбом вышел", category: "Музыка" },
        { year: 2018, description: "Новый альбом вышел", category: "Музыка" },
        { year: 2018, description: "Новый альбом вышел", category: "Музыка" },
        { year: 2018, description: "Новый альбом вышел", category: "Музыка" },
        { year: 2018, description: "Новый альбом вышел", category: "Музыка" },
        { year: 2022, description: "Новый альбом вышел", category: "Музыка" },

        { year: 2015, description: "Фестиваль короткометражек", category: "Кино" },
        { year: 2020, description: "Фестиваль короткометражек", category: "Кино" },
        { year: 2020, description: "Фестиваль короткометражек", category: "Кино" },
        { year: 2020, description: "Фестиваль короткометражек", category: "Кино" },
        { year: 2020, description: "Фестиваль короткометражек", category: "Кино" },
        { year: 2020, description: "Фестиваль короткометражек", category: "Кино" },

        { year: 2017, description: "Новый роман бестселлер", category: "Литература" },
        { year: 2021, description: "Новый роман бестселлер", category: "Литература" },
        { year: 2021, description: "Новый роман бестселлер", category: "Литература" },
        { year: 2021, description: "Новый роман бестселлер", category: "Литература" },
        { year: 2021, description: "Новый роман бестселлер", category: "Литература" },

        { year: 2014, description: "Выставка современного театра", category: "Театр" },
        { year: 2019, description: "Выставка современного театра", category: "Театр" },
        { year: 2019, description: "Выставка современного театра", category: "Театр" },
        { year: 2019, description: "Выставка современного театра", category: "Театр" },
        { year: 2019, description: "Выставка современного театра", category: "Театр" },
        { year: 2019, description: "Выставка современного театра", category: "Театр" },

        { year: 2017, description: "Что-то важное в 2022 году", category: "" },
        { year: 2022, description: "Что-то важное в 2022 году", category: "" },
        { year: 2022, description: "Что-то важное в 2022 году", category: "" },
        { year: 2022, description: "Что-то важное в 2022 году", category: "" },
        { year: 2022, description: "Что-то важное в 2022 году", category: "" },

        { year: 2015, description: "13 сентября — частное солнечное затмение", category: "Наука" },
        { year: 2016, description: "Телескоп «Хаббл» обнаружил галактику", category: "Наука" },
        { year: 2017, description: "Tesla представила электрогрузовик", category: "Наука" },
        { year: 2018, description: "Tesla представила электрогрузовик", category: "Наука" },
        { year: 2019, description: "Tesla представила электрогрузовик", category: "Наука" },
        { year: 2020, description: "Tesla представила электрогрузовик", category: "Наука" },

    ];

    const filteredEvents = events.filter(event => event.category === activeCategory);

    const categoryEvents = events.filter(event => event.category === activeCategory);
    const startYear = categoryEvents[0]?.year ?? "";
    const endYear = categoryEvents[categoryEvents.length - 1]?.year ?? "";

    return (
        <div className={styles.timeline}>
            {/* Крест по центру */}
            <div className={styles.horizontalLine}></div>
            <div className={styles.verticalLine}></div>

            <TimelineTitle />

            <TimelineYears  activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

            <div className={styles.yearsRange}>
                <span className={styles.startYear}>{startYear}</span>
                <span className={styles.endYear}>{endYear}</span>
            </div>

            <TimelineSlider events={filteredEvents} />
        </div>
    );
};

export default Timeline;
