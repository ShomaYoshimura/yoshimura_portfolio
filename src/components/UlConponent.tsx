
interface UlComponentType {
    title:string
    details:string[]
}

export default function UlComponent (props:UlComponentType){
    return (
        <>
        <div>
            <h1 className="text-xl font-bold">{props.title}</h1>
            <ul>
                {props.details.map((service,index)=>(
                    <li key={index}>・{service}</li>
                ))}
            </ul>
        </div>
        </>
    )
}