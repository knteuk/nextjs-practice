import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Sidebar() {
  return (
    <div>
      <ul className="h-full text-center w-48 border-2 border-gray-600 rounded-sm text-gray-600">
        <li className="m-5">
          <Link href="/home">
            <a>Home</a>
          </Link>
        </li>
        <li className="m-5">
          <Link href="/user">
            <a>ユーザー管理</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
