import styles from "../../page.module.css";
import Image from "next/image";
import loginImage from '../../../../public/login.jpg';
import Link from "next/link";

export default function Main() {
    return(
        <>
        <div className={styles.left}>
          <Image src={loginImage} alt="logo" ></Image>
        </div>
        <div className={styles.right}>
          <h1>언제나 우리가 있다</h1>
          <h2>지금 가입하고 친구를 만들어 보자.</h2>
          <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
          <h3>이미 잡초에 가입하셨나요?</h3>
          <Link href="/login" className={styles.login}>로그인</Link>
        </div>
      </>
    );
}