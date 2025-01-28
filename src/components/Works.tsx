import WorkFlame from "./WorkFlame";


export default function Works (){
    return(
        <>
        <div>
            <h1 className="text-lg font-bold m-5">Works</h1>
            <div className="flex justify-center">
                <WorkFlame
                title = "情報取得部分からRPAによるデータ連携"
                detail={"外部情報を記録し、基幹システムに登録するRPAを作成可能です。\nまたAPI連携も可能です。"}
                imageUrl="/structure1.png"
                side="l"
                />
            </div>
        </div>
        </>
    )
}