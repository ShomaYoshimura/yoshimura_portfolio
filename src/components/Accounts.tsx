interface AccountsTypes{
    url:string,
    sns:string,
    title:string,
    img?:string
}

export default function Accounts(props:AccountsTypes){
    const url:string = props.url
    const title = props.title
    const sns:string = props.sns
    if(props.img){
        const img = props.img
    }
    return (
        <>
        <div className={sns}>
            <a href={url} className="text-3xl hover:text-gray-400" target="_blank">・{title}</a>
        </div>
        </>
    )

}