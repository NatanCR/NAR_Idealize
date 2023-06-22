import React from 'react';
import styles from './ButtonStyle.module.css'

function EmailButtonEvent() {
    const recipientEmail = 'natanrodrigues0044@gmail.com';

    function sendEmail() {
        window.location.href = `mailto:${recipientEmail}`;
    }

    return (
        <div>
            <button className={styles.buttonStyle} onClick={sendEmail}>Entre em contato</button>
        </div>
    )
}

export default EmailButtonEvent