import React from 'react';
import styles from './ButtonStyle.module.css'

function EmailButtonEvent() {
    const recipientEmail = 'natanrodrigues0044@gmail.com';

    const handleButtonClick = () => {
        window.location.href = `mailto:${recipientEmail}`;
      };

    function sendEmail() {
        // função que envia o email
    }

    return (
        <div>
            <button className={styles.buttonStyle} onClick={handleButtonClick}>Entre em contato</button>
        </div>
    )
}

export default EmailButtonEvent