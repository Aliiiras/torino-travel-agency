import Image from "next/image";
import styles from "@/components/partials/header.module.css"
import AuthForm from "../templates/authForm/index";

function Header() {
  return (
    <div className="border-b-2 border-gray-200">
    <div className={styles.navbar}>
      <Image className={styles.logoimg} width={146} height={44} src="/ico/logo.png" alt="logo"/>
        <ul className={styles.navlist}>
          <li>صفحه اصلی</li>
          <li>خدمات گردشگری</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
        <AuthForm/>
      </div>
      </div>
  )
}

export default Header