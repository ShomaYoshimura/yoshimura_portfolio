"use client"

import Image from "next/image";
import React, { useState } from "react";

interface WorkFlameType {
  imageUrl: string;
  title: string;
  detail: string;
  side?: string;
}

export default function WorkFlame(props: WorkFlameType) {
  const [isOpen, setIsOpen] = useState(false); // ポップアップの表示状態
  const [imageSrc, setImageSrc] = useState(""); // ポップアップに表示する画像のURL

  const side = props.side ?? "r";

  // 画像クリック時にポップアップを開く処理
  const handleImageClick = (src: string) => {
    setImageSrc(src);
    setIsOpen(true);
  };

  // ポップアップを閉じる処理
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-2">
        {side === "r" ? (
          <>
            <div className="grid grid-cols-1">
              <h1 className="text-lg font-bold m-5">{props.title}</h1>
              <p className="m-3">
                {props.detail.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div>
              <Image
                src={props.imageUrl}
                alt={props.title}
                className="border-8 border-gray-500 rounded-xl p-4 shadow-xl cursor-pointer flex justify-center items-center"
                width={1000}
                height={1000}
                onClick={() => handleImageClick(props.imageUrl)} // クリック時にポップアップを開く
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <Image
                src={props.imageUrl}
                alt={props.title}
                className="border-8 border-gray-500 rounded-xl p-4 shadow-xl cursor-pointer flex justify-center items-center"
                width={300}
                height={200}
                onClick={() => handleImageClick(props.imageUrl)} // クリック時にポップアップを開く
              />
            </div>
            <div className="grid grid-cols-1">
              <h1 className="text-lg font-bold m-5">{props.title}</h1>
              <p className="m-3">
                {props.detail.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </>
        )}
      </div>

      {/* ポップアップ */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closePopup} // 背景クリックでポップアップを閉じる
        >
          <div className="relative">
            <Image
              src={imageSrc}
              alt="Popup Image"
              width={800}
              height={800}
              className="rounded-lg"
            />
            {/* 閉じるボタン */}
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold"
              onClick={closePopup}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
