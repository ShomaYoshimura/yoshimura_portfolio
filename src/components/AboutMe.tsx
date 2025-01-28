import Accounts from "./Accounts";

export default function AboutMe (){

    return (
        <>
        <div className="m-3">
            <h1 className="text-lg font-bold">Introduce</h1>
            <p>
                よしむらと申します。無料でデプロイできるwebアプリケーションをメインに開発しております。<br/>
                App Scriptをメインとした開発をしており、気軽に作成できて運用も無料でできるシステムを考え、
                DXを推進していきたと思っています。<br/>
                広告代理店でエンジニアをしており、現在は転職して営業をしながら個人開発をしています。<br/>
                RPA開発をメインとして担当しており、pythonを用いたシステムでAWSで動作するものの開発・保守・運用をしていました。<br/>
                lambdaで動作するシステムから、EC2、fargateを用いたシステムの開発の経験はあります。<br/>
                クローラーの開発も可能です<br/>
                また、広告用LPの保守もしており、Next.jsを用いたLPの開発も可能です。<br/>
            </p>
        </div>
        <div className="m-3">
            <h1 className="text-lg font-bold">skill</h1>
            <div className="flex justify-center">
                <table className="table-auto border-collapse border border-gray-300 w-full text-center">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">技術</th>
                            <th className="border border-gray-300 px-4 py-2">詳細</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">言語</td>
                            <td className="border border-gray-300 px-4 py-2">python<br/>javascript<br/>typescript</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">フレームワーク</td>
                            <td className="border border-gray-300 px-4 py-2">Next.js<br/>fastapi<br/>Express</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">AWS</td>
                            <td className="border border-gray-300 px-4 py-2">lambda<br/>EC2<br/>DynamoDB<br/>APIGateway<br/>Amplify<br/>cognito</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Google</td>
                            <td className="border border-gray-300 px-4 py-2">App Script<br/>Spreadsheet</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">その他API連携</td>
                            <td className="border border-gray-300 px-4 py-2">porters<br/>chatwork<br/>slack<br/>line<br/>kintone</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">マーケティング</td>
                            <td className="border border-gray-300 px-4 py-2">indeed<br/>求人ボックス<br/>スタンバイ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="m-3">
            <h1 className="text-lg font-bold">Accounts</h1>
            <Accounts 
            url="https://github.com/ShomaYoshimura"
            title="github"
            sns="github"
            />
            <Accounts 
            url="https://qiita.com/ShomaYoshimura"
            title="qiita"
            sns="qiita"
            />
        </div>
        </>
    )

}