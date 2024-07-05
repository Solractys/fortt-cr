'use client'
import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import Link from 'next/link';
import InstagramIco from '../../../public/instagramIco.svg';
import WhatsIco from '../../../public/whatsIco.svg';
import GmailIco from '../../../public/gmailIco.svg';
import { Hammer, HardHat, Hotel, House, ImageIcon, MenuIcon } from 'lucide-react';

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
                        <div className={styles.iconText}><House size={15} style={{marginRight: 4, paddingTop: 1}}/>INÍCIO</div>
                    </Link>
                </li>
                <li>
                    <Link href="/servicos" legacyBehavior>
                        <div className={styles.iconText}><Hammer size={15} style={{marginRight: 4}}/>SERVIÇOS</div>
                    </Link>
                </li>
                <li>
                    <Link href="/quemsomos" legacyBehavior>
                        <div className={styles.iconText}><Hotel size={15} style={{marginRight: 4}}/>QUEM SOMOS</div>
                    </Link>
                </li>
                <li>
                    <Link href="/gallery" legacyBehavior>
                        <div className={styles.iconText}><ImageIcon size={15} style={{marginRight: 4}}/>GALERIA</div>
                    </Link>
                </li>
                <li>
                    <Link href="/projetos" legacyBehavior>
                        <div className={styles.iconText}><HardHat size={15} style={{marginRight: 4}}/>PROJETOS</div>
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
                            <a href="mailto:forttconstrucao@hotmail.com">
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
