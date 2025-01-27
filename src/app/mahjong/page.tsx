import Accounts from "@/components/Accounts"
import TwitterTimeline from "@/components/Twitter"
import Image from 'next/image';


export default function Mahjong (){
    return(
        <>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex justify-center items-center">
    <Image 
      src="https://npm2001.com/wp-content/uploads/1885669735649ba29095891.jpg.webp"
      alt="宣材写真"
      className="border-8 border-gray-500 rounded-xl p-4 shadow-xl"
      width={300}
      height={200}
    />
  </div>
  <div className="grid grid-cols-1">
    <h1 className="flex items-center justify-center text-lg font-bold text-center">
      日本プロ麻雀協会21期前期<br/>よしむら
    </h1>
    <p className="flex items-center justify-center text-center">
      2022年より日本プロ麻雀協会に所属しています。<br/>
      リーグ戦、タイトル戦に向けた勉強会や、<br/>雀荘・麻雀BARへのゲスト活動を行っています。<br/>
      牌譜検討や勉強会講師なども承っておりますので、<br/>お気軽にお問い合わせください。<br/>
    </p>
  </div>
</div>

<div className="border-t-4 border-black m-5 p-5 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
  <Accounts
    url="https://npm2001.com/player/yoshimura/"
    title="日本プロ麻雀協会 公式HP"
    sns="日本プロ麻雀協会 公式HP"
  />
  <Accounts
    url="https://x.com/Syoshi_mahjong"
    title="X (旧Twitter)"
    sns="X (旧Twitter)"
  />
  <Accounts
    url="https://www.instagram.com/yoshimu_npm/"
    title="Instagram"
    sns="Instagram"
  />
  <Accounts
    url="https://note.com/yoshimura_mah"
    title="note"
    sns="note"
  />
</div>

        <div className="border-t-4 border-black m-5">
            <TwitterTimeline/>
        </div>
        </>
    )
}