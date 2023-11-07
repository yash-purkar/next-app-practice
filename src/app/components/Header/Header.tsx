import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

interface HeaderProps {
  title: string;
  content: string;
  buttonText: string;
  redirectTo: string;
  imageUrl: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  content,
  buttonText,
  redirectTo,
  imageUrl,
}) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerInnerContainer}>
        <div className={styles.headerLeft}>
          <h2>{title}</h2>
          <p>{content}</p>
          <Link href={redirectTo}>
            <button className={styles.headerButton}>{buttonText}</button>
          </Link>
        </div>
        <div>
          <Image src={imageUrl} alt="Logo" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};
