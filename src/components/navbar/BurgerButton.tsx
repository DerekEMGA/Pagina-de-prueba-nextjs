import React from 'react';
import styles from '../../styles/burgerButton.module.css';

interface BurguerButtonProps {
    handleClick?: React.MouseEventHandler<HTMLDivElement>;
    clicked: any;
}

const BurguerButton: React.FC<BurguerButtonProps> = (props) => {
    return (
        <div onClick={props.handleClick} className={`${styles['nav-icon-5']} ${props.clicked ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default BurguerButton;
