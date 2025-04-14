import React from "react";
import styles from "./TimelineTitle.module.scss";

const TimelineTitle: React.FC = () => {
    return (
        <div className={styles.timelineTitleContainer}>
            <div className={styles.timelineLine}></div>
            <h2 className={styles.timelineTitle}>Исторические даты</h2>
        </div>
    );
};

export default TimelineTitle;
