import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from '../../components/Header&Footer/Nav'

const Header = () => {
    const style = {
        fontFamily: 'ui-sans-serif'
      }; 
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <h1 style={style}> SEHAT</h1>
                </Link>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;