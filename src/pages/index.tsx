import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <form>
        <label>
          メールアドレス
          <input type="text" name="name" />
        </label>
        <input type="submit" value="ログイン" />
      </form>
    </>
  );
};

export default Home;
