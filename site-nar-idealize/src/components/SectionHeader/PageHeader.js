import EmailButton from "./EmailButtonEvent"
import styles from './PageHeader.module.css'

function PageHeader() {
    return (
        <div className={styles.headerContainer}>
            <h1 className={`${styles.title} ${styles.centeredTitle}`}>NAR Idealize</h1>
            <EmailButton/>
        </div>
    )
}

export default PageHeader