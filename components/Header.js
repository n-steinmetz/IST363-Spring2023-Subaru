import { useState } from 'react';
import Button from './Button';
import NavOverlay from './NavOverlay';

import ButtonUI from './ButtonUI'
import Link from 'next/link';
import Logo from './Logo';
import styles from './header.module.scss';
import NavDesktop from './NavDesktop';


const Header = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    return <header className={styles.header}>
        <Link href="/">
            <Logo />
        </Link>
        <ButtonUI 
            icon="menu"
            clickHandler={() => {
                setMenuVisible(true);
            }}
        />
        <NavDesktop/>
        {isMenuVisible && 
            <NavOverlay 
                closeHandler={() => {
                    setMenuVisible(false);
                }} 
            />
        }
    </header>   
}
export default Header
