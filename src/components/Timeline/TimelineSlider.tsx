import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./TimelineSlider.module.scss";
import Button from "../UI/Button/Button";

interface TimelineSliderProps {
    events: { year: number; description: string }[];
}

const TimelineSlider: React.FC<TimelineSliderProps> = ({ events }) => {
    const swiperRef = useRef<SwiperCore | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            `.${styles.timelineSlide}`,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );
    }, [events]);

    const handleSwiper = (swiper: SwiperCore) => {
        swiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handleSlideChange = (swiper: SwiperCore) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderWrapper}>
                <Button
                    className={`${styles.navButton} ${styles.prev} ${isBeginning ? styles.hidden : ""}`}
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    &#8592;
                </Button>

                <Swiper
                    className={styles.timelineSlider}
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    onSwiper={handleSwiper}
                    onSlideChange={handleSlideChange}
                    navigation={{
                        nextEl: `.${styles.next}`,
                        prevEl: `.${styles.prev}`,
                    }}
                    pagination={{
                        el: `.${styles.pagination}`,
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {events.map((event, idx) => (
                        <SwiperSlide key={idx} className={styles.timelineSlide}>
                            <h3 className={styles.year}>{event.year}</h3>
                            <p className={styles.description}>{event.description}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Пагинация под слайдами */}
                <div className={styles.pagination}></div>

                <Button
                    className={`${styles.navButton} ${styles.next} ${isEnd ? styles.hidden : ""}`}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    &#8594;
                </Button>
            </div>
        </div>
    );
};

export default TimelineSlider;
