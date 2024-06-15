// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/logo.svg" alt="Logo" className={styles.logoImage} />
                </Link>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <Link href="/"legacyBehavior>
                        INÍCIO
                    </Link>
                </li>
                <li>
                    <Link href="/servicos"legacyBehavior>
                        SERVIÇOS
                    </Link>
                </li>
                <li>
                    <Link href="/quem-somos"legacyBehavior>
                        QUEM SOMOS
                    </Link>
                </li>
                <li>
                    <Link href="/galeria"legacyBehavior>
                        GALERIA
                    </Link>
                </li>
                <li>
                    <Link href="/casos"legacyBehavior>
                        CASOS
                    </Link>
                </li>
                <li className={styles.dropdown}>
                    <a href="#">MAIS</a>
                    <ul className={styles.dropdownContent}>
                        <li>
                            <Link href="/item1"legacyBehavior>
                                Item 1
                            </Link>
                        </li>
                        <li>
                            <Link href="/item2"legacyBehavior>
                                Item 2
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/contato"className={styles.contactButton}>
                        CONTATO
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;