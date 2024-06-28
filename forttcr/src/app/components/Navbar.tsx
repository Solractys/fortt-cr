'use client'
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import Link from 'next/link';
import InstagramIco from '../../../public/instagramIco.svg';
import WhatsIco from '../../../public/whatsIco.svg';
import GmailIco from '../../../public/gmailIco.svg';
import { MenuIcon } from 'lucide-react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image height={80} src={Logo} alt="Logo" className={styles.logoImage} />
                </Link>
            </div>
            <button className={styles.menuToggle} onClick={toggleMenu}>
                <MenuIcon />
            </button>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ''}`}>
                <li>
                    <Link href="/" legacyBehavior>
                        <a>INÍCIO</a>
                    </Link>
                </li>
                <li>
                    <Link href="/servicos" legacyBehavior>
                        <a>SERVIÇOS</a>
                    </Link>
                </li>
                <li>
                    <Link href="/quemsomos" legacyBehavior>
                        <a>QUEM SOMOS</a>
                    </Link>
                </li>
                <li>
                    <Link href="/gallery" legacyBehavior>
                        <a>GALERIA</a>
                    </Link>
                </li>
                <li>
                    <Link href="/casos" legacyBehavior>
                        <a>CASOS</a>
                    </Link>
                </li>
                <li>
                    <div className={styles.dropDown}>
                        <button className={styles.contactButton}>
                            CONTATOS
                        </button>
                        <div className={styles.items}>
                            <a href="https://www.instagram.com/fortt_construcao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <Image src={InstagramIco} height={20} alt="Instagram logo" />
                            </a>
                            <a href="mailto:Geomirsantos@gmail.com">
                                <Image src={GmailIco} height={20} alt="Gmail logo" />
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=5571996281433&text&type=phone_number&app_absent=0">
                                <Image src={WhatsIco} height={20} alt="Whatsapp logo" />
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
        </nav >
    );
}
