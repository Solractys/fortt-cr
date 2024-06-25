import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.svg'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src={Logo} alt="Logo" className={styles.logoImage} />
                </Link>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/" legacyBehavior>
                        INÍCIO
                    </Link>
                </li>
                <li>
                    <Link href="/servicos" legacyBehavior>
                        SERVIÇOS
                    </Link>
                </li>
                <li>
                    <Link href="/quemsomos" legacyBehavior>
                        QUEM SOMOS
                    </Link>
                </li>
                <li>
                    <Link href="/gallery" legacyBehavior>
                        GALERIA
                    </Link>
                </li>
                <li>
                    <Link href="/casos" legacyBehavior>
                        CASOS
                    </Link>
                </li>
                <li>
                </li>
            </ul>
            <a href="/contato" className={styles.contactButton}>
                CONTATO
            </a>
        </nav>
    );
};
