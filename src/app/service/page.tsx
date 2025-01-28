import UlComponent from "@/components/UlConponent";

export default function Service (){
    return (    
        <>
        <div>
            <UlComponent 
            title="エンジニアリング"
            details={["RPA開発","クローリング・スクレイピングツールの開発","LP作製、保守、運用","AWSを用いたアーキテクチャの作製"]}
            />
            <br/>
            <UlComponent 
            title="マーケティング"
            details={["求人広告運用コンサルタント","人材マッチングサービスのコンサルタント"]}
            />
            <br/>
            <UlComponent 
            title="麻雀関係"
            details={["店舗ゲスト活動","牌譜検討、勉強会講師"]}
            />
            <br/>
        </div>
        </>
    )
}