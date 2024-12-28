import styles from "@/components/partials/HeaderWithImg.module.css"
import Image from "next/image";

function HeaderWithImg() {
  return (
    <div className={styles.headerimg}>
      <Image layout="fill" 
        objectFit="cover"
        // objectPosition="center"
        priority src="/ico/header-img.png" alt="logo"/>
    </div>  )
}

export default HeaderWithImg