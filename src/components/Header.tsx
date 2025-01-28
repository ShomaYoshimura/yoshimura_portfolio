"use client"
import Link from "next/link";
import { useState } from "react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* ロゴ / タイトル */}
        <h1 className="text-lg font-bold">Yoshimura&apos;s Portfolio</h1>

        {/* ハンバーガーメニューボタン（モバイル用） */}
        <button
          className="block md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-icons">{menuOpen ? "close" : "menu"}</span>
        </button>

        {/* ナビゲーションメニュー */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black md:static md:w-auto md:flex md:space-x-4`}
        >
          <ul className="md:flex md:space-x-4">
            <li>
              <Link href="/" className="block p-2 hover:text-gray-400">
                TOP
              </Link>
            </li>
            <li>
              <Link href="/service" className="block p-2 hover:text-gray-400">
                Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block p-2 hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/mahjong" className="block p-2 hover:text-gray-400">
                mahjong
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
