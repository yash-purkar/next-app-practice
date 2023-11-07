import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <div>
        <Link href={"/"}>
          <Image src={"/netflix-logo.svg"} alt="Logo" width={40} height={40} />
        </Link>
      </div>
      <ul className={styles.navItems}>
        <li>
          <Link href={"/"} className={styles.navItem}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/movies"} className={styles.navItem}>
            Movies
          </Link>
        </li>
        <li>
          <Link href={"/about"} className={styles.navItem}>
            About
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className={styles.navItem}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
