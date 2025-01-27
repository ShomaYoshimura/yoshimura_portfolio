"use client"
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* ロゴ / タイトル */}
        <h1 className="text-lg font-bold">Yoshimura's Portfolio</h1>

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
              <a href="/" className="block p-2 hover:text-gray-400">
                TOP
              </a>
            </li>
            <li>
              <a href="#projects" className="block p-2 hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="block p-2 hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/mahjong" className="block p-2 hover:text-gray-400">
                mahjong
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
