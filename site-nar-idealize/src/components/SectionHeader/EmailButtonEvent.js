import React from 'react';
import styles from './ButtonStyle.module.css'

function EmailButtonEvent() {

    function sendEmail() {
        // função que envia o email
    }

    return (
        <div>
            <button className={styles.buttonStyle} onClick={sendEmail}>Entre em contato</button>
        </div>
    )
}

export default EmailButtonEvent