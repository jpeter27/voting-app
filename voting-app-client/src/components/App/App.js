import React from "react"
import styles from "./App.module.css"

export default function App({children}) {
    return (
        <div className={styles.Background}>
            <div className={styles.Header}>
                <div className={styles.Title}>
                    Voting Service
                </div>
            </div>
            <div className={styles.Main}>
                <div className="Container">
                    {children}
                </div>
            </div>
        </div>
    );
}